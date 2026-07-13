"use client";
import { ArrowRight, LogIn } from "lucide-react";
import Link from "next/link";

const About = () => {
  const foundersOffice = [
    { name: 'Rajat', linkedin: 'https://www.linkedin.com/in/rajat-b92183207/', photo: '/interns/IMG_20260212_072832 - Rajat.jpg' },
    { name: 'Mayank Raj', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/Screenshot 2026-06-08 at 7.40.49 PM - Mayank Raj.png' },
    { name: 'Roushan Raj', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/WhatsApp Image 2026-06-08 at 7.44.23 PM - Roushan Raj.jpeg' },
    { name: 'Tanishq Soni', linkedin: 'https://www.linkedin.com/in/tanishq-soni-946a66293/', photo: '/interns/WhatsApp Image 2026-06-08 at 7.45.46 PM - Tanishq Soni.jpeg' },
    { name: 'Murukesh M', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG20250708204845-01 - Murukesh M.jpg' },
    { name: 'Antima Agarwal', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG-20260117-WA0034 - Antima Agarwal.jpg' },
    { name: 'Prakriti Yadav', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_20260530_233936 - PRAKRITI YADAV IPM 2023-28 Batch.png' },
    { name: 'Rishika Kumari', linkedin: 'https://www.linkedin.com/in/rishika-kumari-4bab2522a/', photo: '/interns/IMG-20260417-WA0249 - Rishika.jpg' }
  ];

  const teamMembers = [
    { name: 'Aaruj Singh Sisodiya', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/+91 62323 69166 20250414_174510 - Aaruj Singh Sisodiya.jpg' },
    { name: 'Rahul Kumar', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_20260425_235308_602 - Rahul Kumar.webp' },
    { name: 'Humayun Ahmad', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_20250924_160424 - Humayun Ahmad.jpg' },
    { name: 'Atanu Biswas', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/PXL_20231006_194939087~5 - Atanu Biswas.jpg' },
    { name: 'Pratyush Biswal', linkedin: 'https://www.linkedin.com/in/pratyush-biswal-289444163/', photo: '/interns/IMG_20260406_125538 - Pratyush Biswal.jpg' },
    { name: 'Kanishk Dhariwal', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_20260608_153243 - Kanishk Dhariwal.jpg' },
    { name: 'Mohd Fahad', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/WIN_20240124_16_24_04_Pro - Muhammad Fahad.jpg' },
    { name: 'Mitin Jangid', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG-20251019-WA0020 - mitin jangid.jpg' },
    { name: 'Harshit Agarwal', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG-20260527-WA0007 - Harshit Agarwal.jpg' },
    { name: 'Mayank Agrawal', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/Photo - Mayank Agrawal.png' },
    { name: 'Meghana Kadari', linkedin: 'https://www.linkedin.com/in/meghana-kadari-3556b9320/', photo: '/interns/meghana - Meghana Kadari.jpeg' },
    { name: 'Waqar Moid', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG-20260608-WA0005(1)(1) - Md. Waqar Moid.jpg' },
    { name: 'Suryans Kumar Verma', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_20260524_202114_266 - Suryans Kumar Verma.webp' },
    { name: 'Harsha Sharma', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/profile_pic - Harsha Sharma.jpeg' },
    { name: 'Snehasish Haldar', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/llm - snehasish haldar.jpeg' },
    { name: 'Shourya Mathur', linkedin: 'https://www.linkedin.com/in/shourya-mathur-56918221a/', photo: '/interns/shourya.jpeg' },
    { name: 'Prince Yadav', linkedin: 'https://www.linkedin.com/in/prince-yadav-1403py/', photo: '/interns/IMG_20260323_181217 - Prince Yadav.jpg' },
    { name: 'Adarsh', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG-20260608-WA0005 - Adarsh Kuntal.jpg' },
    { name: 'Nirjala Kushwaha', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_3338 - Nirjala.jpeg' },
    { name: 'Ayush Dubey', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/Carbon_Dev - Ayush Dubey.jpeg' },
    { name: 'Nikhil N', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_5475 - Nikhil N.jpeg' },
    { name: 'Sarvesh Bharambe', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_20260608_223912 - Sarvesh.jpg' },
    { name: 'Vaibhav Meena', linkedin: 'https://www.linkedin.com/in/vaibhav-meena-b93832311/', photo: '/interns/vaibhav.jpeg' },
    { name: 'Rohan Kumar', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/my_profile_photo - ROHAN KUMAR.jpeg' },
    { name: 'Ayush', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG_20260608_235243 - Ayush kumar.png' },
    { name: 'Divyansh Gupta', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/3426845d-21d2-45fa-ac59-fa0a73ff3dcb - Divyansh Gupta.jpg' },
    { name: 'Sunny Kumar', linkedin: 'https://www.linkedin.com/in/', photo: '/interns/IMG-20250703-WA0006 - sunny kumar.jpg' },
    { name: 'Archisman Dhar', linkedin: 'https://www.linkedin.com/in/archisman-dhar/', photo: '/interns/IMG_20260516_133025 - Archisman Dhar.jpg' },
  ];

  const renderMembers = (memberList) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginBottom: '5rem', width: '100%' }}>
      {memberList.map((member, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '160px' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '30px', backgroundColor: 'var(--border-light)', marginBottom: '1.25rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            {member.photo && (
              <img src={member.photo.split('/').map(encodeURIComponent).join('/')} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            )}
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem', lineHeight: '1.2' }}>{member.name}</h4>
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', display: 'flex', alignItems: 'center', justifyItems: 'center', opacity: '0.8', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <main
      className="animate-fade-in"
      style={{ background: "white", paddingBottom: "4rem", paddingTop: "80px" }}
    >
      <div className="container">
        {/* Company Section */}
        <section className="about-company-section">
          <div className="about-text-content">
            <div className="about-header-mobile-flex">
              <h1
                className="hero-title"
                style={{
                  textAlign: "left",
                  marginBottom: "1.5rem",
                  fontSize: "3rem",
                }}
              >
                About <span>CarbonTatva AI</span>
              </h1>
              <img src="/CarbonTatvaAi_logo.png" alt="CarbonTatva AI" className="mobile-only-logo hide-on-desktop" />
            </div>
            <p
              className="hero-subtitle"
              style={{ textAlign: "left", marginBottom: "1.5rem" }}
            >
              CarbonTatva AI is an AI-native platform that enables businesses to
              measure, monitor, and forecast carbon emissions. Built for India's
              regulatory landscape, it transforms operational data into
              actionable insights for compliance and decarbonisation.
            </p>
            <p
              className="hero-subtitle"
              style={{ textAlign: "left", marginBottom: "2rem" }}
            >
              Powered by proprietary models, we deliver end-to-end climate
              intelligence to help organisations optimise costs and accelerate
              their path to net-zero.
            </p>
            <p
              className="hero-subtitle"
              style={{
                textAlign: "left",
                fontWeight: "600",
                color: "var(--text-main)",
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
              }}
            >
              We are building AI-powered climate intelligence to measure,
              monitor, and reduce emissions.
            </p>
            <Link
              href="/demo"
              className="btn btn-primary"
              style={{ padding: "1rem 3rem", fontSize: "1.25rem", display: "inline-flex", alignItems: "center" }}
            >
              <LogIn size={20} style={{ marginRight: "10px" }} />
              Book a Demo
            </Link>
          </div>
          <div className="about-logo-container hide-about-logo-on-mobile">
            <img src="/CarbonTatvaAi_logo.png" alt="CarbonTatva AI" />
          </div>
        </section>


        {/* Team Section */}
        <section
          className="interns-section"
          style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        >
          <h2
            className="hero-title"
            style={{
              fontSize: "3rem",
              marginBottom: "4rem",
              textAlign: "center",
              margin: "0 auto 4rem",
            }}
          >
            Our <span>team</span>
          </h2>

          <h3
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "3rem",
              color: "var(--text-main)",
            }}
          >
            Founder&apos;s Office
          </h3>
          {renderMembers(foundersOffice)}

          {renderMembers(teamMembers)}
        </section>
      </div>
    </main>
  );
};

export default About;
