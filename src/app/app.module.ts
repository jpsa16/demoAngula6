import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// components
import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/clients/client/client.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { AnalyzeClientsComponent } from './components/analyze-clients/analyze-clients.component';


// service
import { ClientService } from './services/client.service';
import { CountryService } from './services/country.service';


// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,
    ClientListComponent,
    AnalyzeClientsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    //ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ClientService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
