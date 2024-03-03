import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from '@three-ts/orbit-controls'

@Component({
  selector: 'app-stl-viewer',
  templateUrl: './stl-viewer.component.html',
  styleUrls: ['./stl-viewer.component.css']
})
export class StlViewerComponent implements OnInit, AfterViewInit {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  square!: THREE.Mesh;
  loader = new STLLoader();
  controls!: OrbitControls; // Declarar variável para os controles da câmera

  @ViewChild('rendererContainer') rendererContainer!: ElementRef; // Referência ao contêiner do renderizador

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
  this.camera.position.z = 10;

  // Inicializar o renderizador WebGL
  this.renderer = new THREE.WebGLRenderer({ antialias: true });
  this.renderer.setSize(width, height);
  this.renderer.setClearColor(0xffffff); // Definir o fundo como branco
  this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

  // Inicializar os controles da câmera (OrbitControls)
  this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  this.controls.enableDamping = true; // Suaviza o movimento da câmera
  this.controls.dampingFactor = 0.25; // Configura a taxa de suavização

  // Inicializar o objeto padrão (quadrado)
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshNormalMaterial();
  this.square = new THREE.Mesh(geometry, material);
  this.scene.add(this.square);

  // Iniciar a animação
  this.animation();
}

  animation() {
    requestAnimationFrame(() => this.animation());
    this.controls.update(); // Atualiza os controles da câmera
    this.renderer.render(this.scene, this.camera);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.loader.load(URL.createObjectURL(file), (geometry) => {
        const material = new THREE.MeshNormalMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(0.01, 0.01, 0.01);
        this.scene.add(mesh);
        this.scene.remove(this.square);
      });
    }
  }
}
