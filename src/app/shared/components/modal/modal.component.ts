import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ComponentsService} from '../components.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


  display$: Observable<boolean>;

  constructor(
    private componentsService: ComponentsService
  ) {
    this.display$ = this.componentsService.displayModalChange;
  }
}
