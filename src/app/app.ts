import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/common/navbar/navbar';
import { Footer } from './pages/common/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project-1');
}
