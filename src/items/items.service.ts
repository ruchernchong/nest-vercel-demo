import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { escapeRegExp } from 'lodash';

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
    const safeName = escapeRegExp(name);

    return this.items.find((item) =>
      new RegExp(safeName, 'gi').test(item.name),
    );
  }
}
