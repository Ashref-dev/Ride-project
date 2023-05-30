import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { About1Component } from './landing/about1/about1.component';
import { About2Component } from './landing/about2/about2.component';
import { PartnersComponent } from './landing/partners/partners.component';
import { StunnerComponent } from './landing/stunner/stunner.component';
import { ThreeSectionComponent } from './landing/three-section/three-section.component';
import { PhysicsSectionComponent } from './landing/physics-section/physics-section.component';
import { StepsSectionComponent } from './landing/steps-section/steps-section.component';
import { HeaderComponent } from './header/header.component';
import { PostBrowserComponent } from './pages/post-browser/post-browser.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { OneLineMarqueeComponent } from './landing/one-line-marquee/one-line-marquee.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
//Loading animation on load

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    About1Component,
    About2Component,
    PartnersComponent,
    StunnerComponent,
    ThreeSectionComponent,
    PhysicsSectionComponent,
    StepsSectionComponent,
    // pages
    PostBrowserComponent,
    LoginComponent,
    SignupComponent,
    OneLineMarqueeComponent,
    ContactComponent,
    AddPostComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
