import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';


const routes: Routes = [
  {path: 'a', component: AComponent},
  {path: 'b', component: BComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
