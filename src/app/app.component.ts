import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';

@Component({
  standalone: true, // Declare this component as standalone
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    LoginComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
}
