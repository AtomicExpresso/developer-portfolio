'use client'
import { useEffect, useState } from "react"

//A interger of '600' is passed in here, which repersents the maximum window width. if the window width size is less then the width cap then this function returns false, otherwise it returns true.
//This is used to eliminate certain large elements from the jsx if the window width is small
const ScreenWindowWidth = (size: number) => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])

  return width > size
}

export default ScreenWindowWidth