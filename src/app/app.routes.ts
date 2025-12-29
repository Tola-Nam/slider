import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { SlideShowPage } from './views/slide-show-page/slide-show-page';
import { DefaultPage } from './views/default-page/default-page';
import { AnalizeChanel } from './views/analize-chanel/analize-chanel';
import { FiveGAnalazer } from './views/five-g-analazer/five-g-analazer';
import { TestPerforment } from './views/test-performent/test-performent';
export const routes: Routes = [
  {
    path: '',           // root path
    component: DefaultPage
  },
  {
    path: 'slide-show',
    component: SlideShowPage
  },
  {
    path: 'default',    // route for default page
    component: DefaultPage
  },
  {
    path :'analizse',
    component : AnalizeChanel
  },
  {
    path: '5g',
    component: FiveGAnalazer
  },
  {
    path:'testperfomence',
    component: TestPerforment
  },
  {
    path: '**',         // catch-all for unknown paths
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}