import React from "react";
import youtube from "../assets/images/youtube.jpg";
import whatsapp from "../assets/images/whatsapp.png";
import linkedin from "../assets/images/linkedin.png";
import phone from "../assets/images/phone.png";
import gmail from "../assets/images/gmail.png";
import insta from "../assets/images/instagram.jpg";
import github from "../assets/images/github.jpg";

const contact = [
  {
    image: gmail,
    title: "Write a mail to me",
    link: "mailto:mrinmoygoswami777@gmail.com",
  },
  {
    image: whatsapp,
    title: "Text me on WhatsApp",
    link: "https://wa.me/8638709407",
  },
  { image: phone, title: "Call me", link: "tel:+918638709407" },
  {
    image: linkedin,
    title: "Connect with me on LinkedIn",
    link: "https://www.linkedin.com/in/mrinmoy-goswami-83a1431b7/",
  },
  {
    image: insta,
    title: "Follow me on Instagram",
    link: "https://www.instagram.com/go_mrin/",
  },
  {
    image: github,
    title: "Follow me on Github",
    link: "https://github.com/Mrinmoy-Goswami",
  },
  {
    image: youtube,
    title: "Follow me on YouTube",
    link: "https://www.youtube.com/@geek4707",
  },
];

const Contact = () => {
  return (
    <footer id="contact" className="w-full bg-gradient-to-r from-gray-700 to-gray-900 py-10">
      <h1 className="text-center font-sans text-white text-2xl sm:text-4xl mb-5">
        Connect with Me
      </h1>
      
      <p className="text-center text-gray-300 mb-8 text-sm sm:text-base">
        Let's get in touch! I'm always open to collaboration or just a chat. Reach out through any of the platforms below.
      </p>

      {/* Contact icons */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10">
        {contact.map((item, index) => (
          <a
            key={index}
            className="transition-transform transform hover:scale-110"
            target="_blank"
            title={item.title}
            href={item.link}
            rel="noreferrer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full shadow-md shadow-white hover:shadow-lg hover:shadow-cyan-500"
            />
          </a>
        ))}
      </div>

      {/* Footer Details */}
      <div className="text-center text-gray-400 px-4">
        <p className="mb-2 text-xs sm:text-sm">
          Made with ❤️ by Mrinmoy Goswami
        </p>
        <p className="mb-5 text-xs sm:text-sm">
          © {new Date().getFullYear()} Mrinmoy Goswami. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm">
          Built with <span className="text-yellow-400">React</span>, hosted on <span className="text-cyan-400">Vercel</span>.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
