import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class FormComponent  {

  currentRate = 5;

  data: any;
  perfil = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    dataNascimento: new FormControl(''),
    nomeMae: new FormControl(''),
  });

  constructor() { }

  obter() {
    this.data = this.perfil.value;
  }

  /**
   * Escola Front-end
   * Curso Angular 8: Reactive Forms - #09
   * https://www.youtube.com/watch?v=dlPlFj0TyaA&list=PL4iwH9RF8xHnMnKewOLjDvTHzTmyxJNHF&index=9
   */
}

