import {Component} from '@angular/core';
import {Sidebar} from '../shared/sidebar/sidebar';

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
  styleUrls: ['./main.sass'],
  imports: [
    Sidebar
  ]
})
export class Main {
}
