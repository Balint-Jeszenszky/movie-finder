import { TestBed } from '@angular/core/testing';

import { FavouritePeopleService } from './favourite-people.service';

describe('FavouritePeopleService', () => {
  let service: FavouritePeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritePeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
