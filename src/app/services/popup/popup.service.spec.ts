import { TestBed } from '@angular/core/testing';

import { CreateErrorPopupService } from './popup.service';

describe('CreateErrorPopupService', () => {
  let service: CreateErrorPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateErrorPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
