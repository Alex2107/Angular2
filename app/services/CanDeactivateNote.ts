import {Observable} from "rxjs";
import {RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate} from "@angular/router";
import {NotesEditorComponent} from "../notes.editor.component";
import {Injectable} from "@angular/core";
/**
 * Created by st13131 on 4/11/2018.
 */

@Injectable()
export class CanDeactivateNote implements CanDeactivate<NotesEditorComponent> {

    canDeactivate(
        notesEditorComponent: NotesEditorComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
            const note = notesEditorComponent.notesComponent.text;
        if (note && note.length>0) {
            return window.confirm(
                `You have entered the note.
        Do you really want to change section?`);
        } else return true;
    }
}