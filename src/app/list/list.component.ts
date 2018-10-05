import { Component, OnInit } from '@angular/core';
import { Item } from './item/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: Item[] = [];

  constructor() {
    this.list.push(new Item('Título', 'Descrição do item'));
    this.list.push(new Item('Título 2', 'Descrição do item 2'));
  }

  ngOnInit() {}
}
