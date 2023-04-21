import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialComponent } from './material/material.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './pages/pages.component';
import { MaterialModule } from './material/material.component.spec';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ServiceboxComponent } from './home/servicebox/servicebox.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MaterialComponent,
    ServicesComponent,
    PagesComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    FeedbackComponent,
    ServiceboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
