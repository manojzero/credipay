import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierPaymentPlanComponent } from './dossier-payment-plan.component';

describe('DossierPaymentPlanComponent', () => {
  let component: DossierPaymentPlanComponent;
  let fixture: ComponentFixture<DossierPaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossierPaymentPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DossierPaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
