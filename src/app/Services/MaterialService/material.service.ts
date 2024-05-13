import { Injectable } from '@angular/core';
import { Material } from 'src/app/Types/Material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: Material[] = [
  {
    id: 1,
    nome: 'abs',
    disponivel: true,
    cor: 'red',
    preco: 76.60,
    densidade: 1.06
  },
  {
    id: 2,
    nome: 'tritan',
    disponivel: true,
    cor: 'purple',
    preco: 86.60,
    densidade: 2.00
  }
  ]
  constructor() { }
}
