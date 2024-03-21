import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { RotesHandleComponent } from './rotes-handle/rotes-handle.component';


const routes: Routes = [
  { path: '', redirectTo: 'projetos', pathMatch: 'full' },
  { path: "projetos", component: ProjectSectionComponent },
  { path: ":routes", component: ProjectSectionComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
