import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note/note.component';
import { NotesService } from './notes.service';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteListComponent,
    NoteComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
