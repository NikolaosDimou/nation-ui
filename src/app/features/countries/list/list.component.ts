import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../core/services/country.service';
import { Router } from '@angular/router';
import { Country } from '../../../core/models/country.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];
  loading = true;

  constructor(
    private countryService: CountryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe({
      next: (data: Country[]) => {
        this.countries = data;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Failed to load countries', err);
        this.loading = false;
      }
    });
  }

  goToLanguages(countryId: number): void {
    this.router.navigate(['/countries', countryId, 'languages']);
  }
}
