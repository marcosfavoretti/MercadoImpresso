import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { ProjectSectionComponent } from './Components/project-section/project-section.component';
import { StlViewerComponent } from './Components/stl-viewer/stl-viewer.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientCustomFormsComponent } from './Components/client-custom-forms/client-custom-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ProjectUploadPageComponent } from './Components/project-upload-page/project-upload-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BadgeModule } from 'primeng/badge';
import { ModalUploadComponent } from './Components/modal-upload/modal-upload.component';
import { LandPageComponent } from './Components/Home/land-page.component';
import { SomeProductsGridComponent } from './Components/some-products-grid/some-products-grid.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { CadastroUsuarioPageComponent } from './Components/cadastro-usuario-page/cadastro-usuario-page.component';
import { ShoppingPageComponent } from './Components/shopping-page/shopping-page.component';
import { ShoppingGridComponent } from './Components/shopping-grid/shopping-grid.component';
import { ShoppingItemInfoComponent } from './Components/shopping-item-info/shopping-item-info.component';
import { SideBarComponent } from './Components/sideBar/sideBar.component';
import { OrcamentoProjectComponent } from './Components/orcamento-project/orcamento-project.component';
import { CarouselCollectionComponent } from './Components/carousel-collection/carousel-collection.component';
import { CarouselMainComponent } from './Components/carousel-main/carousel-main.component';
import { CarrinhoPageComponent } from './Components/carrinho-page/carrinho-page.component';
import { PriceCheckerDirective } from './Diretives/price-checker/price-checker.directive';
import {CookieService} from "ngx-cookie-service";
import { CardTamplateComponent } from './Components/card-tamplate/card-tamplate.component'
@NgModule({
  declarations: [	
    PriceCheckerDirective,
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
      SideBarComponent,
      CardTamplateComponent
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
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
