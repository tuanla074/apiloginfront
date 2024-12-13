import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class LoginComponent {
  loginData = { username: '', password: '' };
  loginMessage = '';
  isSuccess = false; // To track success or failure state
  userInfo: any = null; // Store user information

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://localhost:8080/api/auth', this.loginData).subscribe(
      (response: any) => {
        this.isSuccess = true; // Mark as success
        this.loginMessage = 'Login successful!';
        this.userInfo = response; // Save user info for display
      },
      (error) => {
        this.isSuccess = false; // Mark as failure
        this.userInfo = null; // Clear previous user info on failure
        if (error.status === 401) {
          this.loginMessage = 'Invalid username or password.';
        } else {
          this.loginMessage = 'An error occurred. Please try again.';
        }
      }
    );
  }
}
