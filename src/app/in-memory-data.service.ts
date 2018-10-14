import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hotel } from './hotel';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const hotels = [
      {
        id: 1,
        name: 'Golden Tulip',
        description: 'Golden Tulip é uma cadeia originalmente holandesa de hotéis e resorts. Em todo o mundo existem mais de 240 hotéis Golden Tulip espalhados por 45 países.',
        logo: 'golden-tulip.svg'
      },
      {
        id: 2,
        name: 'Tulip Inn',
        description: 'Os hotéis e suítes Tulip Inn oferecem acomodações de qualidade incrivelmente descomplicadas com simplicidade e aquele algo a mais.',
        logo: 'golden-tulip.svg'
      },
      {
        id: 3,
        name: 'Royal Tulip',
        description: 'A experiência dos hotéis Royal Tulip lhe dá a chance de desfrutar de hotéis excepcionais em locais extraordinários.',
        logo: 'golden-tulip.svg'
      }
    ];
    return {hotels};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hotel[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
