import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRawComponent } from './components/app-raw/app-raw.component';
import { AppWebComponent } from './components/app-web/app-web.component';

const appRoutes: Routes = [
  {path: '', component: AppRawComponent},
  {path: 'web', component: AppWebComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AppRawComponent,
    AppWebComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
