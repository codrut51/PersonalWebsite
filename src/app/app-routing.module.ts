import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    children:
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: "welcome"
        },
        {
          path: 'welcome',
          component: StartComponent
        },
        {
          path: 'details',
          component: DetailsComponent,
          children: [
            {
              path: '',
              pathMatch: 'full',
              redirectTo: 'education'
            },
            {
              path: 'education',
              component: DetailComponent
            }
          ]
        }
      ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
