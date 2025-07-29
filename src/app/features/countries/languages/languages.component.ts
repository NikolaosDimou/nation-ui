import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class CountryLanguagesComponent implements OnInit {
  countryId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.countryId = +this.route.snapshot.paramMap.get('id')!;
    // load languages for countryId
  }
}
