import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierPaymentplanComponent1 } from './dossier-paymentplan.component';

describe('DossierPaymentplanComponent1', () => {
  let component: DossierPaymentplanComponent1;
  let fixture: ComponentFixture<DossierPaymentplanComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossierPaymentplanComponent1]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DossierPaymentplanComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
