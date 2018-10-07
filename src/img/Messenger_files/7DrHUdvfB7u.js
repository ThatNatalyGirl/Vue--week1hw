if (self.CavalryLogger) { CavalryLogger.start_js(["EVWsP"]); }

__d("P2PLinkConstants",[],(function(a,b,c,d,e,f){e.exports={receiverIneligibleHelpURI:"http://www.facebook.com/help/1495718484027862",addDebitCardHelpURI:"http://www.facebook.com/help/200298266807261",helpCenterURI:"http://www.facebook.com/help/863171203733904",contactSupportURI:"http://www.facebook.com/help/contact/1333677766662195",disabledPaymentsSupportURI:"http://www.facebook.com/help/contact/223254857690713",complianceLearnMoreURI:"http://www.facebook.com/help/1555715811351399",complianceLearnMoreMsiteURI:"http://www.facebook.com/help/messenger-app/369959656515129",securePayInfoLearnMoreURI:"http://www.facebook.com/help/146373702454423",contactFraudTeamURI:"http://www.facebook.com/help/contact/370238886476028",payerProtectionURI:"http://www.facebook.com/payer_protection/",helpTransferSystemFailureURI:"http://www.facebook.com/help/contact/614010102040957",helpTransferManualReviewURI:"http://www.facebook.com/help/messenger-app/1463256903894928",helpTransferRecipientCanceledURI:"http://www.facebook.com/help/messenger-app/1564459413784472",helpTransferCompletedURI:"http://www.facebook.com/help/messenger-app/750020781733477",helpTransferCanceledSameCardURI:"http://www.facebook.com/help/messenger-app/818512131561533",helpTransferPushFailURI:"http://www.facebook.com/help/1386991644944095",settingsWWWURI:"http://secure.facebook.com/settings/?tab=payments",settingsMsiteURI:"http://m.facebook.com/settings/p2p/",mTermsURI:"http://www.facebook.com/legal/m",mHelpURI:"http://www.facebook.com/help/messenger-app/870471599656315",disputeURI:"http://www.facebook.com/help/contact/828169843971429",paymentMethodsURI:"https://www.facebook.com/settings?tab=payments&section=settings",paymentHistoryURI:"https://www.facebook.com/settings?tab=payments&section=history",paymentsTermsURI:"http://www.facebook.com/payments_terms/"}}),null);
__d("EmojiDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationDispatcher"))({strict:!1})}),null);
__d("EmojiActions",["EmojiDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("keyMirror")({CHANGE_CURRENT_CATEGORY:null,CHANGE_EMOJI_COLOR:null,EMOJI_COLOR_READY:null,GET_EMOJI_COLOR:null,TRAY_DATA_READY:null,UPDATE_TRAY_DATA:null});var g={Types:a,loadedTrayData:function(){b("EmojiDispatcher").dispatch({type:g.Types.TRAY_DATA_READY})},updateTrayData:function(){b("EmojiDispatcher").dispatch({type:g.Types.UPDATE_TRAY_DATA})},changeEmojiColor:function(a){b("EmojiDispatcher").dispatch({type:g.Types.CHANGE_EMOJI_COLOR,color:a})},changeCurrentCategory:function(a){b("EmojiDispatcher").dispatch({type:g.Types.CHANGE_CURRENT_CATEGORY,currentCategory:a})},getEmojiColor:function(){b("EmojiDispatcher").dispatch({type:g.Types.GET_EMOJI_COLOR})},emojiColorReady:function(a){b("EmojiDispatcher").dispatch({type:g.Types.EMOJI_COLOR_READY,color:a})}};e.exports=g}),null);
__d("WorkDoNotDisturbSettingsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:WorkDoNotDisturbSettingsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:WorkDoNotDisturbSettingsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WorkDoNotDisturbSettingsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setOption=function(a){this.$1.option=a;return this};a.prototype.setSource=function(a){this.$1.source=a;return this};c={event:!0,option:!0,source:!0};e.exports=a}),null);
__d("ChatEmojiPickerButton.react",["cx","fbt","Image.react","ImmutableObject","Keys","MessengerHotLikePreviewEvents","MessengerHotLikeUtils","React","MercuryMessageObject","MercuryTriodeSourceUtil","StickerConstants","clearTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("MercuryMessageObject").get();c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$2=null,this.$3=null,this.$6=function(a){a.stopPropagation(),this.props.onClick(this.props.emojiData.emojiCodes,this.refs.div)}.bind(this),this.$7=function(a){a.keyCode===b("Keys").RETURN&&(a.preventDefault(),this.props.onClick(this.props.emojiData.emojiCodes,this.refs.div))}.bind(this),this.$8=function(a){a.preventDefault();a.stopPropagation();if(a.button!==0)return;!this.props.enableHotEmoji?this.$1=setTimeout(this.$10,1e3):(this.$1=setTimeout(function(){this.$3=Date.now(),this.$11(),this.$12()}.bind(this),500),this.props.onMouseDown&&this.props.onMouseDown())}.bind(this),this.$9=function(a){a.stopPropagation();b("clearTimeout")(this.$1);if(this.props.enableHotEmoji){if(!(this.props.threadID&&this.$3))return;this.$3=0;this.$14();this.$15()}}.bind(this),this.$10=function(){this.props.onLongPress(this.props.emojiData.emojiCodes,this.refs.div)}.bind(this),this.$16=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").POP,this.props.threadID)}.bind(this),this.$4=function(){this.$3&&(this.$3=0,this.$14(),this.$16())}.bind(this),c}a.prototype.componentWillUnmount=function(){this.$4(),b("clearTimeout")(this.$1),b("clearTimeout")(this.$2)};a.prototype.render=function(){return b("React").createElement("div",{"aria-label":this.$5(),onClick:this.$6,onKeyDown:this.$7,onMouseDown:this.$8,onMouseLeave:this.$4,onMouseUp:this.$9,ref:"div",role:"button",tabIndex:"0"},b("React").createElement(b("Image.react"),{className:"_1lih _1ift _1ifu",style:{margin:0},src:this.props.emojiData.uri}))};a.prototype.$5=function(){return h._("Pick emoji {emoji choice}",[h._param("emoji choice",String.fromCodePoint.apply(String,this.props.emojiData.emojiCodes))])};a.prototype.$11=function(){this.$10();if(!this.props.threadID)return;var a=this.$13();b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").START,a,this.props.threadID,this.props.emojiData.emojiCodes)};a.prototype.$15=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP_EMOJI,this.props.threadID,!0)};a.prototype.$12=function(){this.$14(),this.$2=b("setTimeoutAcrossTransitions")(this.$16,b("MessengerHotLikeUtils").SizeTimes.large)};a.prototype.$14=function(){b("clearTimeout")(this.$2)};a.prototype.$13=function(){__p&&__p();var a=this.props.threadID;if(!a)return null;a=j.constructStickerMessageObject(b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID,b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),a);j.normalizeNewMessage(a);a.is_like_preview=!0;a.like_preview_since=this.$3;a.customLike=this.props.emojiData;a.body="";return new(b("ImmutableObject"))(a)};a.propTypes={emojiData:c.object.isRequired,enableHotEmoji:c.bool,onClick:c.func.isRequired,onLongPress:c.func.isRequired,threadID:c.string};e.exports=a}),null);
__d("ChatEmojiPicker.react",["cx","ChatEmojiPickerButton.react","ChatEmojiSkinToneSelector.react","EmojiActions","EmojiFormat.bs","EmojiLikeConstants","Grid.react","MessengerEmojiTransitionMapping.bs","MessengerHotLikePreviewEvents","MessengerSupportedEmojiUtils","React","SkinToneEmoji.bs","SubscriptionsHandler","gkx","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("Grid.react").GridItem;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=!1,this.$2=null,this.state={clickedEmoji:null,selectedEmoji:[],toneSelectorShown:!1,toneSelectorContext:null},this.scrollToTop=function(a){this.refs.scrollable&&(this.refs.scrollable.scrollTo?this.refs.scrollable.scrollTo({top:0,behavior:a?"smooth":undefined}):this.refs.scrollable.scrollTop=0)}.bind(this),this.$8=function(a){if(this.props.shouldSaveEmojiColorChoice){var c=b("SkinToneEmoji.bs").getTone(a);b("EmojiActions").changeEmojiColor(c)}this.props.onSelect&&this.props.onSelect(a)}.bind(this),this.$4=function(a,c){this.props.shouldSaveEmojiColorChoice&&this.props.useSkinToneSelector&&b("SkinToneEmoji.bs").hasVariations(a)?(this.$9(a,c),this.$1=!1):this.$1?this.$1=!1:this.$8(a)}.bind(this),this.$5=function(a,c){this.props.useSkinToneSelector&&b("SkinToneEmoji.bs").hasVariations(a)?this.$9(a,c):this.setState({clickedEmoji:a}),this.$1=!0}.bind(this),this.$7=function(){this.$1||this.$3()}.bind(this),this.$6=function(){this.$3();var a=this.refs.scrollable;typeof this.props.onScroll==="function"&&a&&(a.scrollTop+a.clientHeight+100>=a.scrollHeight-20&&(this.props.onScroll&&this.props.onScroll()))}.bind(this),c}a.prototype.componentDidMount=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").START,function(a,c,d){d&&this.props.useSkinToneSelector&&!b("SkinToneEmoji.bs").hasVariations(d)&&this.state.toneSelectorShown&&this.$3()}.bind(this)),b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").FINISH_EMOJI_ANIMATION,function(a,c,d){a===this.props.threadID&&(d&&this.state.clickedEmoji&&this.props.sendCustomEmoji&&(this.props.sendCustomEmoji({emoji:b("EmojiFormat.bs").codeArrayToUnicode(this.state.clickedEmoji)},d,b("EmojiLikeConstants").source.PICKER),this.setState({clickedEmoji:null})))}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$2&&this.$2.release()};a.prototype.render=function(){__p&&__p();var a=this.props.emojiChoices.map(function(a){var c=String.fromCodePoint.apply(String,a),d=this.props.enableHotEmoji||!b("SkinToneEmoji.bs").hasVariations(a),e=a,f=[].concat(e);if(!b("MessengerSupportedEmojiUtils").isMessengerSupportedEmojiKey(b("EmojiFormat.bs").codeArrayToCodeString(e)))return null;b("MessengerEmojiTransitionMapping.bs").hasGender(e)&&(e=b("MessengerEmojiTransitionMapping.bs").makeFemale(e));if(b("MessengerEmojiTransitionMapping.bs").isBlacklisted(e))return null;e=b("MessengerSupportedEmojiUtils").getUrl(b("EmojiFormat.bs").codeArrayToCodeString(e),this.props.emojiSize?this.props.emojiSize:b("EmojiLikeConstants").size.SMALL);return e?b("React").createElement(i,{key:a.join("_"),className:"_3-sy _3dyd"+(c===this.props.currentEmoji?" _4w0j":"")},b("React").createElement("div",{className:(c===this.props.currentEmoji?"_4rlt":"")+" _4rlu"},b("React").createElement(b("ChatEmojiPickerButton.react"),{emojiData:{emojiCodes:f,uri:e},enableHotEmoji:d,onClick:this.$4,onLongPress:this.$5,threadID:this.props.threadID}))):null}.bind(this)).filter(function(a){return!!a});return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_6f3k"),onScroll:this.$6,ref:"scrollable"},b("React").createElement(b("Grid.react"),{cols:this.props.columns,alignh:this.props.alignh,className:"_3-s_ _3ecb"},a),this.props.useSkinToneSelector?b("React").createElement(b("ChatEmojiSkinToneSelector.react"),{context:this.state.toneSelectorContext,emojiCodes:this.state.selectedEmoji,onBlur:this.$7,onSelect:this.$8,sendCustomEmoji:this.props.sendCustomEmoji,shouldSaveEmojiColorChoice:this.props.shouldSaveEmojiColorChoice,shown:this.state.toneSelectorShown,threadID:this.props.threadID}):null)};a.prototype.$9=function(a,b){this.setState({toneSelectorShown:!0,selectedEmoji:a,toneSelectorContext:b})};a.prototype.$3=function(){this.setState({toneSelectorShown:!1})};a.propTypes={className:c.string,columns:c.number,currentEmoji:c.string,emojiChoices:c.arrayOf(c.arrayOf(c.number)).isRequired,enableHotEmoji:c.bool,onSelect:c.func,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,threadID:c.string,useSkinToneSelector:c.bool};a.defaultProps={columns:7,useSkinToneSelector:!1};e.exports=a}),null);
__d("ChatEmojiSkinToneFlyout.react",["cx","fbt","ChatEmojiPicker.react","MessengerEmojiConfig","React","SkinToneEmoji.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){var a=[];if(this.props.emojiCodes.length>0){var c=b("SkinToneEmoji.bs").removeTone(this.props.emojiCodes);a=b("MessengerEmojiConfig").emoji_colors.map(function(a){return b("SkinToneEmoji.bs").applyTone(c,a)})}var d=null;this.props.shouldSaveEmojiColorChoice&&(d=b("React").createElement("div",{className:"_4gww"},h._("Pick one. You can change it anytime in Settings.")));return b("React").createElement("div",null,d,b("React").createElement(b("ChatEmojiPicker.react"),{className:this.props.className,columns:6,emojiChoices:a,enableHotEmoji:!0,onSelect:this.props.onSelect,sendCustomEmoji:this.props.sendCustomEmoji,threadID:this.props.threadID}))};function a(){i.apply(this,arguments)}a.propTypes={className:c.string,emojiCodes:c.arrayOf(c.number).isRequired,onSelect:c.func.isRequired,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,threadID:c.string};e.exports=a}),null);
__d("ChatEmojiSkinToneSelector.react",["cx","fbt","ChatEmojiSkinToneFlyout.react","ContextualLayerAutoFlip","React","XUIContextualDialog.react","emptyFunction"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j=276;i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){return b("React").createElement(b("XUIContextualDialog.react"),{behaviors:{ContextualLayerAutoFlip:b("ContextualLayerAutoFlip")},context:this.props.context,contextRef:b("emptyFunction"),label:h._("Skintone Selector"),onBlur:this.props.onBlur,onToggle:this.$1,shown:this.props.shown,width:j},b("React").createElement(b("ChatEmojiSkinToneFlyout.react"),{className:"_2ejf",emojiCodes:this.props.emojiCodes,onSelect:this.props.onSelect,sendCustomEmoji:this.props.sendCustomEmoji,shouldSaveEmojiColorChoice:this.props.shouldSaveEmojiColorChoice,threadID:this.props.threadID}))};function a(){i.apply(this,arguments)}a.propTypes={context:c.instanceOf(HTMLElement),emojiCodes:c.arrayOf(c.number).isRequired,onBlur:c.func.isRequired,onSelect:c.func.isRequired,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,shown:c.bool,threadID:c.string};e.exports=a}),null);
__d("WorkChatCustomMenuItem",["cx","CSS","DOM","MenuItem","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=["href","rel","ajaxify","target","accesskey"];function j(a,c){var d={};i.forEach(function(a){c[a]&&(d[a]=c[a])});b("DOM").setAttributes(a,d)}c=babelHelpers.inherits(a,b("MenuItem"));h=c&&c.prototype;function a(a){h.constructor.call(this,a)}a.prototype._renderItemContent=function(){__p&&__p();this._anchor=b("DOM").create(this._data.renderas==="label"?"label":"a",{className:"_54nc"+(this._data.icon?" _54nu":"")});if(this._data.children){var a=this._data.icon?b("React").cloneElement(this._data.icon,{className:b("joinClasses")(this._data.icon.props.className,"mrs")}):null;b("ReactDOM").render(b("React").createElement("div",null,a,b("React").createElement("div",{className:"_54nh"},this._data.children)),this._anchor);this._data.label=this._anchor.innerText||this._anchor.textContent}else{a=b("DOM").create("div",null,b("DOM").create("div",{className:"_54nh"},this._data.markup||this._data.label));this._data.icon&&b("DOM").prependContent(a,this._data.icon);b("DOM").setContent(this._anchor,a)}this._data.href||(this._data.href="#");this.isDisabled()||j(this._anchor,this._data);b("DOM").setAttributes(this._anchor,this.__getAttributesFromData());this._anchor.setAttribute("role",this._ARIARole);return this._anchor};a.prototype.render=function(){var a=h.render.call(this);b("CSS").addClass(a,"_1ydp");this._disabled&&b("CSS").addClass(a,"_5arm");return a};e.exports=a}),null);
__d("Keys.bs",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=8;b=9;c=13;d=18;e=27;var g=32,h=33,i=34,j=35,k=36,l=37,m=38,n=39,o=40,p=46,q=188,r=190,s=65,t=90,u=48,v=96,w=105;f.backspace=a;f.tab=b;f.$$return=c;f.alt=d;f.esc=e;f.space=g;f.page_up=h;f.page_down=i;f.end_=j;f.home=k;f.left=l;f.up=m;f.right=n;f.down=o;f.$$delete=p;f.comma=q;f.period=r;f.a=s;f.z=t;f.zero=u;f.numpad_0=v;f.numpad_9=w}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$3=function(){this.setState({loading:!1})}.bind(this),this.state={loading:!0}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.src!==this.props.src&&this.setState({loading:!0})};a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};a.prototype.$1=function(){"use strict";return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(event){var a=b("ReactDOM").findDOMNode(this),c=b("Vector").getEventPosition(event.nativeEvent),d=b("Vector").getElementPosition(a);a=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(a).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(c)?clearTimeout(this.timer):this._onMouseEnter());c=c.x-d.x;d=c/a;b("Locale").isRTL()?c=d>1-this.PAGE_TO_PREV_PERCENTAGE:c=d<this.PAGE_TO_PREV_PERCENTAGE;c?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(event){var a=this.state.currentActiveSection==this.sections.FORWARD,c=event.target;b("Parent").bySelector(c,"._51an")||this.props.onClick&&this.props.onClick(a,event)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("VisualPollVoteListener",["cx","Arbiter"],(function(a,b,c,d,e,f,g){"use strict";var h="visual_poll_vote_";a={EVENT_KEY:h,initCTAListener:function(a,c){b("Arbiter").subscribe(h+a,function(){c.classList.remove("_62z6")})}};e.exports=a}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("StickersStateStore",["FluxReduceStore","StickersActions","StickersConfig","StickersDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({recentStickers:[],recentStickersLoaded:!1,showFlyout:!1,storePackID:null,threadID:null,trayLoaded:!1,trayPackID:null})};a.prototype.reduce=function(a,c){__p&&__p();var d=c;c=b("StickersActions").Types;switch(d.type){case c.ADD_RECENT_STICKER:var e=[d.sticker];a.get("recentStickers").forEach(function(a){if(a.id===d.sticker.id)return;e.push(a)});return a.set("recentStickers",e.splice(0,b("StickersConfig").max_mru_stickers));case c.HIDE_FLYOUT:return a.set("showFlyout",!1);case c.LOAD_RECENT_STICKERS:return a.set("recentStickersLoaded",!0).set("recentStickers",d.stickers);case c.SELECT_STORE_PACK:return a.set("storePackID",d.packID);case c.SELECT_TRAY_PACK:return a.set("trayPackID",d.packID).set("trayLoaded",!0);case c.SHOW_FLYOUT:return a.set("showFlyout",!0).set("threadID",d.threadID);case c.TRAY_LOADED:return a.set("trayLoaded",!0);default:return a}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=688,i=320,j=null,k=b("React").createClass({displayName:"StoreLayer",mixins:[b("PureStoreBasedStateMixin")(b("StickersStateStore"))],propTypes:{isComposer:a.bool,onToggle:a.func.isRequired,shown:a.bool.isRequired},getDefaultProps:function(){return{isComposer:!1}},statics:{calculateState:function(){return{packID:b("StickersStateStore").getState().get("storePackID")}}},getInitialState:function(){return{renderStore:function(){return b("React").createElement("div",{className:"_5r5e"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))}}},UNSAFE_componentWillMount:function(){b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])},shouldComponentUpdate:function(a){return!!a.shown},componentDidMount:function(){b("Bootloader").loadModules(["StickersStore.react","react-relay/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(a,c,d,e){this.setState({renderStore:function(){var f=this.state.packID?new e({packID:this.state.packID}):new d();return b("React").createElement(c,{Component:a,route:f,renderFetched:function(c){return b("React").createElement(a,babelHelpers["extends"]({},c,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function(a){b("requestAnimationFrame")(function(){return this.props.onToggle(a)}.bind(this))},render:function(){var a=b("isSocialPlugin")()&&document.body.offsetWidth<h?i:h;return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogFitHeight:b("DialogFitHeight"),LayerAutoFocus:b("LayerAutoFocus"),LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:a},b("React").createElement(b("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),l=function(a){j||(j=b("DOM").create("div"),b("DOM").appendContent(document.body,j)),b("ReactDOM").render(b("React").createElement(k,{isComposer:a,onToggle:n,shown:!0}),j)},m=function(){if(!j)return;b("ReactDOM").render(b("React").createElement(k,{shown:!1,onToggle:n}),j)},n=function(a){a?l():m()};c={showStore:function(a,c){b("StickersActions").selectStorePack(a),l(!!c)}};e.exports=c}),null);
__d("PhotoProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EQUIRECTANGULAR:"equirectangular",CUBESTRIP:"cubestrip",CYLINDRICAL:"cylindrical",TILED_CUBEMAP:"tiled_cubemap",PERSPECTIVE:"perspective",TRANSVERSE_CYLINDRICAL:"transverse-cylindrical"})}),null);
__d("PhotoRendererProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSPECTIVE:"perspective",STEREOGRAPHIC:"stereographic",CYLINDRICAL:"cylindrical",EQUIRECTANGULAR:"equirectangular"})}),null);
__d("QuestionPollType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHOOSE_ONE:"CHOOSE_ONE",CHOOSE_MULTIPLE:"CHOOSE_MULTIPLE",GIF_CHOOSE_ONE:"GIF_CHOOSE_ONE",IMAGE_CHOOSE_ONE:"IMAGE_CHOOSE_ONE",VISUAL_TEXT_CHOOSE_ONE:"VISUAL_TEXT_CHOOSE_ONE",IMAGE_CHOOSE_MULTIPLE:"IMAGE_CHOOSE_MULTIPLE"})}),null);
__d("WorkNuxID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DO_NOT_DISTURB_PROMOTION_NUX_ID:6237,WORK_CHAT_DOWNLOAD_UPSELL_BANNER:5468})}),null);
__d("WorkUserDoNotDisturbSettingsEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",TURN_OFF:"turn_off",TURN_ON:"turn_on"})}),null);
__d("WorkUserDoNotDisturbSettingsSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BLUE_BAR_MODERN_MENU:"blue_bar_modern_menu",BOOKMARK_NAV_MENU:"bookmark_nav_menu",WORKPLACE_CHAT_MENU:"workplace_chat_menu"})}),null);
__d("create-react-class",["create-react-class/factory","react"],(function(a,b,c,d,e,f){"use strict";if(typeof b("react")==="undefined")throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");a=new(b("react").Component)().updater;e.exports=b("create-react-class/factory")(b("react").Component,b("react").isValidElement,a)}),null);
__d("createReactClass_DEPRECATED",["create-react-class"],(function(a,b,c,d,e,f){"use strict";e.exports=b("create-react-class")}),null);
__d("getErrorNameFromWebGLErrorCode",[],(function(a,b,c,d,e,f){var g={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};function a(a){return!(a in g)?"UNKNOWN_ERROR":g[a]}e.exports=a}),null);
__d("XProfilePictureOverlayLandingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profilepicframes/",{overlay_source_object_id:{type:"FBID"},photo_id:{type:"Int"},profile_id:{type:"Int"},query:{type:"String"},selected_page_id:{type:"Int"},selected_overlay_id:{type:"Int"}})}),null);