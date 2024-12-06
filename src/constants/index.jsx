import {
  wordpress, canva, figma, javascript, next, react, tailwind, typescript, express, card, gears
} from '../public/images/tech'



const withBaseURL = (path) => `${import.meta.env.BASE_URL}${path}`

// export const studies = [
//     {
//       id: "0",
//       icon: withBaseURL("/images/feature-1.png"),
//       caption: "July 2024",
//       title: "Client Authentication",
//       text: "Authentication is a big part of gaining your customer's loyalty. Having a seemless process to verify their identity is paramount to web development and is part of almost every public website. Read more about how I approached and help solve a real-world business need to authenticate clients.",
//       button: {
//         icon: withBaseURL("/images/docs.svg"),
//         title: "Read More",
//       },
//     },
//     {
//       id: "1",
//       icon: withBaseURL("/images/feature-2.png"),
//       caption: "January 2024",
//       title: "Lead Conversions",
//       text: "Landing Pages not only give your audience visibilty to your business, but it should also help you generate the maximum amount of leads in order to grow your business. Not all websites are the built the same that help you generate business. Read more about how I helped a company generate more leads with some modern web designs ",
//       button: {
//         icon: withBaseURL("/images/docs.svg"),
//         title: "Read More",
//       },
//     },
//   ];




  // export const testimonials = [
  //   {
  //     id: "0",
  //     name: "Jessica Saunders",
  //     role: "Globalnomads",
  //     avatarUrl: withBaseURL("/images/testimonials/jessica-saunders.png"),
  //     comment:
  //       "Square 205's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  //   },
  //   {
  //     id: "1",
  //     name: "Mark Erixon",
  //     role: "Vid capital intl",
  //     avatarUrl: withBaseURL("/images/testimonials/mark-erixon.png"),
  //     comment:
  //       "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  //   },
  //   {
  //     id: "2",
  //     name: "Melanie Hurst",
  //     role: "Cyberleap",
  //     avatarUrl: withBaseURL("/images/testimonials/melanie-hurst.png"),
  //     comment:
  //       "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  //   },
  //   {
  //     id: "3",
  //     name: "Alicia Barker",
  //     role: "Cyberleap",
  //     avatarUrl: withBaseURL("/images/testimonials/alicia-barker.png"),
  //     comment:
  //       "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  //   },
  //   {
  //     id: "4",
  //     name: "Becky Snider",
  //     role: "Floclips",
  //     avatarUrl: withBaseURL("/images/testimonials/becky-snider.png"),
  //     comment:
  //       "Switched to Square 205 last month, and I'm already seeing results. Best decision for our team!",
  //   },
  //   {
  //     id: "5",
  //     name: "Jim Bradley",
  //     role: "Vid capital intl",
  //     avatarUrl: withBaseURL("/images/testimonials/jim-bradley.png"),
  //     comment:
  //       "The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
  //   },
  // ];



  export const socials = [
    {
      id: "0",
      title: "x",
      icon: withBaseURL("/images/socials/x.svg"),
      url: "#",
    },
    {
      id: "1",
      title: "Threads",
      icon: withBaseURL("/images/socials/threads.svg"),
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      icon: withBaseURL("/images/socials/instagram.svg"),
      url: "#",
    },
    {
      id: "3",
      title: "Discord",
      icon: withBaseURL("/images/socials/discord.svg"),
      url: "#",
    },
  ]


  export const tech = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 24,
      height: 36,
    },
    {
      id: "1",
      title: "Wordpress",
      icon: wordpress,
      width: 38,
      height: 36,
    },
    {
      id: "2",
      title: "Canva",
      icon: canva,
      width: 36,
      height: 28,
    }, 
     {
      id: "5",
      title: "JavaScript",
      icon: javascript,
      width: 34,
      height: 34,
    },
    {
      id: "3",
      title: "Next",
      icon: next,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "React",
      icon: react,
      width: 34,
      height: 34,
    },
  
    {
      id: "6",
      title: "TypeScript",
      icon: typescript,
      width: 34,
      height: 34,
    },
    {
      id: "7",
      title: "Tailwind",
      icon: tailwind,
      width: 34,
      height: 32,
    },
  ];

  export const stack = [
  {
    id: "0",
    title: "Modern Web Front End Frameworks, Libraries and Languages",
    text: 'HTML, CSS, Javascript, TypeScript, Next.js, Tailwind CSS',
  },
  {
    id: "2",
    title: "Server and Database Management",
    text:'Express, PostgreSQL, MongoDB'
  },

  {
    id: "3",
    title: "Design and Deployment Solutions",
    text:'Github, Canva, Figma'
  },
];

export const studies = [
  {
    id: "0",
    title: "Client Onboarding",
    text: "Marketing Agency seeking authorization solution to access and manage client social media accounts",
    date: "July 2024",
    status: "progress",
    imageUrl: withBaseURL("/images/study1.png"),
    colorful: true,
  },
  {
    id: "1",
    title: "Lead Conversions",
    text: "Create a landing page with modern UI elements that drive customer engagement and generates more leads.",
    date: "February 2024",
    status: "done",
    imageUrl: withBaseURL("/images/study2.png"),
    colorful: true,
  },
  // {
  //   id: "3",
  //   title: "Establishing Online Presence",
  //   text: "Working with Real Estate Agents to increase their digital presence by creating professional landing pages that link all of their agency assets.",
  //   date: "June 2024",
  //   status: "progress",
  //   imageUrl: withBaseURL("/images/testimonials/jim-bradley.png"),
  //   colorful: true,
  // },
  // {
  //   id: "2",
  //   title: "Creating a Community",
  //   text: "Texas Coding Club was established in order to create physical presense for student developers wanting to hone in on their developting skills. TCC hosts meetups, peer reviews and builds projects. ",
  //   date: "March 2023",
  //   status: "done",
  //   imageUrl: withBaseURL("/images/testimonials/jim-bradley.png"),
  //   colorful: true,
  // },
];


// export const projects = [
//   {
//     id: "2",
//     title: "Texas Coding Club",
//     text: "Flexible to work remote or in office to meet project needs.",
//     backgroundUrl: withBaseURL("/images/card-1.svg"),
//     // iconUrl: benefitIcon3,
//     imageUrl: gears,
//   },  
//   {
//     id: "1",
//     title: "North Texas Solutions",
//     text: "Active attendee at developer events networking and meeting other technologists in the DFW area.",
//     backgroundUrl: withBaseURL("/images/card-1.svg"),
//     // iconUrl: benefitIcon2,
//     imageUrl: gears,
//     light: true,
//   },
//   {
//     id: "0",
//     title: "Innovative Technologies",
//     text: "Consistently improving skillset as I progress and gain industry experience of the most effective technical solutions",
//     backgroundUrl: withBaseURL("/images/card-1.svg"),
//     // iconUrl: benefitIcon1,
//     imageUrl: gears,
//   },
  // {
  //   id: "4",
  //   title: "Project Management Experience",
  //   text: "Experienced using various project management tools in order to optimize project delivery and smetrics.",
  //   backgroundUrl: "/mvp_portfolio/card-1.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benFlask,
  // },
  // {
  //   id: "3",
  //   title: "Quick Product Turnaround",
  //   text: "Implement planning and building protocols that result in fast product deliveries.",
  //   backgroundUrl: "/mvp_portfolio/card-3.svg",
  //   iconUrl: benefitIcon3,
  //   imageUrl: benGears,
  //   light: true,
  // },
  // {
  //   id: "5",
  //   title: "Leadership and Organization",
  //   text: "Co-Founder of Texas Coding Club, a Dallas-based group for emerging programmers",
  //   backgroundUrl: "/mvp_portfolio/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benCom,
  // },



export const projects1 = [
  {
    id:"1",
    image:"./images/p1.png",
    name:"NT Solutions",
    date:"August 2024",
    text:"North Texas Technology Consulting. Providing web and software solutions to small businesses in the DFW area.",
    tech:[      
      {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 22,
      height: 36,
    },
    {
      id: "2",
      title: "Canva",
      icon: canva,
      width: 34,
      height: 28,
    }, 
    {
      id: "3",
      title: "Wordpress",
      icon: wordpress,
      width: 35,
      height: 36,
    }, 
  ]
  },
  {
    id:"2",
    image:"./images/p3.png",
    name:"Square 205",
    date:"September 2024",
    text:"Marketing Agency SaaS MVP concept. Mockup and landing page build for SaaS.",
    tech:[
      {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 22,
        height: 36,
      },
      {
        id: "2",
        title: "Canva",
        icon: canva,
        width: 34,
        height: 28,
      }, 
      {
        id: "6",
        title: "TypeScript",
        icon: javascript,
        width: 34,
        height: 34,
      },
      {
        id: "7",
        title: "Tailwind",
        icon: tailwind,
        width: 38,
        height: 32,
      },
    ]
  },
  {
    id:"3",
    image:"./images/p4.png",
    name:"Monument Realty",
    date:"August 2024",
    text:"Real Estate Agent landing page design. Custom web solutions to integrate into agency portal.",
    tech:[
      {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 22,
        height: 36,
      },
      {
        id: "2",
        title: "Canva",
        icon: canva,
        width: 34,
        height: 28,
      }, 

    ]
  },
  {
    id:"4",
    image:"./images/p2.png",
    name:"Unleash AI",
    date:"August 2024",
    text:"AI chatbot design and mockup. Front-end design and asset creation",
    tech:[
      {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 22,
        height: 36,
      },
      {
        id: "2",
        title: "Canva",
        icon: canva,
        width: 34,
        height: 28,
      }, 

    ]
  }
]