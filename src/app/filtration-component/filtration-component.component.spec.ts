import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrationComponentComponent } from './filtration-component.component';

describe('FiltrationComponentComponent', () => {
  let component: FiltrationComponentComponent;
  let fixture: ComponentFixture<FiltrationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrationComponentComponent]
    });
    fixture = TestBed.createComponent(FiltrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
