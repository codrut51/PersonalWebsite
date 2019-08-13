import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { TrainglesComponent } from './components/traingles/traingles.component';

const routes: Routes = [
  {
    path: '',
    children: 
    [
      {
        path:'',
        pathMatch: 'full',
        redirectTo: "triangles"
      },
      {
        path:'welcome',
        component: StartComponent
      },
      {
        path: 'triangles',
        component: TrainglesComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
