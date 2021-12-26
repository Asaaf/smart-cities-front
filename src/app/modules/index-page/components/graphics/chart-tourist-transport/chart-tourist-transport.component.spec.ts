import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTouristTransportComponent } from './chart-tourist-transport.component';

describe('ChartTouristTransportComponent', () => {
  let component: ChartTouristTransportComponent;
  let fixture: ComponentFixture<ChartTouristTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTouristTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTouristTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
