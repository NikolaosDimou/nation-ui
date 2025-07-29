import { Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryLanguagesComponent } from './features/countries/languages/languages.component';
import { CountryListComponent } from './features/countries/list/list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' }, // redirect default
  { path: 'countries', component: CountryListComponent },
  { path: 'countries/:id/languages', component: CountryLanguagesComponent },
  { path: 'details', component: CountryDetailsComponent } // optional fallback
];
