import { Injectable } from '@angular/core';

import { Inote } from './models/index';

@Injectable()
export class NotesService {

  constructor() { }

   data = [
    {
      "name": "ZZZ one",
      "description": "This is my note one",
      "date": new Date(2013, 11, 17, 3, 24, 0)
    },
    {
      "name": "XXX one",
      "description": "This is my note one",
      "date": new Date(1995, 11, 17, 3, 24, 0)
    },
    {
      "name": "AAA two",
      "description": "This is my note two",
      "date": new Date(2005, 11, 17, 3, 24, 0)
    },
    {
      "name": "BBB three",
      "description": "This is my note three",
      "date": new Date(1988, 11, 17, 3, 24, 0)
    }
  ]

  getNotes(): Inote[] {
    return this.data;
  }
  
  deleteNote(index) {
    this.data.splice(index, 1);
    return this.data;
  }

  addNote(data) {
    this.data.push(data);
    return this.data;
  }

  editNote() {
  // editItem(todo, newVal) {
  //   TODOS[todo.id - 1].name = newVal;
  //   return TODOS;
  }
}
