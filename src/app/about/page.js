"use client";
import { ArrowRight, LogIn } from "lucide-react";
import Link from "next/link";

const About = () => {
  const foundersOffice = [
    { name: 'Rajat', linkedin: 'https://www.linkedin.com/in/rajat-b92183207/', photo: '/interns/rajat.jpeg' },
    { name: 'Mayank Raj', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Roushan Raj', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Tanishq Soni', linkedin: 'https://www.linkedin.com/in/tanishq-soni-946a66293/', photo: '/interns/tanishq.jpeg' },
    { name: 'Murukesh M', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Antima Agarwal', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Prakriti Yadav', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Rishika Kumari', linkedin: 'https://www.linkedin.com/in/rishika-kumari-4bab2522a/', photo: '/interns/rishika.jpeg' },
    { name: 'Amey Dikshit', linkedin: 'https://www.linkedin.com/in/', photo: '' },
  ];

  const teamMembers = [
    { name: 'Aaruj Singh Sisodiya', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Rahul Kumar', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Humayun Ahmad', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Atanu Biswas', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Pratyush Biswal', linkedin: 'https://www.linkedin.com/in/pratyush-biswal-289444163/', photo: '/interns/pratyush.jpeg' },
    { name: 'Kanishk Dhariwal', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Mohd Fahad', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Mitin Jangid', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Harshit Agarwal', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Mayank Agrawal', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Meghana Kadari', linkedin: 'https://www.linkedin.com/in/meghana-kadari-3556b9320/', photo: '/interns/meghana.jpeg' },
    { name: 'Waqar Moid', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Suryans Kumar Verma', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Harsha Sharma', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Snehasish Haldar', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Shourya Mathur', linkedin: 'https://www.linkedin.com/in/shourya-mathur-56918221a/', photo: '/interns/shourya.jpeg' },
    { name: 'Prince Yadav', linkedin: 'https://www.linkedin.com/in/prince-yadav-1403py/', photo: '/interns/prince.jpeg' },
    { name: 'Adarsh', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Nirjala Kushwaha', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Ayush Dubey', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Nikhil N', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Sarvesh Bharambe', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Vaibhav Meena', linkedin: 'https://www.linkedin.com/in/vaibhav-meena-b93832311/', photo: '/interns/vaibhav.jpeg' },
    { name: 'Rohan Kumar', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Ayush', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Divyansh Gupta', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Sunny Kumar', linkedin: 'https://www.linkedin.com/in/', photo: '' },
    { name: 'Archisman Dhar', linkedin: 'https://www.linkedin.com/in/archisman-dhar/', photo: '/interns/archisman.jpeg' },
  ];

  const renderMembers = (memberList) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginBottom: '5rem', width: '100%' }}>
      {memberList.map((member, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '160px' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '30px', backgroundColor: 'var(--border-light)', marginBottom: '1.25rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            {member.photo && (
              <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
