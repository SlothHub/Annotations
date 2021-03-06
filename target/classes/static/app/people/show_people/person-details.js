System.register(['angular2/core', 'angular2/router', './../person.service'], function(exports_1, context_1) {
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
    var core_1, router_1, person_service_1;
    var PersonDetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            }],
        execute: function() {
            PersonDetails = (function () {
                function PersonDetails(_personService, _routeParams) {
                    this._personService = _personService;
                    this._routeParams = _routeParams;
                }
                PersonDetails.prototype.ngOnInit = function () {
                    this.getPersonDetails();
                };
                PersonDetails.prototype.getPersonDetails = function () {
                    var _this = this;
                    console.log("getting person " + this._routeParams.get('id'));
                    var id = +this._routeParams.get('id'); //convert to number
                    this._personService.getPerson(id).subscribe(function (data) { _this.person = data; });
                };
                PersonDetails = __decorate([
                    core_1.Component({
                        selector: 'person-details',
                        templateUrl: 'app/people/show_people/person-details.html',
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PersonService, router_1.RouteParams])
                ], PersonDetails);
                return PersonDetails;
            }());
            exports_1("PersonDetails", PersonDetails);
        }
    }
});
//# sourceMappingURL=person-details.js.map