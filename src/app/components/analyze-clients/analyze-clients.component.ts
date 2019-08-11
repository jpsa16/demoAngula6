import { Component, OnInit } from '@angular/core';

// model
import { Client } from '../../models/client';

// service
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-analyze-clients',
  templateUrl: './analyze-clients.component.html',
  styleUrls: ['./analyze-clients.component.css']
})
export class AnalyzeClientsComponent implements OnInit {
  clientList: Client[];
  cliente: any;


  constructor(private clientService: ClientService) {    
   }

  ngOnInit() {
    return this.clientService.getClients()
      .snapshotChanges().subscribe(item => {
        this.clientList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;          
          this.cliente = x;
          //calcular probable fecha de muerte
          let deadYear = this.getYearOf (new Date()) + (this.cliente.expectativaDeVida - this.cliente.edad);
          let fechaDesde = new Date(deadYear+"-01-01");
          let fechaHasta = new Date(deadYear+"-12-01");
          let deadDate = this.getRandomDate(fechaDesde,fechaHasta);
          this.cliente.probableFechaMuerte = deadDate;
          this.clientList.push(this.cliente);
        });
      });
     
  }

  getYearOf(fecha : Date) {
    var d = new Date(fecha);
    return d.getFullYear();     
  }

  getRandomDate(desde:Date, hasta: Date){
    return new Date(desde.getTime() + Math.random() * (hasta.getTime() - desde.getTime()));
  }

}
