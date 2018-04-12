/**
 * Created by st13131 on 4/11/2018.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Section} from "./sections.component";
import {NotesServerService} from "./services/NotesServerService";
import {Note} from "./notes.component";
import {Observable} from "rxjs";
/**
 * Created by st13131 on 4/11/2018.
 */

@Component({
    selector: 'viewsection',
    templateUrl: 'app/view.section.component.html'

})

export class ViewSectionComponent implements OnInit{
    section:Section;
    //notes: Note[];
    notes$: Observable<Note[]>;

    constructor(private route: ActivatedRoute,
                private noteServer: NotesServerService) {
    }
    ngOnInit() {
        this.section = this.route.snapshot.params["name"];
        //this.getNotes().subscribe(notes=>this.notes=notes);
        this.notes$ = this.getNotes();
    }

    /*ngOnInit() {
     this.section = this.route.snapshot.params["name"];
     this.getNotes().subscribe(notes=>this.notes=notes);
     }*/
    getNotes() {
        return this.noteServer.getNotes(this.section);
    }
}
