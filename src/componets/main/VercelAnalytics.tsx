'use client'
//Uses vercel analytics package
import { Analytics } from '@vercel/analytics/react';

//To support vercel's analyitics on their website
export default function VercelAnalytics() {
  return (
    <Analytics/>
  )
}