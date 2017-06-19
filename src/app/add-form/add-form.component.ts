import { Component, OnInit } from '@angular/core';

import { Inote } from '../models/index';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  model = new Inote('name', 'description', 27021987);
  submitted = false;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  addNote() {
     this.notesService.addNote();
     this.submitted = true;
  }
}
