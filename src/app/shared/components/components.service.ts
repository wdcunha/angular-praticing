import {Injectable, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ComponentsService {

  @Output()
  displayModalChange = new BehaviorSubject(false);

  showDialog(state: boolean) {
    this.displayModalChange.next(state);
  }
}
