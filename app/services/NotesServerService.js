"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
/**
 * Created by st13131 on 4/11/2018.
 */
var NotesServerService = /** @class */ (function () {
    function NotesServerService(http) {
        this.http = http;
        this.notesUrl = 'notes'; // URL to web api
    }
    NotesServerService.prototype.getNotes = function (section) {
        //params.set('section', this.section);
        return this.http.get(this.notesUrl, { params: { section: section } })
            .map(function (response) { return response.json(); });
    };
    NotesServerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NotesServerService);
    return NotesServerService;
}());
exports.NotesServerService = NotesServerService;
//# sourceMappingURL=NotesServerService.js.map