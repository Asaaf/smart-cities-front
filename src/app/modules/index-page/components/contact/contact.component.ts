import { Component, OnInit } from '@angular/core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhone = faPhoneAlt;
  faEnvelope = faEnvelope;
  faStreetView = faStreetView;

  constructor() { }

  ngOnInit(): void {
  }

}
