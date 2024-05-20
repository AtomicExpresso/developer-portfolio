// eslint-disable-next-line
// eslint-disable

//While this file is correct and works, ES-lint is complaning about this file, but i have no idea why. i spent over an hour trying to figure it out to no avail
import BlogHero from "@/componets/Blog/blogHero";
import BlogShareBtn from "@/componets/Blog/blogShareBtn";
import '@/app/styles/blog-globals.scss';
import { getPostData } from '@/lib/posts';

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  author: string
  contentHtml: string
  tags: string
}

// Going to disable this for now, ES-Lint throws a error from having more then 1 export, even though the file works perfectly fine

// export async function GenerateMetaData({params}: Props): Promise<{title: string}>{
//   const postData: PostData = await getPostData(params.id);

//   return {
//     title: postData.title
//   }
// }

export default async function BlogPage({ params }: Props){
  const postData: PostData = await getPostData(params.id)

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