import { Injectable } from '@angular/core';
import { AxiosResponse } from 'axios';
import { Modelo3D } from 'src/app/Types/Modelo3d';
import { axiosClient } from 'src/axios.client';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
 
  async hasProject(){
    const project: Modelo3D = ( await axiosClient.get('/produtopersonalizado/getProjeto')).data
    return project
  }
}
