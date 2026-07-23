export const projects = [
  {
    slug: "legalease",
    title: "LegalEase",
    description:
      "A full-stack legal services marketplace where clients can discover and hire lawyers, make payments, and track cases, while lawyers manage their profiles and services, and admins oversee the entire platform with analytics.",
    image: "/assets/legaleasy.png",
    tech: ["Next.js", "React", "MongoDB", "Better Auth", "Google OAuth", "Stripe", "Node.js", "Express.js"],
    live: "https://legal-ease-flame-zeta.vercel.app/",
    github: "https://github.com/Tamim379ta/LegalEase",
    challenges: [
      "Implementing role-based access control for three distinct user types (Client, Lawyer, Admin) with different permissions and views.",
      "Integrating Stripe with dynamic pricing where service costs vary per lawyer, requiring careful handling of payment sessions.",
    ],
    future: [
      "Add a real-time chat system between clients and lawyers using WebSockets.",
      "Introduce a review and rating system so clients can leave feedback after case completion.",
    ],
  },
  {
    slug: "bookbridge",
    title: "BookBridge",
    description:
      "A university library management system where students can browse, borrow, and return books with due date tracking, and admins can manage the full catalog, users, and borrow records in real time.",
    image: "/assets/bookbridge.png",
    tech: ["Next.js", "React", "MongoDB", "Better Auth", "Node.js", "Express.js", "Framer Motion"],
    live: "https://library-management-eight-chi-66.vercel.app/",
    github: "https://github.com/Tamim379ta/Library-Management-",
    challenges: [
      "Building server-side search, filter, and pagination that stay in sync with URL query params without losing state on navigation.",
      "Handling due date logic accurately — calculating overdue status and displaying warnings based on borrow date and return deadline.",
    ],
    future: [
      "Add email notifications to remind students when their book return deadline is approaching.",
      "Introduce a book reservation system so students can queue for currently borrowed books.",
    ],
  },
  {
    slug: "dinespot",
    title: "DineSpot",
    description:
      "A full-stack restaurant discovery and table booking platform where users can explore restaurants and reserve tables, while owners manage their listings and bookings in real time.",
    image: "/assets/dinespot.png",
    tech: ["Next.js", "Typescript", "React", "MongoDB", "Better Auth", "Node.js", "Express.js"],
    live: "https://dine-spot-eta.vercel.app/",
    github: "https://github.com/Tamim379ta/DineSpot",
    challenges: [
      "Managing real-time table availability to prevent double bookings when multiple users attempt to reserve the same slot simultaneously.",
      "Designing a multi-role system where restaurant owners and diners have completely separate dashboards and flows.",
    ],
    future: [
      "Add Stripe payment integration so users can pay a deposit when booking a table.",
      "Implement a review system where diners can rate and comment on restaurants after their visit.",
    ],
  },
  {
    slug: "sportnest",
    title: "SportNest",
    description:
      "A full-stack sports facility booking platform where users can explore and reserve sports venues. The system allows facility owners to manage listings and users to book or cancel time slots in real time.",
    image: "/assets/sportnest.png",
    tech: ["Next.js", "React", "MongoDB", "Better Auth", "JWT", "Node.js", "Express.js"],
    live: "https://sport-nest-client-liart.vercel.app",
    github: "https://github.com/Tamim379ta/SportNest-Client",
    challenges: [
      "Handling time slot conflicts — ensuring a facility slot cannot be double-booked by two users at the same time.",
      "Setting up JWT-based authentication alongside Better Auth and managing token expiry gracefully on the frontend.",
    ],
    future: [
      "Add a calendar view for facility owners to visualize bookings across days and weeks.",
      "Introduce facility ratings and reviews so users can make more informed booking decisions.",
    ],
  },
  {
    slug: "qurbanihat",
    title: "QurbaniHat",
    description:
      "A livestock booking platform with modern UI, featured animals, and responsive user experience.",
    image: "/assets/qurbanihat.png",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    live: "https://qurbani-hat.vercel.app/",
    github: "https://github.com/Tamim379ta/QurbaniHat-",
    challenges: [
      "Designing a UI that feels trustworthy and clean for a niche marketplace audience.",
      "Structuring the livestock data model to support various animal types, sizes, and pricing flexibly.",
    ],
    future: [
      "Add user authentication so buyers can track their orders and booking history.",
      "Integrate a payment gateway for online deposits and order confirmation.",
    ],
  },
  {
    slug: "english-janala",
    title: "English Janala",
    description:
      "An English learning web application built with raw JavaScript featuring interactive UI and dynamic functionality.",
    image: "/assets/english-janala.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tamim379ta.github.io/English-Janala/",
    github: "https://github.com/Tamim379ta/English-Janala",
    challenges: [
      "Building dynamic UI interactions without any framework — all DOM manipulation done manually with vanilla JavaScript.",
      "Structuring lesson content and progress tracking purely on the frontend without a backend or database.",
    ],
    future: [
      "Rebuild with React for better state management and component reusability.",
      "Add a backend to track user progress, scores, and completed lessons.",
    ],
  },
];