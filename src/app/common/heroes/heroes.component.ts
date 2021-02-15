import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  id: number =0;
  name: string = "";
  superPower: string = "";
  address: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
