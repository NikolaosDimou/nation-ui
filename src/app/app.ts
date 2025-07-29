import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CountryDetailsComponent], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nation-ui');
}
