import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any;

  constructor() {}

  ngOnInit() {
    const usuarioString = localStorage.getItem("usuario");
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString);
    }
  }
}