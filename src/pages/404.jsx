import HeroSection from "@/components/feature/HeroSection"
import { useRouter } from "next/router"

import ArrowButton from "@/components/feature/ArrowButton"

function NotFound() {
    const router = useRouter()
  return (
    <div>
        <HeroSection 
            title='Oops!' 
            description='The page you are looking for does not exist.'
            bgImage="/backgrounds/notfound-min.jpg"
            isOverlay = {true}
        />
        <div className="notFoundContainer">
        <ArrowButton 
                text='Reel Back' 
                link='/movies/nowPlaying'
              />
        </div>
        
        
    </div>
  )
}

export default NotFound