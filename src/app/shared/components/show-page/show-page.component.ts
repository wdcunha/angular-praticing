import { Component, OnInit } from '@angular/core';
import {Post} from '../../../core/models/post';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss']
})
export class ShowPageComponent implements OnInit {

  posts: Array<Post> = [
    {
      id: 1,
      autor: 'Wellington Cunha',
      titulo: 'Post 1',
      dataPublic: '20/05/2020'
    } ,
    {
      id: 2,
      autor: 'João Silva',
      titulo: 'Post 2',
      dataPublic: '10/05/2020'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  cardClicado(event: Post) {
    console.log(event.dataPublic);
  }
}
