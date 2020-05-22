import { Component, OnInit } from '@angular/core';
import {Post} from '../../../core/models/post';

@Component({
  selector: 'app-segundo-cp',
  templateUrl: './segundo-cp.component.html',
  styleUrls: ['./segundo-cp.component.scss']
})
export class SegundoCpComponent implements OnInit {

  valor = 10;
  numero: number;
  number2: number;
  number3: number;
  number4: number;

  constructor() { }

  pessoas = [
    {
      nome: 'Charles',
      idade: '30',
      telefone: '(99) 99999-9999',
      sexo: 'Masculino',
    },
    {
      nome: 'Aline',
      idade: '20',
      telefone: '(99) 99999-9999',
      sexo: 'Feminino',
    },
    {
      nome: 'Carlos',
      idade: '12',
      telefone: '(99) 99999-9999',
      sexo: 'Masculino'
    },
  ];

  model = {
    nome: '',
    idade: '',
    telefone: '',
    sexo: ''
  };

  ngOnInit() {
  }

  adicionaPessoa() {
    this.pessoas.push({
      ...this.model
    });
  }

  obterNumero(numero: number) {
    this.number4 = (numero + 200);
  }

}
