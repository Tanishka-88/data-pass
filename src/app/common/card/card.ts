import { Component, EventEmitter, Input, Output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input('data') Data: any;
  @Output('out') out= new EventEmitter<number>();

  myfun(){
    this.out.emit();
  }
  }