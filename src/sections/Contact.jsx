
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
    <footer
      id="contact"
      className="w-full bg-gradient-to-br h-full from-gray-900 via-gray-800 to-gray-900 py-14 px-4 text-center"
    >
      {/* Header */}
      <h1 className="font-sans text-white text-3xl sm:text-5xl mb-4 font-bold animate-fade-in">
        Connect with <span className="text-gradient">Me</span>
      </h1>

      <p className="text-gray-300 mb-10 text-sm sm:text-lg max-w-2xl mx-auto animate-fade-in-up">
        Let&apos;s get in touch! I&apos;m always open to{" "}
        <span className="text-gradient">collaboration</span> or just a chat.  
        Reach out through any of the platforms below.
      </p>

      {/* Contact icons */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
        {contact.map((item, index) => (
          <a
            key={index}
            className="transition-transform transform hover:scale-125 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            target="_blank"
            title={item.title}
            href={item.link}
            rel="noreferrer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-14 w-14 sm:h-20 sm:w-20 rounded-full shadow-md shadow-black hover:shadow-cyan-500/80 transition-all duration-300"
            />
          </a>
        ))}
      </div>

      {/* Footer Details */}
      <div className="text-gray-400 space-y-2 text-xs sm:text-sm animate-fade-in">
        <p>Made with ❤️ by <span className="text-gradient">Mrinmoy Goswami</span></p>
        <p>© {new Date().getFullYear()} Mrinmoy Goswami. All rights reserved.</p>
        <p>
          Built with <span className="text-yellow-400 font-medium">React</span>, hosted on{" "}
          <span className="text-cyan-400 font-medium">Vercel</span>.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
