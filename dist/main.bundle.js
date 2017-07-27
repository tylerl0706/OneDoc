webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<layout-header></layout-header>\n\n<router-outlet></router-outlet>\n\n<layout-footer></layout-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.populate();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["k" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_article_module__ = __webpack_require__("../../../../../src/app/article/article.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_editor_module__ = __webpack_require__("../../../../../src/app/editor/editor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_module__ = __webpack_require__("../../../../../src/app/profile/profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var rootRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([], { useHash: true });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__article_article_module__["a" /* ArticleModule */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_6__editor_editor_module__["a" /* EditorModule */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_8__profile_profile_module__["a" /* ProfileModule */],
            rootRouting,
            __WEBPACK_IMPORTED_MODULE_10__shared__["c" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__settings_settings_module__["a" /* SettingsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__shared__["d" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["e" /* ArticlesService */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["f" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["g" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["h" /* JwtService */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["i" /* ProfilesService */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["j" /* TagsService */],
            __WEBPACK_IMPORTED_MODULE_10__shared__["k" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article/article-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <p class=\"card-text\">\n      {{ comment.body }}\n    </p>\n  </div>\n  <div class=\"card-footer\">\n    <a class=\"comment-author\" [routerLink]=\"['/profile', comment.author.username]\">\n      <img [src]=\"comment.author.image\" class=\"comment-author-img\" />\n    </a>\n    &nbsp;\n    <a class=\"comment-author\" [routerLink]=\"['/profile', comment.author.username]\">\n      {{ comment.author.username }}\n    </a>\n    <span class=\"date-posted\">\n      {{ comment.createdAt | date: 'longDate' }}\n    </span>\n    <span class=\"mod-options\" [hidden]=\"!canModify\">\n      <i class=\"ion-trash-a\" (click)=\"deleteClicked()\"></i>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article/article-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleCommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleCommentComponent = (function () {
    function ArticleCommentComponent(userService) {
        this.userService = userService;
        this.deleteComment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
    }
    ArticleCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.canModify = (userData.username === _this.comment.author.username);
        });
    };
    ArticleCommentComponent.prototype.deleteClicked = function () {
        this.deleteComment.emit(true);
    };
    return ArticleCommentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["p" /* Comment */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["p" /* Comment */]) === "function" && _a || Object)
], ArticleCommentComponent.prototype, "comment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], ArticleCommentComponent.prototype, "deleteComment", void 0);
ArticleCommentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'article-comment',
        template: __webpack_require__("../../../../../src/app/article/article-comment.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared__["k" /* UserService */]) === "function" && _b || Object])
], ArticleCommentComponent);

var _a, _b;
//# sourceMappingURL=article-comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/article-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleResolver = (function () {
    function ArticleResolver(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
    }
    ArticleResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.articlesService.get(route.params['slug'])
            .catch(function (err) { return _this.router.navigateByUrl('/'); });
    };
    return ArticleResolver;
}());
ArticleResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* ArticlesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */]) === "function" && _c || Object])
], ArticleResolver);

var _a, _b, _c;
//# sourceMappingURL=article-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-page\">\n\n  <div class=\"banner\">\n    <div class=\"container\">\n      <h1><a href=\"{{article.description}}\">{{ article.title }}</a></h1>\n      <h4><a href=\"{{article.description}}\">{{ article.description }}</a></h4>\n\n      <article-meta [article]=\"article\">\n\n          <span [hidden]=\"!canModify\">\n          <a class=\"btn btn-sm btn-outline-secondary\"\n             [routerLink]=\"['/editor', article.slug]\">\n            <i class=\"ion-edit\"></i> Edit Link\n          </a>\n\n          <button class=\"btn btn-sm btn-outline-danger\"\n            [ngClass]=\"{disabled: isDeleting}\"\n            (click)=\"deleteArticle()\">\n            <i class=\"ion-trash-a\"></i> Delete Link\n          </button>\n        </span>\n\n        <span [hidden]=\"canModify\">\n          <follow-button\n            [profile]=\"article.author\"\n            (onToggle)=\"onToggleFollowing($event)\">\n          </follow-button>\n\n          <favorite-button\n            [article]=\"article\"\n            (onToggle)=\"onToggleFavorite($event)\">\n            {{ article.favorited ? 'Un-Upvote' : 'Upvote' }} Link <span class=\"counter\">({{ article.favoritesCount }})</span>\n          </favorite-button>\n\n          <downvote-button\n            [article]=\"article\"\n            (onToggle)=\"onToggleDownvote($event)\">\n            {{ article.downvoted ? 'Un-Downvote' : 'Downvote' }} Link <span class=\"counter\">({{ article.downvotesCount }})</span>\n          </downvote-button>\n        </span>\n\n      </article-meta>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n\n    <div class=\"row article-content\">\n      <div class=\"col-md-12\">\n\n        <div [innerHTML]=\"article.body | markdown\"></div>\n\n        <ul class=\"tag-list\">\n          <li *ngFor=\"let tag of article.tagList\"\n            class=\"tag-default tag-pill\">\n            {{ tag }}\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n        <div *showAuthed=\"true\">\n          <list-errors [errors]=\"commentFormErrors\"></list-errors>\n          <form class=\"card comment-form\" (ngSubmit)=\"addComment()\">\n            <fieldset [disabled]=\"isSubmitting\">\n              <div class=\"card-block\">\n                <textarea class=\"form-control\"\n                  placeholder=\"Write a comment...\"\n                  rows=\"3\"\n                  [formControl]=\"commentControl\"\n                ></textarea>\n              </div>\n              <div class=\"card-footer\">\n                <img [src]=\"currentUser.image || 'https://static.productionready.io/images/smiley-cyrus.jpg'\" class=\"comment-author-img\" />\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n                 Post Comment\n                </button>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n\n        <div *showAuthed=\"false\">\n          <a [routerLink]=\"['/login']\">Sign in</a> or <a [routerLink]=\"['/register']\">sign up</a> to add comments on this link.\n        </div>\n\n        <article-comment\n          *ngFor=\"let comment of comments\"\n          [comment]=\"comment\"\n          (deleteComment)=\"onDeleteComment(comment)\">\n        </article-comment>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleComponent = (function () {
    function ArticleComponent(route, articlesService, commentsService, router, userService) {
        this.route = route;
        this.articlesService = articlesService;
        this.commentsService = commentsService;
        this.router = router;
        this.userService = userService;
        this.commentControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]();
        this.commentFormErrors = {};
        this.isSubmitting = false;
        this.isDeleting = false;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retreive the prefetched article
        this.route.data.subscribe(function (data) {
            _this.article = data.article;
            // Load the comments on this article
            _this.populateComments();
        });
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
            _this.canModify = (_this.currentUser.username === _this.article.author.username);
        });
    };
    ArticleComponent.prototype.onToggleFavorite = function (favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
            if (this.article['downvoted']) {
                this.article['downvoted'] = false;
                this.article['downvotesCount']--;
            }
        }
        else {
            this.article['favoritesCount']--;
        }
    };
    ArticleComponent.prototype.onToggleDownvote = function (downvoted) {
        this.article['downvoted'] = downvoted;
        if (downvoted) {
            this.article['downvotesCount']++;
            if (this.article['favorited']) {
                this.article['favorited'] = false;
                this.article['favoritesCount']--;
            }
        }
        else {
            this.article['downvotesCount']--;
        }
    };
    ArticleComponent.prototype.onToggleFollowing = function (following) {
        this.article.author.following = following;
    };
    ArticleComponent.prototype.deleteArticle = function () {
        var _this = this;
        this.isDeleting = true;
        this.articlesService.destroy(this.article.slug)
            .subscribe(function (success) {
            _this.router.navigateByUrl('/');
        });
    };
    ArticleComponent.prototype.populateComments = function () {
        var _this = this;
        this.commentsService.getAll(this.article.slug)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    ArticleComponent.prototype.addComment = function () {
        var _this = this;
        this.isSubmitting = true;
        this.commentFormErrors = {};
        var commentBody = this.commentControl.value;
        this.commentsService
            .add(this.article.slug, commentBody)
            .subscribe(function (comment) {
            _this.comments.unshift(comment);
            _this.commentControl.reset('');
            _this.isSubmitting = false;
        }, function (errors) {
            _this.isSubmitting = false;
            _this.commentFormErrors = errors;
        });
    };
    ArticleComponent.prototype.onDeleteComment = function (comment) {
        var _this = this;
        this.commentsService.destroy(comment.id, this.article.slug)
            .subscribe(function (success) {
            _this.comments = _this.comments.filter(function (item) { return item !== comment; });
        });
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'article-page',
        template: __webpack_require__("../../../../../src/app/article/article.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["e" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["e" /* ArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["g" /* CommentsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["k" /* UserService */]) === "function" && _e || Object])
], ArticleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_component__ = __webpack_require__("../../../../../src/app/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_comment_component__ = __webpack_require__("../../../../../src/app/article/article-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_resolver_service__ = __webpack_require__("../../../../../src/app/article/article-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__markdown_pipe__ = __webpack_require__("../../../../../src/app/article/markdown.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var articleRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'article/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__article_component__["a" /* ArticleComponent */],
        resolve: {
            article: __WEBPACK_IMPORTED_MODULE_4__article_resolver_service__["a" /* ArticleResolver */]
        }
    }
]);
var ArticleModule = (function () {
    function ArticleModule() {
    }
    return ArticleModule;
}());
ArticleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            articleRouting,
            __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_3__article_comment_component__["a" /* ArticleCommentComponent */],
            __WEBPACK_IMPORTED_MODULE_5__markdown_pipe__["a" /* MarkdownPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__article_resolver_service__["a" /* ArticleResolver */]
        ]
    })
], ArticleModule);

//# sourceMappingURL=article.module.js.map

/***/ }),

/***/ "../../../../../src/app/article/markdown.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__("../../../../marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MarkdownPipe = (function () {
    function MarkdownPipe() {
    }
    MarkdownPipe.prototype.transform = function (content) {
        return __WEBPACK_IMPORTED_MODULE_1_marked__(content, { sanitize: true });
    };
    return MarkdownPipe;
}());
MarkdownPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'markdown' })
], MarkdownPipe);

//# sourceMappingURL=markdown.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\">{{ title }}</h1>\n        <p class=\"text-xs-center\">\n          <a [routerLink]=\"['/login']\" *ngIf=\"authType == 'register'\">Have an account?</a>\n          <a [routerLink]=\"['/register']\" *ngIf=\"authType == 'login'\">Need an account?</a>\n        </p>\n        <list-errors [errors]=\"errors\"></list-errors>\n        <form [formGroup]=\"authForm\" (ngSubmit)=\"submitForm()\">\n          <fieldset [disabled]=\"isSubmitting\">\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"username\"\n                placeholder=\"Username\"\n                class=\"form-control form-control-lg\"\n                type=\"text\"\n                *ngIf=\"authType == 'register'\" />\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"email\"\n                placeholder=\"Email\"\n                class=\"form-control form-control-lg\"\n                type=\"text\" />\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"password\"\n                placeholder=\"Password\"\n                class=\"form-control form-control-lg\"\n                type=\"password\" />\n            </fieldset>\n            <button class=\"btn btn-lg btn-primary pull-xs-right\" [disabled]=\"!authForm.valid\" type=\"submit\">\n              {{ title }}\n            </button>\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(route, router, userService, fb) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.authType = '';
        this.title = '';
        this.errors = new __WEBPACK_IMPORTED_MODULE_3__shared__["o" /* Errors */]();
        this.isSubmitting = false;
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            // Get the last piece of the URL (it's either 'login' or 'register')
            _this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            _this.title = (_this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (_this.authType === 'register') {
                _this.authForm.addControl('username', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]());
            }
        });
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = new __WEBPACK_IMPORTED_MODULE_3__shared__["o" /* Errors */]();
        var credentials = this.authForm.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'auth-page',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["k" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], AuthComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__no_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/no-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var authRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__no_auth_guard_service__["a" /* NoAuthGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__no_auth_guard_service__["a" /* NoAuthGuard */]]
    }
]);
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            authRouting,
            __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__no_auth_guard_service__["a" /* NoAuthGuard */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/no-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoAuthGuard = (function () {
    function NoAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.take(1).map(function (bool) { return !bool; });
    };
    return NoAuthGuard;
}());
NoAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */]) === "function" && _b || Object])
], NoAuthGuard);

var _a, _b;
//# sourceMappingURL=no-auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/editor/editable-article-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableArticleResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditableArticleResolver = (function () {
    function EditableArticleResolver(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
    }
    EditableArticleResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.articlesService.get(route.params['slug'])
            .map(function (article) {
            if (_this.userService.getCurrentUser().username === article.author.username) {
                return article;
            }
            else {
                _this.router.navigateByUrl('/');
            }
        })
            .catch(function (err) { return _this.router.navigateByUrl('/'); });
    };
    return EditableArticleResolver;
}());
EditableArticleResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["e" /* ArticlesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */]) === "function" && _c || Object])
], EditableArticleResolver);

var _a, _b, _c;
//# sourceMappingURL=editable-article-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <list-errors [errors]=\"errors\"></list-errors>\n\n        <form [formGroup]=\"articleForm\">\n          <fieldset [disabled]=\"isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                formControlName=\"title\"\n                type=\"text\"\n                placeholder=\"What's a good title for this doc?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                formControlName=\"description\"\n                type=\"url\"\n                ng-model=\"url.text\"\n                required\n                placeholder=\"What is the link to this doc?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                formControlName=\"body\"\n                rows=\"8\"\n                placeholder=\"(optional) What else do you have to say about this doc?\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Enter tags\"\n                [formControl]=\"tagField\"\n                (keyup.enter)=\"addTag()\" />\n\n              <div class=\"tag-list\">\n                <span *ngFor=\"let tag of article.tagList\"\n                  class=\"tag-default tag-pill\">\n                  <i class=\"ion-close-round\" (click)=\"removeTag(tag)\"></i>\n                  {{ tag }}\n                </span>\n              </div>\n            </fieldset>\n\n            <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" (click)=\"submitForm()\">\n              Publish Link\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorComponent = (function () {
    function EditorComponent(articlesService, route, router, fb) {
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.article = new __WEBPACK_IMPORTED_MODULE_3__shared__["n" /* Article */]();
        this.tagField = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]();
        this.errors = {};
        this.isSubmitting = false;
        // use the FormBuilder to create a form group
        this.articleForm = this.fb.group({
            title: '',
            description: '',
            body: '',
        });
        // Optional: subscribe to value changes on the form
        // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there's an article prefetched, load it
        this.route.data.subscribe(function (data) {
            if (data.article) {
                _this.article = data.article;
                _this.articleForm.patchValue(data.article);
            }
        });
    };
    EditorComponent.prototype.addTag = function () {
        // retrieve tag control
        var tag = this.tagField.value;
        // only add tag if it does not exist yet
        if (this.article.tagList.indexOf(tag) < 0) {
            this.article.tagList.push(tag);
        }
        // clear the input
        this.tagField.reset('');
    };
    EditorComponent.prototype.removeTag = function (tagName) {
        this.article.tagList = this.article.tagList.filter(function (tag) { return tag !== tagName; });
    };
    EditorComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateArticle(this.articleForm.value);
        // post the changes
        this.articlesService
            .save(this.article)
            .subscribe(function (article) { return _this.router.navigateByUrl('/article/' + article.slug); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    EditorComponent.prototype.updateArticle = function (values) {
        Object.assign(this.article, values);
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'editor-page',
        template: __webpack_require__("../../../../../src/app/editor/editor.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["e" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["e" /* ArticlesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], EditorComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/editor/editor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editable_article_resolver_service__ = __webpack_require__("../../../../../src/app/editor/editable-article-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var editorRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'editor',
        component: __WEBPACK_IMPORTED_MODULE_2__editor_component__["a" /* EditorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared__["f" /* AuthGuard */]]
    },
    {
        path: 'editor/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__editor_component__["a" /* EditorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared__["f" /* AuthGuard */]],
        resolve: {
            article: __WEBPACK_IMPORTED_MODULE_3__editable_article_resolver_service__["a" /* EditableArticleResolver */]
        }
    }
]);
var EditorModule = (function () {
    function EditorModule() {
    }
    return EditorModule;
}());
EditorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            editorRouting,
            __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__editor_component__["a" /* EditorComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__editable_article_resolver_service__["a" /* EditableArticleResolver */]
        ]
    })
], EditorModule);

//# sourceMappingURL=editor.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-auth-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAuthResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeAuthResolver = (function () {
    function HomeAuthResolver(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeAuthResolver.prototype.resolve = function (route, state) {
        return this.userService.isAuthenticated.take(1);
    };
    return HomeAuthResolver;
}());
HomeAuthResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */]) === "function" && _b || Object])
], HomeAuthResolver);

var _a, _b;
//# sourceMappingURL=home-auth-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link {\n  cursor:pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n\n  <!-- <div class=\"banner\" *showAuthed=\"false\">\n    <div class=\"container\">\n      <h1 class=\"logo-font\">conduit</h1>\n      <p>A place to share your <i>Angular 2</i> knowledge.</p>\n    </div>\n  </div> -->\n\n  <div class=\"banner\">\n      <div class=\"container row\">\n        <input\n          id=\"mainSearch\"\n          class=\"col-md-12 search-box\"\n          [(ngModel)]=\"value\"\n          placeholder=\"Looking for anything in particular?\"\n          (keyup)=\"$event.keyCode == 13 && (searchInput.value.length > 0? doSearch('all', {title: value}) : doSearch('all'))\"\n          #searchInput>\n      </div>\n    </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <div class=\"feed-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 [ngClass]=\"{'active': listConfig.type === 'feed'}\"\n                 (click)=\"setListTo('feed')\">\n                 Your Feed\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 [ngClass]=\"{'active': listConfig.type === 'all' && !listConfig.filters.tag && !listConfig.filters.title }\"\n                 (click)=\"setListTo('all')\">\n                 Global Feed\n              </a>\n            </li>\n            <li class=\"nav-item\" [hidden]=\"!listConfig.filters.tag && !listConfig.filters.title\">\n              <a class=\"nav-link active\">\n                <i [hidden]=\"!listConfig.filters.tag\" class=\"ion-pound\"></i>\n                <i [hidden]=\"!listConfig.filters.title\" class=\"ion-search\"></i>\n                {{ listConfig.filters.tag || listConfig.filters.title }}\n              </a>\n            </li>\n          </ul>\n        </div>\n\n        <article-list [limit]=\"10\" [config]=\"listConfig\"></article-list>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"sidebar\">\n          <p>Popular Tags</p>\n\n          <div class=\"tag-list\">\n            <a href=\"#\"\n               *ngFor=\"let tag of tags\"\n               (click)=\"setListTo('all', {tag: tag})\"\n               class=\"tag-default tag-pill\">\n               {{ tag }}\n            </a>\n          </div>\n\n          <div [hidden]=\"tagsLoaded\">\n            Loading tags...\n          </div>\n\n          <div [hidden]=\"!tagsLoaded || tags.length\">\n            No tags are here... yet.\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, tagsService, userService) {
        this.router = router;
        this.tagsService = tagsService;
        this.userService = userService;
        this.listConfig = new __WEBPACK_IMPORTED_MODULE_2__shared__["m" /* ArticleListConfig */]();
        this.tags = [];
        this.tagsLoaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            // set the article list accordingly
            if (authenticated) {
                _this.setListTo('feed');
            }
            else {
                _this.setListTo('all');
            }
        });
        this.tagsService.getAll()
            .subscribe(function (tags) {
            _this.tags = tags;
            _this.tagsLoaded = true;
        });
    };
    HomeComponent.prototype.setListTo = function (type, filters) {
        if (type === void 0) { type = ''; }
        if (filters === void 0) { filters = {}; }
        // If feed is requested but user is not authenticated, redirect to login
        if (type === 'feed' && !this.isAuthenticated) {
            this.router.navigateByUrl('/login');
            return;
        }
        // Otherwise, set the list object
        this.listConfig = { type: type, filters: filters };
    };
    HomeComponent.prototype.doSearch = function (type, filters) {
        if (type === void 0) { type = ''; }
        if (filters === void 0) { filters = {}; }
        this.setListTo(type, filters);
        this.clearSearch();
    };
    HomeComponent.prototype.clearSearch = function () {
        this.value = '';
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'home-page',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["j" /* TagsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["j" /* TagsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_auth_resolver_service__ = __webpack_require__("../../../../../src/app/home/home-auth-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var homeRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        resolve: {
            isAuthenticated: __WEBPACK_IMPORTED_MODULE_3__home_auth_resolver_service__["a" /* HomeAuthResolver */]
        }
    }
]);
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            homeRouting,
            __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__home_auth_resolver_service__["a" /* HomeAuthResolver */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<article-list [limit]=\"10\" [config]=\"articlesConfig\">\n</article-list>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile-articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileArticlesComponent = (function () {
    function ProfileArticlesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.articlesConfig = new __WEBPACK_IMPORTED_MODULE_2__shared__["m" /* ArticleListConfig */]();
    }
    ProfileArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.articlesConfig = new __WEBPACK_IMPORTED_MODULE_2__shared__["m" /* ArticleListConfig */](); // Only method I found to refresh article load on swap
            _this.articlesConfig.filters.author = _this.profile.username;
        });
    };
    return ProfileArticlesComponent;
}());
ProfileArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'profile-articles',
        template: __webpack_require__("../../../../../src/app/profile/profile-articles.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileArticlesComponent);

var _a, _b;
//# sourceMappingURL=profile-articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile-favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<article-list [limit]=\"10\" [config]=\"favoritesConfig\">\n</article-list>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile-favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileFavoritesComponent = (function () {
    function ProfileFavoritesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.favoritesConfig = new __WEBPACK_IMPORTED_MODULE_2__shared__["m" /* ArticleListConfig */]();
    }
    ProfileFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.favoritesConfig.filters.favorited = _this.profile.username;
        });
    };
    return ProfileFavoritesComponent;
}());
ProfileFavoritesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'profile-favorites',
        template: __webpack_require__("../../../../../src/app/profile/profile-favorites.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileFavoritesComponent);

var _a, _b;
//# sourceMappingURL=profile-favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileResolver = (function () {
    function ProfileResolver(profilesService, router) {
        this.profilesService = profilesService;
        this.router = router;
    }
    ProfileResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.profilesService.get(route.params['username'])
            .catch(function (err) { return _this.router.navigateByUrl('/'); });
    };
    return ProfileResolver;
}());
ProfileResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* ProfilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["i" /* ProfilesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileResolver);

var _a, _b;
//# sourceMappingURL=profile-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n          <img [src]=\"profile.image\" class=\"user-img\" />\n          <h4>{{ profile.username }}</h4>\n          <p>{{ profile.bio }}</p>\n          <follow-button\n            [hidden]=\"isUser\"\n            [profile]=\"profile\"\n            (onToggle)=\"onToggleFollowing($event)\">\n          </follow-button>\n           <a [routerLink]=\"['/settings']\"\n              [hidden]=\"!isUser\"\n              class=\"btn btn-sm btn-outline-secondary action-btn\">\n              <i class=\"ion-gear-a\"></i> Edit Profile Settings\n            </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 routerLinkActive=\"active\"\n                 [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/profile', profile.username]\">\n                 My Links\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 routerLinkActive=\"active\"\n                 [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/profile', profile.username, 'favorites']\">\n                 Upvoted Links\n              </a>\n            </li>\n          </ul>\n        </div>\n\n        <router-outlet></router-outlet>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.profile = data.profile;
            // Load the current user's data.
            _this.userService.currentUser.subscribe(function (userData) {
                _this.currentUser = userData;
                _this.isUser = (_this.currentUser.username === _this.profile.username);
            });
        });
    };
    ProfileComponent.prototype.onToggleFollowing = function (following) {
        this.profile.following = following;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'profile-page',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["k" /* UserService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_articles_component__ = __webpack_require__("../../../../../src/app/profile/profile-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_favorites_component__ = __webpack_require__("../../../../../src/app/profile/profile-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_resolver_service__ = __webpack_require__("../../../../../src/app/profile/profile-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var profileRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'profile/:username',
        component: __WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfileComponent */],
        resolve: {
            profile: __WEBPACK_IMPORTED_MODULE_5__profile_resolver_service__["a" /* ProfileResolver */]
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__profile_articles_component__["a" /* ProfileArticlesComponent */]
            },
            {
                path: 'favorites',
                component: __WEBPACK_IMPORTED_MODULE_4__profile_favorites_component__["a" /* ProfileFavoritesComponent */]
            }
        ]
    }
]);
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            profileRouting,
            __WEBPACK_IMPORTED_MODULE_6__shared__["c" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_articles_component__["a" /* ProfileArticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_4__profile_favorites_component__["a" /* ProfileFavoritesComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__profile_resolver_service__["a" /* ProfileResolver */]
        ]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors [errors]=\"errors\"></list-errors>\n\n        <form [formGroup]=\"settingsForm\" (ngSubmit)=\"submitForm()\">\n          <fieldset [disabled]=\"isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                formControlName=\"image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                formControlName=\"username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Short bio about you\"\n                formControlName=\"bio\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                formControlName=\"email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                formControlName=\"password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Update Settings\n            </button>\n\n          </fieldset>\n        </form>\n\n        <!-- Line break for logout button -->\n        <hr />\n\n        <button class=\"btn btn-outline-danger\"\n          (click)=\"logout()\">\n          Or click here to logout.\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(router, userService, fb) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared__["l" /* User */]();
        this.errors = {};
        this.isSubmitting = false;
        // create form group using the form builder
        this.settingsForm = this.fb.group({
            image: '',
            username: '',
            bio: '',
            email: '',
            password: ''
        });
        // Optional: subscribe to changes on the form
        // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Make a fresh copy of the current user's object to place in editable form fields
        Object.assign(this.user, this.userService.getCurrentUser());
        // Fill the form
        this.settingsForm.patchValue(this.user);
    };
    SettingsComponent.prototype.logout = function () {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/');
    };
    SettingsComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        // update the model
        this.updateUser(this.settingsForm.value);
        this.userService
            .update(this.user)
            .subscribe(function (updatedUser) { return _this.router.navigateByUrl('/profile/' + updatedUser.username); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    SettingsComponent.prototype.updateUser = function (values) {
        Object.assign(this.user, values);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'settings-page',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared__["k" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared__["k" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var settingsRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared__["f" /* AuthGuard */]]
    }
]);
var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* SharedModule */],
            settingsRouting
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings_component__["a" /* SettingsComponent */]
        ]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/article-list.component.html":
/***/ (function(module, exports) {

module.exports = "<article-preview\n  *ngFor=\"let article of results\"\n  [article]=\"article\">\n</article-preview>\n\n<div class=\"article-preview\"\n  [hidden]=\"!loading\">\n  Loading articles...\n</div>\n\n<div class=\"article-preview\"\n  [hidden]=\"loading || results.length\">\n  No articles are here... yet.\n</div>\n\n<nav [hidden]=\"loading || totalPages <= 1\">\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"\n      [ngClass]=\"{'active': pageNumber === currentPage}\"\n      *ngFor=\"let pageNumber of totalPages\"\n      (click)=\"setPageTo(pageNumber)\">\n\n      <a class=\"page-link\" href=\"#\">{{ pageNumber }}</a>\n\n    </li>\n\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/article-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleListComponent = (function () {
    function ArticleListComponent(articlesService) {
        this.articlesService = articlesService;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    Object.defineProperty(ArticleListComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.query = config;
                this.currentPage = 1;
                this.runQuery();
            }
        },
        enumerable: true,
        configurable: true
    });
    ArticleListComponent.prototype.setPageTo = function (pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    };
    ArticleListComponent.prototype.runQuery = function () {
        var _this = this;
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.articlesService.query(this.query)
            .subscribe(function (data) {
            _this.loading = false;
            _this.results = data.articles;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            _this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / _this.limit)), function (val, index) { return index + 1; });
        });
    };
    return ArticleListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Number)
], ArticleListComponent.prototype, "limit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["e" /* ArticleListConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["e" /* ArticleListConfig */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models__["e" /* ArticleListConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["e" /* ArticleListConfig */]) === "function" && _b || Object])
], ArticleListComponent.prototype, "config", null);
ArticleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'article-list',
        template: __webpack_require__("../../../../../src/app/shared/article-helpers/article-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* ArticlesService */]) === "function" && _c || Object])
], ArticleListComponent);

var _a, _b, _c;
//# sourceMappingURL=article-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/article-meta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-meta\">\n  <a [routerLink]=\"['/profile', article.author.username]\">\n    <img [src]=\"article.author.image\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      [routerLink]=\"['/profile', article.author.username]\">\n      {{ article.author.username }}\n    </a>\n    <span class=\"date\">\n      {{ article.createdAt | date: 'longDate' }}\n    </span>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/article-meta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleMetaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleMetaComponent = (function () {
    function ArticleMetaComponent() {
    }
    return ArticleMetaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Article */]) === "function" && _a || Object)
], ArticleMetaComponent.prototype, "article", void 0);
ArticleMetaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'article-meta',
        template: __webpack_require__("../../../../../src/app/shared/article-helpers/article-meta.component.html")
    })
], ArticleMetaComponent);

var _a;
//# sourceMappingURL=article-meta.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/article-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-preview\">\n  <article-meta [article]=\"article\">\n    <downvote-button\n      [article]=\"article\"\n      (onToggle)=\"onToggleDownvote($event)\"\n      class=\"pull-xs-right\">\n      {{article.downvotesCount}}\n    </downvote-button>\n    <favorite-button\n      [article]=\"article\"\n      (onToggle)=\"onToggleFavorite($event)\"\n      class=\"pull-xs-right\">\n      {{article.favoritesCount}}\n    </favorite-button>\n  </article-meta>\n\n  <ng-template [ngIf]=\"article.description.length != 0\">\n    <h3 class=\"link-list-item\"><a href=\"{{article.description}}\"> {{ article.title }}</a></h3>\n    <p><a class=\"link-list-item-description\" href=\"{{article.description}}\"> {{ article.description }}</a><p>\n  </ng-template>\n  <a [routerLink]=\"['/article', article.slug]\" class=\"preview-link\">\n    <ng-template [ngIf]=\"article.description.length == 0\">\n    <h3 class=\"link-list-item\">{{ article.title }}</h3>\n    </ng-template>\n    <span> comments and more...</span>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill\"\n        *ngFor=\"let tag of article.tagList\">\n        {{ tag }}\n      </li>\n    </ul>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/article-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlePreviewComponent = (function () {
    function ArticlePreviewComponent() {
    }
    ArticlePreviewComponent.prototype.onToggleFavorite = function (favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
            if (this.article['downvoted']) {
                this.article['downvoted'] = false;
                this.article['downvotesCount']--;
            }
        }
        else {
            this.article['favoritesCount']--;
        }
    };
    ArticlePreviewComponent.prototype.onToggleDownvote = function (downvoted) {
        this.article['downvoted'] = downvoted;
        if (downvoted) {
            this.article['downvotesCount']++;
            if (this.article['favorited']) {
                this.article['favorited'] = false;
                this.article['favoritesCount']--;
            }
        }
        else {
            this.article['downvotesCount']--;
        }
    };
    return ArticlePreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Article */]) === "function" && _a || Object)
], ArticlePreviewComponent.prototype, "article", void 0);
ArticlePreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'article-preview',
        template: __webpack_require__("../../../../../src/app/shared/article-helpers/article-preview.component.html")
    })
], ArticlePreviewComponent);

var _a;
//# sourceMappingURL=article-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/article-helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_list_component__ = __webpack_require__("../../../../../src/app/shared/article-helpers/article-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__article_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_meta_component__ = __webpack_require__("../../../../../src/app/shared/article-helpers/article-meta.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__article_meta_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_preview_component__ = __webpack_require__("../../../../../src/app/shared/article-helpers/article-preview.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__article_preview_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/buttons/downvote-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-sm\"\n [ngClass]=\"{ 'disabled' : isSubmitting,\n              'btn-outline-primary': !article.downvoted,\n              'btn-primary': article.downvoted }\"\n (click)=\"toggleDownvote()\">\n  <i class=\"ion-arrow-down-b\"></i> <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/shared/buttons/downvote-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownvoteButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DownvoteButtonComponent = (function () {
    function DownvoteButtonComponent(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.isSubmitting = false;
    }
    DownvoteButtonComponent.prototype.toggleDownvote = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return;
            }
            // Downvote the article if it isn't downvoted yet
            if (!_this.article.downvoted) {
                _this.articlesService.downvote(_this.article.slug)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; });
                // Otherwise, undownvote the article
            }
            else {
                _this.articlesService.undownvote(_this.article.slug)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; });
            }
        });
    };
    return DownvoteButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Article */]) === "function" && _a || Object)
], DownvoteButtonComponent.prototype, "article", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], DownvoteButtonComponent.prototype, "onToggle", void 0);
DownvoteButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'downvote-button',
        template: __webpack_require__("../../../../../src/app/shared/buttons/downvote-button.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* ArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["h" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["h" /* UserService */]) === "function" && _d || Object])
], DownvoteButtonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=downvote-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/buttons/favorite-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-sm\"\n [ngClass]=\"{ 'disabled' : isSubmitting,\n              'btn-outline-primary': !article.favorited,\n              'btn-primary': article.favorited }\"\n (click)=\"toggleFavorite()\">\n  <i class=\"ion-arrow-up-b\"></i> <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/shared/buttons/favorite-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoriteButtonComponent = (function () {
    function FavoriteButtonComponent(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.isSubmitting = false;
    }
    FavoriteButtonComponent.prototype.toggleFavorite = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return;
            }
            // Favorite the article if it isn't favorited yet
            if (!_this.article.favorited) {
                _this.articlesService.favorite(_this.article.slug)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; });
                // Otherwise, unfavorite the article
            }
            else {
                _this.articlesService.unfavorite(_this.article.slug)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; });
            }
        });
    };
    return FavoriteButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Article */]) === "function" && _a || Object)
], FavoriteButtonComponent.prototype, "article", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], FavoriteButtonComponent.prototype, "onToggle", void 0);
FavoriteButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'favorite-button',
        template: __webpack_require__("../../../../../src/app/shared/buttons/favorite-button.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* ArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["h" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["h" /* UserService */]) === "function" && _d || Object])
], FavoriteButtonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=favorite-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/buttons/follow-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button\n  class=\"btn btn-sm action-btn\"\n  [ngClass]=\"{ 'disabled': isSubmitting,\n               'btn-outline-secondary': !profile.following,\n               'btn-secondary': profile.following }\"\n  (click)=\"toggleFollowing()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ profile.following ? 'Unfollow' : 'Follow' }} {{ profile.username }}\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/shared/buttons/follow-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowButtonComponent = (function () {
    function FollowButtonComponent(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.isSubmitting = false;
    }
    FollowButtonComponent.prototype.toggleFollowing = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return;
            }
            // Follow this profile if we aren't already
            if (!_this.profile.following) {
                _this.profilesService.follow(_this.profile.username)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; });
                // Otherwise, unfollow this profile
            }
            else {
                _this.profilesService.unfollow(_this.profile.username)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; });
            }
        });
    };
    return FollowButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models__["d" /* Profile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["d" /* Profile */]) === "function" && _a || Object)
], FollowButtonComponent.prototype, "profile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], FollowButtonComponent.prototype, "onToggle", void 0);
FollowButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'follow-button',
        template: __webpack_require__("../../../../../src/app/shared/buttons/follow-button.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["f" /* ProfilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["f" /* ProfilesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["h" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["h" /* UserService */]) === "function" && _d || Object])
], FollowButtonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=follow-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/buttons/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorite_button_component__ = __webpack_require__("../../../../../src/app/shared/buttons/favorite-button.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__favorite_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__follow_button_component__ = __webpack_require__("../../../../../src/app/shared/buttons/follow-button.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__follow_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__downvote_button_component__ = __webpack_require__("../../../../../src/app/shared/buttons/downvote-button.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__downvote_button_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_helpers__ = __webpack_require__("../../../../../src/app/shared/article-helpers/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons__ = __webpack_require__("../../../../../src/app/shared/buttons/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("../../../../../src/app/shared/layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__layout__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__layout__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_errors_component__ = __webpack_require__("../../../../../src/app/shared/list-errors.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__models__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__services__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__show_authed_directive__ = __webpack_require__("../../../../../src/app/shared/show-authed.directive.ts");
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.today = Date.now();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'layout-footer',
        template: __webpack_require__("../../../../../src/app/shared/layout/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">OneDoc</a>\n    <span class=\"subtitle\">Think Reddit... but for Documentation</span>\n\n    <!-- Show this for logged out users -->\n    <ul *showAuthed=\"false\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/login\"\n          routerLinkActive=\"active\">\n          Sign in\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/register\"\n          routerLinkActive=\"active\">\n          Sign up\n        </a>\n      </li>\n\n    </ul>\n\n    <!-- Show this for logged in users -->\n    <ul *showAuthed=\"true\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/editor\"\n          routerLinkActive=\"active\">\n          <i class=\"ion-compose\"></i>&nbsp;New Link\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/settings\"\n          routerLinkActive=\"active\">\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          [routerLink]=\"['/profile', currentUser.username]\"\n          routerLinkActive=\"active\">\n          <img [src]=\"currentUser.image\" *ngIf=\"currentUser.image\" class=\"user-pic\" />\n          {{ currentUser.username }}\n        </a>\n      </li>\n\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'layout-header',
        template: __webpack_require__("../../../../../src/app/shared/layout/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["h" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["h" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__("../../../../../src/app/shared/layout/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__("../../../../../src/app/shared/layout/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/list-errors.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\n  <li *ngFor=\"let error of errorList\">\n    {{ error }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/shared/list-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListErrorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListErrorsComponent = (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = [];
            if (errorList.errors) {
                for (var field in errorList.errors) {
                    this.formattedErrors.push(field + " " + errorList.errors[field]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    return ListErrorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Errors */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Errors */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Errors */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Errors */]) === "function" && _b || Object])
], ListErrorsComponent.prototype, "errors", null);
ListErrorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'list-errors',
        template: __webpack_require__("../../../../../src/app/shared/list-errors.component.html")
    })
], ListErrorsComponent);

var _a, _b;
//# sourceMappingURL=list-errors.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/article-list-config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListConfig; });
var ArticleListConfig = (function () {
    function ArticleListConfig() {
        this.type = 'all';
        this.filters = {};
    }
    return ArticleListConfig;
}());

//# sourceMappingURL=article-list-config.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/article.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article() {
        this.title = '';
        this.description = '';
        this.body = '';
        this.tagList = [];
    }
    return Article;
}());

//# sourceMappingURL=article.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

//# sourceMappingURL=comment.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/errors.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Errors; });
var Errors = (function () {
    function Errors() {
        this.errors = {};
    }
    return Errors;
}());

//# sourceMappingURL=errors.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_model__ = __webpack_require__("../../../../../src/app/shared/models/article.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__article_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_list_config_model__ = __webpack_require__("../../../../../src/app/shared/models/article-list-config.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__article_list_config_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_model__ = __webpack_require__("../../../../../src/app/shared/models/comment.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__comment_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_model__ = __webpack_require__("../../../../../src/app/shared/models/errors.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__errors_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_model__ = __webpack_require__("../../../../../src/app/shared/models/profile.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__profile_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__user_model__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/profile.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());

//# sourceMappingURL=profile.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiService = (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (this.jwtService.getToken()) {
            headersConfig['Authorization'] = "Token " + this.jwtService.getToken();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__jwt_service__["a" /* JwtService */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlesService = (function () {
    function ArticlesService(apiService) {
        this.apiService = apiService;
    }
    ArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        Object.keys(config.filters)
            .forEach(function (key) {
            params.set(key, config.filters[key]);
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), params).map(function (data) { return data; });
    };
    ArticlesService.prototype.get = function (slug) {
        return this.apiService.get('/articles/' + slug)
            .map(function (data) { return data.article; });
    };
    ArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/articles/' + slug);
    };
    ArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/articles/' + article.slug, { article: article })
                .map(function (data) { return data.article; });
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/articles/', { article: article })
                .map(function (data) { return data.article; });
        }
    };
    ArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.downvote = function (slug) {
        return this.apiService.post('/articles/' + slug + '/downvote');
    };
    ArticlesService.prototype.undownvote = function (slug) {
        return this.apiService.delete('/articles/' + slug + '/downvote');
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ArticlesService);

var _a;
//# sourceMappingURL=articles.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.take(1);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsService = (function () {
    function CommentsService(apiService) {
        this.apiService = apiService;
    }
    CommentsService.prototype.add = function (slug, payload) {
        return this.apiService
            .post("/articles/" + slug + "/comments", { comment: { body: payload } }).map(function (data) { return data.comment; });
    };
    CommentsService.prototype.getAll = function (slug) {
        return this.apiService.get("/articles/" + slug + "/comments")
            .map(function (data) { return data.comments; });
    };
    CommentsService.prototype.destroy = function (commentId, articleSlug) {
        return this.apiService
            .delete("/articles/" + articleSlug + "/comments/" + commentId);
    };
    return CommentsService;
}());
CommentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], CommentsService);

var _a;
//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_service__ = __webpack_require__("../../../../../src/app/shared/services/articles.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__articles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth-guard.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_service__ = __webpack_require__("../../../../../src/app/shared/services/comments.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__comments_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__jwt_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profiles_service__ = __webpack_require__("../../../../../src/app/shared/services/profiles.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__profiles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tags_service__ = __webpack_require__("../../../../../src/app/shared/services/tags.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__tags_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__user_service__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtService = (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['jwtToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    return JwtService;
}());
JwtService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])()
], JwtService);

//# sourceMappingURL=jwt.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/profiles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilesService = (function () {
    function ProfilesService(apiService) {
        this.apiService = apiService;
    }
    ProfilesService.prototype.get = function (username) {
        return this.apiService.get('/profiles/' + username)
            .map(function (data) { return data.profile; });
    };
    ProfilesService.prototype.follow = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    };
    ProfilesService.prototype.unfollow = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    };
    return ProfilesService;
}());
ProfilesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ProfilesService);

var _a;
//# sourceMappingURL=profiles.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/tags.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagsService = (function () {
    function TagsService(apiService) {
        this.apiService = apiService;
    }
    TagsService.prototype.getAll = function () {
        return this.apiService.get('/tags')
            .map(function (data) { return data.tags; });
    };
    return TagsService;
}());
TagsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], TagsService);

var _a;
//# sourceMappingURL=tags.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserService = (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_8__models__["a" /* User */]());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next(new __WEBPACK_IMPORTED_MODULE_8__models__["a" /* User */]());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .map(function (data) {
            _this.setAuth(data.user);
            return data;
        });
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .map(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__jwt_service__["a" /* JwtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__jwt_service__["a" /* JwtService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_helpers__ = __webpack_require__("../../../../../src/app/shared/article-helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buttons__ = __webpack_require__("../../../../../src/app/shared/buttons/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_errors_component__ = __webpack_require__("../../../../../src/app/shared/list-errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__ = __webpack_require__("../../../../../src/app/shared/show-authed.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["b" /* ArticleMetaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["c" /* ArticlePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["a" /* FavoriteButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["b" /* DownvoteButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["c" /* FollowButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__list_errors_component__["a" /* ListErrorsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__["a" /* ShowAuthedDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["b" /* ArticleMetaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__article_helpers__["c" /* ArticlePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["a" /* FavoriteButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["b" /* DownvoteButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_6__buttons__["c" /* FollowButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__list_errors_component__["a" /* ListErrorsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__["a" /* ShowAuthedDirective */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/show-authed.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowAuthedDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowAuthedDirective = (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "showAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    return ShowAuthedDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ShowAuthedDirective.prototype, "showAuthed", null);
ShowAuthedDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({ selector: '[showAuthed]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* TemplateRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ViewContainerRef */]) === "function" && _c || Object])
], ShowAuthedDirective);

var _a, _b, _c;
//# sourceMappingURL=show-authed.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    api_url: 'https://1esreddit-backend.azurewebsites.net/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
var bootstrapPromise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//Logging bootstrap information
bootstrapPromise.then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map