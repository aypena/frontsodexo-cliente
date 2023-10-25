import { TestBed } from '@angular/core/testing';

import { FeaturedNewsEntityService } from './featured-news-entity.service';

describe('FeaturedNewsEntityService', () => {
  let service: FeaturedNewsEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedNewsEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
