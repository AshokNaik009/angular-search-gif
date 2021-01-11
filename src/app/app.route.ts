import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {  AppSearchScreenComponent  } from './app-search-screen/app-search-screen.component';


const appRoutes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'search'
    },
    {
      path: 'search',
      component: AppSearchScreenComponent 
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    
    exports: [
      RouterModule
    ]
  })
  
  export class AppRoutingModule {
  }