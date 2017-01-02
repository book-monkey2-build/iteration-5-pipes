webpackJsonp([0,3],{159:function(t,e,n){"use strict";var i=n(0),o=n(309),r=n(8),s=(n.n(r),n(672)),a=(n.n(s),n(673)),u=(n.n(a),n(671)),c=(n.n(u),n(670)),l=(n.n(c),n(247));n.d(e,"a",function(){return h});var f=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(t){this.http=t,this.api="https://book-monkey2-api.angular-buch.com",this.headers=new o.b,this.headers.append("Content-Type","application/json")}return t.prototype.getAll=function(){return this.http.get(this.api+"/books").retry(3).map(function(t){return t.json()}).map(function(t){return t.map(function(t){return l.a.fromObject(t)})}).catch(this.errorHandler)},t.prototype.getSingle=function(t){return this.http.get(this.api+"/book/"+t).retry(3).map(function(t){return t.json()}).map(function(t){return l.a.fromObject(t)}).catch(this.errorHandler)},t.prototype.check=function(t){return this.http.get(this.api+"/book/"+t+"/check").map(function(t){return t.json()}).catch(this.errorHandler)},t.prototype.create=function(t){return this.http.post(this.api+"/book",JSON.stringify(t),{headers:this.headers}).catch(this.errorHandler)},t.prototype.update=function(t){return this.http.put(this.api+"/book/"+t.isbn,JSON.stringify(t),{headers:this.headers}).catch(this.errorHandler)},t.prototype.remove=function(t){return this.http.delete(this.api+"/book/"+t).catch(this.errorHandler)},t.prototype.errorHandler=function(t){return r.Observable.throw(t)},t=f([n.i(i.Injectable)(),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.c&&o.c)&&e||Object])],t);var e}()},247:function(t,e,n){"use strict";var i=n(392);n.d(e,"a",function(){return o});var o=function(){function t(){}return t.empty=function(){return new i.a("","",[""],new Date,"",0,[{url:"",title:""}],"")},t.fromObject=function(t){return new i.a(t.isbn,t.title,t.authors,"string"==typeof t.published?new Date(t.published):t.published,t.subtitle,t.rating,t.thumbnails,t.description)},t}()},387:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=387},388:function(t,e,n){"use strict";var i=n(0),o=n(212),r=n(247),s=n(159);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,n){this.bs=t,this.router=e,this.route=n,this.book=r.a.empty()}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.params;this.bs.getSingle(e.isbn).subscribe(function(e){return t.book=e})},t.prototype.getRating=function(t){return new Array(t)},t.prototype.removeBook=function(){var t=this;confirm("Buch wirklich löschen?")&&this.bs.remove(this.book.isbn).subscribe(function(e){return t.router.navigate(["../"],{relativeTo:t.route})})},t=a([n.i(i.Component)({selector:"bm-book-details",template:n(663)}),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.a&&s.a)&&e||Object,"function"==typeof(c="undefined"!=typeof o.c&&o.c)&&c||Object,"function"==typeof(l="undefined"!=typeof o.b&&o.b)&&l||Object])],t);var e,c,l}()},389:function(t,e,n){"use strict";var i=n(0),o=n(212),r=n(194),s=n(247),a=n(159),u=n(698),c=n(700);n.d(e,"a",function(){return d});var l=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t,e,n,i){this.fb=t,this.bs=e,this.route=n,this.router=i,this.book=s.a.empty(),this.errors={},this.isUpdatingBook=!1}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.params.isbn;e&&(this.isUpdatingBook=!0,this.bs.getSingle(e).subscribe(function(e){t.book=e,t.initBook()})),this.initBook()},t.prototype.initBook=function(){var t=this;this.buildAuthorsArray(),this.buildThumbnailsArray(),this.myForm=this.fb.group({title:[this.book.title,r.Validators.required],subtitle:this.book.subtitle,isbn:[this.book.isbn,[r.Validators.required,c.a.isbnFormat],this.isUpdatingBook?null:c.a.isbnExists(this.bs)],description:this.book.description,authors:this.authors,thumbnails:this.thumbnails,published:this.book.published}),this.myForm.statusChanges.subscribe(function(){return t.updateErrorMessages()})},t.prototype.buildAuthorsArray=function(){this.authors=this.fb.array(this.book.authors,c.a.atLeastOneAuthor)},t.prototype.buildThumbnailsArray=function(){var t=this;this.thumbnails=this.fb.array(this.book.thumbnails.map(function(e){return t.fb.group({url:t.fb.control(e.url),title:t.fb.control(e.title)})}))},t.prototype.addAuthorControl=function(){this.authors.push(this.fb.control(null))},t.prototype.addThumbnailControl=function(){this.thumbnails.push(this.fb.group({url:null,title:null}))},t.prototype.submitForm=function(){var t=this;this.myForm.value.authors=this.myForm.value.authors.filter(function(t){return t}),this.myForm.value.thumbnails=this.myForm.value.thumbnails.filter(function(t){return t.url});var e=s.a.fromObject(this.myForm.value);this.isUpdatingBook?this.bs.update(e).subscribe(function(n){t.router.navigate(["../../books",e.isbn],{relativeTo:t.route})}):this.bs.create(e).subscribe(function(e){t.book=s.a.empty(),t.myForm.reset(s.a.empty())})},t.prototype.updateErrorMessages=function(){this.errors={};for(var t=0,e=u.a;t<e.length;t++){var n=e[t],i=this.myForm.get(n.forControl);i&&i.dirty&&i.invalid&&i.errors[n.forValidator]&&!this.errors[n.forControl]&&(this.errors[n.forControl]=n.text)}},t=l([n.i(i.Component)({selector:"bm-book-form",template:n(664)}),f("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.FormBuilder&&r.FormBuilder)&&e||Object,"function"==typeof(d="undefined"!=typeof a.a&&a.a)&&d||Object,"function"==typeof(h="undefined"!=typeof o.b&&o.b)&&h||Object,"function"==typeof(p="undefined"!=typeof o.c&&o.c)&&p||Object])],t);var e,d,h,p}()},390:function(t,e,n){"use strict";var i=n(0),o=n(159);n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.bs=t}return t.prototype.ngOnInit=function(){this.booksOb=this.bs.getAll()},t=r([n.i(i.Component)({selector:"bm-book-list",template:n(666)}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},391:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t=o([n.i(i.Component)({selector:"bm-home",template:'\n  <div class="ui container">\n    <h1>Home</h1>\n    <p>Das ist der BookMonkey.</p>\n    <a routerLink="../books" class="ui red button">\n      Buchliste ansehen\n      <i class="right arrow icon"></i>\n    </a>\n  </div>\n  '}),r("design:paramtypes",[])],t)}()},392:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e,n,i,o,r,s,a){this.isbn=t,this.title=e,this.authors=n,this.published=i,this.subtitle=o,this.rating=r,this.thumbnails=s,this.description=a}return t}()},395:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(703),n(480)),o=n(0),r=n(702),s=n(697);r.a.production&&n.i(o.enableProdMode)(),n.i(i.a)().bootstrapModule(s.a)},57:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},662:function(t,e){t.exports='<div class="ui three item tabs menu">\n  <a routerLink="home"  routerLinkActive="active" class="item">Home</a>\n  <a routerLink="books" routerLinkActive="active" class="item">Bücher</a>\n  <a routerLink="admin" routerLinkActive="active" class="item">Administration</a>\n</div>\n<router-outlet></router-outlet>\n'},663:function(t,e){t.exports='<div class="ui grid" *ngIf="book">\n  <div class="four wide column">\n    <img class="ui large image" [src]="book?.thumbnails && book?.thumbnails[0].url">\n  </div>\n  <div class="twelve wide column">\n    <h1 class="ui header">{{ book?.title }}</h1>\n    <h3 class="ui header">{{ book?.subtitle }}</h3>\n    <div class="ui divider"></div>\n    <div class="ui grid">\n      <div class="four wide column">\n        <h4 class="ui header">Autoren</h4>\n        <span *ngFor="let author of book?.authors; let l=last">\n          {{ author }}<span *ngIf="!l">, </span>\n        </span>\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">ISBN</h4>\n        {{ book?.isbn | isbn:true }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Erschienen</h4>\n        {{ book?.published }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Rating</h4>\n        <i *ngFor="let r of getRating(book?.rating)" class="yellow star icon"></i>\n      </div>\n    </div>\n  </div>\n  <div class="sixteen wide column">\n    <h3 class="ui header">Beschreibung</h3>\n    {{ book?.description }}\n  </div>\n  <div class="sixteen wide column">\n    <div class="ui small images">\n      <img *ngFor="let thumbnail of book?.thumbnails" [src]="thumbnail.url">\n    </div>\n  </div>\n</div>\n\n<button class="ui tiny red labeled icon button"\n        (click)="removeBook()">\n  <i class="remove icon"></i> Buch löschen\n</button>\n<a class="ui tiny yellow labeled icon button"\n        [routerLink]="[\'../../admin\', book?.isbn]">\n  <i class="write icon"></i> Buch bearbeiten\n</a>\n'},664:function(t,e){t.exports='<h1>Buchformular</h1>\n<form class="ui large form"\n      [formGroup]="myForm"\n      (ngSubmit)="submitForm()">\n\n  <div class="field">\n    <label>Buchtitel</label>\n    <input formControlName="title">\n    <div *ngIf="errors.title" class="ui negative message">\n      {{ errors.title }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Untertitel</label>\n    <input formControlName="subtitle">\n  </div>\n  <div class="field" [class.disabled]="isUpdatingBook">\n    <label>ISBN-Nummer</label>\n    <input formControlName="isbn">\n    <div *ngIf="errors.isbn" class="ui negative message">\n      {{ errors.isbn }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Erscheinungsdatum</label>\n    <input type="date"\n           useValueAsDate\n           formControlName="published">\n    <div *ngIf="errors.published" class="ui negative message">\n      {{ errors.published }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Autoren</label>\n    <div class="fields" formArrayName="authors">\n      <div class="fifteen wide field" *ngFor="let control of authors.controls; let i = index">\n        <input [formControlName]="i" placeholder="Autor {{i+1}}">\n      </div>\n      <div class="one wide field">\n        <button (click)="addAuthorControl()" class="ui large button" type="button"> + </button>\n      </div>\n    </div>\n    <div *ngIf="errors.authors" class="ui negative message">\n      {{ errors.authors }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Beschreibung</label>\n    <textarea formControlName="description" rows="3"></textarea>\n  </div>\n  <div class="field">\n    <label>Bilder</label>\n    <div formArrayName="thumbnails">\n      <div class="fields"\n          *ngFor="let control of thumbnails.controls; let i = index; let l = last"\n          [formGroupName]="i">\n        <div class="nine wide field">\n          <input formControlName="url" placeholder="http://bild{{i+1}}_Url">\n        </div>\n        <div class="six wide field">\n          <input formControlName="title" placeholder="Bild {{i+1}} Titel">\n        </div>\n        <div class="one wide field" *ngIf="l">\n          <button (click)="addThumbnailControl()" class="ui large button" type="button"> + </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <button type="submit" class="ui button" [disabled]="myForm.invalid">Speichern</button>\n</form>\n'},665:function(t,e){t.exports='<img class="ui tiny image"\n     *ngIf="book.thumbnails"\n     [src]="book.thumbnails[0].url">\n<div class="content">\n  <div class="header">{{ book?.title }}</div>\n  <div class="description"> {{ book?.subtitle }} </div>\n  <div class="metadata">\n    <span *ngFor="let author of book.authors; let l=last">\n      {{ author }}<span *ngIf="!l">, </span>\n    </span>\n  </div>\n  <div class="extra">{{ book?.isbn | isbn:true }}</div>\n</div>\n'},666:function(t,e){t.exports='<div class="ui middle aligned selection divided list">\n  <a class="bm-book-list-item item"\n      *ngFor="let b of booksOb | async"\n      [book]="b"\n      [routerLink]="b.isbn"></a>\n  <p *ngIf="!booksOb">Laden Daten...</p>\n  <p *ngIf="booksOb && !booksOb.length">Es wurden noch keine B&uuml;cher eingetragen.</p>\n</div>\n'},689:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(f===clearTimeout)return clearTimeout(t);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){b&&h&&(b=!1,h.length?p=h.concat(p):m=-1,p.length&&a())}function a(){if(!b){var t=o(s);b=!0;for(var e=p.length;e;){for(h=p,p=[];++m<e;)h&&h[m].run();m=-1,e=p.length}h=null,b=!1,r(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(t){f=i}}();var h,p=[],b=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new u(t,e)),1!==p.length||b||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},695:function(t,e,n){"use strict";var i=n(0),o=n(212),r=n(391),s=n(390),a=n(388),u=n(389);n.d(e,"a",function(){return d});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:r.a},{path:"books",component:s.a},{path:"books/:isbn",component:a.a},{path:"admin",component:u.a},{path:"admin/:isbn",component:u.a}],d=function(){function t(){}return t=c([n.i(i.NgModule)({imports:[o.a.forRoot(f)],exports:[o.a],providers:[]}),l("design:paramtypes",[])],t)}()},696:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t=o([n.i(i.Component)({selector:"bm-root",template:n(662)}),r("design:paramtypes",[])],t)}()},697:function(t,e,n){"use strict";var i=n(147),o=n(194),r=n(309),s=n(0),a=n(696),u=n(391),c=n(390),l=n(699),f=n(388),d=n(389),h=n(159),p=n(695),b=n(509),m=(n.n(b),n(701));n.d(e,"a",function(){return g});var v=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},y=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},g=function(){function t(){}return t=v([n.i(s.NgModule)({declarations:[a.a,u.a,c.a,l.a,f.a,d.a,m.a],imports:[i.a,o.FormsModule,o.ReactiveFormsModule,r.a,p.a,b.DateValueAccessorModule],providers:[h.a],bootstrap:[a.a]}),y("design:paramtypes",[])],t)}()},698:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=function(){function t(t,e,n){this.forControl=t,this.forValidator=e,this.text=n}return t}(),o=[new i("title","required","Ein Buchtitel muss angegeben werden"),new i("isbn","required","Es muss eine ISBN angegeben werden"),new i("isbn","isbnFormat","Die ISBN muss aus 10 oder 13 Zeichen bestehen"),new i("isbn","isbnExists","Die ISBN existiert bereits"),new i("published","required","Es muss ein Erscheinungsdatum angegeben werden"),new i("authors","atLeastOneAuthor","Es muss ein Autor angegeben werden")]},699:function(t,e,n){"use strict";var i=n(0),o=n(392);n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return r([n.i(i.Input)(),s("design:type","function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object)],t.prototype,"book",void 0),t=r([n.i(i.Component)({selector:"a.bm-book-list-item",template:n(665)}),s("design:paramtypes",[])],t);var e}()},700:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t.isbnFormat=function(t){if(!t.value)return null;var e=t.value.replace(/-/g,""),n=/(^\d{10}$)|(^\d{13}$)/;return n.test(e)?null:{isbnFormat:{valid:!1}}},t.atLeastOneAuthor=function(t){var e=t.controls.some(function(t){return!!t.value});return e?null:{atLeastOneAuthor:{valid:!1}}},t.isbnExists=function(t){return function(e){return t.check(e.value).map(function(t){return t===!1?null:{isbnExists:{valid:!1}}})}},t}()},701:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.transform=function(t,e){if(!t||10!==t.length&&13!==t.length)return null;var n="";return e&&(n=10===t.length?"ISBN-10: ":"ISBN-13: "),10===t.length?n+t:""+n+t.substr(0,3)+"-"+t.substr(3)},t=o([n.i(i.Pipe)({name:"isbn"}),r("design:paramtypes",[])],t)}()},702:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},703:function(t,e,n){"use strict";var i=n(524),o=(n.n(i),n(517)),r=(n.n(o),n(513)),s=(n.n(r),n(519)),a=(n.n(s),n(518)),u=(n.n(a),n(516)),c=(n.n(u),n(515)),l=(n.n(c),n(523)),f=(n.n(l),n(512)),d=(n.n(f),n(511)),h=(n.n(d),n(521)),p=(n.n(h),n(514)),b=(n.n(p),n(522)),m=(n.n(b),n(520)),v=(n.n(m),n(525)),y=(n.n(v),n(694));n.n(y)},704:function(t,e,n){t.exports=n(395)}},[704]);
//# sourceMappingURL=main.7a62627ab2e7b0717f71.bundle.map