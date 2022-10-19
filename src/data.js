import chalets from  "./ChaletsandCaviar.jpg";
import bike from "./BikeRace.png";
import express from "./expressfoods.png";
import resume from "./Resume.docx";
import face from "./selfie.jpg";
import JSCounter from "./JSCounter.png";
import grind from "./Boff.png";

export const projects = [
    {
      title: "Integrate a WordPress theme for a client",
      subtitle: "Word Press",
      description:
      "Adapt a WordPress theme to client needs. Select a WordPress theme based on client needs. Write documentation destined for non-technical users.",
      image: chalets,
      link: "http://dev-colt-chalets-and-caviar.pantheonsite.io/",
    },
    {
      title: "Create a website for a prestigious bike race",
      subtitle: "Ruby on Rails, Maps API, Flickr API",
      description:
      "Use an external API in JavaScript. Write tests that assess the fucntionality of a program. Devolop a website for a client. Design a database schema.",
      image: bike,
      link: "http://boulderbikerace.herokuapp.com",
    },
    {
      title:"Analyze a client's needs for their film festival",
      subtitle:"HTML, CSS, Bootstrap",
      description:"Detail project specifications. Write a project brief. List functionalities by the client. Choose an appropriate technical solution.",
      image: grind,
      link:"https://boff.herokuapp.com/",
    },
    {
      title:"Map out a technical solution for the delivery site ExpressFood",
      subtitle:"UML diagram, MYSQL database",
      description:"Design a database schema. Create technical architecture usin UML diagrams. Use a schema when designing a database.",
      image: express,
      link:"https://github.com/Colth4696/MySQL",
    },
  {
      title:"JS Counter",
      subtitle:"JavaScript",
      description:"Increment counter using buttons. Recording previious data.",
      image: JSCounter,
      link:"https://delicate-travesseiro-bc829f.netlify.app/",
    },

  ];

  export const skills = [
      {
          title:"ReactJs"
      },
      {
          title:"Ruby on Rails"
      },
      {
          title:"JavaScript"
      },
      {
          title:"HTML5"
      },
      {
          title:"CSS3"
      }
  ];

  export const res = [
      {
          title:"docx",
          image: resume,
      }
  ]

  export const selfs = [
      {
          title:"me",
          image: face,
      }
  ]
