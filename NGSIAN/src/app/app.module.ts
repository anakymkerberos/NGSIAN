import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import appRoutes from './routerConfig';

import { AppComponent } from './app.component';
import { AFXAccesoComponent } from './modules/afxacceso/afxacceso.component';

@NgModule({
  declarations: [
    AppComponent,
    AFXAccesoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
