import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SkewTopComponent } from './components/skew-top/skew-top.component';
import { SkewBottomComponent } from './components/skew-bottom/skew-bottom.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { ContentFooterComponent } from './components/content-footer/content-footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { HysComponent } from './components/hys/hys.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SkewTopComponent,
    SkewBottomComponent,
    ContentHeaderComponent,
    ContentFooterComponent,
    LogoComponent,
    ProfilePhotoComponent,
    HysComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
