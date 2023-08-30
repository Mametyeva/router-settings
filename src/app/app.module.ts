import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DeletedComponent } from './components/deleted/deleted.component';
import { AppRawComponent } from './components/app-raw/app-raw.component';
import { AppWebComponent } from './components/app-web/app-web.component';

const appRoutes: Routes = [
  {path: '', component: AppRawComponent},
  {path: 'web', component: AppWebComponent},
  {path: 'deleted', component: DeletedComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DeletedComponent,
    AppRawComponent,
    AppWebComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
