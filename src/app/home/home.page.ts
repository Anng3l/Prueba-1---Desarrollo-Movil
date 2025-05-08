import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContentService } from "../services/contenido.service";

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgFor],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  nombre = '';
  apellido ="";
  username = "";
  correo = "";
  rol = "";
  genero = "";
  edad = 0;
  pais = "";
  mensaje = "";
  postre = "";
  fechaDeNacimiento="";



  constructor(private envioService: ContentService) {}

  sendContent() {
    if (this.nombre.trim() !== '') {
      this.envioService.sendContent(this.nombre, this.apellido, this.username, this.correo, this.rol, this.genero, this.edad, this.pais, this.mensaje, this.postre, this.fechaDeNacimiento);
    }
  }
}