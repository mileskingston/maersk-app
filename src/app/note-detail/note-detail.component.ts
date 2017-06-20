import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NotesService } from '../notes.service';
import { Inote } from '../models/index';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  note: Inote[];

  constructor(private location: Location, private route: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit() {
    // console.log(this.route.params)

    this.note = this.notesService.getNote();

      // .switchMap((params: Params) => this.notesService.getNote(+params['id']))
      // .subscribe(note => this.note = note);
  }

  goBack() {
    this.location.back();
  }
}
