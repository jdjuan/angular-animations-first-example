import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('faceAnimation', [
      state('round', style({ borderRadius: '100%' })),
      state('bye', style({ opacity: '0' })),
      transition('* => round', [animate(1000, style({ borderRadius: '100%' }))]),
      transition('* => bye', [animate(2000, style({ opacity: '0' }))]),
    ]),
  ]
})
export class AppComponent {
  animationState;

  changeState(effect: string): void {
    this.animationState = effect;
  }
}
