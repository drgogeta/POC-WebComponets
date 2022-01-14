import { Component, Prop, h, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { CharacterModel } from '../../models';
import { getCharacter } from '../../services';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  @Prop() match: MatchResults;
  @State() character: CharacterModel;

  componentWillLoad() {
    const { name } = this.match.params;
    getCharacter(name)
      .then(({ data }: any) => (this.character = data))
      .catch(console.warn);
  }

  render() {
    if (this.character) {
      return (
        <div class="character">
          <img src={this.character.image} alt="" />
          <span>{this.character.name}</span>
          <span>{this.character.gender}</span>
          <span>{this.character.origin.name}</span>
          <span>{this.character.location.name}</span>
          <span>{this.character.type}</span>
        </div>
      );
    }
  }
}
