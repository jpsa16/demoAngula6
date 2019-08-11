import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Services 
import { ClientService } from '../../../services/client.service';
import { CountryService } from '../../../services/country.service';

// Class
import { Client } from '../../../models/client';
import { Country } from 'src/app/models/country';

// toastr
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  paisesList: Array<Country> = [];
  country: any;
  selectedPais: Country = null;

  constructor(
    private clientService: ClientService,
    private countryService: CountryService,
     //private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.clientService.getClients();
    this.paisesList = this.countryService.getCountries();
    this.resetForm();
    
  }

  onSubmit(clientForm: NgForm) {
    
    if(clientForm.value.$key == null){
      if (this.validacion(clientForm)){
        this.datosAdicionales(clientForm);
        this.clientService.insertClient(clientForm.value);
        this.resetForm(clientForm);
      } else{
        alert("todos los datos son obligatorios");
      }        
    }
    else if (this.validacion(clientForm)){
      if (this.validacion(clientForm)){
        this.datosAdicionales(clientForm);
        this.clientService.updateClient(clientForm.value);
        this.resetForm(clientForm);
      } else {
        alert("todos los datos son obligatorios");
      }
    }
    //this.toastr.success('Sucessful Operation', 'Client Registered');
  }

  resetForm(clientForm?: NgForm)
  {
    if(clientForm != null)
      clientForm.reset();
      this.clientService.selectedClient = new Client();
  }

  validacion (clientForm: NgForm): boolean {
    let valido: boolean = true;
    //clientForm.value.paisId = this.selectedPais.id;
    console.log(clientForm.value);
    if (clientForm.value.nombre == null){
      valido = false;
    }
    if (clientForm.value.apellido == null){
      valido = false;
    }
    if (clientForm.value.edad == null){
      valido = false;
    }
    if (clientForm.value.fechaNacimiento == null){
      valido = false;
    }
    if (clientForm.value.pais == null){
      valido = false;
    }

    return valido;
  }

  datosAdicionales(clientForm: NgForm){
    clientForm.value.paisId = this.selectedPais.id;
    clientForm.value.expectativaDeVida = this.selectedPais.expectativaDeVida;
  }
}
