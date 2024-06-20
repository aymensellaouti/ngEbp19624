import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { SecondComponent } from './components/second/second.component';
// cv
const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvComponent},
  {path: 'word', component: MiniWordComponent},
  {path: ':quelqueChose', component: SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
