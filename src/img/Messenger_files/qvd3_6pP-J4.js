if (self.CavalryLogger) { CavalryLogger.start_js(["Glw2H"]); }

__d("MessengerContextualActions.react",["cx","ContextualLayerUpdateOnScroll","LayerHideOnBlur","Link.react","React","ReactAbstractContextualDialog","ReactLayer"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i;d=b("React").PropTypes;var j=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({displayName:"MessengerContextualActionsDialog",theme:{wrapperClassName:"_hw2",arrowDimensions:{offset:12,length:12}}}));h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){return b("React").createElement("li",{className:"_hw4"},b("React").createElement(b("Link.react"),{className:"_hw5",onClick:this.props.onClick},this.props.children))};function a(){h.apply(this,arguments)}a.propTypes={onClick:d.func};i=babelHelpers.inherits(c,b("React").Component);i&&i.prototype;c.prototype.render=function(){var a=this.props,c=a.children;a=babelHelpers.objectWithoutProperties(a,["children"]);return b("React").createElement(j,babelHelpers["extends"]({alignment:"center",behaviors:{ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerHideOnBlur:b("LayerHideOnBlur")}},a,{onToggle:this.props.onToggle}),b("React").createElement("ul",{className:"_hw3"},c))};function c(){i.apply(this,arguments)}c.propTypes={onToggle:d.func};c.Item=a;e.exports=c}),null);
__d("MessengerDeleteMessageDialogReact.bs",["fbt","bs_block","bs_curry","ReasonReact.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").reducerComponent("MessengerDeleteMessageDialogReact");function i(){return g._("Delete Message")}var j=g._("Are you sure you want to delete this message?");function k(){return g._("Delete")}function l(a,c,d,e){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(c){return b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Dialog[0](0,[a],0,[c[1][0]],0,0,0,[b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Header[0](0,0,i(0))),b("ReasonReact.bs").element(0,0,b("MessengerDialogBodyReact.bs").make(0,[j])),b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Footer[0](0,0,[b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").CancelButton[0]([d],[])),b("ReasonReact.bs").element(0,0,b("MessengerDialogReact.bs").Button[0](0,[k(0)],0,["danger"],[function(){return b("bs_curry")._1(c[3],0)}],[0],0,0,[]))]))]))},function(){return[!0]},h[10],function(a,d){return b("bs_block").__(2,[[!1],function(){return b("bs_curry")._1(c,0)}])},h[12]]}a=b("ReasonReact.bs").wrapReasonForJs(h,function(a){return l(a.onToggle,a.onDelete,a.onCancel,[])});f.component=h;f.renderDialogHeaderMsg=i;f.dialogBodyMsg=j;f.renderDialogButtonMsg=k;f.make=l;f.jsComponent=a}),null);
__d("SaveMessageUtils",["MessengerDotComSaveModule","QE2Logger","StoryAttachmentStyle","immutable"],(function(a,b,c,d,e,f){__p&&__p();var g=b("immutable").Set.of(b("StoryAttachmentStyle").FALLBACK,b("StoryAttachmentStyle").SHARE,b("StoryAttachmentStyle").EVENT,b("StoryAttachmentStyle").ATTACHED_STORY,b("StoryAttachmentStyle").MUSIC_AGGREGATION,b("StoryAttachmentStyle").AVATAR),h=b("immutable").Set.of(b("StoryAttachmentStyle").GROUP_SELL_PRODUCT_ITEM);a={isSavableMessageAttachment:function(a){__p&&__p();var c=!0;for(var d=0;d<a.length;d++){if(a[d]==b("StoryAttachmentStyle").GROUP_SELL_PRODUCT_ITEM)if(b("MessengerDotComSaveModule").can_save_for_sale_item_attachment!=null){b("QE2Logger").logExposureForUser("marketplace_www_messenger_save");return b("MessengerDotComSaveModule").can_save_for_sale_item_attachment}else return!1;if(h.has(a[d]))return!0;g.has(a[d])||(c=!1)}return c}};e.exports=a}),null);
__d("XMessengerDotComSaveController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/save/message/",{})}),null);
__d("MessengerMessageActions.react",["cx","fbt","Bootloader","ContextualLayerAutoFlipHorizontal","ContextualLayerHideOnScrollOut","ContextualLayerUpdateOnScroll","CurrentUser","FBClipboardLink.react","FBLogger","JSResource","LayerHideOnBlur","LayerHideOnEscape","MercuryConfig","MessageReplyPermissions","MessengerEnvironment","MercuryThreadActions","MessagingThreadCustomizationSource","MessengerAdminGroupUtils","ReactLayeredComponentMixin_DEPRECATED","LazyComponent.react","MercuryAttachmentType","MercuryMessageActions","MessengerDialogs.bs","MessengerContextualActions.react","MessengerDeleteMessageDialogReact.bs","MessengerMessage.bs","MessengerReactionsMenu.react","MessengerState.bs","StoryAttachmentStyle","React","ReasonBootloadOnRender.react","ReasonResource","AsyncRequest","CollectionsDisplaySurface","CollectionCurationMechanisms","MessengerConfig","MessengerDotComSaveModule","MessengerURIUtils.bs","SaveMessageUtils","SavedStateActions","URLMatcher","XMessengerDotComSaveController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MercuryThreadActions").get(),j=b("MessengerDeleteMessageDialogReact.bs").jsComponent,k=b("MessengerContextualActions.react").Item;a=b("React").PropTypes;c=b("React").createClass({displayName:"MessengerMessageActions",mixins:[b("ReactLayeredComponentMixin_DEPRECATED")],propTypes:{hasFormatting:a.func,isActive:a.bool,isDeletable:a.bool,isFromViewer:a.bool,isShowingOriginal:a.bool,includeReactions:a.bool,message:a.object.isRequired,onToggleOriginal:a.func,onShowMenu:a.func.isRequired,onReplyToMessage:a.func,isSavedView:a.bool},getDefaultProps:function(){return{isDeletable:!0}},getInitialState:function(){return{shown:!1}},render:function(){return this.props.isActive?b("React").createElement("span",{className:"_2rvp",ref:"actions",onClick:this._toggleShown},this.renderMenu()):null},renderMenu:function(){return!this.state.open?null:b("React").createElement(b("MessengerReactionsMenu.react"),{entryPoint:"dot_menu",message:this.props.message,onHide:this._hidePopover,refProp:function(){return this.refs.actions}.bind(this),useChatEmojiReact:b("MercuryConfig").MCER})},_openPopover:function(){this.setState({open:!0,shown:!1})},_hidePopover:function(){this.setState({open:!1})},renderLayers:function(){if(!this.state.shown)return{};var a;this.props.isSavedView?a=this._getSaveListItems():a=this._getThreadListItems();return{contextualDialog:b("React").createElement(b("MessengerContextualActions.react"),{behaviors:{ContextualLayerAutoFlipHorizontal:b("ContextualLayerAutoFlipHorizontal"),ContextualLayerHideOnScrollOut:b("ContextualLayerHideOnScrollOut"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerHideOnEscape:b("LayerHideOnEscape"),LayerHideOnBlur:b("LayerHideOnBlur")},context:this.refs.actions,onToggle:this._handleActionsToggle,shown:this.props.isActive},this._renderRetry(),a)}},_getThreadListItems:function(){__p&&__p();var a,c=[];b("MessengerConfig").canSaveMessages&&c.push(b("React").createElement(k,{key:"save-messenger",onClick:this._handleMessengerSave},this._renderSaveToMessengerItemMsg()));c.push(b("React").createElement(k,{key:"delete",onClick:this._handleDelete},this._renderActionItemMsg()));var d=this._getLinkToAttachment();d&&b("MessengerConfig").CopyAttachmentLink&&c.push(b("React").createElement(k,{key:"copy-link",onClick:this._handleLink},this._renderCopyAttachmentLinkMsg(d)));this.props.hasFormatting&&this.props.hasFormatting()&&this.props.onToggleOriginal&&c.push(b("React").createElement(k,{key:"view-source",onClick:this._handleToggleOriginal},this._renderShowOriginalMsg()));this._canSaveMessageToFacebook()&&!b("MessengerConfig").canSaveMessages&&c.push(b("React").createElement(k,{key:"save",onClick:this._handleFacebookSave},this._renderSaveItemMsg()));b("MessengerConfig").ShowMessageLinks&&b("MessengerEnvironment").messengerui&&c.push(b("React").createElement(k,{key:"react",onClick:this._handleLink},this._renderLinkItemMsg()));this.props.includeReactions&&c.push(b("React").createElement(k,{key:"perma-link",onClick:this._openPopover},this._renderReactionMsg()));!b("MessengerEnvironment").messengerui&&this.props.onReplyToMessage&&b("MessageReplyPermissions").canReplyToMessage(this.props.message)&&c.push(b("React").createElement(k,{key:"reply-to-message",onClick:this._handleReplyToMessage},this._renderReplyToMessage()));d=b("MessengerState.bs").getThreadMetaNow(b("CurrentUser").getID(),this.props.message.thread_id);var e=d&&d.associated_object;a=d&&d.marketplace_thread_data&&(((a=d.marketplace_thread_data)!=null?a.for_sale_item:a)||((a=d.marketplace_thread_data)!=null?a.buyer_fbid:a)||((a=d.marketplace_thread_data)!=null?a.seller_fbid:a));this.props.message.body&&d&&!d.is_canonical&&b("MessengerAdminGroupUtils").canUpdateThreadDescription(d,b("CurrentUser").getID())&&b("MessengerConfig").ILPMBE&&!e&&!a&&c.push(b("React").createElement(k,{key:"set-as-description",onClick:this._handleSetAsDescription},this._renderSetAsDescription()));return c},_getSaveListItems:function(){var a=[];a.push(b("React").createElement(k,{key:"unsave-messenger",onClick:this._handleMessengerUnsave},this._renderUnsaveToMessengerItemMsg()));return a},_toggleShown:function(a){a.stopPropagation(),this.setState({shown:!this.state.shown},function(){return this.props.onShowMenu(this.state.shown)}.bind(this))},_renderActionItemMsg:function(){return h._("Delete")},_renderSaveToMessengerItemMsg:function(){return h._("Save")},_renderUnsaveToMessengerItemMsg:function(){return h._("Unsave")},_renderSaveItemMsg:function(){return b("CurrentUser").isWorkUser()?h._("Save to Workplace"):this._isMarketplaceAttachment()?h._("Save to Marketplace"):h._("Save to Facebook")},_renderReactionMsg:function(){return h._("React")},_renderReplyToMessage:function(){return h._("Reply")},_renderSetAsDescription:function(){return h._("Set Group Description")},_renderShowOriginalMsg:function(){if(this.props.isShowingOriginal)return h._("Show Formatted");else return h._("Show Original")},_renderCopyAttachmentLinkMsg:function(a){var c=h._("Copy Link To Share");return b("React").createElement(b("FBClipboardLink.react"),{suppress:!0,tooltip:c,value:a},c)},_renderLinkItemMsg:function(){var a=b("MessengerURIUtils.bs").getURIForMessage(this.props.message).getQualifiedURIBase().toString(),c=h._("Copy Link");return b("React").createElement(b("FBClipboardLink.react"),{suppress:!0,tooltip:"",value:a},c)},_renderRetry:function(){return!b("MessengerMessage.bs").hasError(this.props.message)?null:b("React").createElement(k,{onClick:this._handleRetry},h._("Try Again"))},_handleActionsToggle:function(a){a||this._handleDeselect()},_handleDeselect:function(){this.setState({shown:!1},function(){return this.props.onShowMenu(this.state.shown)}.bind(this))},_handleDelete:function(){var a=this.props.message;b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(j,{onDelete:function(){b("MercuryMessageActions").get()["delete"](a.thread_id,[a.message_id])},onToggle:this._handleDialogToggle,onCancel:this._handleDeselect,isFromViewer:this.props.isFromViewer})}.bind(this))},_getLinkToAttachment:function(){var a=this.props.message;return(a=a)!=null?(a=a.attachments)!=null?(a=a[0])!=null?(a=a.share)!=null?a.uri:a:a:a:a},_isMarketplaceAttachment:function(){var a=this.props.message;if(!b("MessengerDotComSaveModule").enabled_messenger_save)return!1;a=(a=a)!=null?(a=a.attachments)!=null?(a=a[0])!=null?(a=a.share)!=null?a.style_list:a:a:a:a;if(a)for(var c=0;c<a.length;c++)if(a[c]===b("StoryAttachmentStyle").GROUP_SELL_PRODUCT_ITEM)return!0;return!1},_canSaveMessageToFacebook:function(){__p&&__p();var a=this.props.message;if(b("MessengerDotComSaveModule").enabled_messenger_save&&this._isSavableMessageAttachment())return!0;if(b("MessengerDotComSaveModule").enabled_messenger_save&&a.attachments&&a.attachments.length>0&&a.attachments[0].share&&a.attachments[0].share.media&&a.attachments[0].share.media.playable)return!0;if(b("MessengerDotComSaveModule").enabled_messenger_save){a=b("URLMatcher").match(a.body);if(a!=null&&a.length>0)return!0}return!1},_handleLink:function(){this._handleActionsToggle(!1)},_isSavableMessageAttachment:function(){__p&&__p();var a=this.props.message.attachments;if(!a||a.length===0)return!1;for(var c=0;c<a.length;c++){var d=a[c];!1;if(d.share&&d.share.style_list){var e=d.share.style_list;e=b("SaveMessageUtils").isSavableMessageAttachment(e)}else e=d.attach_type===b("MercuryAttachmentType").VIDEO;if(!e)return!1}return!0},_handleFacebookSave:function(){var a=this.props.message,c=b("CollectionsDisplaySurface").MESSENGER_DOT_COM_MESSAGE,d=b("CollectionCurationMechanisms").RIGHT_CLICK;new(b("AsyncRequest"))().setURI(b("XMessengerDotComSaveController").getURIBuilder().getURI()).setData({action:b("SavedStateActions").SAVE,surface:c,mechanism:d,message_id:a.message_id}).send();b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(b("ReasonBootloadOnRender.react"),{loader:b("ReasonResource")(b("JSResource")("MessengerSaveMessageDialogReact.bs").__setRef("MessengerMessageActions.react")),placeholder:b("React").createElement("div",null),component:b("React").createElement(b("LazyComponent.react"),{onToggle:this._handleDialogToggle,isMarketplaceAttachment:this._isMarketplaceAttachment()})})}.bind(this));this._handleActionsToggle(!1)},_handleMessengerSave:function(){var a=this.props.message,c=b("CollectionsDisplaySurface").MESSENGER_DOT_COM_MESSAGE,d=b("CollectionCurationMechanisms").RIGHT_CLICK;new(b("AsyncRequest"))().setURI(b("XMessengerDotComSaveController").getURIBuilder().getURI()).setData({action:b("SavedStateActions").SAVE,surface:c,mechanism:d,message_id:a.message_id}).setHandler(this._showMessengerSaveConfirmationDialog).send();this._handleActionsToggle(!1)},_showMessengerSaveConfirmationDialog:function(a){b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(b("ReasonBootloadOnRender.react"),{loader:b("ReasonResource")(b("JSResource")("MessengerSaveMessageDialogReact.bs").__setRef("MessengerMessageActions.react")),placeholder:b("React").createElement("div",null),component:b("React").createElement(b("LazyComponent.react"),{onToggle:this._handleDialogToggle})})}.bind(this))},_handleMessengerUnsave:function(){this._handleActionsToggle(!1)},_handleDialogToggle:function(a){a||b("MessengerDialogs.bs").removeDialog()},_handleRetry:function(){this._handleDeselect(),b("MercuryMessageActions").get().resend(this.props.message)},_handleToggleOriginal:function(){b("FBLogger")("messenger_dot_com").info("formatting_toggled"),this.props.onToggleOriginal&&this.props.onToggleOriginal(),this._handleActionsToggle(!1)},_handleReplyToMessage:function(){this._logReply(),this.props.onReplyToMessage&&this.props.onReplyToMessage(this.props.message),this._handleActionsToggle(!1)},_handleSetAsDescription:function(){if(b("MessengerState.bs").isEmptyLocalThread(b("CurrentUser").getID(),this.props.message.thread_id))return;i.changeGroupThreadDescription(this.props.message.thread_id,this.props.message.body,b("MessagingThreadCustomizationSource").SET_FROM_MESSAGE);this._handleActionsToggle(!1)},_logReply:function(){b("Bootloader").loadModules(["MessageReplyTypedLogger","MessageReplyEntryPoint","MessageReplyEvent"],function(a,c,d){a=new a();a.setEvent(d.REPLY_INITIATED).setIsWorkplace(b("CurrentUser").isWorkUser()).setEntryPoint(c.THREE_DOT_BUTTON).log()},"MessengerMessageActions.react")}});e.exports=c}),null);