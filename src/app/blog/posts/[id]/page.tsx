import BlogHero from '@/componets/Blog/blogHero';
import BlogShareBtn from '@/componets/Blog/blogShareBtn';
import '@/app/styles/blog-globals.scss';
import { getPostData, getAllPostIds } from '@/lib/posts';
import { Metadata } from 'next';
import {rehype} from 'rehype';
import rehypePrism from 'rehype-prism';
import 'prismjs/components/prism-python';  // Import necessary PrismJS language components
import 'prismjs/themes/prism.css'; 

//Uses gray matter and a few other js libaries to support md format, makes blog aritcles much easier to write and manage, ideally the md articles would probably be stored on a database somewhere but that isnt needed for the websites current scope

type Params = {
  id: string;
};

type PostData = {
  title: string;
  date: string;
  author: string;
  contentHtml: string;
  tags: string;
};

// Fetch post data
async function fetchPostData(id: string): Promise<PostData> {
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
      <BlogHero />
      <div className="blog-page-content">
        <div className="blog-page-title">
          <h1>{postData.title}</h1>
        </div>
        <div className="blog-page-info">
          <h3>{postData.author}</h3>
          <h3>•</h3>
          <h3>{postData.date}</h3>
          <h3>•</h3>
          <div className="blog-page-tag">
            <h3>
              <span>#</span> {postData.tags}
            </h3>
          </div>
          <BlogShareBtn />
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
