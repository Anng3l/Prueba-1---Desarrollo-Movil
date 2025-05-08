import { Injectable } from '@angular/core';

import { Firestore, collection, addDoc } from "@angular/fire/firestore"; 


//Servicio
export interface Contenido {
  nombre:string;
  apellido:string,
  username:string,
  correo:string,
  rol:string,
  genero:string,
  edad:number,
  pais:string,
  mensaje:string,
  postre:string,
  fechaDeNacimiento:string

  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  constructor(private firestore:Firestore) { 

  }
  //Contenido a enviar
  sendContent(
    nombre:string,
    apellido:string,
    username:string,
    correo:string,
    rol:string,
    genero:string,
    edad:number,
    pais:string,
    mensaje:string,
    postre:string,
    fechaDeNacimiento:string) 
  {
    const messagesRef=collection(this.firestore, "Prueba Angel Maldonado")
    const message:Contenido={
      nombre,
      apellido,
      username,
      correo,
      rol,
      genero,
      edad,
      pais,
      mensaje,
      postre,
      fechaDeNacimiento,
      createdAt:Date.now()
    }
    
    return addDoc(messagesRef, message)
  }
}
