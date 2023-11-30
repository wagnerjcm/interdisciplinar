import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-payment',
  templateUrl: './tela-payment.component.html',
  styleUrls: ['./tela-payment.component.css']
})

export class TelaPaymentComponent {
  constructor(private router: Router) {}

  navegarParaTelaLogin() {
    this.router.navigate(['/login']);
  }
}
