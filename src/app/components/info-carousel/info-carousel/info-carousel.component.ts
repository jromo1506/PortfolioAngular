import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AfterViewInit } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';
import { InfoCardService } from 'src/app/services/info-card.service';
declare var $: any;


@Component({
  selector: 'app-info-carousel',
  standalone: true,
  imports: [CommonModule,InfoCardComponent],
  templateUrl: './info-carousel.component.html',
  styleUrls: ['./info-carousel.component.scss']
})
export class InfoCarouselComponent implements AfterViewInit{

  skills:any = [];

  constructor(private infoCardService:InfoCardService) {
    this.skills = infoCardService.getInfoCards();
    
  }


  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      items: 1,
      autoplay: true, // Deslizar automáticamente
      autoplayTimeout: 2000, // Tiempo de espera entre cada slide (en milisegundos)
      autoplayHoverPause: true, // Pausa al pasar el mouse sobre el carrusel
      nav: true, // Desactiva las flechas
      dots: true, // Habilita los puntos de navegación
    

    });
  }
}
