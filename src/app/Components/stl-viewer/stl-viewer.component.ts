import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from '@three-ts/orbit-controls'
import { FileStlHandleService } from '../../Services/file-stl-handle/file-stl-handle.service';
import { UploadService } from 'src/app/Services/UploadService/upload-service.service';

@Component({
  selector: 'app-stl-viewer',
  templateUrl: './stl-viewer.component.html',
  styleUrls: ['./stl-viewer.component.css']
})
export class StlViewerComponent implements OnInit, AfterViewInit {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private my_object!: THREE.Mesh;
  private loader = new STLLoader();
  private controls!: OrbitControls; // Declarar variável para os controles da câmera
  animation_controll = {
    isPause: false,
    current_Pause: false
  }
  subscription!: EventEmitter<any>
  file: any
  @ViewChild('rendererContainer') rendererContainer!: ElementRef; // Referência ao contêiner do renderizador

  constructor(private file_service: FileStlHandleService, private uploadService: UploadService) { }

  ngOnInit(): void {
    this.file_service.makeSubscription().subscribe(
      (newValue) => {
        this.file = newValue
      }
    )
    this.file_service.makeColorSubscription().subscribe(
      newColor => {
        this.changeColor(new THREE.Color(`rgb(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b})`))
      }
    )
  }

  ngAfterViewInit(): void {
    this.initializeScene();
  }

  changeColor(color: THREE.Color) {

    if (this.my_object && this.my_object.material) {
      // Verifica se o material é uma instância de THREE.MeshBasicMaterial
      if (this.my_object.material instanceof THREE.MeshBasicMaterial) {
        // Define a nova cor
        (this.my_object.material as THREE.MeshBasicMaterial).color = color.clone();
      } else {
        console.log('O material não é do tipo MeshBasicMaterial.');
      }
    } else {
      console.log('O objeto 3D não está definido.');
    }
  }

  addModelOnScene(geometry: THREE.BufferGeometry, material: THREE.Material) {
    this.my_object = new THREE.Mesh(geometry, material);
    this.my_object.scale.set(0.01, 0.01, 0.01);
    this.scene.add(this.my_object);
    this.animation();
  }
  

  async putDefaultObject() {
    const project = await this.uploadService.hasProject()
    if (!project.remote_url) throw new Error("sem arquivo")
    this.loader.load(project.remote_url, (geometry) => {
      const material = new THREE.MeshNormalMaterial()
      this.addModelOnScene(geometry, material)
    });

  }

  initializeScene() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
    this.camera.position.z = 2;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    if (width < 768) {
      this.renderer.setSize((this.rendererContainer.nativeElement as HTMLElement).offsetWidth, (this.rendererContainer.nativeElement as HTMLElement).offsetWidth);
    }
    else {
      this.renderer.setSize((this.rendererContainer.nativeElement as HTMLElement).offsetWidth, (this.rendererContainer.nativeElement as HTMLElement).offsetHeight);

    }
    this.renderer.setClearColor(0xECECEC); // Definir o fundo como branco
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Suaviza o movimento da câmera
    this.controls.dampingFactor = 0.25; // Configura a taxa de suavização
    this.putDefaultObject()
    //Iniciar a animação
  }

  animation() {
    if (!this.animation_controll.current_Pause && !this.animation_controll.isPause) {
      this.my_object.rotation.y += 0.01
    }
    requestAnimationFrame(() => this.animation());
    this.controls.update(); // Atualiza os controles da câmera
    this.renderer.render(this.scene, this.camera);
  }

  Setpause() {
    this.animation_controll.current_Pause = !this.animation_controll.current_Pause
  }

  setGlobalPause() {
    this.animation_controll.isPause = !this.animation_controll.isPause
  }

  removeFile() {
    this.file = undefined
    this.scene.remove(this.my_object)
    this.file_service.setCurrentFile(undefined)
    this.putDefaultObject()
  }

  onUpload(event: any) {
    const file = event.files[0];
    if (file) {
      this.file_service.setCurrentFile(file)

    }
  }
}
