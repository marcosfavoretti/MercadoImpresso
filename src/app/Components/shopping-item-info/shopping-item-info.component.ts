import { Component, OnInit } from '@angular/core';
import { products } from '../shopping-page/products';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/Services/MaterialService/material.service';
import { Product } from 'src/app/Types/Product';
import { Material } from 'src/app/Types/Material';

@Component({
  selector: 'app-shopping-item-info',
  templateUrl: './shopping-item-info.component.html',
  styleUrls: ['./shopping-item-info.component.css']
})
export class ShoppingItemInfoComponent implements OnInit {
  products: Product[] = products
  currentItem !: Product //aqui tem q ter um subscribe para mudar o item smp
  currentMaterial!: Material
  constructor(private router: ActivatedRoute,private material: MaterialService){}
  enable_material = this.material.materials
  rating = 0
  setMaterial(material: Material){
    this.currentMaterial = material
  }
  ngOnInit(): void {
  const param = this.router.snapshot.paramMap.get('item')
  if(!param) throw new Error('produto nao achado')
  const item = products.find(product => product.id === +param)
  if(!item) throw new Error('produto nao achado')
  this.currentItem = item
}
  


}
