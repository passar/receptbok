import { Component } from '@angular/core';

@Component({  // återanvänbara komponenter
  selector: 'app-root', // denna skriver till index.html. Främst aktiv i adressraden.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
}
