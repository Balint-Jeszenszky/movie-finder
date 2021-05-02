import { TestBed } from '@angular/core/testing';

import { FavouriteTvsService } from './favourite-tvs.service';

describe('FavouriteTvsService', () => {
  let service: FavouriteTvsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteTvsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
