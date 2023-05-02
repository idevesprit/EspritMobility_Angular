import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi_dev_angular';
  constructor(private router: Router) {}
  isHomePage() {
    return this.router.url === '/home';
  }
  isLoginPage() {
    return this.router.url === '/login';
  }
  isAdminPage() {
    return this.router.url === '/admin';
  }
  isRegisterPage() {
    return this.router.url === '/register';
  }
  isProfilePage() {
    return this.router.url === '/profile';
  }
  isVerificationMailPage() {
    return this.router.url === '/verificationmail';
  }
  isLockScreenPage() {
    return this.router.url === '/lockscreen';
  }
  isResetPasswordPage() {
    return this.router.url === '/resetpassword';
  }
}

