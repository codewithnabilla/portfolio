const projectList = [
  {
    id: 1,
    title: "Expense Management & Approval System",
    img: "expense.png",
    alt: "expense",
    description:
      "Web-based expense request system with multi-level approval workflow.",
    stack: "PostgreSQL, ReactJS, TypeScript",
    details: [
      "Developed a full workflow module for the Expense Request Letter system, covering requester submission, multi-level approval, and status tracking.",
      "Implemented user management features including role-based access control (RBAC).",
      "Integrated frontend components with backend APIs to ensure accurate and consistent data flow across the approval pipeline.",
    ],
    isPrivate: true,
  },
  {
    id: 2,
    title: "Procurement System Integration",
    img: "bai.png",
    alt: "procurement",
    description:
      "Procurement system handling reservation, invoice, and purchase order processes.",
    stack: "Laravel, PHP, PostgreSQL, ReactJS, JavaScript",
    details: [
      "Developed the Reservation and Invoice modules, implementing end-to-end procurement workflows from request creation to Purchase Order (PO) generation.",
      "Created optimized PostgreSQL queries and data models to retrieve, filter, and aggregate procurement data based on user requirements.",
      "Built backend services in Laravel, including controllers and repository logic to process procurement transactions.",
    ],
    isPrivate: true,
  },
  {
    id: 3,
    title: "E-Sign System",
    img: "esign.png",
    alt: "esign",
    description:
      "Web-based electronic signature system built using Ruby on Rails.",
    stack: "Ruby, Ruby on Rails, ERB",
    details: [
      "Developed a web-based electronic signature (E-Sign) system using Ruby on Rails and ERB.",
      "Implemented reusable UI components to improve maintainability and code consistency.",
      "Built and managed controller logic for user interactions.",
      "Applied MVC architecture principles to ensure clean separation of concerns.",
    ],
    isPrivate: true,
  },
  {
    id: 4,
    title: "Integrasia",
    img: "integrasia.png",
    alt: "integrasia",
    description:
      "Operational system with external API integration and user management features.",
    stack: "Laravel, PHP, PostgreSQL, Vue.js, TypeScript",
    details: [
      "Integrated external APIs to fetch and display real-time operational data on the frontend.",
      "Developed CRUD functionality for the User Management module, including form handling, data validation, and permission logic.",
      "Collaborated in enhancing system features and optimizing API data handling for performance.",
    ],
    isPrivate: true,
  },
  {
    id: 5,
    title: "SiManis Microservice",
    img: "simanis.png",
    alt: "simanis",
    description:
      "Microservice-based web application with API integration.",
    stack: "Laravel, PHP, PostgreSQL, ReactJS, TypeScript, Bootstrap",
    details: [
      "Developed backend services using Laravel and PHP.",
      "Built frontend features based on Figma designs using ReactJS.",
      "Integrated frontend and backend, ensuring seamless API communication.",
    ],
    isPrivate: true,
  },
  {
    id: 6,
    title: "Magenta",
    img: "magenta.png",
    alt: "magenta",
    description:
      "Maintenance and issue resolution for an existing web application.",
    stack: "Laravel, PHP, PostgreSQL, Bootstrap",
    details: [
      "Fixed issues across frontend and backend to ensure system stability.",
      "Resolved user-reported bugs and implemented requested enhancements.",
    ],
    isPrivate: false,
  },
];

export default projectList;

