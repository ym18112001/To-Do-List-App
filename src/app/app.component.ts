import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TodowrapperComponent } from './todowrapper/todowrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodowrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angApp3';
}
