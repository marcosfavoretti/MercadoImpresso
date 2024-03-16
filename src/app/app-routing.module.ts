import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ProjectUploadPageComponent } from './project-upload-page/project-upload-page.component';
import { submittedProjectGuard } from './guards/submitted-project.guard';


const routes: Routes = [
  { path: '', pathMatch:"full", redirectTo:"project-upload" },
  { path: 'project-upload', component:ProjectUploadPageComponent},
  { path: 'project-upload/setup-project', component: ProjectSectionComponent, canActivate: [submittedProjectGuard]},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
