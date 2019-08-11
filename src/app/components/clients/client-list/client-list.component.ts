import { Component, OnInit } from '@angular/core';

// model
import { Client } from '../../../models/client';

// service
import { ClientService } from '../../../services/client.service';

// toastr
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientList: Client[];
  promedioEdades: number = 0;
  edades: number = 0
  contador: number = 0;
  cliente: any;
  dividendo: number = 0;
  desviacionEstandar: number = 0;

  constructor(
    private clientService: ClientService,
    //private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.clientService.getClients()
      .snapshotChanges().subscribe(item => {
        this.clientList = [];
        item.forEach(element => {
          this.contador++;
          let x = element.payload.toJSON();
          x["$key"] = element.key;          
          this.cliente = x;
          this.edades = this.edades + parseInt(this.cliente.edad);
          this.clientList.push(this.cliente);
        });
        this.promedioEdades = this.edades/this.contador;
        
        // console.log("EDADES: " + this.edades);
        // console.log("CONTADOR: " + this.contador);
        // console.log("promedioEdades: " + this.promedioEdades);

        this.clientList.forEach(cliente => {
          this.dividendo = this.dividendo + Math.pow(parseInt(cliente.edad) - this.promedioEdades , 2);
        });
        this.desviacionEstandar = Math.sqrt(this.dividendo/(this.contador-1));
        console.log("dividendo: " + this.dividendo);
        console.log("CONTADOR: " + this.contador);
        this.contador = 0;
        this.edades = 0;
        this.dividendo = 0;
      });      
  }

  onEdit(client: Client) {
    this.clientService.selectedClient = Object.assign({}, client);
  }

  onDelete($key: string) {
    if(confirm('Are you sure you want to delete it?')) {
      this.clientService.deleteClient($key);
      //this.toastr.warning('Deleted Successfully', 'Client Removed');
    }
  }

}
