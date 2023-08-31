import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  constructor(private elementRef: ElementRef) {}
  showDiv: boolean = false;

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  ngAfterViewInit() {
    const video = this.elementRef.nativeElement.querySelector('#background-video');

    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.playbackRate = 1;
  }
}