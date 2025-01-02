import BlogHero from "@/componets/Blog/blogHero";
import '@/app/styles/blog-globals.scss'
import BlogList from "@/componets/Blogs/BlogList";

//Main blog page for siaplying blog info
export default function BlogPageList(){
  return (
    <div>
      <BlogHero banner={`https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D`}/>
      <BlogList/>
    </div>
  )
}