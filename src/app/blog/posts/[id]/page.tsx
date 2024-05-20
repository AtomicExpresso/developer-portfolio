import BlogHero from "@/componets/Blog/blogHero";
import BlogShareBtn from "@/componets/Blog/blogShareBtn";
import '@/app/styles/blog-globals.scss';
import { getPostData } from '@/lib/posts';

type Params = {
  id: string
}

type PostData = {
  title: string
  date: string
  author: string
  contentHtml: string
  tags: string
}

export default async function BlogPage({ params }: { params: Params }){
  // Generate metadata
  const metaData = await generateMetaData(params);

  // Get post data
  const postData: PostData = await getPostData(params.id);

  return (
    <div>
      <BlogHero/>
      <div className="blog-page-content">
        <h1>{postData.title}</h1>
        <div className="blog-page-info">
          <h3>{postData.author}</h3>
          <h3>•</h3>
          <h3>{postData.date}</h3>
          <h3>•</h3>
          <div className="blog-page-tag">
            <h3><span>#</span> {postData.tags}</h3>
          </div>
          <BlogShareBtn/>
        </div>
        <hr></hr>
        <div className="blog-page-markdown" dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </div>
    </div>
  )
}

// Function to generate metadata
async function generateMetaData(params: Params): Promise<{title: string}> {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title
  };
}