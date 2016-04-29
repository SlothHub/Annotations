System.register(['angular2/core', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1;
    var PersonService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PersonService = (function () {
                function PersonService(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                }
                PersonService.prototype.getPeople = function () {
                    console.log("request sent to get people");
                    return this._http.get('/getPeople').map(function (res) { return res.json(); });
                };
                PersonService.prototype.getPerson = function (id) {
                    console.log("getting person with id" + id);
                    return this._http.get('/getPerson?id=' + id).map(function (res) { return res.json(); });
                };
                PersonService.prototype.addPerson = function (firstName, lastName) {
                    var _this = this;
                    console.log("inserting person with name " + firstName + " " + lastName);
                    this._http.get('/savePerson?firstName=' + firstName + '&lastName=' + lastName)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (err) { return _this.logError(err); }, function () { return console.log('Random Quote Complete'); });
                };
                PersonService.prototype.addPersonPost = function (firstName, lastName) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    console.log("post person");
                    this._http.post('/savePersonPost', "firstName=" + firstName + "&lastName=" + lastName, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (err) { return _this.logError(err); }, function () { return console.log('Authentication Complete'); });
                };
                PersonService.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                PersonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], PersonService);
                return PersonService;
            }());
            exports_1("PersonService", PersonService);
        }
    }
});
//# sourceMappingURL=person.service.js.map