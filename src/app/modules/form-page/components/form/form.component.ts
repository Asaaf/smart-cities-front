import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city/city';
import { Country } from 'src/app/models/country/country';
import { Province } from 'src/app/models/province/province';
import { CityService } from 'src/app/services/city/city.service';
import { CountryService } from 'src/app/services/country/country.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import { TouristService } from 'src/app/services/tourist/tourist.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  step: number = 1;
  showCountriesList: boolean = false;
  showProvincesList: boolean = false;
  showCitiesList: boolean = false;
  countriesList: any;
  provincesList: any;
  citiesList: any;
  countrySelected: Country = new Country();
  provinceSelected: Province = new Province();
  citySelected: City = new City();

  constructor(
    private countryService: CountryService,
    private cityService: CityService,
    private provinceService: ProvinceService,
    private touristService: TouristService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries()?.subscribe(
      resp => {
        this.countriesList = resp;
      },
      error => {
        console.log(error);
      }
    );
  }

  getProvinces(countryId: number) {
    this.provinceService.getProvince(countryId)?.subscribe(
      resp => {
        this.provincesList = resp.provinces;
      },
      error => {
        console.log(error);
      }
    );
  }

  getCities(provinceId: number) {
    this.cityService.getCities(provinceId)?.subscribe(
      resp => {
        this.citiesList = resp.cities;
      },
      error => {
        console.log(error);
      }
    )
  }

  getTourist(email: string) {
    this.touristService.getTourist(email)?.subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

  nextStep(step: number) {
    this.step = step;
  }

  showCountries() {
    this.showCountriesList = !this.showCountriesList;
    this.showProvincesList = false;
    this.showCitiesList = false;
  }

  showProvinces() {
    this.showCountriesList = false;
    this.showProvincesList = !this.showProvincesList;
    this.showCitiesList = false;
  }

  showCities() {
    this.showCountriesList = false;
    this.showProvincesList = false;
    this.showCitiesList = !this.showCitiesList;
  }

  selectCountry(country: Country) {
    this.showCountriesList = false;
    this.countrySelected = country;
    let countryId = this.countrySelected.id;
    if (countryId) {
      this.getProvinces(countryId);
    }
  }

  selectProvince(province: Province) {
    this.showProvincesList = false;
    this.provinceSelected = province;
    let provinceId = this.provinceSelected.id;
    if (provinceId) {
      this.getCities(provinceId);
    }
  }

  selectCity(city: City) {
    this.showCitiesList = false;
    this.citySelected = city;
  }

}
