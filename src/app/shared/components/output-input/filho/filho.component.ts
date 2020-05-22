import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  @Input()
  infoFilho: string;

  @Input()
  infoFilhoArray: any;

  constructor() { }

  ngOnInit() {
  }

}
