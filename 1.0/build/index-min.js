/*! WKeditor - v1.0 - 2013-10-15 7:37:09 PM
* Copyright (c) 2013 changyuan.lcy; Licensed  */
KISSY.add("WKeditor/1.0/index",function(a,b,c,d){function e(a){var b=this;b.options=a}var f=b.all;return e.prototype.tpl={wrap:f("<div class='WKeditor_wrap'></div>")},e.prototype.view=function(){var a=this;this.view.init=function(){a.options.$wrap=f(a.tpl.wrap),a.$wrap=a.options.$wrap,a.$wrap.attr("contenteditable",!0),a.view.message(),a.ele.append(a.$wrap)},this.view.message=function(){a.$message=f(a.options.message),a.ele.append(a.$message),a.$message.on("click",function(){a.$wrap.fire("focus"),f(this).hide()}),a.$message.show()},this.view.init()},e.prototype.addFont=function(a,b){var d=this,e="<button command='{{command}}' class='{{name}} command' title='{{title}}' >{{value}}</button>",g=new c(e).render(a);d.WKfont.$font.one(".box").append(g),d.WKfont.view.render();var h=d.WKfont.$font.all("button"),i=h.length,j=f(h[i-1]);j.on("click",function(a){b(a)})},e.prototype.plug=function(a,b){var d=this;d.plugin();var e="<button class='{{name}}' title='{{title}}'>{{value}}</button>",f=new c(e).render(a);d.$plugin.one(".box").append(f),d.plugin.render(),d[a.name]=b},e.prototype.plugin=function(){var a=this;this.plugin.tpl={wrap:"<div class='WKeditor_plugin'><div class='box'></div></div>",arrow:"<div class='arrow-outer'><div class='arrow-shadow'></div></div>"},this.plugin.init=function(){a.$plugin||(a.plugin.view(),a.plugin.event())},this.plugin.view=function(){a.$plugin=f(a.plugin.tpl.wrap),a.$plugin.append(a.plugin.tpl.arrow),a.ele.append(a.$plugin),a.plugin.render()},this.plugin.event=function(){a.$plugin.delegate("click","button",function(b){a.$wrap.fire("focus"),a.options.range=a.tool.getRange();var c=f(b.target).attr("class");return a[c](),!1})},this.plugin.render=function(){a.$plugin.height(33*a.$plugin.all("button").length),a.$plugin.one(".arrow-outer").css({top:a.$plugin.height()/2-11})},this.plugin.init()},e.prototype.event=function(){var b=this;b.$wrap.on("click",function(){b.$message.hide()}).on("blur",function(){""==f(this).html().replace("<span></span>","").replace("<br>","")&&b.$message.show()}).on("mousedown",function(){b.$message.hide(),b.options.range=b.tool.getRange()}).on("mousemove",function(a){var c=a.target;switch(c.tagName.toLowerCase()){case"img":b.event.showImgOp(c);break;default:b.event.hideImgOp()}}).on("keydown",function(c){13==c.keyCode&&setTimeout(function(){a.each(b.$wrap.all("p"),function(a){0==f(a).all("img").length&&0==f(a).all("embed").length&&0==f(a).all("video").length&&f(a).removeAttr("class").removeAttr("style")}),b.tool.formatBlock()},10)})[0].onpaste=function(a){(b.browser.chrome||b.browser.mozilla)&&b.event.shotImg(a),b.tool.fliter(b.$wrap)},b.event.shotImg=function(a){var c=a.clipboardData;if(c&&c.items){items=c.items;var d=items[0];if("file"==d.kind&&"image/png"==d.type){var e=new FileReader;e.onloadend=function(a){var a=this.result.substr(this.result.indexOf(",")+1),c=document.createElement("img");c.src="data:image/jpeg;base64,"+a,b.tool.insert(c,b.tool.getRange())},e.readAsDataURL(d.getAsFile())}}},b.event.showImgOp=function(a){function c(a,c){c=c||0,a.css({left:g.offset().left+g.width()-33-b.left-c,top:g.offset().top-b.top,position:"absolute",display:"block"})}function d(){var a=e.all(".centerImage");0==e.all(".centerImage").length&&(a=f("<button class='centerImage'>\u5c45\u4e2d</button>"),e.append(a)),c(a,46),a.detach("click").on("click",function(){var a=f("<p style='text-align:center'></p>");return g.before(a),a.append(g),b.event.hideImgOp(),!1})}var e=b.ele,g=f(a);void function(){var a=e.all(".removeImage");0==e.all(".removeImage").length&&(a=f("<button class='removeImage'></button>"),e.append(a)),c(a),a.detach().on("click",function(){if(g.attr("loadingid")){var c=f("#editorMain").all("img[loadingid="+g.attr("loadingid")+"]");c.length>0&&c.remove()}return b.tool.setCart(g.parent()[0],b.options.range),g.remove(),a.hide(),!1})}(),"center"!=g.parent().css("text-align")&&d()},b.event.hideImgOp=function(){var a=b.ele;void function(){var b=a.all(".removeImage");b&&b.hide()}(),void function(){var b=a.all(".centerImage");b&&b.hide()}()}},e.prototype.reg={hrefReg:/http:\/\/[a-zA-Z\d.]*wanke.etao.com[\/a-zA-Z\d?=.&+%]*/g,cdnReg:/taobaocdn[.a-z]*\/tfscom/,fliterReg:"IMG|P|SPAN|FONT|A|UL|LI|DIV|H1|H2|H3|H4|H5|H6|BR|EMBED|EM|VIDEO|B|STRONG|U|LABEL|BIG|S|I|OL|DL|DD|DT|SUB|SUP"},e.prototype.language={video:"\u8bf7\u7c98\u8d34\u89c6\u9891\u5730\u5740",video2:"\u652f\u6301\u6dd8\u5b9d\u3001\u4f18\u9177\u3001\u571f\u8c46\u3001\u91776\u3001\u641c\u72d0\u7f51\u7ad9\u89c6\u9891\u94fe\u63a5",product:"\u8bf7\u8f93\u5165\u4f60\u60f3\u5206\u4eab\u7684\u4e1c\u897f\u540d\u79f0",save:"\u6b63\u5728\u4fdd\u5b58...",saveSuc:"\u4fdd\u5b58\u6210\u529f"},e.prototype.font=function(a){var b=this;b.WKfont=new d(b.options),b.WKfont.init(a)},e.prototype.tool=function(){var b=this;return{fliter:function(c){function d(){c.all("*").each(function(){var a=f(this)[0].tagName,b=f(this).attr("class");if(f(this).removeAttr("class"),f(this).removeAttr("id"),f(this).removeAttr("onclick"),f(this).removeAttr("onmoueover"),"wankeEditorLink"==b&&f(this).addClass("wankeEditorLink"),"h5-video"==b&&f(this).addClass("h5-video"),"FONT"==a&&(f(this).removeAttr("color"),f(this).removeAttr("face")),"P"==a){var c=f(this).css("text-align");f(this).removeAttr("style"),f(this).css("text-align",c)}else"EMBED"!=a&&f(this).removeAttr("style")})}var e=b.reg.fliterReg;setTimeout(function(){var b=c.all("*").length;c.all("*").each(function(c,g){var h=f(this)[0].tagName;a.inArray(h,e.split("|"))||f(this).remove(),g==b-1&&d()})},10)},insertArea:function(){var a=+new Date,c=f("<div class='insertArea' id='"+a+"'></div>");return b.tool.removeHTML(b.$wrap.html())==b.tool.removeHTML(b.options.message)&&(b.$wrap.fire("click"),b.$wrap.fire("focus"),b.options.range=b.tool.getRange()),b.tool.insert(c[0],b.options.range),b.$message.hide(),f("#"+a)},dragSort:function(b){b._default={},this.drag.apply(f("#J_UploaderQueue").all(".queue-file"),[function(a){this.x=a.clientX-parseInt(f(this).css("left")),this.y=a.clientY-parseInt(f(this).css("top")),f(this).css({opacity:1,zIndex:89}),b._default.dragDown=!0,f("#J_UploaderQueue").all(".queue-space").css({opacity:0,width:parseInt(f("#J_UploaderQueue").attr("space"))-6})},function(c){function d(c,d){a.each(f("#J_UploaderQueue").all(".queue-space"),function(a){var e,g,h,i;e=f(a).offset().left,g=f(a).offset().top,h=f(a).width(),i=f(a).height(),c>e&&e+h>c&&d>g&&g+i>d?(f(a).css({opacity:1}),b._default.space=f(a)):f(a).css({opacity:0})})}var e=c.clientX-this.x,g=c.clientY-this.y;f(this).css({left:e,top:g}),d(c.clientX,c.clientY+f(window).scrollTop())},function(){b._default.space?(b._default.space.before(f(this)),f(this).animate({width:100,height:100},.2),b.tool.realign(f("#J_UploaderQueue"),"ani"),b._default.space=null):f(this).animate({left:f(this).attr("dleft"),top:f(this).attr("dtop"),width:100,height:100},1/3),f(this).css({opacity:1,zIndex:88}),b._default.dragDown=!1}])},drag:function(b,c,d){var e=this;return a.each(e,function(a){a.downCallback=b,a.moveCallback=c,a.upCallback=d,f(a).css({cursor:"move"}),f(a).on("mousedown",function(b){b.preventDefault(),a.downCallback(b),document.onmousemove=function(b){b=b||event,window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),a.moveCallback(b),document.all&&(b.returnValue=!1)},f(document).on("mouseup",function(b){document.onmousemove=null,f(document).detach("mouseup"),a.upCallback(b)})})}),e},realign:function(b,c){function d(b){g=e.width();var i=k(b);if(i>h.minSpace){a.each(j,function(a,d){l=(h.width+i)*(d%b)+i,m=(h.height+i)*Math.floor(d/b)+i,c?f(a).animate({left:l,top:m},.25):f(a).css({left:l,top:m}),f(a).attr("dleft",l).attr("dtop",m)}),e.height(Math.ceil(j.length/b)*(h.height+i)+i),e.attr("num",b).attr("space",i),e.all(".queue-space").remove(),e.all(".beQs").removeClass("beQs");var n=f("<li class='queue-space'></li>");n.css({opacity:0,background:"#f8f8f8"}),a.each(j,function(a,c){f(a).hasClass("beQs")||(f(a).prev()&&f(a).prev().hasClass("queue-space")&&!f(a).prev().hasClass("linelast")||f(a).before(n.clone()),0==(c+1)%b?f(a).after(n.clone().addClass("linelast")):c==j.length-1&&f(a).after(n.clone()),f(a).addClass("beQs"))}),a.each(e.children(".queue-space"),function(a,c){l=(h.width+i)*(c%(b+1)),m=(h.height+i)*Math.floor(c/(b+1))+i,f(a).css({left:l,top:m}).attr("space",i)})}else b--,b>0&&d(b)}var e=b,g=e.width(),h={minSpace:20,width:100,height:100},i=Math.floor(g/h.width),j=e.children(".queue-file"),k=function(a){return(g-h.width*a)/(a+1)},l=0,m=0;d(i)},overlay:function(b){var c=a.merge(b,{opacity:.6,background:"#666",zIndex:999}),d={view:function(){d.$overlay.css({top:0,left:0,height:f(document).height(),width:f(window).width(),position:"absolute",opacity:c.opacity,background:c.background,zIndex:parseInt(c.ele.css("z-index"))-1||c.zIndex})},event:function(){f(window).on("resize",function(){d.view()})},init:function(){d.$overlay=f("<div class='overlay'></div>"),d.$overlay.appendTo(f("body")),d.view(),d.event()}};return d.init(),d},browser:function(){var a=window.navigator.userAgent.toLowerCase(),b={version:(a.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(a)&&!(/chrome/i.test(a)&&/webkit/i.test(a)&&/mozilla/i.test(a)),opera:/opera/.test(a),msie:/msie/.test(a)&&!/opera/.test(a),mozilla:/mozilla/.test(a)&&!/(compatible|webkit)/.test(a)&&!(/chrome/i.test(a)&&/webkit/i.test(a)&&/mozilla/i.test(a)),chrome:/chrome/i.test(a)&&/webkit/i.test(a)&&/mozilla/i.test(a)};return b},formatBlock:function(){document.execCommand("FormatBlock",!1,"p"),document.execCommand("RemoveFormat")},removeHTML:function(a){return a=a.toLowerCase(),a=a.replace(/<\/?[^>]*>/g,""),a=a.replace(/[ | ]*\n/g,"\n"),a=a.replace(/[\r\n\s"]/gi,"")},getSelection:function(){return window.getSelection?window.getSelection():document.selection},getRange:function(){var a;try{a=this.getSelection().createRange?this.getSelection().createRange():this.getSelection().getRangeAt(0)}catch(b){setTimeout(function(){a=this.getSelection().createRange?this.getSelection().createRange():this.getSelection().getRangeAt(0)},1)}return a&&a.text&&(a.selectText=a.text),a&&a.toString&&(a.selectText=a.toString()),a},setCart:function(a,c){try{document.selection&&parseInt(b.browser.version)<9?(c.collapse(!1),c.select()):(c.setStartAfter(a),c.collapse(!0),this.getSelection().removeAllRanges(),this.getSelection().addRange(c))}catch(d){}},insert:function(a,c){if(c=c||this.tool.getRange(),this.getSelection(),!window.getSelection||b.browser.msie&&parseInt(b.browser.version)<9)c.pasteHTML(a.outerHTML),c.select();else{for(var d=a,e=d.lastChild;e&&"br"==e.nodeName.toLowerCase()&&e.previousSibling&&"br"==e.previousSibling.nodeName.toLowerCase();){var f=e;e=e.previousSibling,d.removeChild(f)}c.insertNode(d),e&&(c.setEndAfter(e),c.setStartAfter(e))}this.setCart(a,c)}}},e.prototype.init=function(){this.ele=this.options.ele,this.left=this.options.left=this.ele.offset().left,this.top=this.options.top=this.ele.offset().top,this.tool=this.options.tool=this.tool(),this.view(),this.event(),this.font(this.options.font),this.browser=this.tool.browser()},e},{requires:["node","xtemplate","WKfont"]});