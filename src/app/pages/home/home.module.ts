import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Home1Component } from './homepage/home1.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { WorksComponent } from './components/works/works.component';
import { HeroComponent } from './components/hero/hero.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';



@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ServicesComponent,
    WorksComponent,
    Home1Component,
    HeroComponent,
    
  ],
  imports: [CommonModule, HomeRoutingModule ,LeafletModule ,NgOptimizedImage ,NgbCarouselModule, NgIf],
})
export class HomeModule {}
