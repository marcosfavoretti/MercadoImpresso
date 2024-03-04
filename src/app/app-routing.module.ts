import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSectionComponent } from './project-section/project-section.component';


const routes: Routes = [
  { path: '', component: ProjectSectionComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

})
export class AppRoutingModule {


}
