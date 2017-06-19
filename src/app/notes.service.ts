import { Injectable } from '@angular/core';

import { Inote } from './models/index';

@Injectable()
export class NotesService {

  constructor() { }

   data = [
    {
      "name": "Note one",
      "description": "This is my note one",
      "date": 270291987
    },
    {
      "name": "Note two",
      "description": "This is my note two",
      "date": 27041999
    }
  ]

  getNotes(): Inote[] {
    return this.data;
  }
  
  deleteNote(index) {
    this.data.splice(index, 1);
    return this.data;
  }

  addNote() {
  //   this.data.push(note);
  //   return this.data;
  }

  editNote() {
  // editItem(todo, newVal) {
  //   TODOS[todo.id - 1].name = newVal;
  //   return TODOS;
  }
}
