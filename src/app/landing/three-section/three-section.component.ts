import {
  Component,
  AfterViewInit,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// @ts-ignore
import Threeasy from 'threeasy';

@Component({
  selector: 'app-three-section',
  templateUrl: './three-section.component.html',
  styleUrls: ['./three-section.component.scss'],
})
export class ThreeSectionComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @ViewChild('wrapper', { static: true }) wrapper!: ElementRef;

  ngAfterViewInit(): void {
    if (this.wrapper.nativeElement.offsetWidth < 512) {
      this.loadSmallCar();
    } else {
      this.loadBigCar();
    }
  }
  loadSmallCar() {
    const app = new Threeasy(THREE, { alpha: true });

    var loader = new GLTFLoader();

    let modelUrl = '../../../assets/3d/scene.gltf';

    loader.load(
      modelUrl,
      function (gltf: any) {
        console.log(gltf.scene);
        gltf.scene.scale.x = 0.1;
        gltf.scene.scale.y = 0.1;
        gltf.scene.scale.z = 0.1;

        gltf.scene.rotation.x = 0;
        gltf.scene.rotation.y = 0;
        gltf.scene.rotation.z = 60;

        app.scene.add(gltf.scene);

        window.addEventListener('scroll', onScroll);

        function onScroll() {
          const scrollY = window.scrollY;
          const rotationSpeed = 0.003;
          gltf.scene.rotation.x = scrollY * rotationSpeed;
          gltf.scene.rotation.y = scrollY * rotationSpeed;
        }
      },
      undefined,
      function (e: any) {
        console.error(e);
      }
    );

    const light = new THREE.AmbientLight(0xffffff); // soft white light
    light.intensity = 2;

    app.scene.add(light);
  }
  loadBigCar() {
    const app = new Threeasy(THREE, { alpha: true });

    var loader = new GLTFLoader();

    let modelUrl = '../../../assets/3d/scene.gltf';

    loader.load(
      modelUrl,
      function (gltf: any) {
        console.log(gltf.scene);
        gltf.scene.scale.x = 0.14;
        gltf.scene.scale.y = 0.14;
        gltf.scene.scale.z = 0.14;

        gltf.scene.rotation.x = 0;
        gltf.scene.rotation.y = 0;
        gltf.scene.rotation.z = 60;

        app.scene.add(gltf.scene);

        window.addEventListener('scroll', onScroll);

        function onScroll() {
          const scrollY = window.scrollY;
          const rotationSpeed = 0.003;
          gltf.scene.rotation.x = scrollY * rotationSpeed;
          gltf.scene.rotation.y = scrollY * rotationSpeed;
        }
      },
      undefined,
      function (e: any) {
        console.error(e);
      }
    );

    const light = new THREE.AmbientLight(0xffffff); // soft white light
    light.intensity = 2;

    app.scene.add(light);
  }
}
