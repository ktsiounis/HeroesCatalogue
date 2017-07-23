import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Luke Skywalker', side: 'all'},
    {name: 'Darth Vader', side: 'all'}
  ];
  choise = 'all';

  onChoose(side) {
    this.choise = side;
  }

  constructor() { }

  ngOnInit() {
  }

  getCharacters() {
    return this.characters.filter((char) => {
      return char.side === this.choise;
    });
  }

}
