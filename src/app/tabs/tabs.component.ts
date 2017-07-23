import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  choise = 'all';
  swService: StarWarsService;

  onChoose(side) {
    this.choise = side;
  }

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.choise);
    return this.characters;
  }

}
