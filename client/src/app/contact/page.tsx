import React from 'react'
import ContactHero from "../../componets/Contact/contactHero"
import ContactBox from "../../componets/Contact/contactBox"
import { Metadata } from 'next';
import '../styles/contact-globals.scss'

export const metadata: Metadata = {
  title: "Contact me",
  description: "Fill out this form or send me a message on one of my socials to get in touch",
};

function ContactPage(){
  return (
    <div>
      <ContactHero/>
      <ContactBox/>
    </div>
  )
}

export default ContactPage