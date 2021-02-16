import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroService } from '../../service/hero.service';
import { Hero } from '../../model/hero';
import { FilterPipe } from '../../pipe/filter.pipe'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  phrase: string = '';

  //heroList$: BehaviorSubject<Hero[]> = this.heroService.list$;
  heroList: Hero[] = this.heroService.list;

  constructor(private heroService: HeroService) {

   }

  ngOnInit(): void {
    this.heroService.getAll();
  }

}
