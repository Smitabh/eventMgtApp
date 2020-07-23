import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';//ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { MustMatchDirective } from './Directive/must-match.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateEventComponent,
    MustMatchDirective,
    DashboardComponent,
    AllEventsComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



