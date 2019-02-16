import { TestBed } from '@angular/core/testing';

import { AddSchoolUserServiceService } from './add-school-user-service.service';

describe('AddSchoolUserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSchoolUserServiceService = TestBed.get(AddSchoolUserServiceService);
    expect(service).toBeTruthy();
  });
});
