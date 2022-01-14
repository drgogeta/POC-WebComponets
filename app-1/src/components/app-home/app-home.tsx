import { Component, h, State } from '@stencil/core';

import { CharacterModel } from '../../models';
import { getCharacters } from '../../services';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() characters: CharacterModel[] = [];

  componentWillLoad() {
    getCharacters()
      .then(({ data }: any) => (this.characters = [...data.results]))
      .catch(console.warn);
  }

  render() {
    if (this.characters.length > 1) {
      return this.characters.map(character => (
        <div class="characters">
          <div class="characters-item">
            <stencil-route-link url={`/profile/${character.id}`}>
              <img src={character.image} alt="character.name" />
              <span>{character.name}</span>
            </stencil-route-link>
          </div>
        </div>
      ));
    }
  }
}
