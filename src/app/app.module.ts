import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { StlViewerComponent } from './project-section/stl-viewer/stl-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSectionComponent,
    StlViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
