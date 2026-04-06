import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNegocio } from './app-negocio';

describe('AppNegocio', () => {
  let component: AppNegocio;
  let fixture: ComponentFixture<AppNegocio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNegocio],
    }).compileComponents();

    fixture = TestBed.createComponent(AppNegocio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
