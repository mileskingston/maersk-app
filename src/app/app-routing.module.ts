import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const Approutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: NoteListComponent },
  { path: 'detail/:id', component: NoteDetailComponent }
  // { path: 'home', component: HomeComponent},
  // { path: 'new', component: NewComponent},
  // { path: 'edit/:id', component: EditComponent}
  // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
