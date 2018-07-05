import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {Potato} from './potato';
import {POTATOES} from './mock-potatoes';
import {MessageService} from './message.service';

@Injectable({providedIn: 'root'})
export class PotatoService {

  constructor(private messageService: MessageService) {
  }

  getPotatoes(): Observable<Potato[]> {
    this.messageService.add('PotatoService: got all stuff here!');
    return of(POTATOES);
  }

  getPotato(id: number): Observable<Potato> {
    this.messageService.add(`PotatoSErvice: got potato woth id=${id}`);
    return of(POTATOES.find(potato => potato.id === id));
  }
}
