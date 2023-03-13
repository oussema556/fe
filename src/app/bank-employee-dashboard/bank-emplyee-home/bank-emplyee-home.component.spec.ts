import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankEmplyeeHomeComponent } from './bank-emplyee-home.component';

describe('BankEmplyeeHomeComponent', () => {
  let component: BankEmplyeeHomeComponent;
  let fixture: ComponentFixture<BankEmplyeeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankEmplyeeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankEmplyeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
