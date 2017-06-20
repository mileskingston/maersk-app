import { Component, OnInit } from '@angular/core';

import { SortPipe } from '../sort.pipe';
import { NotesService } from '../notes.service';
import { Inote } from '../models/index';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  option: string;
  notes: Inote[];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getNotes();
  }

  deleteNote(index) {
    this.notesService.deleteNote(index);
  }

  editNote() {
    
  }

  sort(type) {
    this.option = type;
  }
}