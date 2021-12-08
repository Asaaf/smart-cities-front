import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/models/city/city';
import { Country } from 'src/app/models/country/country';
import { Province } from 'src/app/models/province/province';
import { Tourist } from 'src/app/models/tourist/tourist';
import { Transport } from 'src/app/models/transport/transport';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { CityService } from 'src/app/services/city/city.service';
import { CountryService } from 'src/app/services/country/country.service';
import { PlaceService } from 'src/app/services/place/place.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import { TouristService } from 'src/app/services/tourist/tourist.service';
import { TransportService } from 'src/app/services/transport/transport.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  tourist: Tourist = new Tourist();
  step: number = 1;

  showCountriesList: boolean = false;
  showProvincesList: boolean = false;
  showCitiesList: boolean = false;
  showTransportsList: boolean = false;

  countriesList: any;
  provincesList: any;
  citiesList: any;
  transportsList: any;
  activitiesList: any;
  placesList: any;

  countrySelected: Country = new Country();
  provinceSelected: Province = new Province();
  citySelected: City = new City();
  transportSelected: Transport = new Transport();
  maxBirthdate: string = "";

  constructor(
    private countryService: CountryService,
    private cityService: CityService,
    private provinceService: ProvinceService,
    private touristService: TouristService,
    private transportService: TransportService,
    private activityService: ActivityService,
    private placeService: PlaceService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      email: new FormControl(this.tourist.email, [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.getCountries();
    this.getTransports();
    this.getActivities();
    this.getPlaces();
    this.maxDate();
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

  getTransports() {
    this.transportService.getTravelModes()?.subscribe(
      resp => {
        this.transportsList = resp;
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

  getActivities() {
    this.activityService.getActivities()?.subscribe(
      resp => {
        this.activitiesList = resp;
      },
      error => {
        console.log(error);
      }
    )
  }

  getPlaces() {
    this.placeService.getPlaces()?.subscribe(
      resp => {
        this.placesList = resp;
      },
      error => {
        console.log(error);
      }
    )
  }

  nextStep(step: number) {
    this.step = step;
  }

  showCountries() {
    this.showCountriesList = !this.showCountriesList;
    this.showProvincesList = false;
    this.showCitiesList = false;
    this.showTransportsList = false;
  }

  showProvinces() {
    this.showCountriesList = false;
    this.showProvincesList = !this.showProvincesList;
    this.showCitiesList = false;
    this.showTransportsList = false;
  }

  showCities() {
    this.showCountriesList = false;
    this.showProvincesList = false;
    this.showCitiesList = !this.showCitiesList;
    this.showTransportsList = false;
  }

  showTransports() {
    this.showCountriesList = false;
    this.showProvincesList = false;
    this.showCitiesList = false;
    this.showTransportsList = !this.showTransportsList;
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

  selectTransport(transport: Transport) {
    this.transportSelected = transport;
    this.showTransportsList = false;
  }

  maxDate() {
    let today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    let yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    this.maxBirthdate = yyyy + '-' + mm + '-' + dd;
  }

  validateMail() {
    this.touristService.getTourist(this.form?.value.email)?.subscribe(
      resp => {
        if (!resp.exists) {
          this.nextStep(2);
        } else {
          this.nextStep(3);
        }
        console.log(resp);
      }
    );
  }

}
