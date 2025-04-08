import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  private authService = inject(AuthService);


  logOut():void{
    this.authService.clearToken()
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

 test  = this.authService.getUserRole();
  isAdmin(): boolean{
    return this.authService.getUserRole() === "ROLE_ADMIN";

  }

}
