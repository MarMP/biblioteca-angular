import { TestBed } from '@angular/core/testing';

import { InglesaService } from './inglesa.service';

describe('InglesaService', () => {
  let service: InglesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InglesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
