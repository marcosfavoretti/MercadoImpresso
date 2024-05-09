import { Component, OnInit } from '@angular/core';
import { colors } from './colors.list';
import { FileStlHandleService } from '../service/file-stl-handle.service';
import { Router } from '@angular/router';
import { axiosClient } from 'src/axios.client';
import { UploadService } from 'src/app/Services/UploadService/upload-service.service';
import { Modelo3D } from 'src/app/Interfaces/Modelo3d';
import { MaterialService } from 'src/app/Services/MaterialService/material.service';
import { IMaterial } from 'src/app/Objects/IMaterial';
import { NgForm } from '@angular/forms';
import { Customizacoes } from 'src/app/Interfaces/Customizacoes';

@Component({
  selector: 'app-client-custom-forms',
  templateUrl: './client-custom-forms.component.html',
  styleUrls: ['./client-custom-forms.component.css']
})
export class ClientCustomFormsComponent implements OnInit {
  // colors = colors
  sliderValue: any
  file!: any
  sliderLayer: any = 5
  slideInfill: any
  selectColor?: IMaterial
  projeto!: Modelo3D
  materials!: IMaterial[]
  selectedMaterial!: IMaterial
  customizacoes : Customizacoes = {
    camada: 2,
    preenchimento: 5,
    nome: 'default',
    notas: undefined,
    preco: 0,
  }

  constructor(private uploadService: UploadService,
     private file_service: FileStlHandleService,
       private materialService: MaterialService) { }

  onSubmit(customForm: NgForm){
    if(!customForm.valid){
      console.log('formulario nao é valido')
      return
    }
    console.log(customForm)
  }

  getColor(material: IMaterial | undefined){  
    if(!material) return
    return material.color
  }

  async ngOnInit(): Promise<void> {
    this.file_service.makeSubscription().subscribe(
      (newValue) => {
        this.file = newValue
      }
    )
    this.projeto = await this.uploadService.hasProject()
    this.customizacoes = {
      ...this.customizacoes,
      nome : this.projeto.nome
    }
    this.materials = await this.materialService.materials
  }
  
  getMaterial(){
    if(!this.materials.length) return
    return this.materials.map(material=> material.name)
  }

  

  setNewColor(color: any) {
    this.file_service.setCurrentColor(color)
  }
  getFileName() {
    return this.projeto?.nome
  }



}
