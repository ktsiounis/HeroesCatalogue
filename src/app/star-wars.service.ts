import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  private characters = [
    {name: 'Luke Skywalker', side: 'all'},
    {name: 'Darth Vader', side: 'all'}
  ];
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people')
      .map(
        (response: Response) => {
          const data = response.json().results;
          const chars = data.map(
            (char) => {
              return {name: char.name, side: ''};
            }
          );
          return chars;
      })
      .subscribe(
        (chars) => {
          this.characters = chars;
          console.log(chars);
          this.charactersChanged.next();
        }
      );
  }

  getCharacters(choise) {
    if (choise === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === choise;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
  }

  addCharacter(name, side) {
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
