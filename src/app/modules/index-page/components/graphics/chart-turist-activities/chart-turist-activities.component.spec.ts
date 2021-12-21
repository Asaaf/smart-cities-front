import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTuristActivitiesComponent } from './chart-turist-activities.component';

describe('ChartTuristActivitiesComponent', () => {
  let component: ChartTuristActivitiesComponent;
  let fixture: ComponentFixture<ChartTuristActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTuristActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTuristActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
