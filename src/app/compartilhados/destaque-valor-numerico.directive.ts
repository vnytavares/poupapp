import { afterRender, Directive, ElementRef, input } from "@angular/core";

@Directive({
    selector: '[appDestaqueValorNumerico]'
})
export class DestaqueValorNumeroDirective {
    appDestaqueValorNumerico = input.required<number>();
    corPositiva = input("var(--destaque-receita)");
    corNegativa = input("var(--destaque-despesa)");

    constructor(elemento: ElementRef<HTMLElement>) {

        afterRender(() => {
            if (this.appDestaqueValorNumerico() > 0) {
                elemento.nativeElement.style.color = this.corPositiva();
            }
            else if (this.appDestaqueValorNumerico() < 0) {
                elemento.nativeElement.style.color = this.corNegativa();
            }    
        });

        // afterRender: é executado sempre que todos os componentes foram renderizados no DOM;
        // afterNextRender: espera um ciclo a mais para rodar o callback, garantindo que tudo tenha sido estabilizado antes de executar a ação.
        // Em outras palavras, afterRender age mais rápido, enquanto afterNextRender dá um tempinho extra para garantir que nada fique pela metade.

    }
}