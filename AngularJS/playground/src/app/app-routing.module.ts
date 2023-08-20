import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {SuperhumanEditComponent} from "./components/superhuman-edit/superhuman-edit.component";
import {SuperhumanListComponent} from "./components/superhuman-list/superhuman-list.component";
import {SuperhumanPostComponent} from "./components/superhuman-post/superhuman-post.component";
import { SuperhumanDetailsComponent } from './components/superhuman-details/superhuman-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'detail/:id', component: SuperhumanDetailsComponent},
  {path: 'list', component: SuperhumanListComponent},
  {path: 'post', component: SuperhumanPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


