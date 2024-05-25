import { Component, OnInit, ViewChild } from '@angular/core';
import { colors } from './colors.list';
import { FileStlHandleService } from '../../Services/file-stl-handle/file-stl-handle.service';
import { UploadService } from 'src/app/Services/UploadService/upload-service.service';
import { Modelo3D } from 'src/app/Types/Modelo3d';
import { MaterialService } from 'src/app/Services/MaterialService/material.service';
import { NgForm } from '@angular/forms';
import { Customizacoes } from 'src/app/Types/Customizacoes';
import { Material } from 'src/app/Types/Material';
import { PriceCheckService } from 'src/app/Services/price-check/price-check.service';
import { ModalWarningComponent } from '../modal-warning/modal-warning.component';

@Component({
  selector: 'app-client-custom-forms',
  templateUrl: './client-custom-forms.component.html',
  styleUrls: ['./client-custom-forms.component.css']
})
export class ClientCustomFormsComponent implements OnInit {
  // colors = colors
  @ViewChild('warningModal') modal !: ModalWarningComponent
  
  file!: any
  selectColor?: Material
  projeto!: Modelo3D
  materials!: Material[]
  customizacoes: Customizacoes = {
    camada: 1,
    preenchimento: 5,
    nome: 'default',
    preco: 0,
  }
  isCalculating: boolean = false

  constructor(private uploadService: UploadService,
    private file_service: FileStlHandleService,
    private materialService: MaterialService,
    private pricechecker: PriceCheckService) { }

 

  async someChange(forms: NgForm){
    if(!forms.controls['material'].value){
      this.modal.open()
      return
    }
    this.isCalculating = true
    const newPrice = await this.pricechecker.checkCurrentPrice({
      camada : forms?.controls['slider-layer'].value,
      nome : forms.controls['nome'].value,
      preenchimento : forms.controls['preenchimento'].value,
      material: forms.controls['material'].value,
      preco: this.customizacoes.preco
    })
    console.log(newPrice)
    this.isCalculating = false
    this.customizacoes.preco = newPrice  
  }


  getColor(material: Material | undefined) {
    if (!material) return
    return material.cor
  }
  getMaterialNome(material: Material | undefined){
    if (!material) return
    return material.nome
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
      nome: this.projeto.nome
    }
    this.materials = await this.materialService.materials
  }

  getMaterial() {
    if (!this.materials.length) return
    return this.materials.map(material => material.nome)
  }



  setNewColor(color: any) {
    this.file_service.setCurrentColor(color)
  }
  getFileName() {
    return this.projeto?.nome
  }



}
