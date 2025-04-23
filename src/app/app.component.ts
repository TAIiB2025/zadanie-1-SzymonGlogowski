import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produkt } from '../model/produkt.class';
import { ProduktComponent } from './produkt/produkt.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduktComponent, KoszykComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sklep TAIiB';
  produkts: Produkt[] = [
    new Produkt('Mleko Lowieckie 3,2%', 3.99, new Date('2025-04-19'), false),
    new Produkt('Fantazja z kawalkami czekolady', 2.49, new Date('2025-04-21'), true),
    new Produkt('Maslo ekstra 200g', 6.39, new Date('2025-04-20'), true),
    new Produkt('Smietana Pilos 18%', 3.79, new Date('2025-04-14'), false),
    new Produkt('Mleczna Kanapka 3-pak', 4.99, new Date('2025-04-16'), false)
  ];

  koszykLacznie: number = 0;
  liczbaSztuk: number = 0;
  pokazProdukty: boolean = true;

  DodajDoKoszyka(produkt: Produkt) {
    produkt.iloscWKoszyku++;
    this.koszykLacznie += produkt.cena;
  }

  ResetKoszyk() {
    this.koszykLacznie = 0;
    this.produkts.forEach(produkt => produkt.iloscWKoszyku = 0);
  }

  UkryjProdukty() {
    this.pokazProdukty = !this.pokazProdukty;
  }
}
