import BlogHero from '@/componets/Blog/blogHero';
import BlogShareBtn from '@/componets/Blog/blogShareBtn';
import '@/app/styles/blog-globals.scss';
import '@/app/styles/project-item.scss';
import { getPostData, getAllPostIds } from '@/lib/projects';
import { Metadata } from 'next';
import {rehype} from 'rehype';
import rehypePrism from 'rehype-prism';
import 'prismjs/components/prism-python';  // Import necessary PrismJS language components
import 'prismjs/themes/prism.css'; 
import { ProjectsDataTypeHTML } from '@/typeings/types';
import Link from 'next/link';

import PersonalWebsiteThumbnail from '@/assets/images/thumbnails/personal-website.webp';
import MovieBoxTn from '@/assets/images/thumbnails/moviebox.webp';

//Fetchs the proper image from the json doc, had to do this because nextjs dosent have a way to allow for dynamic images
function GrabImage(ImageName: string){
  switch(ImageName){
    case "PersonalWebsiteTn":
      return PersonalWebsiteThumbnail;
    break;
    case "MovieBox":
      return MovieBoxTn;
    break;
    default:
      return MovieBoxTn;
    break;
  }
}

//Uses gray matter and a few other js libaries to support md format, makes blog aritcles much easier to write and manage, ideally the md articles would probably be stored on a database somewhere but that isnt needed for the websites current scope

type Params = {
  id: string;
};

// Fetch post data
async function fetchPostData(id: string): Promise<ProjectsDataTypeHTML> {
  return getPostData(id);
}

// Generate metadata
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const postData = await fetchPostData(params.id);
  return {
    title: postData.title,
  };
}

// Generate static paths
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

// Blog page component
export default async function BlogPage({ params }: { params: Params }) {
  const postData = await fetchPostData(params.id);

  // Process contentHtml with rehype-prism to apply syntax highlighting
  const processedContent = await rehype()
    .use(rehypePrism)  // Apply syntax highlighting
    .process(postData.contentHtml);  // Process the contentHtml (which should be HTML)

  // Get the processed HTML string
  const contentWithHighlighting = String(processedContent);

  return (
    <div>
      <div className="blog-page-content">
        <div className="blog-page-title">
          <h1>{postData.title}</h1>
        </div>
        <div className="blog-page-info">
          <div className="blog-page-tag">
            <h3>
              {postData.lang}
            </h3>
          </div>
          <BlogShareBtn />
        </div>
        <div className='item-project-btn-container'>
          <Link href={`${postData.source}`}>
            <button 
              className='btn btn-primary'>
              Source
            </button>
          </Link>
          <Link href={`${postData.live}`}>
            <button 
              className='btn btn-success'>
              Live Preview
            </button>
          </Link>
        </div>
        <hr />
        <div
          className="blog-page-markdown"
          dangerouslySetInnerHTML={{ __html: contentWithHighlighting }}  // Use the processed content with syntax highlighting
        ></div>
      </div>
    </div>
  );
}
