import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-payment',
  templateUrl: './tela-payment.component.html',
  styleUrls: ['./tela-payment.component.css']
})

export class TelaPaymentComponent {
  numeroCartao: string = '';
  nomeCartao: string = '';
  codigoSeguranca: string = '';
  loading: boolean = false;

  constructor(private router: Router) {}

  processarPagamento() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/confirmed']);
    }, 3000);
  }
}
