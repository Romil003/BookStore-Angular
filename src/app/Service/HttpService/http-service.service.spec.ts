import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpServiceService', () => {
  let service: HttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    });
    service = TestBed.inject(HttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
