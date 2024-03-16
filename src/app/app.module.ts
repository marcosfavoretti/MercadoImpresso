import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';

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

@NgModule({
  declarations: [
    AppComponent,
    ProjectSectionComponent,
    StlViewerComponent,
    ClientCustomFormsComponent,
    ProjectUploadPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
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
