import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSectionComponent } from './Components/project-section/project-section.component';
import { ProjectUploadPageComponent } from './Components/project-upload-page/project-upload-page.component';
import { submittedProjectGuard } from './Guards/submitted-project.guard';
import { LandPageComponent } from './Components/Home/land-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { CadastroUsuarioPageComponent } from './Components/cadastro-usuario-page/cadastro-usuario-page.component';
import { ShoppingPageComponent } from './Components/shopping-page/shopping-page.component';
import { ShoppingItemInfoComponent } from './Components/shopping-item-info/shopping-item-info.component';
import { authGuardGuard } from './Guards/auth-guard.guard';
import { CarrinhoPageComponent } from './Components/carrinho-page/carrinho-page.component';


export const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "home" },
  { path: 'project-upload', component: ProjectUploadPageComponent, canActivate: [authGuardGuard] },
  { path: 'project-upload/setup-project', component: ProjectSectionComponent, canActivate: [submittedProjectGuard] },
  { path: 'home', component: LandPageComponent },
  { path: 'login', component: LoginPageComponent,canActivate: [authGuardGuard]  },
  { path: 'cadastro', component: CadastroUsuarioPageComponent },
  { path: 'loja', component: ShoppingPageComponent },
  { path: 'loja/item/:item', component: ShoppingItemInfoComponent },
  { path: 'carrinho', component: CarrinhoPageComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
