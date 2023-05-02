import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {Reclamation} from "../../model/reclamation";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ReclamationaService} from "../../services/reclamation.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {NotificationType} from "../../model/notification-type.enum";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  public user: User;
  public reclamation : Reclamation;

  public reclamations: Reclamation[];
  public editReclamation: Reclamation;
  public deleteReclamation : Reclamation;

  constructor(private router: Router, private authenticationService: AuthenticationService,
                         private reclamationService : ReclamationaService,private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();
    this.getReclamations();

  }


  public getReclamations(): void {
    this.reclamationService.getReclamation().subscribe(
      (response: Reclamation[]) => {
        this.reclamations = response;
        console.log("hrere",this.reclamations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddReclamation(addForm: NgForm): void {
    document.getElementById('add-reclamation-form').click();
    this.reclamationService.addReclamation(addForm.value).subscribe(
      (response: Reclamation) => {
        
        console.log(response);
        this.getReclamations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateReclamation(reclamation: Reclamation): void {
    this.reclamationService.updateReclamation(reclamation).subscribe(
      (response: Reclamation) => {
        this.sendErrorNotification(NotificationType.SUCCESS, `${response} updated successfully`);
        console.log(response);
        this.getReclamations();
      },
      (error: HttpErrorResponse) => {
        this.sendErrorNotification(NotificationType.ERROR, error.error.message);
        alert(error.message);
      }
    );
  }

  public onDeleteReclamation(id: string): void {
    console.log("111",id);
    this.reclamationService.deleteReclamation(id).subscribe(
      (response: void) => {
        this.sendErrorNotification(NotificationType.SUCCESS,"success");
        console.log("222",id);
        console.log(response);
        this.getReclamations();
      },
      (error: HttpErrorResponse) => {
        this.sendErrorNotification(NotificationType.ERROR, error.error.message);
        alert(error.message);
      }
    );
  }

  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }



  public onOpenModal(reclamation: Reclamation, mode: string  ): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addReclamationModal');
    }
    if (mode === 'edit') {
      this.editReclamation = reclamation;
      button.setAttribute('data-target', '#updateReclamationModal');
    }
    if (mode === 'delete') {
      this.deleteReclamation = reclamation;
      button.setAttribute('data-target', '#deleteReclamationModal');
    }

    container.appendChild(button);
    button.click();
  }

  public onLogOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }


  private getUserRole(): string {
    return this.authenticationService.getUserFromLocalCache().role;
  }



}

