import { Component, OnInit } from '@angular/core';
import {Personnage} from '../personnage';
import {Baratheon, Lanister, Stark, Targaryen} from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /*Appel des 4 famille de data.ts*/
  starks = Stark;
  lanisters = Lanister;
  targaryen = Targaryen;
  baratheon = Baratheon;

  users: Personnage = {
    id: 1,
    name: "Michael",
    age: 34,
    arme: ['Clavier', 'Souris'],
    enVie: true,

  }

  selectedPerso: Personnage;

  selected(value: Personnage): void {
    this.selectedPerso = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
