define(["pubsubImpl","pubsub","jquery"],function(e,t,n){e.prototype.debug=function(){var r=e.prototype.topic;e.prototype.topic=function(e){var t=r.apply(this,arguments);if(!t.modified){t.modified=!0;var n=t.publish;t.publish=function(){return console.log("%c publish => ","background: #000; color: #BADA55",e,arguments),n.apply(this,arguments)};var i=t.publishWith;t.publishWith=function(){return console.log("%c publishWith => ","background: #000; color: #D455DA",e,this,arguments),i.apply(this,arguments)}}return t},n.Topic=t.topic.bind(t);for(var i in t.topics)t.topics.hasOwnProperty(i)&&n.Topic(i)}})