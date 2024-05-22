import BlogHero from '@/componets/Blog/blogHero';
import BlogShareBtn from '@/componets/Blog/blogShareBtn';
import '@/app/styles/blog-globals.scss';
import { getPostData, getAllPostIds } from '@/lib/posts';
import { Metadata } from 'next';

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

  return (
    <div>
      <BlogHero />
      <div className="blog-page-content">
        <h1>{postData.title}</h1>
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
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></div>
      </div>
    </div>
  );
}