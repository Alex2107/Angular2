/**
 * Created by st13131 on 4/9/2018.
 */
import {Component, Input, OnChanges} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs";
import {NotesServerService} from "./services/NotesServerService";

export interface Note {
    text: string;

}
@Component({
    selector: 'notes',
    templateUrl: 'app/notes.component.html'
})
//export class NotesComponent { }
export class NotesComponent implements OnChanges{
    private notesUrl = 'notes';  // URL to web
    notes: Note[] = [
        {text:"Note one"},
        {text:"Note two"}
    ]
    text: string;
    @Input() section:string = 'Work';

   /* ngOnInit():void
    {this.readNotes();}
*/
    ngOnChanges():void
    {this.readNotes();}
   /* constructor(private http: Http) {
        this.getNotes().then(notes=>{
            this.notes=notes
            console.log(notes);
        });
    }*/

    constructor(private http:Http, private notesServer: NotesServerService) {}

    readNotes() {
        this.notesServer.getNotes(this.section).subscribe(notes=>{
            this.notes=notes;
        });
    }
    addNote(note:Note) {
        this.http.post(this.notesUrl, note).toPromise()
            .then(response => {
                this.readNotes();
            } );
    }


    add() {
        let note = { text: this.text, section: this.section };
        this.notes.push(note);
        this.text = "";
        this.addNote(note);

    }

    remove(id:string) {
        this.http.delete(this.notesUrl, { params: {id} })
            .toPromise()
            .then(response => {
                console.log(
                    `note with id ${id} removed, response`, response);
                this.readNotes();
            });
    }
    /*
    remove(idx) {
        this.notes.splice(idx,1);
        this.removeNote(idx);
    }
*/


    /*    getSections(): Observable<Section[]> {
     return this.http.get(this.sectionsUrl)
     .map(response => response.json() as Section[]);
     }*/
    /*
    addNote(note:Note) {
        this.http.post(this.notesUrl, note).toPromise()
            .then(response => console.log("note sent, response", response) );
    }*/
    removeNote(idx) {

        this.http.delete(`${this.notesUrl}/${idx}`).toPromise()
            .then(response => console.log("note remove, response", response) );
    }
}
