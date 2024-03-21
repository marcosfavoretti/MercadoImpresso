import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UploadService } from '../Services/UploadService/upload-service.service';

export const submittedProjectGuard: CanActivateFn = (route, state) => {
  return inject(UploadService).hasProject();
};
