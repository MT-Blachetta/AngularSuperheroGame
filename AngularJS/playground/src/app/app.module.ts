import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuperhumanListComponent } from './components/superhuman-list/superhuman-list.component';
import { SuperhumanEditComponent } from './components/superhuman-edit/superhuman-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeadPipe } from './pipes/dead.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SuperhumanPostComponent } from './components/superhuman-post/superhuman-post.component';
import { SuperhumanDetailsComponent } from './components/superhuman-details/superhuman-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SuperhumanListComponent,
    SuperhumanEditComponent,
    DeadPipe,
    SuperhumanPostComponent,
    SuperhumanDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
