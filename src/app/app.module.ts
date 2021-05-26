import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {AuthGuard} from './helpers/auth.guard';
import {HttpErrorInterceptor} from './helpers/error.interceptor';
import {LoaderInterceptor} from './helpers/loader.interceptor';
import {ToastNotificationService} from './services/toast-notification.service';
import {LoaderService} from './services/loader.service';

import {AppComponent} from './app.component';
import {ToastNotificationComponent} from './components/toast-notification/toast-notification.component';
import {LoaderComponent} from './components/loader/loader.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StoriesComponent} from './components/stories/stories.component';
import {StoryDetailComponent} from './components/story-detail/story-detail.component';
import {AuthComponent} from './components/auth/auth.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {AppHeaderComponent} from './_layout/app-header/app-header.component';
import {SiteHeaderComponent} from './_layout/site-header/site-header.component';
import {AppFooterComponent} from './_layout/app-footer/app-footer.component';
import {SiteFooterComponent} from './_layout/site-footer/site-footer.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StoriesComponent,
    StoryDetailComponent,
    LoaderComponent,
    ToastNotificationComponent,
    AuthComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    AppHeaderComponent,
    SiteHeaderComponent,
    AppFooterComponent,
    SiteFooterComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    AuthGuard,
    ToastNotificationService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
