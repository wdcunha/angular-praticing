import {Component} from '@angular/core';

@Component({
  selector: 'app-segundo-cp',
  templateUrl: './segundo-cp.component.html',
  styleUrls: ['./segundo-cp.component.scss']
})
export class SegundoCpComponent {

  valor = 10;
  numero: number;
  number2: number;
  number3: number;
  number4: number;

  title = 'Angular 9 - Primeiros Passos';

  counter = 0;
  buttonTitle = 'título do botão de teste';
  imgSrc = 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg';
  imgWidth = 200;
  buttonStyle = 'background: pink; padding: 30px; font-size: 20px';

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


  incrementaTitle(value: string) {
    this.title = value;
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
