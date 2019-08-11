import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Client } from '../models/client';

@Injectable()
export class ClientService {

  clientList: AngularFireList<any>;
  selectedClient: Client = new Client();

  constructor(private firebase: AngularFireDatabase) { }

  getClients() {
    return this.clientList = this.firebase.list('clients');
  }

  insertClient(client: Client) {
    this.clientList.push({
      nombre: client.nombre,
      apellido: client.apellido,
      edad: client.edad,
      fechaNacimiento: client.fechaNacimiento,
      paisId: client.paisId,
      expectativaDeVida: client.expectativaDeVida
    });
  }

  updateClient(client: Client) {
    this.clientList.update(client.$key, {
      nombre: client.nombre,
      apellido: client.apellido,
      edad: client.edad,
      fechaNacimiento: client.fechaNacimiento,
      paisId: client.paisId,
      expectativaDeVida: client.expectativaDeVida
    });
  }

  deleteClient($key: string) {
    this.clientList.remove($key);
  }
}
