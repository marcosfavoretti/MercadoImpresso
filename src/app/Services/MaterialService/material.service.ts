import { Injectable } from '@angular/core';
import { IMaterial } from 'src/app/Objects/IMaterial';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: IMaterial[] = [
    {
      color: 'blue',
      id: '1',
      name: "abs"
    },
    {
      color: 'red',
      id: '2',
      name: "abs"
    },
    {
      color: 'purple',
      id: '3',
      name: "abs"
    },
    {
      color: 'black',
      id: '4',
      name: "abs"
    },
    {
      color: 'white',
      id: '5',
      name: "abs"
    }
  ]
  constructor() { }
}
