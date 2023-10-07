import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DocumentsComponent } from './documents/documents.component';




@NgModule({
  declarations: [

  
  
    
  ],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule,

  ]
})
export class PagesModule { }
