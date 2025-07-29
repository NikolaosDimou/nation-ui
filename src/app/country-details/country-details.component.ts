import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../core/services/country.service';
import { Language } from '../core/models/language.model';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  languages: Language[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getLanguages(1).subscribe({
      next: (data) => this.languages = data,
      error: (err) => console.error('Failed to load languages', err)
    });
  }
}
