import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 import { AppRoutingModule } from './app-routing.module';
 import { HttpClientModule } from '@angular/common/http';
 import {ChartsModule} from 'ng2-charts';
 import {MatButtonModule} from '@angular/material/button';
 import { MatToolbarModule } from '@angular/material/toolbar'; 
 import {MatIconModule} from '@angular/material/icon';
 import { FlexLayoutModule } from '@angular/flex-layout';
 import {MatListModule } from '@angular/material/list';
 import {MatCardModule} from '@angular/material/card';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatTableModule} from '@angular/material/table';
 import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { baseURL } from './shared/baseurl';
import { Solar1Component } from './solar1/solar1.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    Solar1Component
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MDBBootstrapModule,
    MatCardModule,
    ChartsModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [ {provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
