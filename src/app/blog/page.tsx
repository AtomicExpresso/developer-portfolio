import BlogHero from "@/componets/Blog/blogHero";
import '@/app/styles/blog-globals.scss'
import BlogList from "@/componets/Blogs/BlogList";

//Main blog page for siaplying blog info
export default function BlogPageList(){
  return (
    <div>
      <BlogHero/>
      <BlogList/>
    </div>
  )
}