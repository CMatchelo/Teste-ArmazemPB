define(["knockout","pubsub","notifier"],function(e,t,n){"use strict";return{templateName:e.observable(),isTemplateMessage:e.observable(!1),onLoad:function(r){$.Topic(t.topicNames.NOTIFICATION_ADD).subscribe(function(){var t=$("#cc-notifications");r.fixed()?t.hasClass("fixed-to-top")||t.addClass("fixed-to-top"):t.hasClass("fixed-to-top")&&t.removeClass("fixed-to-top");var i=this,s=i.id(),o=i.type();if(r.isTemplateMessage()){var t=$(".cc-notification-message").html($("<div />").attr("data-bind","template: '"+r.templateName()+"'"));e.cleanNode($(t)[0]),e.applyBindings(r.viewModel,$(t)[0])}r.timeoutEnabled()&&r.timeoutEnabled()!="false"&&r.timeout()&&r.timeoutMessageTypes().split(",").indexOf(o)>-1&&setTimeout(function(){n.clearMessage(s,o)},parseInt(r.timeout()*1e3)),r.isTemplateMessage(!1)}),$.Topic(t.topicNames.NOTIFICATION_TEMPLATE_ADD).subscribe(function(e,n,i){r.viewModel=n,r.templateName(i),r.isTemplateMessage(!0),$.Topic(t.topicNames.NOTIFICATION_ADD).publishWith(e,[{message:"success"}])})}}})