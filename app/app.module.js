"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var notes_component_1 = require("./notes.component");
var http_1 = require("@angular/http");
var sections_component_1 = require("./sections.component");
var ng2_dragula_1 = require("ng2-dragula");
var section_filter_pipe_1 = require("./section.filter.pipe");
var router_1 = require("@angular/router");
var page_not_found_component_1 = require("./page.not.found.component");
var notes_editor_component_1 = require("./notes.editor.component");
var view_section_component_1 = require("./view.section.component");
var NotesServerService_1 = require("./services/NotesServerService");
var CanDeactivateNote_1 = require("./services/CanDeactivateNote");
var user_form_component_1 = require("./user.form.component");
var EqualToValidator_1 = require("./directives/EqualToValidator");
var UserUniqueValidator_1 = require("./directives/UserUniqueValidator");
var appRoutes = [
    { path: 'viewSection/:name', component: view_section_component_1.ViewSectionComponent },
    { path: 'register', component: user_form_component_1.UserFormComponent },
    { path: ':name', component: notes_editor_component_1.NotesEditorComponent, canDeactivate: [CanDeactivateNote_1.CanDeactivateNote] },
    { path: '', component: notes_editor_component_1.NotesEditorComponent, canDeactivate: [CanDeactivateNote_1.CanDeactivateNote] },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, ng2_dragula_1.DragulaModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, notes_component_1.NotesComponent, sections_component_1.SectionsComponent, section_filter_pipe_1.SectionFilterPipe, notes_editor_component_1.NotesEditorComponent,
                page_not_found_component_1.PageNotFoundComponent, view_section_component_1.ViewSectionComponent, user_form_component_1.UserFormComponent, EqualToValidator_1.EqualToValidator,
                UserUniqueValidator_1.UserUniqueValidator],
            bootstrap: [app_component_1.AppComponent],
            providers: [NotesServerService_1.NotesServerService, CanDeactivateNote_1.CanDeactivateNote]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map