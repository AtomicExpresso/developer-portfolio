import React from "react"
function BlogHero({ banner }: { banner: string }){
  return(
    <div className="blog-hero" style={{ backgroundImage: `url(${banner})` }}>
    </div>
  )
}

export default BlogHero