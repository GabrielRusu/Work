import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Potato} from '../potato';
import {PotatoService} from '../potato.service';

@Component({
  selector: 'app-potato-detail',
  templateUrl: './potato-detail.component.html',
  styleUrls: ['./potato-detail.component.css']
})
export class PotatoDetailComponent implements OnInit {
  @Input() potato: Potato;

  constructor(private route: ActivatedRoute,
              private potatoService: PotatoService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getPotato();
  }

  getPotato(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.potatoService.getPotato(id)
      .subscribe(potato => this.potato = potato);
  }

  goBack(): void {
    this.location.back();
  }
}
