import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "MainPage",
    loadChildren: () => import('./landing-main/landing-main.module').then(m => m.LandingMainModule)
  },
  {
    path: "",
    redirectTo: 'MainPage',
    pathMatch: 'full'
  },
  {
    path: 'adminpage',
    loadChildren: () => import('./admin-panel/admin.module').then(m=> m.AdminModule)
  },
  {
    path: "adminpage",
    redirectTo: 'adminpage',
    pathMatch:'full'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
