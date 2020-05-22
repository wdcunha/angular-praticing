import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-input',
  templateUrl: './output-input.component.html',
  styleUrls: ['./output-input.component.scss']
})
export class OutputInputComponent implements OnInit {

  /**
   * Aqui demonstra o uso do output com input e pra funcionar é preciso que esteja na hierarquia pra funcionar
   * sempre o pai (output) passsando pro filho (input)
   */
  @Output()
  infoOutPut = 'Nome: Júlio';

  @Output()
  infoOutPutArray = ['Júlio', 'João', 'Pedro'];

  constructor() { }

  ngOnInit() {
  }

}
