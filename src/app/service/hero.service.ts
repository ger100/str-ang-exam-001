import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

   list: Hero[] = [{
    id: 1,
    name: 'Spiderman',
    superPower: 'jump bigspider',
    address: 'NewYork',
  },
  {
    id: 2,
    name: 'Hulk',
    superPower: 'strong',
    address: 'USA',
  },
  {
    id: 3,
    name: 'Capitan America',
    superPower: 'smart',
    address: 'Washington',
  },
  {
    id: 4,
    name: 'Invisible Woman',
    superPower: 'invisible',
    address: 'Marvel Universe',
  },
  {
    id: 5,
    name: 'Aero',
    superPower: 'control the wind',
    address: 'Shanghai',
  }
  ];

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }

}


