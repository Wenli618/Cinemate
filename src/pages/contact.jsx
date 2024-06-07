import HeroSection from "@/components/feature/HeroSection"

function ContactPage() {
  return (
    <div>
        <HeroSection 
         title='Contact US' 
         description='Get in Touch with Cinemate Support'  
          bgImage="/backgrounds/cinema.webp"
        />
        <div className="contactDiv">
            <h2>Contact Cinemate</h2>
            <p>If you have any questions or concerns please contact with our support team:</p>
            <h3>Email</h3>
            <p>support@Cinemate.com</p>
            <h3>Mail</h3>
            <p>Cinemate</p>
            <p>123 Movie Lane</p>
            <p>Melbourne Vic 3000</p>
            <h3>Phone</h3>
            <p>1800-123-4567</p>
            
        </div>
    </div>
  )
}

export default ContactPage