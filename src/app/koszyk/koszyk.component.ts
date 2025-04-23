import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  imports: [],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
  @Input() lacznie: number = 0;
}
