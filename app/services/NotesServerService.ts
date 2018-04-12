import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Note} from "../notes.component";
/**
 * Created by st13131 on 4/11/2018.
 */
@Injectable()
export class NotesServerService {
    private notesUrl = 'notes';  // URL to web api

    constructor(private http: Http) { }

    getNotes(section): Observable<Note[]>
    {
        //params.set('section', this.section);
        return this.http.get(this.notesUrl, {params:{section:section}})
            .map(response => response.json() as Note[]);
    }
}