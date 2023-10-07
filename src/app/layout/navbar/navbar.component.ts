import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isTransparentNavbar: boolean = true;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {

    this.isTransparentNavbar = window.scrollY < 100; 
  }

  ngOnInit() {
    this.isTransparentNavbar = this.router.url === '/';
  }
  get navbarClasses() {
    return {
      'mb-5': this.router.url !== '/'
    };
  }
  

}
