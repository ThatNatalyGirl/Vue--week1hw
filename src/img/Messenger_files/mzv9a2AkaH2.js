if (self.CavalryLogger) { CavalryLogger.start_js(["HqWtw"]); }

__d("MessengerThreadSharedMediaHelper",["AsyncRequest","MessengerThreadSharedMediaAfterWebGraphQLQuery","MessengerThreadSharedMediaBeforeWebGraphQLQuery","MessengerThreadSharedMediaFindWebGraphQLQuery","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={search:function(a,c,d){a=new(b("AsyncRequest"))(b("MessengerThreadSharedMediaFindWebGraphQLQuery").getLegacyURI({id:a,photoID:c}));b("promiseDone")(a.setAllowCrossPageTransition(!0).exec().then(function(a){return a.getPayload()}),function(a){return d(a)});return a},loadMorePrevious:function(a,c,d,e){a=new(b("AsyncRequest"))(b("MessengerThreadSharedMediaAfterWebGraphQLQuery").getLegacyURI({id:a,after:c,first:d}));b("promiseDone")(a.setAllowCrossPageTransition(!0).exec().then(function(a){return a.getPayload()}),function(a){return e(a)});return a},loadMoreLatest:function(a,c,d,e){a=new(b("AsyncRequest"))(b("MessengerThreadSharedMediaBeforeWebGraphQLQuery").getLegacyURI({id:a,before:c,last:d}));b("promiseDone")(a.setAllowCrossPageTransition(!0).exec().then(function(a){return a.getPayload()}),function(a){return e(a)});return a}};e.exports=a}),null);