import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  styleUrls: ['./form.component.css'],
  providers: [TouristService]
})
export class FormComponent implements OnInit {
  form: FormGroup;
  formStep2: FormGroup;
  formStep3: FormGroup;
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
  code: string = "";

  private EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  private DATE_FORMAT_PATTERN = /\d{4}-\d{2}-\d{2}/;

  constructor(
    private countryService: CountryService,
    private cityService: CityService,
    private provinceService: ProvinceService,
    private touristService: TouristService,
    private transportService: TransportService,
    private activityService: ActivityService,
    private placeService: PlaceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = formBuilder.group({
      email: new FormControl(this.tourist.email, [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]),
      authorizationTerms: new FormControl('', [Validators.required, Validators.pattern('true')])
    });
    this.formStep2 = formBuilder.group({
      birthdate: new FormControl(this.tourist.birth_date, [Validators.required, Validators.pattern(this.DATE_FORMAT_PATTERN)]),
      country: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
    this.formStep3 = formBuilder.group({
      places_of_interest: new FormControl(),
      travel_modes: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getCountries();
    this.getTransports();
    this.getActivities();
    this.getPlaces();
    this.maxDate();
    this.route.queryParams.subscribe(params => {
      this.code = params['code'];
    });
  }

  get emailField() {
    return this.form.get('email');
  }

  get authorizationTermsField() {
    return this.form.get('authorizationTerms');
  }

  get birthdateField() {
    return this.formStep2.get('birthdate');
  }

  get countryField() {
    return this.formStep2.get('country');
  }

  get provinceField() {
    return this.formStep2.get('province');
  }

  get cityField() {
    return this.formStep2.get('city');
  }

  get travelModesField() {
    return this.formStep3.get('travel_modes');
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
    this.formStep2.controls['country'].setErrors({ 'incorrect': false });
    this.formStep2.controls['country'].setValue(country.name);
    let countryId = this.countrySelected.id;
    if (countryId) {
      this.getProvinces(countryId);
    }
  }

  selectProvince(province: Province) {
    this.showProvincesList = false;
    this.provinceSelected = province;
    this.formStep2.controls['province'].setErrors({ 'incorrect': false });
    this.formStep2.controls['province'].setValue(province.name);
    let provinceId = this.provinceSelected.id;
    if (provinceId) {
      this.getCities(provinceId);
    }
  }

  selectCity(city: City) {
    this.showCitiesList = false;
    this.formStep2.controls['city'].setErrors({ 'incorrect': false });
    this.formStep2.controls['city'].setValue(city.name);
    this.citySelected = city;
  }

  selectTransport(transport: Transport) {
    this.showTransportsList = false;
    this.formStep3.controls['travel_modes'].setErrors({ 'incorrect': false });
    this.formStep3.controls['travel_modes'].setValue(transport.name);
    this.transportSelected = transport;
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
    if (this.form.valid) {
      this.touristService.getTourist(this.form?.value.email)?.subscribe(
        resp => {
          if (!resp.exists) {
            //En caso de que no exista
            this.nextStep(2);
          } else {
            //En caso de que si exista
            this.step = 4;
          }
        }
      );
    }
  }

  nextStep(step: number) {
    if (step == 2) {
      this.step = step;
    }
    else if (this.step == 2 && step == 1) {
      this.step = step;
    }
    else if (step == 3 && this.formStep2.valid) {
      this.step = step;
    }
  }

  getMessagesErrors(field: any, nameField: string): string[] {
    let messages: string[] = [];
    if (this.getNameControl(field) == 'authorizationTerms') {
      if (field.hasError('pattern')) {
        messages.push(`Debe aceptar los términos para continuar.`);
      }
      if (field.hasError('required')) {
        messages.push(`El campo ${nameField} es requerido.`);
      }
    }
    else {
      if (field.hasError('required')) {
        messages.push(`El campo ${nameField} es requerido.`);
      }
      if (field.hasError('pattern')) {
        messages.push(`Debe ingresar un ${nameField} válido.`);
      }
    }
    return messages;
  }

  /**
   * Se obtiene el key name de un Abstract Control a través del control padre
   */
  private getNameControl(control: AbstractControl): string | null {
    let group = <FormGroup>control.parent;
    if (!group) {
      return null;
    }
    let name: string = "";
    Object.keys(group.controls).forEach(key => {
      let childControl = group.get(key);
      if (childControl !== control) {
        return;
      }
      name = key;
    });
    return name;
  }

  registry() {
    console.log(this.form.value.birthdate);
    let model: any = {
      tourist_photo_code: this.code,
      email: this.form.value.email,
      birth_date: this.formStep2.value.birthdate,
      city_id: this.citySelected.id,
      travel_mode_id: this.transportSelected.id,
      activities: [],
      places_of_interest: [],
      places_visited: [],
      gender: 'O',
      city_id_to_visit: 361,
      companions: 3
    }

    this.touristService.sendForm(model)?.subscribe(
      resp => {
        console.log(resp);
        this.step = 4;
      },
    );
  }



}
