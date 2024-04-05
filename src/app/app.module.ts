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
import { CarouselCollectionComponent } from './project-section/carousel-collection/carousel-collection.component';

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
    OrcamentoProjectComponent
  ],
  imports: [
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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
