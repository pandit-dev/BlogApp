import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-8 space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Learn more about our mission, vision, and the amazing team behind our
          success.
        </p>
      </div>

      {/* Our Mission Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to deliver high-quality content that inspires and
          informs our readers. We strive to create a platform where people can
          share ideas, learn new things, and engage with a vibrant community.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
        <p className="text-gray-700 mb-4">
          We are a group of passionate writers, editors, and developers who work
          together to bring you the best content possible. Meet some of the key
          members of our team:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              className="mx-auto rounded-full w-24 h-24 mb-3"
              src="https://avatars.githubusercontent.com/u/188547687?v=4"
              alt="Team Member"
            />
            <h3 className="text-lg font-semibold">Aayush</h3>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              className="mx-auto rounded-full w-24 h-24 mb-3"
              src="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-1/502612979_2537087163291319_1197635984151927677_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=dKgz_tmzc7oQ7kNvwGM0U_Q&_nc_oc=AdkBpbu2h2s6T1Qe3LBUunIWQ0BPRLVb6L8FmukbtlQxrCoizEDqkQsOu_jBII-Pi0s&_nc_zt=24&_nc_ht=scontent.fccu10-1.fna&_nc_gid=0V3b5QKpEFTQAlDeiuVZZQ&oh=00_AfP7hs_F1PmAMKmzwvPtvN9T9UdlfV-V1Jv5PfXXGqcNHw&oe=6854B659"
              // src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlYXV0eWZ1bGwlMjBnaXJsfGVufDB8MHwwfHx8MA%3D%3D"
              alt="Team Member"
            />
            <h3 className="text-lg font-semibold">Helen</h3>
            <p className="text-sm text-gray-500">Chief Editor</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
              className="mx-auto rounded-full w-24 h-24 mb-3"
              
              src="https://avatars.githubusercontent.com/u/203501431?s=400&u=86d07f3bb70f59dd327600efbe4622b9e4ef9da2&v=4"
              alt="Team Member"
            />
            <h3 className="text-lg font-semibold">Atanu</h3>
            <p className="text-sm text-gray-500">Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Our History</h2>
        <p className="text-gray-700">
          Founded in 2025, our blog started as a small project to share tech
          news and insights. Over the years, we have grown into a full-fledged
          platform with thousands of readers from around the world. We are proud
          of our journey and continue to look for new ways to innovate and
          improve.
        </p>
      </section>

      {/* Office Locations Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Our Office Location</h2>
        <div>
          <h3 className="text-lg font-semibold">
            Paschim Medinipur, West Bengal
          </h3>
          <p className="text-gray-700">
            Sabra,Belda
            <br />
            Paschim Medinipur, West Bengal, India
            <br />
            Phone: +91 123-456-7890
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Find Us on the Map</h2>
        <div className="aspect-w-16 aspect-h-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31572.61415911609!2d87.34603614077604!3d22.417360287178277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0df8b6eaa3a55d%3A0x9c1e2e5ed94bdf9!2sSabra%2C%20West%20Bengal%20721501%2C%20India!5e0!3m2!1sen!2sin!4v1619686738647!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
