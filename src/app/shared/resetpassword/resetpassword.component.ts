import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthenticationService} from "../../services/authentication.service";
import {NgForm} from "@angular/forms";
import {CustomHttpRespone} from "../../model/custom-http-response";
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationService} from "../../services/notification.service";
import {NotificationType} from "../../model/notification-type.enum";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  public refreshing: boolean;
  private subscriptions: Subscription[] = [];
  private errorResponse: any;
  constructor(private router: Router,private authenticationService:AuthenticationService,private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  public onResetPassword(emailForm: NgForm): void {
    this.refreshing = true;
    const emailAddress = emailForm.value['reset-password-email'];
    this.subscriptions.push(
      this.authenticationService.resetPassword(emailAddress).subscribe(
        (response: CustomHttpRespone) => {
          this.sendErrorNotification(NotificationType.SUCCESS, response.message);
          this.refreshing = false;
        },
        (error: HttpErrorResponse) => {
          this.sendErrorNotification(NotificationType.ERROR, this.errorResponse.error.message);
          this.refreshing = false;
        },
        () => emailForm.reset()
      )
    );
  }

  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}

