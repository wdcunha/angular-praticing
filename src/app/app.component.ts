import {Component} from '@angular/core';
import {Post} from './core/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 9 - Primeiros Passos';

  counter = 0;
  buttonTitle = 'título do botão de teste';
  imgSrc = 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg';
  imgWidth = 200;
  buttonStyle = 'background: pink; padding: 30px; font-size: 20px';

  incrementaTitle(value: string) {
    this.title = value;
  }

}
