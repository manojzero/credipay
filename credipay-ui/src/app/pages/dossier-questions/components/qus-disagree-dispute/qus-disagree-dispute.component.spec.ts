import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QusDisagreeDisputeComponent } from './qus-disagree-dispute.component';

describe('QusDisagreeDisputeComponent', () => {
  let component: QusDisagreeDisputeComponent;
  let fixture: ComponentFixture<QusDisagreeDisputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QusDisagreeDisputeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QusDisagreeDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
