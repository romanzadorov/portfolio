import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() menuClicked = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  menuItemClicked(event) {
    this.menuClicked.emit(event.target.id);
  }

}
