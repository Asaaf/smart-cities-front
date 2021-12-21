import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTuristOriginComponent } from './chart-turist-origin.component';

describe('ChartTuristOriginComponent', () => {
  let component: ChartTuristOriginComponent;
  let fixture: ComponentFixture<ChartTuristOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTuristOriginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTuristOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
