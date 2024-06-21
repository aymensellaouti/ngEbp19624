import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { SecondComponent } from './components/second/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
// cv
const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvComponent},
  {path: 'cv/add', component: AddCvComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'cv/:id', component: DetailsCvComponent},
  {path: 'word', component: MiniWordComponent},
  {path: ':quelqueChose', component: SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
