import { TestBed } from '@angular/core/testing';

import { EnvioService } from './contenido.service';

describe('EnvioService', () => {
  let service: EnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
