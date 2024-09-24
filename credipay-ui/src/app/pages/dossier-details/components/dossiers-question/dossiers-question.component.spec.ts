import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersQuestionComponent } from './dossiers-question.component';

describe('DossiersQuestionComponent', () => {
  let component: DossiersQuestionComponent;
  let fixture: ComponentFixture<DossiersQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossiersQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DossiersQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
