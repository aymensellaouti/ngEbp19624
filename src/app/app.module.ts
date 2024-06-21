import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { TodoComponent } from './todo/todo/todo.component';
import { LoginComponent } from './auth/login/login.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { SayHelloService } from './services/say-hello.service';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoWayComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    CvCardComponent,
    CvItemComponent,
    NgstyleComponent,
    MiniWordComponent,
    TodoComponent,
    LoginComponent,
    EmbaucheComponent,
    DetailsCvComponent,
    LampeComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    WeekTodoComponent,
    NavbarComponent,
    TestFormComponent,
    TestObservableComponent,
    AddCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
