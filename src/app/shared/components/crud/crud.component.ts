import {Component, OnInit} from '@angular/core';
import {CrudService} from 'src/app/core/services/crud.service';
import {Images} from '../../../core/models/placeholder.model.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  images: any; // usado new pra conseguir usar dentro do html
  error: any;

  constructor(private crudService: CrudService) {
    this.fotoGetter(); // sem declarar aqui dentro do construtor, não é carregado qdo for chamado
  }

  // ngOnInit is a kind of lifecycle hook of angular as much of existing ones
  ngOnInit() {
  }

  fotoGetter() {
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log('data received: ', data);
        console.log('images vindo do model: ', this.images);
      },
      (error: any) => {
        this.error = error;
        console.log('error inside crud component: ', error);
      }
    ); // subscribe pq é um observable
  }

}
