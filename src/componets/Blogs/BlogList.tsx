import Link from 'next/link';
import Image from 'next/image';

import { getSortedPostsData } from '@/lib/posts'

interface AllPostsData {
  date: string
  title: string
  tags: string
  id: string
  preview: string
  thumbnail: string
}[]

export const metadata = {
  title: "A list of blog articles i wrote",
}

export default function BlogList() {
  const allPostsData = getSortedPostsData()

  return (
    <>
      <section className='blog-section'>
          {allPostsData.map(({ id, title, date, tags, preview, thumbnail }) => (
            <div key={id} className='blog-list-item'>
              <img alt={title} src={thumbnail}></img>
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