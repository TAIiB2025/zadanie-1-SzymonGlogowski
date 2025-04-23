import { Component, Input } from '@angular/core';
import { Produkt } from '../../model/produkt.class';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent {
  @Input() produkt!: Produkt;
  @Input() NaDodajDoKoszyka!: (cena: number) => void;

  produktRozwiniety: boolean = false;

  DodajDoKoszyka() {
    this.NaDodajDoKoszyka(this.produkt.cena);
  }

  ToggleRozwiniety() {
    this.produktRozwiniety = !this.produktRozwiniety;
  }
}