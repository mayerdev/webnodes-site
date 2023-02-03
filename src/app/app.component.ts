import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('routing', [
      transition('* => *', [
        style({ transform: 'scale(0.95) translateY(-5%)', opacity: 0.15 }),
        animate('.3s ease-in-out')
      ]),
    ])
  ]
})
export class AppComponent {
}
