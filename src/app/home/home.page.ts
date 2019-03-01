import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
    effect: 'flip',
    height: '450px'
  };
  slideElements = [
    'slide1', 'slide2', 'slide3'
  ];
  constructor() {

  }
  ngOnInit() {
    this.slides.startAutoplay();
  }

}
