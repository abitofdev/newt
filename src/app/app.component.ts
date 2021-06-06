import { Component, OnInit } from '@angular/core';
import { NativeBridgeService } from './modules/global/native-bridge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'newt';

  constructor(private readonly bridge: NativeBridgeService) {
    document.addEventListener('contextmenu', (event) => event.preventDefault());
  }

  ngOnInit() {
    console.time('get files');
    this.bridge.readDir('../').then((dirContents) => {
      console.timeEnd('get files');
      console.log(dirContents.map((d) => d.name));
    });
  }
}
