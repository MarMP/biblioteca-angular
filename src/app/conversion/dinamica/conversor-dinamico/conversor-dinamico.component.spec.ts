import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDinamicoComponent } from './conversor-dinamico.component';

describe('ConversorDinamicoComponent', () => {
  let component: ConversorDinamicoComponent;
  let fixture: ComponentFixture<ConversorDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
