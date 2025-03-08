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
