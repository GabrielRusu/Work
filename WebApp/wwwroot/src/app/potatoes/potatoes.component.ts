import {Component, OnInit} from '@angular/core';

import {Potato} from '../potato';
import {PotatoService} from '../potato.service';

@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.component.html',
  styleUrls: ['./potatoes.component.css']
})
export class PotatoesComponent implements OnInit {
  potatoes: Potato[];

  constructor(private potatoService: PotatoService) {
  }

  ngOnInit() {
    this.getPotatoes();
  }

  getPotatoes(): void {
    this.potatoService.getPotatoes()
      .subscribe(potatoes => this.potatoes = potatoes);
  }
}
