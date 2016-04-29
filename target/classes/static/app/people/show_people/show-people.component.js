System.register(['angular2/core', './../person.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, person_service_1, router_1;
    var ShowPeopleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ShowPeopleComponent = (function () {
                function ShowPeopleComponent(_personService, _router) {
                    this._personService = _personService;
                    this._router = _router;
                }
                ShowPeopleComponent.prototype.getPeople = function () {
                    var _this = this;
                    this._personService.getPeople()
                        .subscribe(function (data) { _this.people = data; });
                };
                ShowPeopleComponent.prototype.ngOnInit = function () {
                    console.log("getting people");
                    console.log("changes");
                    this.getPeople();
                };
                ShowPeopleComponent.prototype.gotoDetail = function (person) {
                    console.log(person);
                    var link = ['PeopleDetails', { id: person.id }];
                    this._router.navigate(link);
                };
                ShowPeopleComponent = __decorate([
                    core_1.Component({
                        selector: 'show-people',
                        templateUrl: 'app/people/show_people/show-people.html',
                        styles: [
                            "\n\t\t.selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .people {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .people li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .people li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .people li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .people .text {\n      position: relative;\n      top: -3px;\n    }\n    .people .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n\t\t"
                        ]
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PersonService, router_1.Router])
                ], ShowPeopleComponent);
                return ShowPeopleComponent;
            }());
            exports_1("ShowPeopleComponent", ShowPeopleComponent);
        }
    }
});
//# sourceMappingURL=show-people.component.js.map