import { Subject } from 'rxjs/Subject';

export class StarWarsService {
  private characters = [
    {name: 'Luke Skywalker', side: 'all'},
    {name: 'Darth Vader', side: 'all'}
  ];
  charactersChanged = new Subject<void>();

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
