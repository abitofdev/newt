import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'newt';

  constructor() {
    document.addEventListener('contextmenu', (event) => event.preventDefault());
  }

  ngOnInit() {
  }
}
