import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'home',
  redirectTo: 'home',
  pathMatch: 'full'
},
  { path: 'test', component: TestComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
