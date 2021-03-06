import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}

const BEERS = [
  {
    id: '1',
    name: 'Leffe blonde',
    type: 'blond',
    strength: '6.6',
    description: 'Une bière blonde d\'abbaye brassée depuis 1240 et que l\'on ne présente plus !'
  }, {
    id: '2',
    name: 'Kwak',
    type: 'blond',
    strength: '8.4',
    description: 'Une bière belge qu\'on ne présente plus, à accompagner de son verre du cocher !'
  }, {
    id: '3',
    name: 'Chimay bleue',
    type: 'brown_ale',
    strength: '9',
    description: 'Une bière belge trappiste brune fruitée et millésimée, elle peut vieillir en cave !'
  }, {
    id: '4',
    name: 'Rochefort 10',
    type: 'brown_ale',
    strength: '11.3',
    description: 'Une bière trappiste belge au goût de prune et de cacao. Une Merveille de 11,3° !'
  }, {
    id: '5',
    name: 'Chouffe',
    type: 'blond',
    strength: '6.6',
    description: 'La bière belge du lutin au bonnet rouge !'
  }
];
