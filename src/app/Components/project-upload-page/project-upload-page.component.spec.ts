import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUploadPageComponent } from './project-upload-page.component';

describe('ProjectUploadPageComponent', () => {
  let component: ProjectUploadPageComponent;
  let fixture: ComponentFixture<ProjectUploadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectUploadPageComponent]
    });
    fixture = TestBed.createComponent(ProjectUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
