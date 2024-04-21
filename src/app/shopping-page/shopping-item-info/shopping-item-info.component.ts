import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Objects/IProduct';
import { MaterialService } from 'src/app/Services/MaterialService/material.service';
import { IMaterial } from 'src/app/Objects/IMaterial';

@Component({
  selector: 'app-shopping-item-info',
  templateUrl: './shopping-item-info.component.html',
  styleUrls: ['./shopping-item-info.component.css']
})
export class ShoppingItemInfoComponent implements OnInit {
  products: IProduct[] = products
  currentItem !: IProduct //aqui tem q ter um subscribe para mudar o item smp
  currentMaterial!: IMaterial
  constructor(private router: ActivatedRoute,private material: MaterialService){}
  enable_material = this.material.materials
  rating = 0
  setMaterial(material: IMaterial){
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
