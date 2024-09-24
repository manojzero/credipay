import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierPaymentplanComponent } from './dossier-paymentplan.component';

describe('DossierPaymentplanComponent', () => {
  let component: DossierPaymentplanComponent;
  let fixture: ComponentFixture<DossierPaymentplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossierPaymentplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DossierPaymentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
