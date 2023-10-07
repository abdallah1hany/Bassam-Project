import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';



@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    LucideAngularModule
  ],
  exports: [
    LayoutComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
