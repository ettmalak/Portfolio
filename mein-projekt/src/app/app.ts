import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public logoUrl = 'malak_logo_on_petrol.svg';
  portraitUrl = 'malak.jpg';
  protected readonly title = signal('mein-projekt');
}
