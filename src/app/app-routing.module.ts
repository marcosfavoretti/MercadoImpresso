import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ProjectUploadPageComponent } from './project-upload-page/project-upload-page.component';
import { submittedProjectGuard } from './guards/submitted-project.guard';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CadastroUsuarioPageComponent } from './cadastro-usuario-page/cadastro-usuario-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingItemInfoComponent } from './shopping-page/shopping-item-info/shopping-item-info.component';


const routes: Routes = [
  { path: '', pathMatch:"full", redirectTo:"home" },
  { path: 'project-upload', component:ProjectUploadPageComponent},
  { path: 'project-upload/setup-project', component: ProjectSectionComponent, canActivate: [submittedProjectGuard]},
  { path: 'home', component:LandPageComponent},
  { path: 'login', component:LoginPageComponent},
  { path: 'cadastro', component:CadastroUsuarioPageComponent},
  {path: 'loja', component: ShoppingPageComponent},
  {path: 'loja/item/:item', component: ShoppingItemInfoComponent}


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
