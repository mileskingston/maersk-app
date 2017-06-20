import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

import { Inote } from './models/index';

@Injectable()
export class NotesService {

  // constructor(private http: Http) {}
  constructor() {}

   data = [
    {
      "id": 1,
      "name": "ZZZ one",
      "description": "This is my note one",
      "date": new Date(2013, 11, 17, 3, 24, 0)
    },
    {
      "id": 2,
      "name": "XXX one",
      "description": "This is my note one",
      "date": new Date(1995, 11, 17, 3, 24, 0)
    },
    {
      "id": 3,
      "name": "AAA two",
      "description": "This is my note two",
      "date": new Date(2005, 11, 17, 3, 24, 0)
    },
    {
      "id": 4,
      "name": "BBB three",
      "description": "This is my note three",
      "date": new Date(1988, 11, 17, 3, 24, 0)
    }
  ]

  // getNotes(): Observable<Inote[]> {
  getNotes(): Inote[] {
    if(localStorage.getItem('data') != null) {
      let localObject = localStorage.getItem('data');
      this.data = JSON.parse(localObject);
    }  else {
      localStorage.setItem('data', JSON.stringify(this.data));
    }

    return this.data;

      //   return this.http.get('src/app/notes.json')
      // .map(this.extractData)
      // .catch(this.handleError);
  }

  getNote(): Inote[] {
    return this.data;
  }
  
  deleteNote(index) {
    this.data.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.data));
    return this.data;
  }

  addNote(data) {
    this.data.push(data);
    localStorage.setItem('data', JSON.stringify(this.data));
    return this.data;
  }

  editNote() {}

  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body || {};
  // }

  // private handleError (error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
