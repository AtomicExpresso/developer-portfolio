import React from 'react'
import BlogHero from "../../componets/Blog/blogHero";
import BlogContent from "../../componets/Blog/blogContent";
import { Metadata } from 'next';
import '../styles/blog-globals.scss'

export const metadata: Metadata = {
  title: "Pumped dev blog",
  description: "Welcome to my personal blog, here ill write about things which may or may not be development related",
};

function BlogPage(){
  return (
    <div>
      <BlogHero/>
      <BlogContent/>
    </div>
  )
}

export default BlogPage