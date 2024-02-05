import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent {
  title = 'angular17';
}
