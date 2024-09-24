import { TestBed } from '@angular/core/testing';

import { DossierDetailsService } from './dossier-details.service';

describe('DossierDetailsService', () => {
  let service: DossierDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossierDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
