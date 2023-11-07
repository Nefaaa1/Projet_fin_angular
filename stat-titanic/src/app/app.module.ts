import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';



import { AppComponent } from './app.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { SearchComponent } from './search/search.component';

const titanicRoute: Routes = [
  { path: '', component: ConnexionPageComponent },
  { path: 'passengers', component: SearchComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ConnexionPageComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(titanicRoute),
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
