import { Component, OnInit } from '@angular/core';
import { CarouselResponsiveOptions, CarouselTemplates, Carousel } from 'primeng/carousel';
import { TagTemplates } from 'primeng/tag';
import { MaterialService } from 'src/app/Services/MaterialService/material.service';
import { Product } from 'src/app/Types/Product';
import { products } from 'src/app/Components/shopping-page/products';

@Component({
  selector: 'app-carousel-collection',
  templateUrl: './carousel-collection.component.html',
  styleUrls: ['./carousel-collection.component.css']
})
export class CarouselCollectionComponent{
  constructor(private material: MaterialService) {
    Carousel.prototype.onTouchMove = () => {

    }
  }
  hover: { id: number | undefined } = {
    id: undefined
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
  products: Product[] = products
}
