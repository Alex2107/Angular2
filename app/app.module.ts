import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { NotesComponent } from './notes.component';
import { HttpModule }    from '@angular/http';
import { SectionsComponent } from './sections.component';
import {DragulaModule} from "ng2-dragula";
import { SectionFilterPipe } from './section.filter.pipe';
import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./page.not.found.component";
import {NotesEditorComponent} from "./notes.editor.component";
import {ViewSectionComponent} from "./view.section.component";
import {NotesServerService} from "./services/NotesServerService";
import {CanDeactivateNote} from "./services/CanDeactivateNote";
import {UserFormComponent} from "./user.form.component";
import {EqualToValidator} from "./directives/EqualToValidator";
import {UserUniqueValidator} from "./directives/UserUniqueValidator";

const appRoutes: Routes = [
  { path: 'viewSection/:name', component: ViewSectionComponent },
  { path: 'register', component: UserFormComponent },
  { path: ':name', component: NotesEditorComponent , canDeactivate: [CanDeactivateNote] },
  { path: '', component: NotesEditorComponent, canDeactivate: [CanDeactivateNote]  },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, DragulaModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, NotesComponent, SectionsComponent,SectionFilterPipe,NotesEditorComponent,
                  PageNotFoundComponent, ViewSectionComponent, UserFormComponent, EqualToValidator,
                  UserUniqueValidator],
  bootstrap:    [ AppComponent ],
  providers:    [ NotesServerService, CanDeactivateNote ]
})
export class AppModule { }