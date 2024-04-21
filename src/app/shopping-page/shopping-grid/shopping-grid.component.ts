import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProduct } from 'src/app/Objects/IProduct';
import { MaterialService } from 'src/app/Services/MaterialService/material.service';

@Component({
  selector: 'app-shopping-grid',
  templateUrl: './shopping-grid.component.html',
  styleUrls: ['./shopping-grid.component.css']
})
export class ShoppingGridComponent implements OnInit{
  constructor(private material: MaterialService) {}
  enable_material = this.material.materials
  products: IProduct[] = products

  ngOnInit(): void {
    console.log(this.enable_material)
  }
}
