import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Portfolio'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {title: 'About'}
  },
  {
    path: 'myWork',
    component: WorkComponent,
    data: {title: 'About'}
  },
  {
    path: 'contacts',
    component: ContactComponent,
    data: {title: 'About'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
