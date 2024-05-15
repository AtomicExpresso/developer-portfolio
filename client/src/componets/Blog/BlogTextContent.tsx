/*Blog post content is stored here, Each post has a Title, Date, PostType, Preview and Paragraphs*/
import React from 'react';
import BlogPostThis from './buildBlog';
import PorfolioPost from '../../assets/images/articles/porfiliopost.webp';

// Changed this to an array, if you want to add a new blog post just simply copy an object and assign a new id
interface BlogPost {
  id: number;
  Img: string;
  Title: string;
  Date: string;
  PostType: string;
  PostPreview: string;
  Link: string;
  PostPara: JSX.Element; // Assuming BlogPostThis returns a JSX element
}

const BlogPost: BlogPost[] = [{
  id: 0,
  Img: PorfolioPost,
  Title: "Building a portfolio",
  Date: "April 15th, 2024",
  PostType: "Updates",
  PostPreview: "I discuss how i setup my portfolio and my thought proccess behind it",
  Link: `Post`,
  PostPara: BlogPostThis("porfiloPost")
}
// {
//   id: 1,
//   Img: DefaultImage,
//   Title: "E-comerance website in react",
//   Date: "may 2nd, 2024",
//   PostType: "Dev",
//   PostPreview: "ill go over how i designed and built a front-end e-comerance website",
//   Link: `Post`,
//   PostPara: BlogPostThis("buildingReactEcom")
// }
]

BlogPost.forEach((post) => {
  post.Link = `Post${post.id}`;
});

export {BlogPost}