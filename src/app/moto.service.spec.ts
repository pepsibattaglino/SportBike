/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MotoService } from './moto.service';

describe('MotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotoService]
    });
  });

  it('should ...', inject([MotoService], (service: MotoService) => {
    expect(service).toBeTruthy();
  }));
});
