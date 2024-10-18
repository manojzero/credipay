import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QusDebtorDeceasedComponent } from './qus-debtor-deceased.component';

describe('QusDebtorDeceasedComponent', () => {
  let component: QusDebtorDeceasedComponent;
  let fixture: ComponentFixture<QusDebtorDeceasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QusDebtorDeceasedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QusDebtorDeceasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
