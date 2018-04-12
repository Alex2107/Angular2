import {Component, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {NotesComponent} from "./notes.component";
/**
 * Created by st13131 on 4/11/2018.
 */

@Component({
    selector: 'noteseditor',
    templateUrl: 'app/notes.editor.component.html'

})


export class NotesEditorComponent {
    section: string;
    @ViewChild(NotesComponent) notesComponent:NotesComponent;

    constructor(private route: ActivatedRoute, private router: Router)

    {
        this.route.params
            .map(params=>params["name"])
            .subscribe(section=>this.section=section);
    }

    setSection(section:string) {
        //this.section = section;
        this.router.navigate([section]);

    }
}