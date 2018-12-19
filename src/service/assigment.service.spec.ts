import { TestBed } from '@angular/core/testing';

import { AssigmentService } from './assigment.service';

describe('AssigmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssigmentService = TestBed.get(AssigmentService);
    expect(service).toBeTruthy();
  });
});
