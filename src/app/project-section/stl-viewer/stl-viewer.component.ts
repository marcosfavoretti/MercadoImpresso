import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from '@three-ts/orbit-controls'
import { FileStlHandleService } from '../service/file-stl-handle.service';

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
  controls!: OrbitControls; // Declarar variável para os controles da câmera
  animation_controll = {
    isPause: false,
    current_Pause: false
  }
  file: any
  @ViewChild('rendererContainer') rendererContainer!: ElementRef; // Referência ao contêiner do renderizador

  constructor(private file_service : FileStlHandleService){}


  ngAfterViewInit(): void {
    this.initializeScene();
  }
  ngOnInit(): void {
    console.log('go')
  }
  initializeScene() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Inicializar a cena
    this.scene = new THREE.Scene();

    // Inicializar a câmera
    this.camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
    this.camera.position.z = 2;

    // Inicializar o renderizador WebGL
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width / 2, height / 2);
    // this.renderer.setClearColor(0xffffff); // Definir o fundo como branco
    this.renderer.setClearColor(0x000000); // Definir o fundo como branco

    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Inicializar os controles da câmera (OrbitControls)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Suaviza o movimento da câmera
    this.controls.dampingFactor = 0.25; // Configura a taxa de suavização

    // Inicializar o objeto padrão (quadrado)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    this.my_object = new THREE.Mesh(geometry, material);
    this.scene.add(this.my_object);

    // Iniciar a animação
    this.animation();
  }

  animation() {
    if (!this.animation_controll.current_Pause && !this.animation_controll.isPause) {
      // this.my_object.rotation.x += 0.01
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

  onUpload(event: any) {
    console.log(event)
    const file = event.files[0];
    console.log(file)
    if (file) {
      this.file_service.setCurrentFile(file) 
      this.file = file
      this.loader.load(URL.createObjectURL(file), (geometry) => {
        // const material = new THREE.MeshBasicMaterial(); // vermelho
        const material = new THREE.MeshNormalMaterial
        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.01, 0.01, 0.01);
        this.scene.remove(this.my_object);
        this.scene.add(mesh);
        this.my_object = mesh
        this.animation()
      });
    }
  }
}
