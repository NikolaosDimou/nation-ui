import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';
import { Language } from '../models/language.model';
import { CountryMaxRatio } from '../models/ratio.model';
import { CountryStatsRow } from '../models/stats-row.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private api: ApiService) {}

  getCountries(): Observable<Country[]> {
    return this.api.get<Country[]>('/countries');
  }

  getLanguages(countryId: number): Observable<Language[]> {
    return this.api.get<Language[]>(`/countries/${countryId}/languages`);
  }

  getMaxRatios(): Observable<CountryMaxRatio[]> {
    return this.api.get<CountryMaxRatio[]>('/countries/max-gdp-per-pop');
  }

  searchStats(regionId?: number, dateFrom?: number, dateTo?: number, page = 0, size = 20): Observable<CountryStatsRow[]> {
    const params: any = { page, size };
    if (regionId != null) params.regionId = regionId;
    if (dateFrom != null) params.dateFrom = dateFrom;
    if (dateTo != null) params.dateTo = dateTo;
    return this.api.get<CountryStatsRow[]>('/stats', params);
  }
}
