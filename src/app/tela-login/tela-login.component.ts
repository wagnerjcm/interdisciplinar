import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  selectedOption: any;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  updateSelectedOption(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedOption = target.value;
    console.log(target.value);
  }

  navegarParaTelaDestino() {
    if (this.selectedOption === 'user') {
      this.router.navigate(['/user']);
      console.log("User");

    } else if (this.selectedOption === 'seller') {
      this.router.navigate(['/seller']);
      console.log("Seller");
    }
  }
}
