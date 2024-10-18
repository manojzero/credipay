import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QusCopyInvoiceComponent } from './qus-copy-invoice.component';

describe('QusCopyInvoiceComponent', () => {
  let component: QusCopyInvoiceComponent;
  let fixture: ComponentFixture<QusCopyInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QusCopyInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QusCopyInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
