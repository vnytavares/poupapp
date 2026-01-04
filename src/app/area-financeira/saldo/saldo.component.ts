import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { DestaqueValorNumeroDirective } from '../../compartilhados/destaque-valor-numerico.directive';

@Component({
  selector: 'app-saldo',
  imports: [CurrencyPipe, DestaqueValorNumeroDirective],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent {
  saldo = input.required<number>();
}
