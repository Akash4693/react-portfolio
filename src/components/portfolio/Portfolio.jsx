import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: " Plura- Multivendor B2B2B SaaS Website Builder CRM",
    img: "/plura.png",
    link: "https://github.com/Akash4693/plura",
    desc: `Developed a multi-vendor CRM with unlimited funnel hosting, role-based access, and sub-account management. Built a drag-and-drop website and funnel builder, Kanban-based project management, and a custom state management system for real-time updates. Integrated Stripe Connect for subscriptions, product sync, and automated revenue sharing. Designed a branded Stripe checkout and real-time analytics dashboards for enhanced UX.`,
  },
  {
    id: 2,
    title: " TradeX- Multi Vendor E-commerce platform",
    img: "/TradeX.png",
    link: "https://github.com/Akash4693/TradeX-frontend",
    desc: `TradeX is a scalable multi-vendor B2C e-commerce platform with real-time chat, seamless Stripe payments, advanced inventory management, and intelligent search. Built with MERN stack, it features JWT security, Cloudinary media handling, Redux state management, and Jest testing. A sleek Material UI design and data-driven dashboard enhance UX and business insights.`,
  },
  {
    id: 3,
    title: "Threads Clone with Real Time chat feature - Full Stack",
    img: "/threads.png",
    link: "https://github.com/Akash4693/threads-clone",
    desc: `Cloned and enhanced Meta's Threads with real-time chat and live video. Built with MongoDB, Express.js, Node.js, and React.js, leveraging Chakra UI, JWT, Socket.IO, Cron, and Recoil for seamless functionality. Integrated Cloudinary and ZEGO Cloud for media management and live streaming. Features include secure authentication, interactive posts, user engagement tools, real-time messaging, activity tracking, and high-quality live video calls.`,
  },
  {
    id: 4,
    title: "Rhezo Food Ordering Platform - Full Stack",
    img: "/Rhezo.png",
    link: "https://github.com/Akash4693/rhezo",
    desc: `Rhezo is a full-stack food ordering platform built with TypeScript, React.js, and Node.js. It features secure JWT authentication, real-time Stripe payments, automated email confirmations, and Cloudinary-powered image handling. A sleek ShadCN UI enhances UX, while the admin panel enables efficient restaurant and product management.`,
  },
  {
    id: 5,
    title: "Finance",
    img: "/finance.png",
    link: "https://github.com/Akash4693/finance",
    desc: `Experience a seamless way to track, analyze, and manage your finances with our advanced financial dashboard. Designed for precision and ease of use, it comes packed with features to give you full control over your financial data.
         . Users can add transactions, toggle income and expenses, bulk delete and search records, and import CSV files all powered by Tanstack Query for seamless state management.
        `,
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
