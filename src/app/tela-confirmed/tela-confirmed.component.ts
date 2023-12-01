import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-confirmed',
  templateUrl: './tela-confirmed.component.html',
  styleUrls: ['./tela-confirmed.component.css']
})
export class TelaConfirmedComponent {
  constructor(private router: Router) {}

  redirecionarParaLogin() {
    this.router.navigate(['/user']);
  }
}
