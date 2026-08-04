import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [
    TranslatePipe
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.sass',
})
export class Navbar {}
