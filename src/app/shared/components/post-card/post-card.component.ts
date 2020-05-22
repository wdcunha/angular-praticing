import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../../core/models/post';

@Component({
  selector: 'cp-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() // usada para passar valor pra fora e no html pode ser usado cochete (pode ser sem, mas não terá autocomplete)
  post: Post = {
      id: 1,
      autor: 'Well DC',
      titulo: 'Post Card Cp',
      dataPublic: '22/05/2020'
    };

  @Output() // usado pra passar valores para fora, como um clique na figura...
  cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.cardClicked.emit(this.post); // vai ser enviado para fora, nesse caso para app.component,
    // no post-card como cardClicked (@Output) acima declarado
  }
}
