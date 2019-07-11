import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AFXAccesoComponent as AFXAccesoComponent } from './modules/afxacceso/afxacceso.component';

const appRoutes: Routes = [
  { path: 'AFXAcceso',
    component: AFXAccesoComponent,
  }
];
export default appRoutes;



