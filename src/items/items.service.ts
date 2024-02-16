import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      name: 'Foo',
      quantity: 1,
    },
    {
      name: 'Bar',
      quantity: 2,
    },
  ];

  getItems(): Item[] {
    return this.items;
  }

  getItemsByName(name: string): Item {
    return this.items.find((item) => new RegExp(name, 'gi').test(item.name));
  }
}
