import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  agregar: boolean = false;
  listaVisible: boolean = true;
  listaAnalisisVisible: boolean = false;
  constructor() { }

  ngOnInit() {
    this.setModoLista();
  }

  setModoAgregar() {
    this.agregar = true;
    this.listaVisible = false;
    this.listaAnalisisVisible = false;
  }

  setModoAnalisis() {
    this.agregar = false;
    this.listaVisible = false;
    this.listaAnalisisVisible = true;
  }

  setModoLista() {
    this.agregar = false;
    this.listaVisible = true;
    this.listaAnalisisVisible = false;
  }


}
