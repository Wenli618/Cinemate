
import HeroSection from "@/components/feature/HeroSection"

function PrivacyPage() {
  return (
    <>
        <HeroSection 
            title='Privacy Policy' 
            
            bgImage="/backgrounds/cinema.webp"
        />
        <div className='privacy'>
            <div className="privacySection">
                <h2>Introduction</h2>
                <p><b>Cinemate</b> is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
            </div>
            <div className="privacySection">
                <h2>Data Collection</h2>
                <ul>
                    <li><b>Contact Information:</b>If you contact us for support or with inquiries, we may collect your name, email address, and the content of your communication.</li>
                    <li><b>Cookies and Tracking Technologies</b>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies may include information such as your IP address, browser type, and pages visited.</li>
                    <li><b>Usage Data</b>We collect information on how you access and use the website, including device information, browser type, and operating system.</li>
                </ul>
                <h2>Data Usage</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul>
                    <li>To provide and maintain our service.</li>
                    <li>To notify you about changes to our service.</li>
                    <li>To gather analysis or valuable information to improve our service.</li>
                    <li>To monitor the usage of our service.</li>
                    <li>To detect, prevent, and address technical issues.</li>
                </ul>
                <h2>Data Sharing and Disclosure</h2>
                <p>We do not sell or share your personal data with third parties except as described in this Privacy Policy. We may disclose your information to:</p>
                <ul>
                <li><b>Service Providers</b>Third-party companies and individuals that assist us in providing our service.</li>
                <li><b>Legal Requirements</b>If required by law or in response to valid requests by
public authorities.</li>

                </ul>
            </div>
        </div>
    </>
  )
}

export default PrivacyPage