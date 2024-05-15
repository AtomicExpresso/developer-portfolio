import React from 'react';
import porfiloPostData  from '../../Data/json/writeings/porfiloPost.json';
import buildingReactEcomData from '../../Data/json/writeings/buildingReactEcom.json';

interface Section {
  title: string;
  content: {
    paragraph?: string;
    item?: string;
  }[];
  links?: {
    link: string;
    title: string;
  }[];
  list?: {
    item: string
  }[];
}

interface BlogPost {
  title: string;
  sections: Section[];
}

interface Post {
  sections: Section[];
}

//Parse's the json data into a blog post page
function BlogPostThis(BlogPost: string){
  
  const porfiloPost: Post = porfiloPostData  as Post;
  const buildingReactEcom: Post = buildingReactEcomData as Post;
  let curPost: Post;

  switch (BlogPost){
    case "porfiloPost":
      curPost = porfiloPost;
    break;
    case "buildingReactEcom":
      curPost = buildingReactEcom;
    break;
    default:
      curPost = porfiloPost
    break;
  }

  let { sections } = curPost;

    return (
      <div>
    
        {sections.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            
            {Array.isArray(section.content) ? (
              // If content is an array of paragraphs, map over each paragraph and render it
              section.content.map((paragraph, i) => (
                <p key={i}>{paragraph.paragraph}</p>
              ))
            ) : (
              // If content is a string, render it directly
              <p>{section.content}</p>
            )}
            
            {/* Render list items if present */}
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item.item}</li>
                ))}
              </ul>
            )}
  
            {/* Render link if present */}
            {section.links && (
              <div>
                {section.links.map((item, i) => (
                  <a href={item.link} key={i}>{item.title}</a>
              ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

export default BlogPostThis;