import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierQuestionsComponent } from './dossier-questions.component';

describe('DossierQuestionsComponent', () => {
  let component: DossierQuestionsComponent;
  let fixture: ComponentFixture<DossierQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossierQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DossierQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
