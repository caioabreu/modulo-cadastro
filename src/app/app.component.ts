import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormCadastroComponent } from "./form-cadastro/form-cadastro.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, FormCadastroComponent]
})
export class AppComponent {
  //title = 'modulo-cadastro';
  title = 'angular17';
}
