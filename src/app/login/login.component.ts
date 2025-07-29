import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
      <label>Username:</label>
      <input name="username" [(ngModel)]="username" required />
      <label>Password:</label>
      <input type="password" name="password" [(ngModel)]="password" required />
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
      <p *ngIf="errorMsg" style="color:red">{{ errorMsg }}</p>
    </form>
  `,
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => (this.errorMsg = 'Invalid username or password'),
    });
  }
}
