import { TestBed } from '@angular/core/testing';

import { FullscreenDbService } from './fullscreen-db.service';

describe('FullscreenDbService', () => {
  let service: FullscreenDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullscreenDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
