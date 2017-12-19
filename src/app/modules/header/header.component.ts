import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bla() {
    console.log('clicked inside!');
  }

  onClickedOutside(e) {
   console.log('clicked outside!');
  }
}
