import HeroSection from "@/components/feature/HeroSection"
import { useRouter } from "next/router"

function NotFound() {
    const router = useRouter()
  return (
    <div>
        <HeroSection 
            title='Oops! 404' 
            description='The page you are looking for does not exist'
            bgImage="/backgrounds/notfound-min.webp"
            isOverlay = {true}
        />
        <div className="notFoundContainer">
            <button onClick={()=>router.back()}>Reel Back</button>
        </div>
        
    </div>
  )
}

export default NotFound