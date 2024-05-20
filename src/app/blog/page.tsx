import BlogHero from "@/componets/Blog/blogHero";
import '@/app/styles/blog-globals.scss'
import BlogList from "@/componets/Blogs/BlogList";

export default function BlogPageList(){
  return (
    <div>
      <BlogHero/>
      <BlogList/>
    </div>
  )
}