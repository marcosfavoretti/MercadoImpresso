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
import { RotesHandleComponent } from './rotes-handle/rotes-handle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSectionComponent,
    StlViewerComponent,
    ClientCustomFormsComponent,
    RotesHandleComponent
  ],
  imports: [
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
