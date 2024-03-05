import { TestBed } from '@angular/core/testing';

import { FileStlHandleService } from './file-stl-handle.service';

describe('FileStlHandleService', () => {
  let service: FileStlHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileStlHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
