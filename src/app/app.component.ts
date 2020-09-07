import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  menuBtn: any;
  menu: any;
  menuNav: any;
  menuBranding: any;
  navItems: any;
  showMenu: any;

  ngOnInit(){
    this.menuBtn = document.querySelector('.menu-btn');
    this.menu = document.querySelector('.menu');
    this.menuNav = document.querySelector('.menu-nav');
    this.menuBranding = document.querySelector('.menu-branding');
    this.navItems = document.querySelectorAll('.nav-item');
    this.showMenu = false;
  }

  

  toggleMenu() {
    if (!this.showMenu) {
      this.menuBtn.classList.add('close');
      this.menu.classList.add('show');
      this.menuNav.classList.add('show');
      this.menuBranding.classList.add('show');
      this.navItems.forEach(item => item.classList.add('show'));
      this.showMenu = true;
    } else {
      this.menuBtn.classList.remove('close');
      this.menu.classList.remove('show');
      this.menuNav.classList.remove('show');
      this.menuBranding.classList.remove('show');
      this.navItems.forEach(item => item.classList.remove('show'));
      this.showMenu = false;
    }
  }
}
