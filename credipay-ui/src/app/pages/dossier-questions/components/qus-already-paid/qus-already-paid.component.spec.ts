import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QusAlreadyPaidComponent } from './qus-already-paid.component';

describe('QusAlreadyPaidComponent', () => {
  let component: QusAlreadyPaidComponent;
  let fixture: ComponentFixture<QusAlreadyPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QusAlreadyPaidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QusAlreadyPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
