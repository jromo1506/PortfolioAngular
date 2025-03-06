import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoCardService {

  skills:any[] = [
    {
      imgUrl:"../../../../assets/img/angular.png",
      title:"Angular",
      desc:"Developed dynamic web applications using Angular, leveraging its modular architecture and two-way data binding. Created user-friendly CRMs and websites with efficient routing and state management for smooth client-side interactions."
    },
    {
      imgUrl:"../../../../assets/img/express.png",
      title:"NodeJs",
      desc:"Built scalable backend services in Node.js, focusing on performance and handling real-time data. Developed APIs and integrated third-party services such as Google OAuth Calendar and Meta APIs for bots, utilizing its event-driven, non-blocking I/O for efficient data handling."
    },
    {
      imgUrl:"../../../../assets/img/exp.webp",
      title:"Express",
      desc:"Used Express to build fast and reliable RESTful APIs for CRM applications, with middleware for authentication, data validation, and API routing. Integrated with databases and third-party services to power real-time features in web applications.",
    },
     {
      imgUrl:"../../../../assets/img/mongo.png",
      title:"MongoDB",
      desc:"Utilized MongoDB for managing data in document-based format for CRM systems and websites. Designed schemas and optimized data storage for scalability and performance, especially for handling unstructured data in real-time applications.",
    }
  ];


  constructor() { }



  getInfoCards():any{
    return this.skills;
  }
}
