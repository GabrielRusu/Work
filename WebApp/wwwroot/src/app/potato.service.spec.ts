import {TestBed, inject} from '@angular/core/testing';

import {PotatoService} from './potato.service';

describe('PotatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PotatoService]
    });
  });

  it('should be created', inject([PotatoService], (service: PotatoService) => {
    expect(service).toBeTruthy();
  }));
});
