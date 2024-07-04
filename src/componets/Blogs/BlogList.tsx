import Link from 'next/link';
import Image from 'next/image';

import { getSortedPostsData } from '@/lib/posts'

function randomizeImage(){
  const links = ["https://www.creativefabrica.com/wp-content/uploads/2023/08/07/Neon-Tech-Background-Graphics-76380875-1.jpg", "https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg", "https://images.pond5.com/orange-green-technology-background-070787698_prevstill.jpeg", "https://media.istockphoto.com/id/1728059027/photo/digital-abstract-hud-background-depth-of-field.webp?b=1&s=170667a&w=0&k=20&c=GY6KM2NAfuwa54iiekz2kC_xOFCiPkfFtLorH-rD-oQ=", "https://img.freepik.com/premium-photo/modern-technology-circuit-board-texture-background_327072-10934.jpg?w=1380"]
  let randomize = Math.floor(Math.random() * 5)

  return links[randomize]
}

type AllPostsData = {
  date: string
  title: string
  tags: string
  id: string
  preview: string
}[]

export const metadata = {
  title: "A list of blog articles i wrote",
}

export default function BlogList() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section className='blog-section'>
          {allPostsData.map(({ id, title, date, tags, preview }) => (
            <div key={id} className='blog-list-item'>
              <img alt={title} src={randomizeImage()}></img>
              <h2>{title}</h2>
                <div className='blog-list-info-container'>
                  <h3>{tags}</h3>
                  <h3>•</h3>
                  <h3>{date}</h3>
                </div>
                <p>{preview}</p>
              <Link href={`/blog/posts/[id]`} as={`/blog/posts/${id}`}><button className='btn btn-primary'>View</button></Link>
            </div>
          ))}
      </section>
    </>
  )
}