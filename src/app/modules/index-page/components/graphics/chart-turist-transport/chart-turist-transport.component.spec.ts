import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTuristTransportComponent } from './chart-turist-transport.component';

describe('ChartTuristTransportComponent', () => {
  let component: ChartTuristTransportComponent;
  let fixture: ComponentFixture<ChartTuristTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTuristTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTuristTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
