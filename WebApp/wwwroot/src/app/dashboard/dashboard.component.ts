import {Component, OnInit} from '@angular/core';
import {Potato} from '../potato';
import {PotatoService} from '../potato.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  potatoes: Potato[] = [];

  constructor(private potatoService: PotatoService) {
  }

  ngOnInit() {
    this.getPotatoes();
  }

  getPotatoes(): void {
    this.potatoService.getPotatoes()
      .subscribe(potatoes => this.potatoes = potatoes.slice(1, 5));
  }
}
