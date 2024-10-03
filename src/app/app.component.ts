import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Mycomponent from "./mycomponent.analog";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mycomponent],
  template: `<Mycomponent (valueChange)="handleValueChange($event)"/>`,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {

  handleValueChange(c: any){
    console.log('Value changed: ', c);
  }
}
