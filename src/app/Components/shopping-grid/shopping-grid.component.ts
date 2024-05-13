import { Component, OnInit } from '@angular/core';
import { products } from '../shopping-page/products';
import { MaterialService } from 'src/app/Services/MaterialService/material.service';
import { Product } from 'src/app/Types/Product';

@Component({
  selector: 'app-shopping-grid',
  templateUrl: './shopping-grid.component.html',
  styleUrls: ['./shopping-grid.component.css']
})
export class ShoppingGridComponent implements OnInit {
  constructor(private material: MaterialService) { }
  enable_material = this.material.materials
  products: Product[] = products
  hover: { id: number | undefined } = {
    id: undefined
  }

  ngOnInit(): void {
    console.log(this.enable_material)
  }

}
