"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6436],{56436:function(t,e,i){i.d(e,{diagram:function(){return H}});var n=i(56601),s=i(70726),r=i(90608),a=i(94329),l=i(8110);i(62737),i(85292),i(11838);var o=function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[6,8,10,11,12,14,16,17,20,21],i=[1,9],n=[1,10],s=[1,11],r=[1,12],a=[1,13],l=[1,16],o=[1,17],c={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:function(t,e,i,n,s,r,a){var l=r.length-1;switch(s){case 1:return r[l-1];case 2:case 6:case 7:this.$=[];break;case 3:r[l-1].push(r[l]),this.$=r[l-1];break;case 4:case 5:this.$=r[l];break;case 8:n.getCommonDb().setDiagramTitle(r[l].substr(6)),this.$=r[l].substr(6);break;case 9:this.$=r[l].trim(),n.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=r[l].trim(),n.getCommonDb().setAccDescription(this.$);break;case 12:n.addSection(r[l].substr(8)),this.$=r[l].substr(8);break;case 15:n.addTask(r[l],0,""),this.$=r[l];break;case 16:n.addEvent(r[l].substr(2)),this.$=r[l]}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:i,12:n,14:s,16:r,17:a,18:14,19:15,20:l,21:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:18,11:i,12:n,14:s,16:r,17:a,18:14,19:15,20:l,21:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,19]},{15:[1,20]},t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),t(e,[2,4]),t(e,[2,9]),t(e,[2,10])],defaultActions:{},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},parse:function(t){var e=this,i=[0],n=[],s=[null],r=[],a=this.table,l="",o=0,c=0,h=r.slice.call(arguments,1),u=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);u.setInput(t,d.yy),d.yy.lexer=u,d.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var g=u.yylloc;r.push(g);var y=u.options&&u.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var f,m,_,b,k,x,v,w,$={};;){if(m=i[i.length-1],this.defaultActions[m]?_=this.defaultActions[m]:(null==f&&(f=function(){var t;return"number"!=typeof(t=n.pop()||u.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}()),_=a[m]&&a[m][f]),void 0===_||!_.length||!_[0]){var S="";for(k in w=[],a[m])this.terminals_[k]&&k>2&&w.push("'"+this.terminals_[k]+"'");S=u.showPosition?"Parse error on line "+(o+1)+":\n"+u.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(S,{text:u.match,token:this.terminals_[f]||f,line:u.yylineno,loc:g,expected:w})}if(_[0]instanceof Array&&_.length>1)throw Error("Parse Error: multiple actions possible at state: "+m+", token: "+f);switch(_[0]){case 1:i.push(f),s.push(u.yytext),r.push(u.yylloc),i.push(_[1]),f=null,c=u.yyleng,l=u.yytext,o=u.yylineno,g=u.yylloc;break;case 2:if(x=this.productions_[_[1]][1],$.$=s[s.length-x],$._$={first_line:r[r.length-(x||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(x||1)].first_column,last_column:r[r.length-1].last_column},y&&($._$.range=[r[r.length-(x||1)].range[0],r[r.length-1].range[1]]),void 0!==(b=this.performAction.apply($,[l,c,o,d.yy,_[1],s,r].concat(h))))return b;x&&(i=i.slice(0,-1*x*2),s=s.slice(0,-1*x),r=r.slice(0,-1*x)),i.push(this.productions_[_[1]][0]),s.push($.$),r.push($._$),v=a[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}};function h(){this.yy={}}return c.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in s)this[r]=s[r];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}},h.prototype=c,c.Parser=h,new h}();o.parser=o;let c="",h=0,u=[],d=[],p=[],g=()=>n.L,y=function(){u.length=0,d.length=0,c="",p.length=0,(0,n.v)()},f=function(t){c=t,u.push(t)},m=function(){return u},_=function(){let t=v(),e=0;for(;!t&&e<100;)t=v(),e++;return d.push(...p),d},b=function(t,e,i){let n={id:h++,section:c,type:c,task:t,score:e||0,events:i?[i]:[]};p.push(n)},k=function(t){p.find(t=>t.id===h-1).events.push(t)},x=function(t){let e={section:c,type:c,description:t,task:t,classes:[]};d.push(e)},v=function(){let t=!0;for(let[e,i]of p.entries())p[e].processed,t=t&&i.processed;return t},w=Object.freeze(Object.defineProperty({__proto__:null,addEvent:k,addSection:f,addTask:b,addTaskOrg:x,clear:y,default:{clear:y,getCommonDb:g,addSection:f,getSections:m,getTasks:_,addTask:b,addTaskOrg:x,addEvent:k},getCommonDb:g,getSections:m,getTasks:_},Symbol.toStringTag,{value:"Module"}));function $(t,e){t.each(function(){var t,i=(0,s.Ys)(this),n=i.text().split(/(\s+|<br>)/).reverse(),r=[],a=i.attr("y"),l=parseFloat(i.attr("dy")),o=i.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",l+"em");for(let s=0;s<n.length;s++)t=n[n.length-1-s],r.push(t),o.text(r.join(" ").trim()),(o.node().getComputedTextLength()>e||"<br>"===t)&&(r.pop(),o.text(r.join(" ").trim()),r="<br>"===t?[""]:[t],o=i.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))})}!function(){function t(t,e){for(let i in e)i in e&&t.attr(i,e[i])}}();let S=function(t,e,i){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${-e.height+10} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+i).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},E={initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},drawNode:function(t,e,i,n){let s=i%12-1,r=t.append("g");e.section=s,r.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+s);let a=r.append("g"),l=r.append("g"),o=l.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call($,e.width).node().getBBox(),c=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return e.height=o.height+.55*c+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,l.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),S(a,e,s),e},getVirtualNodeHeight:function(t,e,i){let n=t.append("g"),s=n.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call($,e.width).node().getBBox(),r=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return n.remove(),s.height+.55*r+e.padding}},I=function(t,e,i,s,r,a,l,o,c,h,u){var d;for(let o of e){let e={descr:o.task,section:i,number:i,width:150,padding:20,maxHeight:a};n.l.debug("taskNode",e);let p=t.append("g").attr("class","taskWrapper"),g=E.drawNode(p,e,i,l).height;if(n.l.debug("taskHeight after draw",g),p.attr("transform",`translate(${s}, ${r})`),a=Math.max(a,g),o.events){let e=t.append("g").attr("class","lineWrapper");r+=100,N(t,o.events,i,s,r,l),r-=100,e.append("line").attr("x1",s+95).attr("y1",r+a).attr("x2",s+95).attr("y2",r+a+(u?a:h)+c+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s+=200,u&&!(null==(d=l.timeline)?void 0:d.disableMulticolor)&&i++}},N=function(t,e,i,s,r,a){let l=0,o=r;for(let o of(r+=100,e)){let e={descr:o,section:i,number:i,width:150,padding:20,maxHeight:50};n.l.debug("eventNode",e);let c=t.append("g").attr("class","eventWrapper"),h=E.drawNode(c,e,i,a).height;l+=h,c.attr("transform",`translate(${s}, ${r})`),r=r+10+h}return r=o,l},L=t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,r.Z)(t["lineColor"+e])?t["lineColor"+e]=(0,a.Z)(t["lineColor"+e],20):t["lineColor"+e]=(0,l.Z)(t["lineColor"+e],20);for(let i=0;i<t.THEME_COLOR_LIMIT;i++){let n=""+(17-3*i);e+=`
    .section-${i-1} rect, .section-${i-1} path, .section-${i-1} circle, .section-${i-1} path  {
      fill: ${t["cScale"+i]};
    }
    .section-${i-1} text {
     fill: ${t["cScaleLabel"+i]};
    }
    .node-icon-${i-1} {
      font-size: 40px;
      color: ${t["cScaleLabel"+i]};
    }
    .section-edge-${i-1}{
      stroke: ${t["cScale"+i]};
    }
    .edge-depth-${i-1}{
      stroke-width: ${n};
    }
    .section-${i-1} line {
      stroke: ${t["cScaleInv"+i]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${t["cScaleLabel"+i]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return e},H={db:w,renderer:{setConf:()=>{},draw:function(t,e,i,r){var a,l;let o;let c=(0,n.c)(),h=c.leftMargin??50;n.l.debug("timeline",r.db);let u=c.securityLevel;"sandbox"===u&&(o=(0,s.Ys)("#i"+e));let d=("sandbox"===u?(0,s.Ys)(o.nodes()[0].contentDocument.body):(0,s.Ys)("body")).select("#"+e);d.append("g");let p=r.db.getTasks(),g=r.db.getCommonDb().getDiagramTitle();n.l.debug("task",p),E.initGraphics(d);let y=r.db.getSections();n.l.debug("sections",y);let f=0,m=0,_=0,b=0,k=50+h,x=50;b=50;let v=0,w=!0;y.forEach(function(t){let e={number:v,descr:t,section:v,width:150,padding:20,maxHeight:f},i=E.getVirtualNodeHeight(d,e,c);n.l.debug("sectionHeight before draw",i),f=Math.max(f,i+20)});let $=0,S=0;for(let[t,e]of(n.l.debug("tasks.length",p.length),p.entries())){let i={number:t,descr:e,section:e.section,width:150,padding:20,maxHeight:m},s=E.getVirtualNodeHeight(d,i,c);n.l.debug("taskHeight before draw",s),m=Math.max(m,s+20),$=Math.max($,e.events.length);let r=0;for(let t=0;t<e.events.length;t++){let i={descr:e.events[t],section:e.section,number:e.section,width:150,padding:20,maxHeight:50};r+=E.getVirtualNodeHeight(d,i,c)}S=Math.max(S,r)}n.l.debug("maxSectionHeight before draw",f),n.l.debug("maxTaskHeight before draw",m),y&&y.length>0?y.forEach(t=>{let e=p.filter(e=>e.section===t),i={number:v,descr:t,section:v,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:f};n.l.debug("sectionNode",i);let s=d.append("g"),r=E.drawNode(s,i,v,c);n.l.debug("sectionNode output",r),s.attr("transform",`translate(${k}, ${b})`),x+=f+50,e.length>0&&I(d,e,v,k,x,m,c,$,S,f,!1),k+=200*Math.max(e.length,1),x=b,v++}):(w=!1,I(d,p,v,k,x,m,c,$,S,f,!0));let N=d.node().getBBox();n.l.debug("bounds",N),g&&d.append("text").text(g).attr("x",N.width/2-h).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),_=w?f+m+150:m+100,d.append("g").attr("class","lineWrapper").append("line").attr("x1",h).attr("y1",_).attr("x2",N.width+3*h).attr("y2",_).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,n.o)(void 0,d,(null==(a=c.timeline)?void 0:a.padding)??50,(null==(l=c.timeline)?void 0:l.useMaxWidth)??!1)}},parser:o,styles:t=>`
  .edge {
    stroke-width: 3;
  }
  ${L(t)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`}}}]);