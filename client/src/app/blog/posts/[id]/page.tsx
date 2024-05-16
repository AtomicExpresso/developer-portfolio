import BlogHero from "@/componets/Blog/blogHero";
import '@/app/styles/blog-globals.scss';
import { getAllPostIds, getPostData } from '@/lib/posts'

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
}

export async function GenerateMetaData({params}: Props){
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title
  }
}

export default async function BlogPage({ params }: Props){
  const postData: PostData = await getPostData(params.id)

  return (
    <div>
      <BlogHero/>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </div>
  )
}