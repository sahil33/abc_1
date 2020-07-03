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


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { baseURL } from './shared/baseurl';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
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
