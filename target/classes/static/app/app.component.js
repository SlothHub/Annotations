System.register(['angular2/core', 'angular2/router', 'angular2/platform/browser', './people/person.service', './people/show_people/show-people.component', './people/show_people/person-details', './people/add_person/add-person.component', './test/test-component', './dogs/show_dogs/show-dogs.component'], function(exports_1, context_1) {
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
    var core_1, router_1, browser_1, router_2, person_service_1, show_people_component_1, person_details_1, add_person_component_1, test_component_1, show_dogs_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (show_people_component_1_1) {
                show_people_component_1 = show_people_component_1_1;
            },
            function (person_details_1_1) {
                person_details_1 = person_details_1_1;
            },
            function (add_person_component_1_1) {
                add_person_component_1 = add_person_component_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            },
            function (show_dogs_component_1_1) {
                show_dogs_component_1 = show_dogs_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _title) {
                    var _this = this;
                    this._router = _router;
                    this._title = _title;
                    this._router.subscribe(function (url) {
                        _this._title.setTitle(_this.getCurrentTitle());
                    });
                }
                AppComponent.prototype.getCurrentTitle = function () {
                    return this._router.currentInstruction.component.routeName;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\t\n\t\t\t<nav>\n\t\t\t<a [routerLink]=\"['ShowPeople']\">ShowPeople</a>\n\t\t\t<a [routerLink]=\"['Test']\">Test</a>\n\t\t\t<a [routerLink]=\"['Dogs']\">Dogs</a>\n\t\t\t<a [routerLink]=\"['AddPerson']\">AddPerson</a>\n\t\t\t</nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [person_service_1.PersonService, router_1.ROUTER_PROVIDERS, browser_1.Title]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/showPeople',
                            name: 'ShowPeople',
                            component: show_people_component_1.ShowPeopleComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'PeopleDetails',
                            component: person_details_1.PersonDetails
                        },
                        {
                            path: '/test/',
                            name: 'Test',
                            component: test_component_1.TestComponent
                        },
                        {
                            path: '/dogs/',
                            name: 'Dogs',
                            component: show_dogs_component_1.ShowDogsComponent
                        },
                        {
                            path: '/addPerson/',
                            name: 'AddPerson',
                            component: add_person_component_1.AddPersonComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_2.Router, browser_1.Title])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map