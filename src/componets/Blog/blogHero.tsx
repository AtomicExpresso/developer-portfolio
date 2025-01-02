import React from "react"
function BlogHero({ banner }: { banner: string }){
  console.log(banner)
  return(
    <div className="blog-hero" style={{ backgroundImage: `url(${banner})` }}>
    </div>
  )
}

export default BlogHero