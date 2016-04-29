System.register(['angular2/core', 'angular2/platform/browser', './../dog.service'], function(exports_1, context_1) {
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
    var core_1, browser_1, dog_service_1;
    var ShowDogsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (dog_service_1_1) {
                dog_service_1 = dog_service_1_1;
            }],
        execute: function() {
            ShowDogsComponent = (function () {
                function ShowDogsComponent(_dogService, _title) {
                    this._dogService = _dogService;
                    this._title = _title;
                }
                ShowDogsComponent.prototype.getDogs = function () {
                    var _this = this;
                    this._dogService.getDogs()
                        .then(function (dogs) { return _this.dogs = dogs; });
                };
                ShowDogsComponent.prototype.ngOnInit = function () {
                    this._title.setTitle("Dogs");
                    this.getDogs();
                };
                ShowDogsComponent = __decorate([
                    core_1.Component({
                        selector: 'show-dogs',
                        templateUrl: 'app/dogs/show_dogs/show-dogs.html',
                        providers: [dog_service_1.DogService]
                    }), 
                    __metadata('design:paramtypes', [dog_service_1.DogService, browser_1.Title])
                ], ShowDogsComponent);
                return ShowDogsComponent;
            }());
            exports_1("ShowDogsComponent", ShowDogsComponent);
        }
    }
});
//# sourceMappingURL=show-dogs.component.js.map