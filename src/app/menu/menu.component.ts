import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

/*JSON Cle -> valeur*/
  menu = [
    {nom: "ACCUEIL"},
    {nom: "OUTILS"},
    {nom: "JEUX"},
    {nom: "CONNEXION"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
