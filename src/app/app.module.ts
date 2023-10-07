import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LucideAngularModule, File, Home, Menu, UserCheck,Facebook ,Twitter,Linkedin} from 'lucide-angular';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    LeafletModule,
    LucideAngularModule.pick({File, Home, Menu, UserCheck,Facebook, Twitter ,Linkedin})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
