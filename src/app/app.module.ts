import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { GraphicPrecioAppleComponent } from './graphic-precio-apple/graphic-precio-apple.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {GraphicPrecioSolanaComponent} from "./graphic-precio-solana/graphic-precio-solana.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GraphicPrecioAppleComponent,
    GraphicPrecioSolanaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
