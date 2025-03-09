import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {

  projectMap:Map<string,any> = new Map([
    ["DasHaus",
      {
        projectName:"Dashaus",
        type:"CRM",
        projectImgs:[
          "../../assets/projects/dashaus/das1",
          "../../assets/projects/dashaus/das2",
          "../../assets/projects/dashaus/das3",

        ],
        description:[
          "Das Haus CRM is a real estate development management system built with the MEAN stack (MongoDB, Express.js, Angular, and Node.js). It is designed to optimize the administration of lots for construction companies, providing a robust, scalable, and modular solution for managing real estate development projects. The backend, developed with Node.js and Express.js, leverages RESTful APIs to ensure efficient communication between the frontend and database, implementing authentication, authorization, and data validation mechanisms. The system uses MongoDB as a NoSQL database, allowing flexible data structuring for property listings, sales transactions, customer records, and financial information. On the frontend, Angular is used to build a dynamic and responsive single-page application (SPA) with a component-based architecture that ensures maintainability and scalability. The platform supports cloud-based document storage for managing contracts, blueprints, and property-related files, while also integrating with third-party APIs such as payment gateways and email services for automated notifications. Additionally, it provides interactive dashboards with aggregated insights, sales trends, and financial reports to support data-driven decision-making. The application is hosted on AWS, ensuring high availability, performance, and secure cloud-based deployment. Das Haus CRM enhances operational efficiency in real estate development by automating workflows, improving collaboration among teams, and ensuring seamless management of properties, clients, and transactions."
        ]
      }

    ],
    [
      "Hasso",
      {
        projectName:"Hasso Accountability",
        type:"CRM",
        projectImgs:[
          "../../assets/projects/hasso/hasso1",
          "../../assets/projects/hasso/hasso2",
          "../../assets/projects/hasso/hasso3",
        ]
      }
    ],
    [
      "Arce",
      {
        projectName:"Dr Arce Dental Clinic Boutique",
        type:"",
        projectImgs:[
          "../../assets/projects/hasso/das1",
          "../../assets/projects/hasso/das2",
          "../../assets/projects/hasso/das3",
        ]
      }
    ],
    [
      "Nubes",
      {
        projectName:"Las Nubes",
        type:"Landing page",
        projectImgs:[
          "../../assets/projects/dashaus/nube1",
          "../../assets/projects/dashaus/nube2",
          "../../assets/projects/dashaus/nube3",
          "../../assets/projects/dashaus/nube4",

        ],
      }
    ],
    [
      "Gigahardware",
      {
        projectName:"Gigahardware",
        type:"E-Commerce",
        projectImgs:[
          "../../assets/projects/hasso/das1",
          "../../assets/projects/hasso/das2",
          "../../assets/projects/hasso/das3",
        ]
      }
    ]
    


  ]);

  constructor() { }
}
