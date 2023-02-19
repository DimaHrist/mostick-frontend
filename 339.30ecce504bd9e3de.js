"use strict";(self.webpackChunkmostick_frontend=self.webpackChunkmostick_frontend||[]).push([[339],{8339:(ye,at,s)=>{s.r(at),s.d(at,{StreamsModule:()=>E});var p=s(6895),Z=s(5197),i=s(4650),At=s(1135);class v{constructor(){this.url="wss://api.mostick.lutrastickers.com/api/v1/ws/1",this.messages$=new At.X([])}connect(){this.socket=new WebSocket(this.url),this.socket.addEventListener("message",t=>{const e=JSON.parse(JSON.parse(t.data)),o=[...this.messages$.getValue(),e];this.messages$.next(o)})}sendMessage(t){const e=JSON.stringify({text:t,type:"send_message"});this.socket?.send(e)}deleteMessage(t){const e=JSON.stringify({message_id:t,type:"delete_message"});this.socket?.send(e)}}v.\u0275fac=function(t){return new(t||v)},v.\u0275prov=i.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"});var st=s(1030),z=s(655),$=s(8923);const Et=["*"];let St=(()=>{class n{constructor(){this.size="m",this.textAlign="left",this.hoverable=!1,this.transparent=!1}get sizeS(){return"s"===this.size}get sizeM(){return"m"===this.size}get sizeL(){return"l"===this.size}get textAlignLeft(){return"left"===this.textAlign}get textAlignCenter(){return"center"===this.textAlign}get textAlignRight(){return"right"===this.textAlign}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["tui-island"],["a","tuiIsland",""]],hostAttrs:[1,"tui-island"],hostVars:16,hostBindings:function(e,o){2&e&&i.ekj("tui-island_hoverable",o.hoverable)("tui-island_transparent",o.transparent)("tui-island_size_s",o.sizeS)("tui-island_size_m",o.sizeM)("tui-island_size_l",o.sizeL)("tui-island_text-align_left",o.textAlignLeft)("tui-island_text-align_center",o.textAlignCenter)("tui-island_text-align_right",o.textAlignRight)},inputs:{size:"size",textAlign:"textAlign",hoverable:"hoverable",transparent:"transparent"},ngContentSelectors:Et,decls:1,vars:0,template:function(e,o){1&e&&(i.F$t(),i.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),(0,z.gn)([(0,$.TH)()],n.prototype,"size",void 0),(0,z.gn)([(0,$.TH)()],n.prototype,"textAlign",void 0),(0,z.gn)([(0,$.TH)()],n.prototype,"hoverable",void 0),(0,z.gn)([(0,$.TH)()],n.prototype,"transparent",void 0),n})(),Rt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[p.ez]]}),n})();var g=s(4006),R=s(1195),ct=s(2722),lt=s(8540),ut=s(3422),dt=s(1054),Ut=s(9255),kt=s(7414),V=s(1127),C=s(117),B=s(3861),H=s(1308),Ft=s(6966),M=(s(4004),s(243)),l=s(7328),x=s(8535),_=s(8865),G=s(2665),T=s(1225);const b=12,q=9999;new i.OlP("[TUI_DATE_FORMAT]: Active date format for Taiga UI",{factory:()=>"DMY"}),new i.OlP("[TUI_DATE_SEPARATOR]: Date separator for Taiga UI components",{factory:()=>"."});class d{constructor(t){this.year=t,_.z.assert(d.isValidYear(t))}static isValidYear(t){return Number.isInteger(t)&&(0,T.wf)(t,0,q+1)}static isLeapYear(t){return _.z.assert(d.isValidYear(t)),t%400==0||t%4==0&&t%100!=0}static getAbsoluteLeapYears(t){return _.z.assert(d.isValidYear(t)),Math.ceil(t/400)+(Math.ceil(t/4)-Math.ceil(t/100))}static lengthBetween(t,e){return e.year-t.year}static normalizeYearPart(t){return(0,T.G1)(t,0,q)}get formattedYear(){return String(this.year).padStart(4,"0")}get isLeapYear(){return d.isLeapYear(this.year)}get absoluteLeapYears(){return d.getAbsoluteLeapYears(this.year)}yearBefore({year:t}){return this.year<t}yearSameOrBefore({year:t}){return this.year<=t}yearSame({year:t}){return this.year===t}yearSameOrAfter({year:t}){return this.year>=t}yearAfter({year:t}){return this.year>t}append({year:t=0}){_.z.assert(Number.isInteger(t));const e=this.year+t;return _.z.assert(d.isValidYear(e)),new d(e)}toString(){return this.formattedYear}valueOf(){return this.year}[Symbol.toPrimitive](t){return Date.prototype[Symbol.toPrimitive].call(this,t)}toJSON(){return this.formattedYear}}class u extends d{constructor(t,e){super(t),this.month=e,_.z.assert(u.isValidMonth(t,e))}static isValidMonth(t,e){return d.isValidYear(t)&&u.isValidMonthPart(e)}static getMonthDaysCount(t,e){switch(_.z.assert(u.isValidMonthPart(t)),t){case 1:return e?29:28;case 3:case 5:case 8:case 10:return 30;default:return 31}}static currentLocal(){const t=new Date;return new u(t.getFullYear(),t.getMonth())}static currentUtc(){const t=new Date;return new u(t.getUTCFullYear(),t.getUTCMonth())}static lengthBetween(t,e){return e.month+12*e.year-(t.month+12*t.year)}static normalizeMonthPart(t){return(0,T.G1)(t,0,11)}static isValidMonthPart(t){return Number.isInteger(t)&&(0,T.wf)(t,0,12)}get formattedMonthPart(){return String(this.month+1).padStart(2,"0")}get daysCount(){return u.getMonthDaysCount(this.month,this.isLeapYear)}monthBefore(t){return this.yearBefore(t)||this.yearSame(t)&&this.month<t.month}monthSameOrBefore(t){return this.yearBefore(t)||this.yearSame(t)&&this.month<=t.month}monthSame(t){return this.yearSame(t)&&this.month===t.month}monthSameOrAfter(t){return this.yearAfter(t)||this.yearSame(t)&&this.month>=t.month}monthAfter(t){return this.yearAfter(t)||this.yearSame(t)&&this.month>t.month}append({year:t=0,month:e=0}){const o=(this.year+t)*b+this.month+e;return new u(Math.floor(o/b),o%b)}toString(){return`${this.formattedMonthPart}.${this.formattedYear}`}valueOf(){return this.toLocalNativeDate().valueOf()}toJSON(){return`${super.toJSON()}-${this.formattedMonthPart}`}toLocalNativeDate(){return new Date(this.year,this.month)}toUtcNativeDate(){return new Date(Date.UTC(this.year,this.month))}}class h extends u{constructor(t,e,o){super(t,e),this.day=o,_.z.assert(h.isValidDay(t,e,o))}static fromLocalNativeDate(t){return new h(t.getFullYear(),t.getMonth(),t.getDate())}static fromUtcNativeDate(t){return new h(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())}static isValidDay(t,e,o){return u.isValidMonth(t,e)&&Number.isInteger(o)&&(0,T.wf)(o,1,u.getMonthDaysCount(e,d.isLeapYear(t))+1)}static currentLocal(){const t=new Date,e=t.getFullYear(),o=t.getMonth(),r=t.getDate();return new h(e,o,r)}static currentUtc(){const t=new Date,e=t.getUTCFullYear(),o=t.getUTCMonth(),r=t.getUTCDate();return new h(e,o,r)}static normalizeOf(t,e,o){const r=d.normalizeYearPart(t),a=u.normalizeMonthPart(e),c=h.normalizeDayPart(o,a,r);return new h(r,a,c)}static lengthBetween(t,e){return Math.round((e.toLocalNativeDate().getTime()-t.toLocalNativeDate().getTime())/864e5)}static parseRawDateString(t,e="DMY"){switch(_.z.assert(10===t.length,"[parseRawDateString]: wrong date string length"),e){case"YMD":return{day:parseInt(t.slice(8,10),10),month:parseInt(t.slice(5,7),10)-1,year:parseInt(t.slice(0,4),10)};case"MDY":return{day:parseInt(t.slice(3,5),10),month:parseInt(t.slice(0,2),10)-1,year:parseInt(t.slice(6,10),10)};default:return{day:parseInt(t.slice(0,2),10),month:parseInt(t.slice(3,5),10)-1,year:parseInt(t.slice(6,10),10)}}}static normalizeParse(t,e="DMY"){const{day:o,month:r,year:a}=this.parseRawDateString(t,e);return h.normalizeOf(a,r,o)}static jsonParse(t){const{day:e,month:o,year:r}=this.parseRawDateString(t,"YMD");if(!d.isValidYear(r))throw new G.JY(r);if(!u.isValidMonth(r,o))throw new G.AM(o);if(!Number.isInteger(e)||!(0,T.wf)(e,1,u.getMonthDaysCount(o,d.isLeapYear(r))+1))throw new G.I4(e);return new h(r,o,e)}static normalizeDayPart(t,e,o){_.z.assert(u.isValidMonth(o,e));const r=u.getMonthDaysCount(e,d.isLeapYear(o));return(0,T.G1)(t,1,r)}get formattedDayPart(){return String(this.day).padStart(2,"0")}get isWeekend(){const t=this.dayOfWeek(!1);return 6===t||0===t}dayOfWeek(t=!0){const e=t?this.toLocalNativeDate().getDay()-1:this.toLocalNativeDate().getDay();return e<0?6:e}dayBefore(t){return this.monthBefore(t)||this.monthSame(t)&&this.day<t.day}daySameOrBefore(t){return this.monthBefore(t)||this.monthSame(t)&&this.day<=t.day}daySame(t){return this.monthSame(t)&&this.day===t.day}daySameOrAfter(t){return this.monthAfter(t)||this.monthSame(t)&&this.day>=t.day}dayAfter(t){return this.monthAfter(t)||this.monthSame(t)&&this.day>t.day}dayLimit(t,e){return null!==t&&this.dayBefore(t)?t:null!==e&&this.dayAfter(e)?e:this}append({year:t=0,month:e=0,day:o=0}){const r=(this.year+t)*b+this.month+e;let a=Math.floor(r/b),c=r%b,m=Math.min(this.day,u.getMonthDaysCount(c,d.isLeapYear(a)))+o;for(;m>u.getMonthDaysCount(c,d.isLeapYear(a));)m-=u.getMonthDaysCount(c,d.isLeapYear(a)),11===c?(a++,c=0):c++;for(;m<1;)0===c?(a--,c=11):c--,m+=u.getMonthDaysCount(c,d.isLeapYear(a));return new h(a,c,m)}getFormattedDay(t,e){_.z.assert(1===e.length,"Separator should consist of only 1 symbol");const o=this.formattedDayPart,r=this.formattedMonthPart,a=this.formattedYear;switch(t){case"YMD":return`${a}${e}${r}${e}${o}`;case"MDY":return`${r}${e}${o}${e}${a}`;default:return`${o}${e}${r}${e}${a}`}}toString(t="DMY",e="."){return this.getFormattedDay(t,e)}toJSON(){return`${super.toJSON()}-${this.formattedDayPart}`}toLocalNativeDate(){return new Date(this.year,this.month,this.day)}toUtcNativeDate(){return new Date(Date.UTC(this.year,this.month,this.day))}}const $t=new h(0,0,1),Vt=new h(q,11,31);class f{constructor(t,e,o=0,r=0){this.hours=t,this.minutes=e,this.seconds=o,this.ms=r,tuiAssert.assert(f.isValidTime(t,e,o,r),"Time must be real, but got:",t,e,o,r)}static isValidTime(t,e,o=0,r=0){return Number.isInteger(t)&&tuiInRange(t,0,24)&&Number.isInteger(e)&&tuiInRange(e,0,60)&&Number.isInteger(o)&&tuiInRange(o,0,60)&&Number.isInteger(r)&&tuiInRange(r,0,1e3)}static current(){return f.fromAbsoluteMilliseconds(Date.now()%j)}static currentLocal(){const t=new Date;return f.fromAbsoluteMilliseconds((Date.now()-t.getTimezoneOffset()*O)%j)}static fromAbsoluteMilliseconds(t){tuiAssert.assert(Number.isInteger(t)),tuiAssert.assert(tuiInRange(t,0,j),`Milliseconds must be below ${j} (milliseconds in a day).`);const e=Math.floor(t/I),o=Math.floor(t%I/O),r=Math.floor(t%I%O/1e3)||0,a=Math.floor(t%I%O%1e3)||0;return new f(e,o,r,a)}static fromString(t){const e=Number(t.slice(0,2)),o=Number(t.slice(3,5)),r=Number(t.slice(6,8))||0,a=Number(t.slice(9,12))||0;return new f(e,o,r,a)}static fromLocalNativeDate(t){return new f(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}shift({hours:t=0,minutes:e=0,seconds:o=0,ms:r=0}){const a=(1e3+this.ms+r%1e3)%1e3,m=(r<0?Math.ceil(r/1e3):Math.floor(r/1e3))+o,L=(60+this.seconds+m%60)%60,S=(m<0?Math.ceil(m/60):Math.floor(m/60))+e,ot=(60+this.minutes+S%60)%60,rt=(S<0?Math.ceil(S/60):Math.floor(S/60))+t;return new f((24+this.hours+rt%24)%24,ot,L,a)}toString(t){const e="HH:MM:SS.MSS"===t||!t&&this.ms>0,o=e||"HH:MM:SS"===t||!t&&this.seconds>0;return`${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}${o?`:${this.formatTime(this.seconds)}`:""}${e?`.${this.formatTime(this.ms,3)}`:""}`}valueOf(){return this.toAbsoluteMilliseconds()}[Symbol.toPrimitive](t){return Date.prototype[Symbol.toPrimitive].call(this,t)}toAbsoluteMilliseconds(){return this.hours*I+this.minutes*O+1e3*this.seconds+this.ms}formatTime(t,e=2){return String(t).padStart(e,"0")}}new i.OlP("[TUI_CALENDAR_DATE_STREAM]: Stream that emits calendar data change"),new i.OlP("[TUI_DATE_VALUE_TRANSFORMER]: Control value transformer of TuiDay to custom value format for InputDate* components"),new i.OlP("[TUI_DATE_RANGE_VALUE_TRANSFORMER]: Control value transformer for InputDateRange component"),new i.OlP("[TUI_DATE_TIME_VALUE_TRANSFORMER]: Control value transformer for InputDateTime component"),new i.OlP("[TUI_CANCEL_WORD]: i18n 'cancel' word",{factory:(0,l.v)("cancel")}),new i.OlP("[TUI_DONE_WORD]: i18n 'done' word",{factory:(0,l.v)("done")}),new i.OlP("[TUI_MORE_WORD]: i18n 'more' word",{factory:(0,l.v)("more")}),new i.OlP("[TUI_HIDE_TEXT]: i18n 'hide' word",{factory:(0,l.v)("hide")}),new i.OlP("[TUI_SHOW_ALL_TEXT]: i18n 'show all' word",{factory:(0,l.v)("showAll")}),new i.OlP("[TUI_OTHER_DATE_TEXT]: i18n 'Other date' text",{factory:(0,l.v)("otherDate")}),new i.OlP("[TUI_CHOOSE_DAY_OR_RANGE_TEXTS]: choose day or range i18n texts",{factory:(0,l.v)("mobileCalendarTexts")}),new i.OlP("[TUI_FROM_TO_TEXTS]: from and to i18n texts",{factory:(0,l.v)("range")}),new i.OlP("[TUI_PLUS_MINUS_TEXTS]: plus and minus i18n texts",{factory:(0,l.v)("countTexts")}),new i.OlP("[TUI_TIME_TEXTS]: time i18n texts",{factory:(0,l.v)("time")}),new i.OlP("[TUI_DATE_TEXTS]: date format i18n texts",{factory:(0,l.v)("dateTexts")}),new i.OlP("[TUI_DIGITAL_INFORMATION_UNITS]: short bytes, kilobytes and megabytes i18n texts",{factory:(0,l.v)("digitalInformationUnits")}),new i.OlP("[TUI_COPY_TEXTS]: copy i18n texts",{factory:(0,l.v)("copyTexts")}),new i.OlP("[TUI_PASSWORD_TEXTS]: password i18n texts",{factory:(0,l.v)("passwordTexts")}),new i.OlP("[TUI_CALENDAR_MONTHS]: short calendar months i18n",{factory:(0,l.v)("shortCalendarMonths")}),new i.OlP("[TUI_FILE_TEXTS]: file i18n texts",{factory:(0,l.v)("fileTexts")}),new i.OlP("[TUI_PAGINATION_TEXTS]: pagination i18n texts",{factory:(0,l.v)("pagination")}),new i.OlP("[TUI_INPUT_FILE_TEXTS]: tui-input-file i18n texts",{factory:(0,l.v)("inputFileTexts")}),new i.OlP("[TUI_MULTI_SELECT_TEXTS]: tui-multi-select i18n texts",{factory:(0,l.v)("multiSelectTexts")}),new i.OlP("[TUI_COUNTRIES]: Localized countries names",{factory:(0,l.v)("countries")});const _t={icon:({$implicit:n})=>"s"===n?"tuiIconCalendar":"tuiIconCalendarLarge",min:$t,max:Vt},gt=(new i.OlP("[TUI_INPUT_DATE_OPTIONS]: Default parameters for date input component",{factory:()=>_t}),{stringify:x.yZ,identityMatcher:x.bg,disabledItemHandler:x.Iy});new i.OlP("[TUI_ITEMS_HANDLERS]: Default items handlers for components",{factory:()=>gt}),new i.OlP("[TUI_MOBILE_CALENDAR]: A component for mobile data picker"),new i.OlP("[TUI_MONTH_FORMATTER]: A function to get localized formatted month"),new i.OlP("[TUI_TAB_MARGIN]: Margin between tabs",{factory:()=>24}),new i.OlP("[TUI_VALIDATION_ERRORS]: Validation errors",{factory:()=>({})}),s(9646);var ft=s(4671);const Zt=(0,M.fx)({limitWidth:"fixed",align:"right"}),Xt={provide:H.sE,deps:[[new i.FiY,new i.PiD,g.JU]],useFactory:ft.y},Gt=["*",[["input"]]],Jt=["*","input"];let Qt=(()=>{class n extends dt.M${constructor(e,o){super(e,o),this.datalist="",this.open=!1}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,Ut.V8)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(e){this.updateValue(e),this.open=!0}onActiveZone(e){this.updateFocused(e)}handleOption(e){this.setNativeValue(String(e)),this.focusInput(),this.updateValue(String(e)),this.open=!1}getFallbackValue(){return""}focusInput(e=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:e})}setNativeValue(e){this.nativeFocusableElement&&(this.nativeFocusableElement.value=e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(g.a5,10),i.Y36(i.sBO))},n.\u0275cmp=i.Xpm({type:n,selectors:[["tui-input"]],contentQueries:function(e,o,r){if(1&e&&i.Suo(r,B.gX,5,i.Rgc),2&e){let a;i.iGM(a=i.CRH())&&(o.datalist=a.first)}},viewQuery:function(e,o){if(1&e&&(i.Gf(V.o1,5),i.Gf(C.yc,5)),2&e){let r;i.iGM(r=i.CRH())&&(o.hostedDropdown=r.first),i.iGM(r=i.CRH())&&(o.textfield=r.first)}},features:[i._Bn([Xt,(0,kt.FT)(n),(0,H.oE)(n),(0,dt.wB)(n)],[Zt]),i.qOj],ngContentSelectors:Jt,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"pseudoFocus","pseudoHover","invalid","nativeId","readOnly","disabled","focusable","value","valueChange"]],template:function(e,o){1&e&&(i.F$t(Gt),i.TgZ(0,"tui-hosted-dropdown",0),i.NdJ("openChange",function(a){return o.open=a})("tuiActiveZoneChange",function(a){return o.onActiveZone(a)}),i.TgZ(1,"tui-primitive-textfield",1),i.NdJ("valueChange",function(a){return o.onValueChange(a)}),i.Hsn(2),i.Hsn(3,1,["ngProjectAs","input",5,["input"]]),i.qZA()()),2&e&&(i.Q6J("canOpen",o.canOpen)("content",o.datalist||"")("open",o.open),i.xp6(1),i.Q6J("pseudoFocus",o.computedFocused)("pseudoHover",o.pseudoHover)("invalid",o.computedInvalid)("nativeId",o.nativeId)("readOnly",o.readOnly)("disabled",o.computedDisabled)("focusable",o.computedFocusable)("value",o.value))},dependencies:[V.o1,C.yc,ut.e,C.B1],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),n})(),Kt=(()=>{class n extends Ft.D1{onValueChange(e){this.host.onValueChange(e)}}return n.\u0275fac=function(){let t;return function(o){return(t||(t=i.n5z(n)))(o||n)}}(),n.\u0275dir=i.lG2({type:n,selectors:[["tui-input"]],features:[i._Bn([(0,H.cp)(n)]),i.qOj]}),n})(),qt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[p.ez,ut.A,C.KW,V.jh]]}),n})();var et=s(9367),vt=s(9886),k=s(8276),Tt=s(430);function te(n,t){if(1&n){const e=i.EpF();i.TgZ(0,"tui-data-list",17)(1,"button",18),i.NdJ("click",function(){i.CHM(e);const r=i.oxw().$implicit,a=i.MAs(1);return i.oxw(2).deleteMessage(r.id),i.KtG(a.toggle(!1))}),i._uU(2),i.ALo(3,"transloco"),i._UZ(4,"tui-svg",19),i.qZA(),i.TgZ(5,"button",18),i.NdJ("click",function(){i.CHM(e),i.oxw();const r=i.MAs(1);return i.oxw(2).blockUser(1),i.KtG(r.toggle(!1))}),i._uU(6),i.ALo(7,"transloco"),i._UZ(8,"tui-svg",20),i.qZA()()}2&n&&(i.xp6(2),i.hij(" ",i.lcZ(3,2,"streamPage.deleteMessage")," "),i.xp6(4),i.hij(" ",i.lcZ(7,4,"streamPage.blockUser")," "))}function ee(n,t){if(1&n&&(i.TgZ(0,"div",11,12)(2,"div",13)(3,"span",14),i._uU(4),i.qZA(),i.TgZ(5,"span",15),i._uU(6),i.qZA()(),i.YNc(7,te,9,6,"ng-template",null,16,i.W1O),i.qZA()),2&n){const e=t.$implicit,o=i.MAs(8);i.Q6J("tuiDropdown",o),i.xp6(4),i.hij("","Author",":"),i.xp6(2),i.hij(" ",e.text,"")}}function ne(n,t){if(1&n&&(i.TgZ(0,"div",9),i.YNc(1,ee,9,3,"div",10),i.ALo(2,"async"),i.qZA()),2&n){const e=i.oxw();i.xp6(1),i.Q6J("ngForOf",i.lcZ(2,1,e.messages))}}class F{scrollBottom(){setTimeout(()=>{if(this.scrollBar){const{nativeElement:t}=this.scrollBar;t.scrollTop=t.scrollHeight}},0)}constructor(t,e){this.wsService=t,this.destroy$=e,this.messages=this.wsService.messages$,this.comment=new g.NI(null,[g.kI.required])}sendMessage(){this.comment.value&&(this.wsService.sendMessage(this.comment.value),this.comment.setValue(null))}deleteMessage(t){console.log("DELETE","Message id: ",t),this.wsService.deleteMessage(t)}blockUser(t){console.log("BLOCK USER")}ngAfterViewInit(){this.scrollBottom(),this.messages.pipe((0,ct.R)(this.destroy$)).subscribe(()=>this.scrollBottom())}}F.\u0275fac=function(t){return new(t||F)(i.Y36(v),i.Y36(lt.z))},F.\u0275cmp=i.Xpm({type:F,selectors:[["app-chat"]],viewQuery:function(t,e){if(1&t&&i.Gf(R.IB,5,i.SBq),2&t){let o;i.iGM(o=i.CRH())&&(e.scrollBar=o.first)}},features:[i._Bn([lt.z])],decls:15,vars:10,consts:[[1,"chat-container"],[1,"chat-container__header"],[1,"scrollable-container"],["class","chat-container__body",4,"ngIf"],[1,"chat-container__input-row"],["tuiTextfieldSize","m",3,"formControl"],["tuiTextfield","","type","text",3,"keyup.enter"],[1,"chat-container__input-row__send-button"],["size","xs","tuiButton","","type","button","appearance","icon","icon","tuiIconSend",2,"z-index","100",3,"click"],[1,"chat-container__body"],["tuiDropdownContext","","class","chat-container__body__message",3,"tuiDropdown",4,"ngFor","ngForOf"],["tuiDropdownContext","",1,"chat-container__body__message",3,"tuiDropdown"],["dropdown","tuiDropdown"],[1,"row","justify-start","gap-05"],[1,"chat-container__body__message-author"],[1,"chat-container__body__message-message"],["contextMenu",""],["role","menu","id","context-menu","tuiDataListDropdownManager","",1,"context-menu"],["size","s","tuiOption","",3,"click"],["src","tuiIconTrash2",1,"icon"],["src","tuiIconUserX",1,"icon"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0)(1,"div",1)(2,"h3"),i._uU(3),i.ALo(4,"transloco"),i.qZA()(),i.TgZ(5,"tui-scrollbar",2),i.YNc(6,ne,3,3,"div",3),i.ALo(7,"async"),i.qZA(),i.TgZ(8,"div",4)(9,"tui-input",5),i._uU(10),i.ALo(11,"transloco"),i.TgZ(12,"input",6),i.NdJ("keyup.enter",function(){return e.sendMessage()}),i.qZA()(),i.TgZ(13,"div",7)(14,"button",8),i.NdJ("click",function(){return e.sendMessage()}),i.qZA()()()()),2&t&&(i.xp6(3),i.Oqu(i.lcZ(4,4,"streamPage.comments")),i.xp6(3),i.Q6J("ngIf",i.lcZ(7,6,e.messages)),i.xp6(3),i.Q6J("formControl",e.comment),i.xp6(1),i.hij(" ",i.lcZ(11,8,"streamPage.comment")," "))},dependencies:[p.sg,p.O5,Qt,Kt,C.MB,g.JJ,g.oH,et.v0,vt.sz,k.P,R.IB,M.td,M.VC,M.J1,M.A9,B.qi,B.vK,p.Ov,Tt.Ot],styles:["[_nghost-%COMP%]{width:100%;height:100%}.chat-container[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;padding-left:1rem;box-sizing:border-box}.chat-container__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.chat-container__body[_ngcontent-%COMP%]{overflow-y:hidden;display:flex;flex-direction:column}.chat-container__body__message[_ngcontent-%COMP%]{margin-bottom:.3rem;cursor:pointer}.chat-container__body__message-author[_ngcontent-%COMP%]{font-weight:700}.chat-container__body__message-message[_ngcontent-%COMP%]{color:#e9eaeb;font-size:13px}.chat-container__input-row[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;gap:.5rem}.chat-container__input-row[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%], .chat-container__input-row[_ngcontent-%COMP%]   tui-text-area[_ngcontent-%COMP%]{width:100%}.chat-container__input-row[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .chat-container__input-row[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .chat-container__input-row[_ngcontent-%COMP%]   tui-text-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .chat-container__input-row[_ngcontent-%COMP%]   tui-text-area[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding-right:50px!important}.chat-container__input-row__send-button[_ngcontent-%COMP%]{position:absolute;right:0}.scrollable-container[_ngcontent-%COMP%]{width:100%;height:700px}.context-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   tui-svg[_ngcontent-%COMP%]{margin-left:.5rem!important}@media only screen and (max-width: 1000px) and (min-width: 0px){.chat-container[_ngcontent-%COMP%]{margin-top:1rem;padding-left:0}.chat-container__input-row[_ngcontent-%COMP%]{margin-bottom:1rem}.scrollable-container[_ngcontent-%COMP%]{width:100%;height:300px}}"]});class N{constructor(t){this.wsService=t}ngOnInit(){this.wsService.connect()}}N.\u0275fac=function(t){return new(t||N)(i.Y36(v))},N.\u0275cmp=i.Xpm({type:N,selectors:[["app-streams"]],decls:7,vars:0,consts:[[1,"stream-container"],[1,"stream-container__stream"],["width","560","height","315","src","https://www.youtube.com/embed/byeoGmc2RYE","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","allowfullscreen",""],[1,"stream-container__chat"]],template:function(t,e){1&t&&(i._UZ(0,"tui-theme-night"),i.TgZ(1,"div",0)(2,"tui-island")(3,"div",1),i._UZ(4,"iframe",2),i.qZA(),i.TgZ(5,"div",3),i._UZ(6,"app-chat"),i.qZA()()())},dependencies:[st.Z,St,F],styles:["[_nghost-%COMP%]{width:100%;height:100%;min-width:400px!important;display:flex;align-items:center;justify-content:center;flex-direction:column}.stream-container[_ngcontent-%COMP%]{width:100%;height:100%;box-sizing:border-box;padding:0 16px 16px}.stream-container[_ngcontent-%COMP%]   tui-island[_ngcontent-%COMP%]{height:100%;box-sizing:border-box;display:flex}.stream-container__stream[_ngcontent-%COMP%]{display:flex;flex-grow:5;height:100%}.stream-container__stream[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:.3rem}.stream-container__chat[_ngcontent-%COMP%]{display:flex;flex-grow:1}@media only screen and (max-width: 1000px) and (min-width: 0px){.stream-container[_ngcontent-%COMP%]{width:100%;height:100%;box-sizing:border-box;padding:0 16px 16px}.stream-container[_ngcontent-%COMP%]   tui-island[_ngcontent-%COMP%]{display:flex;flex-direction:column}.stream-container__stream[_ngcontent-%COMP%]{display:flex;flex-grow:5;height:100%}.stream-container__stream[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:.3rem}.stream-container__chat[_ngcontent-%COMP%]{display:flex;flex-grow:1}}"]});const ie=[{path:"",component:N}];class P{}P.\u0275fac=function(t){return new(t||P)},P.\u0275mod=i.oAB({type:P}),P.\u0275inj=i.cJS({imports:[Z.Bz.forChild(ie),Z.Bz]});s(7776),s(3679);var Ct=s(9982);let re=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({}),n})();s(8790),s(4645),s(9751);new i.OlP("MutationObserver config");s(515),s(6451),s(9300);var It=(s(8505),s(8372),s(8675),s(9740));new i.OlP("[TUI_TAB_EVENT]: Stream of tab activation events");new i.FiY,new i.FiY;const yt={underline:!0,exposeActive:!0,itemsLimit:1/0,minMoreWidth:0};new i.OlP("[TUI_TABS_OPTIONS]: Default parameters for tabs component",{factory:()=>yt}),new i.OlP("[TUI_TABS_REFRESH]: Refresh stream");let Te=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[p.ez,It.wq,V.jh,k.E,Ct.u,re]]}),n})(),Ce=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[p.ez,k.E]]}),n})();var Me=s(3675),xe=s(7846);let Ie=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[p.ez,g.u5,Ct.u,R.Jy,Me.Q,xe.W,k.E,C.KW,It.wq]]}),n})();class A{}A.\u0275fac=function(t){return new(t||A)},A.\u0275mod=i.oAB({type:A}),A.\u0275inj=i.cJS({imports:[p.ez,Tt.y4,qt,g.UX,et.fN,vt.cn,Ce,k.E,R.Jy,Ie,M.dp,B.pc]});class E{}E.\u0275fac=function(t){return new(t||E)},E.\u0275mod=i.oAB({type:E}),E.\u0275inj=i.cJS({imports:[p.ez,P,st.j,Rt,Te,R.Jy,et.fN,A]})}}]);