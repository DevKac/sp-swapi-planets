import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePlanetComponent } from './one-planet.component';

describe('OnePlanetComponent', () => {
  let component: OnePlanetComponent;
  let fixture: ComponentFixture<OnePlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
