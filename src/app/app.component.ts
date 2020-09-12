import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "portfolio";
  menuBtn: any;
  menu: any;
  menuNav: any;
  menuBranding: any;
  navItems: any;
  showMenu: any;
  isHome = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.menuBtn = document.querySelector(".menu-btn");
    this.menu = document.querySelector(".menu");
    this.menuNav = document.querySelector(".menu-nav");
    this.menuBranding = document.querySelector(".menu-branding");
    this.navItems = document.querySelectorAll(".nav-item");
    this.showMenu = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== "/") {
          this.removeMenuItems();
          this.isHome = false;
        } else {
          this.isHome = true;
        }
      }
    });
  }

  toggleMenu() {
    if (!this.showMenu) {
      this.showMenuItems();
    } else {
      this.removeMenuItems();
    }
  }

  showMenuItems() {
    const currentUrl = this.router.url.split("/")[1];
    this.activatedRoute.snapshot.url;
    this.menuBtn.classList.add("close");
    this.menu.classList.add("show");
    this.menuNav.classList.add("show");
    this.menuBranding.classList.add("show");
    this.navItems.forEach((item) => {
      item.classList.add("show");
      if (item.childNodes[0].id === currentUrl) {
        item.classList.add("current");
      } else {
        item.classList.remove("current");
      }
    });
    this.showMenu = true;
  }

  removeMenuItems() {
    this.menuBtn.classList.remove("close");
    this.menu.classList.remove("show");
    this.menuNav.classList.remove("show");
    this.menuBranding.classList.remove("show");
    this.navItems.forEach((item) => item.classList.remove("show"));
    this.showMenu = false;
  }

  menuItemClicked(event) {
    this.removeMenuItems();
  }
}
