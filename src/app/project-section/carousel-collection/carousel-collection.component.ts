import { Component, OnInit } from '@angular/core';
import { CarouselResponsiveOptions, CarouselTemplates, Carousel } from 'primeng/carousel';
import { TagTemplates } from 'primeng/tag';
import { IProduct } from 'src/app/Objects/IProduct';
import { MaterialService } from 'src/app/Services/MaterialService/material.service';

@Component({
  selector: 'app-carousel-collection',
  templateUrl: './carousel-collection.component.html',
  styleUrls: ['./carousel-collection.component.css']
})
export class CarouselCollectionComponent implements OnInit {
  constructor(private material: MaterialService) {
    Carousel.prototype.onTouchMove = () => {

    }
  }
  enable_material = this.material.materials
  carouselOptions: CarouselResponsiveOptions[] = [

    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 1
    },
  ];

  ngOnInit(): void {
    console.log(window.innerWidth)
  }
  products: IProduct[] = [
    {
      name: '1',
      image: '../../../assets/product-default.png',
      price: '10.00',
      collection: 'sci-fy',
    },
    {
      name: '2',

      image: '../../../assets/product-default.png',
      price: '10.00',
      collection: 'sci-fy',
    },
    {
      name: '3',

      image: '../../../assets/product-default.png',
      price: '10.00',
      collection: 'sci-fy',
    },
    {
      name: '4',

      image: '../../../assets/product-default.png',
      price: '10.00',
      collection: 'sci-fy',
    },
    {
      name: '5',

      image: '../../../assets/product-default.png',
      price: '10.00',
      collection: 'sci-fy',
    },
    {
      name: '6',

      image: '../../../assets/product-default.png',
      price: '10.00',
      collection: 'sci-fy',
    }, {
      name: '7',

      image: '../../../assets/product-default.png',
      price: '10.00',
      collection: 'sci-fy',
    }, {
      name: '8',

      image: '../../../assets/product-default.png',
      price: '10.00',
      collection: 'sci-fy',
    },
  ]
}
