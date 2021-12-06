import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private countriesService: CountryService) { }

  ngOnInit(): void {
    this.countriesService.getCountries()?.subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

}
