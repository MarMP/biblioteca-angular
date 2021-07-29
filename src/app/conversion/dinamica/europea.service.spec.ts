import { TestBed } from '@angular/core/testing';

import { EuropeaService } from './europea.service';

describe('EuropeaService', () => {
  let service: EuropeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuropeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
