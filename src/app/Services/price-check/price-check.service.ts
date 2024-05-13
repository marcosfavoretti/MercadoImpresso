import { Injectable } from '@angular/core';
import { Customizacoes } from 'src/app/Types/Customizacoes';
import { axiosClient } from 'src/axios.client';

@Injectable({
  providedIn: 'root'
})
export class PriceCheckService {

  constructor() { }

  async checkCurrentPrice(customizacoes: Customizacoes):Promise<number>{
  return (await axiosClient.post('produtopersonalizado/pricecalculator', {
       ...customizacoes
    })).data
  }
}
