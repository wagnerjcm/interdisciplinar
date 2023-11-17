import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-login',
  template: `
   <div class="btn-submit">
      <button (click)="redirectToLogin()" type="submit">Voltar para o Login</button>
   </div>
  `,
})
export class BtnLoginComponent {

  constructor(private router: Router){}

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
