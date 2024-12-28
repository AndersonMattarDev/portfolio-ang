import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleNavbar() {
    const body = document.body;
    if (body.classList.contains('navbar-expanded')) {
      body.classList.remove('navbar-expanded');
    } else {
      body.classList.add('navbar-expanded');
    }
  }
}
