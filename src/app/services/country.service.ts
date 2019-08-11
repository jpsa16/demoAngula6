import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Country } from '../models/country';

@Injectable()
export class CountryService {

  countryList: Array<Country> = [];
  selectedCountry: Country = new Country();

  constructor(private firebase: AngularFireDatabase) { }

  getCountries() {
    // La siguiente linea aplica, solo si se persiste en Firebase
    // return this.countryList = this.firebase.list('countries');
    this.countryList.push({"id":1,"codigo":"51", "nombre":"Peru", "expectativaDeVida": 72, "bandera":"none"});
    this.countryList.push({"id":2,"codigo":"53", "nombre":"Argentina", "expectativaDeVida": 81, "bandera":"none"});
    return this.countryList;
  }

  
}
