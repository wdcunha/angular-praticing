import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  data: any;
  perfil = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    dataNascimento: new FormControl(''),
    nomeMae: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  obter() {
    this.data = this.perfil.value;
  }

  /**
   * Escola Front-end
   * Curso Angular 8: Reactive Forms - #09
   * https://www.youtube.com/watch?v=dlPlFj0TyaA&list=PL4iwH9RF8xHnMnKewOLjDvTHzTmyxJNHF&index=9
   */
}

