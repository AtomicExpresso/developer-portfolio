import Link from 'next/link';
import Image from 'next/image';
import BlogImage from '@/assets/images/articles/porfiliopost.webp'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  tags: string
  id: string
}[]

export const metadata = {
  title: "hi",
}

export default function BlogList() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section className='blog-section'>
          {allPostsData.map(({ id, title, date, tags }) => (
            <div key={id} className='blog-list-item'>
              <Image alt={title} src={BlogImage}></Image>
              <h2>{title}</h2>
                <div className='blog-list-info-container'>
                  <h3>{tags}</h3>
                  <h3>•</h3>
                  <h3>{date}</h3>
                </div>
              <Link href={`/blog/posts/${id}`}><button className='btn btn-primary'>View</button></Link>
            </div>
          ))}
      </section>
    </>
  )
}