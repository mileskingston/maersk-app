import { Component } from '@angular/core';

import { Inote } from '../models/index';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

  model = new Inote('', '', new Date());
  submitted = false;

  constructor(private notesService: NotesService) { }

  addNote(data) {
     this.model = new Inote(data.name, data.description, data.date);
     this.notesService.addNote(this.model);
     this.submitted = true;
     this.model = new Inote('', '', new Date());
  }
}
