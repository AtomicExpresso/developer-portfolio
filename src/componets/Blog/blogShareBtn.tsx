'use client'

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import twittericon from '@/assets/images/icons/functionalIcon/twitter.svg';
import linkicon from '@/assets/images/icons/functionalIcon/link-solid.svg';
import shareicon from '@/assets/images/icons/functionalIcon/share-icon.svg';
import facebookicon from '@/assets/images/icons/functionalIcon/facebook-icon.svg';

//A social media share button and menu
export default function BlogShareBtn() {
  const [blogpopup, setBlogPopup] = useState(false);
  const popupRef = useRef<any>(null);

  //Handles when user clicks outside share blog div
  function handleOutsideClick() {
    if(popupRef.current && !popupRef.current.contains(event?.target)){
      setBlogPopup(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return(() => {
      document.removeEventListener('mousedown', handleOutsideClick)
    })
  }, [])

  function BlogPopup(){
    setBlogPopup(prevState => !prevState)
  }

  //Copys current browser url to client's clipboard when they click the link icon
  const CopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  }

  /*opens up twitter and displays a tweet with current url*/
  const TweetUrl = () => {
    const url = window.location.href;
    window.open('https://twitter.com/intent/tweet?text=' + '&url=' + encodeURIComponent(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600');
    return false;
  }

  /*opens up facebook and displays a post with current url*/
  const FacebookUrl = () => {
    const url = window.location.href;
    window.open('http://www.facebook.com/share.php?u=' + encodeURIComponent(url));
    return false;
  }

  //Constructs the socialmedia buttons
  function SocialBtnConstructor({props}: {props: {name: string, icon: string, clickType: (event: React.MouseEvent<HTMLButtonElement>) => void}}){
    return (
      <div className="btn-popup-share-item" id={props.name}>
        <button onClick={props.clickType}>
          <Image src={props.icon} alt={props.name} width={22} height={22}></Image>
          <h1>{props.name}</h1>
        </button>
      </div>
    )
  }

  return (
    <div className="blog-share-btn" ref={popupRef}>
      <button id="blog-share-btn" onClick={BlogPopup} style={{scale: blogpopup ? 0.93 : 1}}>
        <Image src={shareicon} alt="share this page" width={22} height={22}></Image>
      </button>
      {blogpopup &&
        <div className="blog-share-popup">
          <SocialBtnConstructor props={{
            name: "twitter", 
            icon: twittericon, 
            clickType: TweetUrl}}/>
          <SocialBtnConstructor props={{
            name: "facebook", 
            icon:facebookicon, 
            clickType: FacebookUrl}}/>
          <SocialBtnConstructor props={{
            name: "url", 
            icon:linkicon, 
            clickType: CopyUrl}}/>
        </div>
      }
    </div>
  )
}