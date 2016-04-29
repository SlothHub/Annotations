System.register(['angular2/core', './../person.service'], function(exports_1, context_1) {
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
    var core_1, person_service_1;
    var AddPersonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            }],
        execute: function() {
            AddPersonComponent = (function () {
                //person = new Person(null,"","");
                function AddPersonComponent(_personService) {
                    this._personService = _personService;
                    this.active = true;
                    this.submitted = false;
                }
                AddPersonComponent.prototype.onSubmit = function (firstName, lastName) {
                    this.submitted = true;
                    //console.log(this.form.value)
                    console.log(firstName);
                    console.log(lastName);
                    console.log("test");
                    this._personService.addPersonPost(firstName, lastName);
                };
                AddPersonComponent.prototype.test = function () {
                    //this.person = new Person(null, "asdasd", "jjjj");
                };
                AddPersonComponent = __decorate([
                    core_1.Component({
                        selector: 'add-person',
                        templateUrl: 'app/people/add_person/add-person.html',
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PersonService])
                ], AddPersonComponent);
                return AddPersonComponent;
            }());
            exports_1("AddPersonComponent", AddPersonComponent);
        }
    }
});
//# sourceMappingURL=add-person.component.js.map