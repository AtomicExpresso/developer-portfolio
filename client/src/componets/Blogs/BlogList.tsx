import Link from 'next/link'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export const metadata = {
  title: "hi",
}

export default function BlogList() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, title }) => (
            <li key={id}>
              <div>
                <Link href={`/blog/posts/${id}`}>{title}</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}