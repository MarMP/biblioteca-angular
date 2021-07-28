import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedalesComponent } from './pedales.component';

describe('PedalesComponent', () => {
  let component: PedalesComponent;
  let fixture: ComponentFixture<PedalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
