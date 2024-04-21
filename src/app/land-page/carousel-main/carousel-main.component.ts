import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Carousel, CarouselResponsiveOptions } from 'primeng/carousel';
import { ICarousel } from 'src/app/Objects/ICarousel';

@Component({
  selector: 'app-carousel-main',
  templateUrl: './carousel-main.component.html',
  styleUrls: ['./carousel-main.component.css']
})
export class CarouselMainComponent {
  constructor() {
    Carousel.prototype.onTouchMove = () => {

    }
  }
  item: ICarousel[] = [
    {
      image: '../../../assets/land-page/item.png',
      desc: "Preço & Qualidade",
      uptittles: "conheça nossos produtos"
    },
  ]
  carouselOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: "Exp",
      numScroll: 2,
      numVisible: 2
    }
  ]
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
