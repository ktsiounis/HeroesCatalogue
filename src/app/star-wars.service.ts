export class StarWarsService {
  private characters = [
    {name: 'Luke Skywalker', side: 'all'},
    {name: 'Darth Vader', side: 'all'}
  ];

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
  }
}
