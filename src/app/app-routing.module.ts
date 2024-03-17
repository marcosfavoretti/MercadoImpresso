import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ProjectUploadPageComponent } from './project-upload-page/project-upload-page.component';
import { submittedProjectGuard } from './guards/submitted-project.guard';
import { LandPageComponent } from './land-page/land-page.component';


const routes: Routes = [
  { path: '', pathMatch:"full", redirectTo:"home" },
  { path: 'project-upload', component:ProjectUploadPageComponent},
  { path: 'project-upload/setup-project', component: ProjectSectionComponent, canActivate: [submittedProjectGuard]},
  { path: 'home', component:LandPageComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
