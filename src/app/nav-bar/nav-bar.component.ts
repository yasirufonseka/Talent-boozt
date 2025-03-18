import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  
  navbarImage:string = "assets/top-b.png";

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
