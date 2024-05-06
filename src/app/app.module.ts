import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { StlViewerComponent } from './project-section/stl-viewer/stl-viewer.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientCustomFormsComponent } from './project-section/client-custom-forms/client-custom-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ProjectUploadPageComponent } from './project-upload-page/project-upload-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BadgeModule } from 'primeng/badge';
import { ModalUploadComponent } from './project-upload-page/modal-upload/modal-upload.component';
import { LandPageComponent } from './land-page/land-page.component';
import { CarouselMainComponent } from './land-page/carousel-main/carousel-main.component';
import { SomeProductsGridComponent } from './land-page/some-products-grid/some-products-grid.component';
import { OrcamentoProjectComponent } from './land-page/orcamento-project/orcamento-project.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';

import { CarouselCollectionComponent } from './carousel-collection/carousel-collection.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CadastroUsuarioPageComponent } from './cadastro-usuario-page/cadastro-usuario-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingGridComponent } from './shopping-page/shopping-grid/shopping-grid.component';
import { ShoppingItemInfoComponent } from './shopping-page/shopping-item-info/shopping-item-info.component';
import { CarrinhoPageComponent } from './carrinho-page/carrinho-page.component';
import { SideBarComponent } from './sideBar/sideBar.component';

@NgModule({
  declarations: [	
    AppComponent,
    ProjectSectionComponent,
    StlViewerComponent,
    ClientCustomFormsComponent,
    ProjectUploadPageComponent,
    NavbarComponent,
    FooterComponent,
    ModalUploadComponent,
    LandPageComponent,
    CarouselMainComponent,
    SomeProductsGridComponent,
    OrcamentoProjectComponent,
    CarouselCollectionComponent,
    LoginPageComponent,
    CadastroUsuarioPageComponent,
    ShoppingPageComponent,
    ShoppingGridComponent,
    ShoppingItemInfoComponent,
    CarrinhoPageComponent,
      SideBarComponent
   ],
  imports: [
    AvatarModule,
    SidebarModule,
    CascadeSelectModule,
    RatingModule,
    CardModule,
    PasswordModule,
    TagModule,
    CarouselModule,
    ToastModule,
    ProgressBarModule,
    FileUploadModule,
    BadgeModule,
    ScrollTopModule,
    AppRoutingModule,
    FormsModule,
    SliderModule,
    RadioButtonModule,
    ButtonModule,
    InputTextModule,
    FileUploadModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
