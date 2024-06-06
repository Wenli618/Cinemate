import HeroSection from "@/components/feature/HeroSection"

function AboutPage() {
  return (
    <>
        <HeroSection 
            title='About Cinemate' 
            description='Discover More About CineMate'
            bgImage="/backgrounds/cinema.jpg"
        />
        <div className="aboutContainer">
            <p>Welcome to CineMate, your ultimate destination for all things movies! At CineMate, we are passionate about bringing the magic of cinema to your fingertips. Whether you&apos;re a casual moviegoer or a dedicated film buff, our platform is designed to provide you with comprehensive information about the latest releases, current showings, and the most popular movies.</p>
            
            <p>Our mission is simple: to enhance your movie-watching experience by offering a one-stop hub for all movie-related information. We aim to make it easy for you to find details about upcoming movies, check out what is playing in theaters now, and discover the top-rated films that everyone is talking about.</p>
           
            <p>Thank you for choosing CineMate as your go-to source for movie information. We&apos;re excited to be a part of your cinematic journey!</p>
        </div>
    </>
  )
}

export default AboutPage