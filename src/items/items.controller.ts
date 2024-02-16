import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  getItems(): Item[] {
    return this.itemService.getItems();
  }

  @Get(':name')
  getItemById(@Param('name') name: string): Item {
    return this.itemService.getItemsByName(name);
  }
}
