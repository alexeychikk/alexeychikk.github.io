import{U as d,V as l,A as Y,$ as p,a0 as O}from"./index-SXmnikUd.js";function h(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function x(t,e){d(2,arguments);var a=l(t),n=h(e);return isNaN(n)?new Date(NaN):(n&&a.setDate(a.getDate()+n),a)}function A(t,e){d(2,arguments);var a=l(t),n=h(e);if(isNaN(n))return new Date(NaN);if(!n)return a;var r=a.getDate(),i=new Date(a.getTime());i.setMonth(a.getMonth()+n+1,0);var o=i.getDate();return r>=o?i:(a.setFullYear(i.getFullYear(),i.getMonth(),r),a)}function g(t,e){if(d(2,arguments),!e||Y(e)!=="object")return new Date(NaN);var a=e.years?h(e.years):0,n=e.months?h(e.months):0,r=e.weeks?h(e.weeks):0,i=e.days?h(e.days):0,o=e.hours?h(e.hours):0,u=e.minutes?h(e.minutes):0,m=e.seconds?h(e.seconds):0,s=l(t),v=n||a?A(s,n+a*12):s,f=i||r?x(v,i+r*7):v,w=u+o*60,M=m+w*60,c=M*1e3,D=new Date(f.getTime()+c);return D}var j={};function z(){return j}function F(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function T(t){d(1,arguments);var e=l(t);return e.setHours(0,0,0,0),e}var L=864e5;function V(t,e){d(2,arguments);var a=T(t),n=T(e),r=a.getTime()-F(a),i=n.getTime()-F(n);return Math.round((r-i)/L)}var _=6e4,q=36e5;function E(t,e){d(2,arguments);var a=l(t),n=l(e);return a.getFullYear()-n.getFullYear()}function k(t,e){var a=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return a<0?-1:a>0?1:a}function R(t,e){d(2,arguments);var a=l(t),n=l(e),r=k(a,n),i=Math.abs(V(a,n));a.setDate(a.getDate()-r*i);var o=+(k(a,n)===-r),u=r*(i-o);return u===0?0:u}function W(t,e){return d(2,arguments),l(t).getTime()-l(e).getTime()}var C={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},$="trunc";function S(t){return t?C[t]:C[$]}function H(t,e,a){d(2,arguments);var n=W(t,e)/q;return S(a==null?void 0:a.roundingMethod)(n)}function J(t,e,a){d(2,arguments);var n=W(t,e)/_;return S(a==null?void 0:a.roundingMethod)(n)}function X(t,e,a){d(2,arguments);var n=W(t,e)/1e3;return S(a==null?void 0:a.roundingMethod)(n)}function Q(t,e){d(2,arguments);var a=l(t),n=l(e),r=p(a,n),i=Math.abs(E(a,n));a.setFullYear(1584),n.setFullYear(1584);var o=p(a,n)===-r,u=r*(i-Number(o));return u===0?0:u}var U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},B=function(e,a,n){var r,i=U[e];return typeof i=="string"?r=i:a===1?r=i.one:r=i.other.replace("{{count}}",a.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const K=B;function P(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}}var G={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Z={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ee={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},te={date:P({formats:G,defaultWidth:"full"}),time:P({formats:Z,defaultWidth:"full"}),dateTime:P({formats:ee,defaultWidth:"full"})};const ae=te;var ne={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},re=function(e,a,n,r){return ne[e]};const ie=re;function y(t){return function(e,a){var n=a!=null&&a.context?String(a.context):"standalone",r;if(n==="formatting"&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a!=null&&a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,m=a!=null&&a.width?String(a.width):t.defaultWidth;r=t.values[m]||t.values[u]}var s=t.argumentCallback?t.argumentCallback(e):e;return r[s]}}var oe={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ue={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},se={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},le={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},de={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},me={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},he=function(e,a){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},fe={ordinalNumber:he,era:y({values:oe,defaultWidth:"wide"}),quarter:y({values:ue,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:y({values:se,defaultWidth:"wide"}),day:y({values:le,defaultWidth:"wide"}),dayPeriod:y({values:de,defaultWidth:"wide",formattingValues:me,defaultFormattingWidth:"wide"})};const ve=fe;function b(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.width,r=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o=i[0],u=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],m=Array.isArray(u)?ge(u,function(f){return f.test(o)}):ce(u,function(f){return f.test(o)}),s;s=t.valueCallback?t.valueCallback(m):m,s=a.valueCallback?a.valueCallback(s):s;var v=e.slice(o.length);return{value:s,rest:v}}}function ce(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function ge(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}function ye(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var r=n[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;var u=e.slice(r.length);return{value:o,rest:u}}}var be=/^(\d+)(th|st|nd|rd)?/i,Me=/\d+/i,we={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},De={any:[/^b/i,/^(a|c)/i]},Pe={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},pe={any:[/1/i,/2/i,/3/i,/4/i]},We={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Se={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ne={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Fe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Te={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ke={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ce={ordinalNumber:ye({matchPattern:be,parsePattern:Me,valueCallback:function(e){return parseInt(e,10)}}),era:b({matchPatterns:we,defaultMatchWidth:"wide",parsePatterns:De,defaultParseWidth:"any"}),quarter:b({matchPatterns:Pe,defaultMatchWidth:"wide",parsePatterns:pe,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:b({matchPatterns:We,defaultMatchWidth:"wide",parsePatterns:Se,defaultParseWidth:"any"}),day:b({matchPatterns:Ne,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:Te,defaultMatchWidth:"any",parsePatterns:ke,defaultParseWidth:"any"})};const Ae=Ce;var Ie={code:"en-US",formatDistance:K,formatLong:ae,formatRelative:ie,localize:ve,match:Ae,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ye=Ie;var Oe=["years","months","weeks","days","hours","minutes","seconds"];function xe(t,e){var a,n,r,i,o;if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var u=z(),m=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:u.locale)!==null&&a!==void 0?a:Ye,s=(r=e==null?void 0:e.format)!==null&&r!==void 0?r:Oe,v=(i=e==null?void 0:e.zero)!==null&&i!==void 0?i:!1,f=(o=e==null?void 0:e.delimiter)!==null&&o!==void 0?o:" ";if(!m.formatDistance)return"";var w=s.reduce(function(M,c){var D="x".concat(c.replace(/(^.)/,function(I){return I.toUpperCase()})),N=t[c];return typeof N=="number"&&(v||t[c])?M.concat(m.formatDistance(D,N)):M},[]).join(f);return w}function je(t){d(1,arguments);var e=l(t.start),a=l(t.end);if(isNaN(e.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(a.getTime()))throw new RangeError("End Date is invalid");var n={};n.years=Math.abs(Q(a,e));var r=p(a,e),i=g(e,{years:r*n.years});n.months=Math.abs(O(a,i));var o=g(i,{months:r*n.months});n.days=Math.abs(R(a,o));var u=g(o,{days:r*n.days});n.hours=Math.abs(H(a,u));var m=g(u,{hours:r*n.hours});n.minutes=Math.abs(J(a,m));var s=g(m,{minutes:r*n.minutes});return n.seconds=Math.abs(X(a,s)),n}const ze=({start:t,end:e,format:a=["years","months"]})=>{const n=je({start:t,end:e});return xe(n,{format:a})},Le=({start:t,end:e})=>ze({start:t,end:e}).replace("year","yr").replace("month","mo"),_e=t=>Le({start:new Date(0),end:A(new Date(0),t)});export{F as a,A as b,_e as c,Ye as d,Le as f,z as g,h as t};
