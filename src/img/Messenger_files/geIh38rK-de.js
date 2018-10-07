if (self.CavalryLogger) { CavalryLogger.start_js(["tTraf"]); }

__d("AppInstallLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",CLICK:"click",INSTALL:"install",XOUT:"xout",RANKED_IMPRESSION:"ranked_impression",CANVAS_VISIT:"canvas_visit",APP_SESSION_START:"session_start",CANVAS_IFRAME_LOAD:"canvas_iframe_load",APP_POPOVER_RENDER:"app_popover_render",APP_PAGE_RENDER:"app_page_render",APPCENTER_MENU_RENDER:"appcenter_menu_render",APPCENTER_HOMEPAGE_RENDER:"appcenter_homepage_render",APPCENTER_MANAGE_RENDER:"appcenter_manage_render",APPCENTER_REQUESTS_RENDER:"appcenter_requests_render",APPCENTER_INVITES_RENDER:"appcenter_invites_render",APPCENTER_TOP_LISTS_RENDER:"appcenter_top_lists_render",APPCENTER_QUERY_RESULTS_RENDER:"appcenter_query_results_render",GAMES_LOGIN_PAGE_ONE_RENDER:"games_login_page_one_render",GAMES_LOGIN_PAGE_TWO_RENDER:"games_login_page_two_render",GAMES_LOGIN_PAGE_ONE_XOUT:"games_login_page_one_xout",GAMES_LOGIN_PAGE_TWO_XOUT:"games_login_page_two_xout",GAMES_LOGIN_NEXT_PAGE:"games_login_next_page",GAMES_LOGIN_PREV_PAGE:"games_login_prev_page",GAMES_LOGIN_SOCIAL_LOGIN:"games_login_social_login",GAMES_LOGIN_SOCIAL_LOGIN_SUCCESS:"games_login_social_login_success",GAMES_LOGIN_SINGLE_ANONYMOUS_LOGIN:"games_login_single_anonymous_login",GAMES_LOGIN_ALWAYS_ANONYMOUS_LOGIN:"games_login_always_anonymous_login",GAMES_LOGIN_AUTO_LOGIN:"games_login_auto_login",GAMES_LOGIN_UNSIGNED_RENDER:"games_login_unsigned_render",GAMES_LOGIN_UNSIGNED_SOCIAL_LOGIN:"games_login_unsigned_social_login",GAMES_LOGIN_UNSIGNED_ANONYMOUS_LOGIN:"games_login_unsigned_anonymous_login",GAMES_LOGIN_UNSIGNED_XOUT:"games_login_unsigned_xout",GAMES_LOGIN_LEARN_MORE_CLICK:"games_login_learn_more",GAMES_LOGIN_EDIT_SETTINGS:"games_login_edit_settings",GAMES_LOGIN_SOCIAL_UPGRADE_BUTTON_CLICK:"games_login_social_upgrade_button_click",GAMES_LOGIN_SOCIAL_UPGRADE_IMPRESSION:"games_login_social_upgrade_impression",GAMES_LOGIN_SOCIAL_UPGRADE_SUCCESS:"games_login_social_upgrade_success",GAMES_LOGIN_XOUT_SOCIAL_IMPRESSION:"games_login_xout_social_impression",GDPV4_RENDER:"gdpv4_render",GDPV4_EDITED_SCOPES:"gdpv4_edit_scopes",GDPV4_BUTTON_CLICK:"gdpv4_button_click",CLICK_TO_APPCENTER:"click_to_appcenter",PP_CREATE_INVITE:"pp_create_invite",PP_ACCEPT_INVITE:"pp_accept_invite",PP_DELETE_INVITES:"pp_delete_invites",PP_DELETE_ALL:"pp_delete_all",PP_BLOCK_APP:"pp_block_app",PP_BLOCK_USER:"pp_block_user",PP_UNBLOCK_APP:"pp_unblock_app",PP_UNBLOCK_USER:"pp_unblock_user",PP_ACCEPT_INVITE_ACTIVATE_APP:"pp_accept_invite_activate_app",GAMERANKER_REQUEST:"gameranker_request",GAMERANKER_RESPONSE:"gameranker_response",GAMERANKER_EXCEPTION:"gameranker_exception",GAMERANKER_TARGETING_SCORE:"gameranker_targeting_score",GAME_COLLABORATIVE_FILTERING_SCORE:"game_collaborative_filtering_score",NOTIFICATION_CONTENT_UPDATE_SEND:"notification_content_update_send",NOTIFICATION_CONTENT_UPDATE_SEND_TO_TURNOFF:"notification_content_update_send_to_turnoff",NOTIFICATION_CONTENT_UPDATE_CLICK:"notification_content_update_click",NOTIFICATION_CONTENT_UPDATE_IMPRESSION:"notification_content_update_impression",NOTIFICATION_CONTENT_UPDATE_TURN_OFF:"notification_content_update_turn_off",NOTIFICATION_CONTENT_UPDATE_UNDO_TURN_OFF:"notification_content_update_undo_turn_off",NOTIFICATION_CONTENT_UPDATE_MARK_SPAM:"notification_content_update_mark_spam",NOTIFICATION_CONTENT_UPDATE_FIRST_IMPRESSION:"notification_content_update_first_impression",NOTIFICATION_CONTENT_UPDATE_FIRST_YES:"notification_content_update_first_yes",NOTIFICATION_CONTENT_UPDATE_FIRST_IMPLICIT_YES:"notification_content_update_first_implicit_yes",NOTIFICATION_CONTENT_UPDATE_FIRST_NO:"notification_content_update_first_no",NOTIFICATION_A2U_SEND:"notification_a2u_send",NOTIFICATION_A2U_SEND_TO_TURNOFF:"notification_a2u_send_to_turnoff",NOTIFICATION_A2U_CLICK:"notification_a2u_click",NOTIFICATION_A2U_IMPRESSION:"notification_a2u_impression",NOTIFICATION_A2U_TURN_OFF:"notification_a2u_turn_off",NOTIFICATION_A2U_UNDO_TURN_OFF:"notification_a2u_undo_turn_off",NOTIFICATION_A2U_MARK_SPAM:"notification_a2u_mark_spam",NOTIFICATION_A2U_FIRST_IMPRESSION:"notification_a2u_first_impression",NOTIFICATION_A2U_FIRST_YES:"notification_a2u_first_yes",NOTIFICATION_GYML_EVALUATION:"notification_a2u_gyml_evaluation",LIVE_PLAYER_NOTIFICATION_SENT:"live_player_notification_sent",LIVE_PLAYER_NOTIFICATION_SEND_ATTEMPT:"live_player_notification_send_attempt",GAMER_CHAT_MESSAGE_SEND:"gamer_chat_message_send",GAMER_CHAT_MESSAGE_SENTRY_BLOCKED:"gamer_chat_message_sentry_blocked",GAMER_CHAT_MESSAGE_HIDDEN:"gamer_chat_message_hidden",GAMER_CHAT_MESSAGE_UNHIDDEN:"gamer_chat_message_unhidden",GAMER_CHAT_MESSAGE_SENDER_BLOCKED:"gamer_chat_message_blocked",GAMER_CHAT_MESSAGE_SENDER_UNBLOCKED:"gamer_chat_message_unblocked",GAMER_CHAT_MESSAGE_SENDER_REPORTED:"gamer_chat_message_reported",GAMER_CHAT_USER_BANNED:"gamer_chat_user_banned",GAMER_CHAT_USER_UNBANNED:"gamer_chat_user_unbanned",GAME_ACHIEVEMENT_EARNED:"game_achievement_earned",RHC_SETTINGS_UNIT_APP_FAVORITED:"rhc_settings_unit_app_favorited",RHC_SETTINGS_UNIT_APP_UNFAVORITED:"rhc_settings_unit_app_unfavorited",RHC_SETTINGS_UNIT_APP_SHARE_CLICKED:"rhc_settings_unit_app_share_clicked",RHC_SETTINGS_UNIT_APP_PRIVACY_SETTINGS_CLICKED:"rhc_settings_unit_app_privacy_settings_clicked",RHC_SETTINGS_UNIT_APP_UNINSTALL_CLICKED:"rhc_settings_unit_app_uninstall_clicked",RHC_SETTINGS_UNIT_APP_FULLSCREENED:"rhc_settings_unit_app_fullscreened",GYML_REQUEST:"gyml_request",GYML_ERROR:"gyml_error",GYML_NO_MODEL:"gyml_no_model",GYML_RESULT:"gyml_result",GAMEROOM_DOT_COM_PAGE_VIEW:"gameroom_dot_com_page_view",GAMES_DESKTOP_EXCEPTION:"games_desktop_exception",GAMES_DESKTOP_MAIN_FRAME_URL:"games_desktop_main_frame_url",GAMES_DESKTOP_OPENED_APP:"games_desktop_opened_app",GAMES_DESKTOP_UPDATE_STEP:"games_desktop_update_step",GAMES_DESKTOP_APP_INSTALLED:"games_desktop_app_installed",GAMES_DESKTOP_CONTROL_USED:"games_desktop_control_used",GAMES_DESKTOP_GAME_SHORTCUT_USED:"games_desktop_game_shortcut_used",GAMES_DESKTOP_GAME_SHORTCUT_CREATED:"games_desktop_game_shortcut_created",GAMES_DESKTOP_LOGGED_IN:"games_desktop_logged_in",GAMES_DESKTOP_LOGGED_OUT:"games_desktop_logged_out",GAMES_DESKTOP_FLASH_NOT_INSTALLED:"games_desktop_flash_not_installed",GAMES_DESKTOP_APP_DOWNLOADED:"games_desktop_app_downloaded",GAMES_DESKTOP_APP_DOWNLOAD_UNIT_IMPRESSION:"games_desktop_app_download_unit_impression",GAMES_DESKTOP_APP_UNINSTALLED:"games_desktop_app_uninstalled",GAMES_DESKTOP_LEARN_MORE_DIALOG_IMPRESSION:"games_desktop_learn_more_dialog_impression",GAMES_DESKTOP_FEEDBACK:"games_desktop_feedback",GAMES_DESKTOP_APP_UNINSTALLED_FAILED_CHECK:"games_desktop_app_uninstalled_failed_check",GAMES_DESKTOP_CLOSED_APP:"games_desktop_closed_app",GAMES_DESKTOP_RENDER_PROCESS_TERMINATED:"games_desktop_render_process_terminated",GAMES_DESKTOP_NONCE_CREATION_FAILED:"games_desktop_nonce_creation_failed",GAMES_DESKTOP_AUTO_LOGIN_FAILED:"games_desktop_auto_login_failed",GAMES_DESKTOP_AUTO_LOGIN_SUCCEEDED:"games_desktop_auto_login_succeeded",GAMES_DESKTOP_TOAST_EVENT:"games_desktop_toast_event",GAMES_DESKTOP_NOTIF_ACTION:"games_desktop_notif_action",GAMES_DESKTOP_AUTO_LOGIN_AVAILABLE:"games_desktop_auto_login_available",GAMES_DESKTOP_SETTINGS_CHANGE:"games_desktop_settings_change",GAMES_DESKTOP_LANDING_PAGE_VIEW:"games_desktop_landing_page_view",GAMES_DESKTOP_LANDING_PAGE_MOBILE_VIEW:"games_desktop_landing_page_mobile_view",GAMES_DESKTOP_SYSTEM_PERFORMANCE:"games_desktop_system_performance",GAMES_DESKTOP_DOWNLOADER_STATE:"games_desktop_downloader_state",GAMES_DESKTOP_DOWNLOADER_EXCEPTION:"games_desktop_downloader_exception",GAMES_DESKTOP_LOAD_ERROR:"games_desktop_load_error",GAMES_DESKTOP_NOTIF_POLL:"games_desktop_notif_poll",GAMES_DESKTOP_NATIVE_GAME_STATE:"games_desktop_native_game_state",GAMES_DESKTOP_HARDWARE_DATA:"games_desktop_hardware_data",GAMES_DESKTOP_CAN_INTERACT:"games_desktop_can_interact",GAMES_DESKTOP_BROWSER_INITIALIZED:"games_desktop_browser_initialized",GAMES_DESKTOP_CAUGHT_EXCEPTION:"games_desktop_caught_exception",GAMES_DESKTOP_UNCAUGHT_EXCEPTION:"games_desktop_uncaught_exception",GAMES_DESKTOP_ENTER_FULLSCREEN:"games_desktop_enter_fullscreen",GAMES_DESKTOP_LEAVE_FULLSCREEN:"games_desktop_leave_fullscreen",GAMES_DESKTOP_TOOK_SCREENSHOT:"games_desktop_took_screenshot",GAMES_DESKTOP_SCREENSHOT_NUX_SHOWN:"games_desktop_screenshot_nux_shown",GAMES_DESKTOP_PROMO_MODAL_WINDOW_IMPRESSION:"games_desktop_promo_modal_window_impression",GAMES_DESKTOP_FEED_DIALOG:"games_desktop_feed_dialog",GAMES_DESKTOP_GAMER_CHAT_IMPRESSION:"games_desktop_gamer_chat_impression",GAMES_DESKTOP_ERROR_BOUNDARY_CATCH:"games_desktop_error_boundary_catch",GAMES_DESKTOP_LIVE_STATE:"games_desktop_live_state",ARCADE_USER_DROPDOWN_CLICK:"arcade_user_dropdown_click",ARCADE_ABOUT_VIEW_CLICK:"arcade_about_view_click",ARCADE_CONTACT_FORM_CLICK:"arcade_contact_form_click",ARCADE_BB_NOTIFICATIONS_CLICK:"arcade_bb_notifications_click",ARCADE_LHC_BROWSE_CLICK:"arcade_lhc_browse_click",ARCADE_LHC_GO_LIVE_CLICK:"arcade_lhc_go_live_click",ARCADE_LHC_INSTANT_GAMES_CLICK:"arcade_lhc_instant_games_click",ARCADE_LHC_WATCH_CLICK:"arcade_lhc_watch_click",ARCADE_LHC_MYGAMES_CLICK:"arcade_lhc_mygames_click",ARCADE_LHC_FEED_CLICK:"arcade_lhc_feed_click",ARCADE_LHC_PLAYQUEUE_CLICK:"arcade_lhc_playqueue_click",ARCADE_MYGAMES_DD_CLICK_DETAILS:"arcade_mygames_dd_click_details",ARCADE_MYGAMES_DD_CLICK_FOOTER:"arcade_mygames_dd_click_footer",ARCADE_HOMEPAGE_DD_CLICK_DETAILS:"arcade_homepage_dd_click_details",ARCADE_HOMEPAGE_DD_CLICK_FOOTER:"arcade_homepage_dd_click_footer",ARCADE_PAYMENT_WEBSITE_CLICK:"arcade_payment_website_click",ARCADE_SEARCH_DD_CLICK_DETAILS:"arcade_search_dd_click_details",ARCADE_SEARCH_DD_CLICK_FOOTER:"arcade_search_dd_click_footer",ARCADE_GAMETILE_GAMETAG_CLICK:"arcade_gametile_gametag_click",ARCADE_GAMETILE_XOUT_CLICK:"arcade_gametile_xout_click",ARCADE_DD_XOUT_CLICK:"arcade_dd_xout_click",ARCADE_DD_PLAYNOW_CLICK:"arcade_dd_playnow_click",ARCADE_DD_GAME_UNSAVED:"arcade_dd_game_unsaved",ARCADE_DD_GAME_SAVED:"arcade_dd_game_saved",ARCADE_DD_SLIDES_CLICK_RIGHT:"arcade_dd_slides_click_right",ARCADE_DD_SLIDES_CLICK_LEFT:"arcade_dd_slides_click_left",ARCADE_DD_SCREENSHOT_CLICK:"arcade_dd_screenshot_click",ARCADE_WELCOME_OVERLAY_IMPRESSION:"arcade_welcome_overlay_impression",ARCADE_NUX_TOUR_DISMISSED:"arcade_nux_tour_dismissed",ARCADE_NUX_TOUR_STARTED:"arcade_nux_tour_started",ARCADE_NUX_TOUR_COMPLETED:"arcade_nux_tour_completed",ARCADE_AUTOMATIC_GAME_LAUNCH:"arcade_automatic_game_launch",ARCADE_LIVESTREAM_CLICK:"arcade_livestream_click",ARCADE_LIVESTREAM_IMPRESSION:"arcade_livestream_impression",ARCADE_LIVESTREAM_MOUSEOVER:"arcade_livestream_mouseover",ARCADE_LIVESTREAM_WATCH_TIME:"arcade_livestream_watch_time",GAMES_RATING_PROMPT_CLOSE:"games_rating_prompt_close",GAMES_RATING_PROMPT_RATE:"games_rating_prompt_rate",GAMES_RATING_PROMPT_SHOW:"games_rating_prompt_show",GAMES_PERSONA_ADD_DIALOG_START:"games_persona_add_dialog_start",GAMES_RECOMMEND_PROMPT_RECOMMEND:"games_recommend_prompt_recommend",GAMES_RECOMMEND_PROMPT_SHOW:"games_recommend_prompt_show",GAMES_RECOMMEND_PROMPT_CLOSE:"games_recommend_prompt_close",GIULIANI_REPORT_SUBMITTED:"giuliani_report_submitted",CHANGED_APPCENTER_APPROVED_STATE:"changed_appcenter_approved_state",RESTRICTED_ORGANIC_RECOMMENDATIONS:"restricted_organic_recommendations",FEED_GAMES_DIGEST_SUBSCRIBED:"feed_games_digest_subscribe",FEED_GAMES_DIGEST_UNSUBSCRIBED:"feed_games_digest_unsubscribe",GAME_PLAYED_5S:"game_played_5s",GAME_PLAYED_10S:"game_played_10s",GAME_PLAYED_30S:"game_played_30s",GAME_PLAYED_1M:"game_played_1m",GAME_PLAYED_2M:"game_played_2m",GAME_PLAYED_5M:"game_played_5m",ARCADE_MIGRATION_PAGE_LOADED:"arcade_migration_page_loaded",ARCADE_MIGRATION_LAUNCH_CLICKED:"arcade_migration_launch_clicked",ARCADE_MIGRATION_MANUAL_BYPASS:"arcade_migration_manual_bypass",ARCADE_MIGRATION_AUTO_BYPASS:"arcade_migration_auto_bypass",GAME_TAB_REC_GRID_CONTENT_REQUESTED:"game_tab_rec_grid_content_requested",IMAGE_ASSET_CLICK:"image_asset_click",IMAGE_ASSET_IMPRESSION:"image_asset_impression",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",THROTTLED_CANVAS_VISIT:"throttled_canvas_visit",THROTTLED_APPCENTER_VISIT:"throttled_appcenter_visit",THROTTLED_OAUTH_VISIT:"throttled_oauth_visit",GAME_TIME_START:"game_time_start",GAME_TIME_END:"game_time_end",CHAINED_ARTICLE_APP_CENTER_IMPRESSION:"chained_article_app_center_impression",GAMES_UNHANDLED_JS_EXCEPTION:"games_unhandled_js_exception",GAMES_SHOW_GIFT_BUTTON:"games_show_gift_button",GAMES_SHOW_GIFT_BUTTON_CLICK:"games_show_gift_button_click",GAMES_BUY_GIFT:"games_buy_gift",GAMES_ACCEPT_GIFT:"games_accept_gift",GAMES_DECLINE_GIFT:"games_decline_gift",GAMES_RESPONSE_HEADER:"games_response_header",INSTANT_GAMES_TEEN_TARGETING:"instant_games_teen_targeting",INVITABLE_FRIENDS_EDGE_HIT:"invitable_friends_edge_hit",TAGGABLE_FRIENDS_EDGE_HIT:"taggable_friends_edge_hit",FOUR_OH_FOUR_HIT:"404_hit",DIVEBAR_INFO:"divebar_info"})}),null);
__d("AppInstallLogger",["AppInstallLoggerEvents","Banzai","ErrorUtils"],(function(a,b,c,d,e,f){__p&&__p();var g="app_install";a.prototype.init=function(){"use strict";b("ErrorUtils").addListener(function(a){a={error_message:a.message,error_type:a.name,error_data:JSON.stringify(a),stack_trace:a.stack};this.log(b("AppInstallLoggerEvents").GAMES_UNHANDLED_JS_EXCEPTION,null,a)}.bind(this))};a.prototype.log=function(event,a,c){"use strict";b("Banzai").post(g,babelHelpers["extends"]({app_id:a,event:event},c||{}))};function a(){"use strict"}e.exports=new a()}),null);
__d("XdArbiterBuffer",[],(function(a,b,c,d,e,f){a.XdArbiter||(a.XdArbiter={_m:[],_p:[],register:function(a,b,c){b=b||(/^apps\./.test(location.hostname)?"canvas":"tab");this._p.push([a,b,c]);return b},handleMessage:function(a,b){this._m.push([a,b])}})}),null);
__d("CanvasIFrameLoader",["XdArbiterBuffer","Banzai","$"],(function(a,b,c,d,e,f){__p&&__p();b("XdArbiterBuffer");a={loadFromForm:function(a,c,d){__p&&__p();var e=b("$")("iframe_canvas");if(c&&!g()){c.style.display="block";e.style.display="none";return}var f=Date.now();e.onload=function(){var a=Date.now();a=a-f;b("Banzai").post("canvas_iframe_load",{app_id:d,iframe_time_to_load:a})};a.submit()}};function g(){try{var a=document.createElement("canvas");return Boolean(window.WebGLRenderingContext)&&Boolean(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(a){return!1}}e.exports=a}),null);
__d("PlatformDialog",["cx","CSS","DOMEvent","DOMEventListener"],(function(a,b,c,d,e,f,g){__p&&__p();var h;a.getInstance=function(){"use strict";return h};function a(a,c,d){"use strict";h=this,this.$1=a,this.$2=c,this.$3=!1,b("DOMEventListener").add(this.$1,"submit",function(c){if(this.$3){new(b("DOMEvent"))(c).kill();return}this.$3=!0;d&&b("CSS").addClass(a,"_32qa")}.bind(this))}a.prototype.getForm=function(){"use strict";return this.$1};a.prototype.getDisplay=function(){"use strict";return this.$2};a.prototype.hasBeenSubmitted=function(){"use strict";return this.$3};a.RESPONSE="platform/dialog/response";e.exports=a}),null);
__d("PlatformBaseVersioning",["invariant","PlatformVersions","StrSet","getObjectValues"],(function(a,b,c,d,e,f,g){__p&&__p();var h=new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions));c=location.pathname;d=c.substring(1,c.indexOf("/",1));var i=h.contains(d)?d:b("PlatformVersions").versions.UNVERSIONED;function j(a,c){if(c==b("PlatformVersions").versions.UNVERSIONED)return a;h.contains(c)||g(0);a.indexOf("/")!==0&&(a="/"+a);return"/"+c+a}function a(a){return h.contains(a.substring(1,a.indexOf("/",1)))?a.substring(a.indexOf("/",1)):a}f={addVersionToPath:j,getLatestVersion:function(){return b("PlatformVersions").LATEST},versionAwareURI:function(a){return a.setPath(j(a.getPath(),i))},versionAwarePath:function(a){return j(a,i)},getUnversionedPath:a};e.exports=f}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup","getViewportDimensions"],(function(a,b,c,d,e,f){__p&&__p();var g={_opts:{allowShrink:!0,strategy:"vector",timeout:100,widthElement:null},init:function(a){Object.assign(g._opts,a),setInterval(g._resizeCheck,g._opts.timeout)},_resizeCheck:function(){__p&&__p();var a=b("getViewportDimensions")(),c=g._getDocumentSize(),d=b("Layer").getTopmostLayer();if(d){d=d.getRoot().firstChild;var e=b("DOMDimensions").getElementDimensions(d);e.height+=b("DOMDimensions").measureElementBox(d,"height",!0,!0,!0);e.width+=b("DOMDimensions").measureElementBox(d,"width",!0,!0,!0);c.height=Math.max(c.height,e.height);c.width=Math.max(c.width,e.width)}d=c.height-a.height;e=c.width-a.width;e<0&&!g._opts.widthElement&&(e=0);e=e>1?e:0;!g._opts.allowShrink&&d<0&&(d=0);if(d||e)try{window.console&&window.console.firebug&&!1,window.resizeBy(e,d),e&&window.moveBy(e/-2,0)}catch(a){}},_getDocumentSize:function(){var c=b("DOMDimensions").getDocumentDimensions();g._opts.strategy==="offsetHeight"&&(c.height=document.body.offsetHeight);if(g._opts.widthElement){var d=b("DOMQuery").scry(document.body,g._opts.widthElement)[0];d&&(c.width=b("DOMDimensions").getElementDimensions(d).width)}d=a.Dialog;d&&d.max_bottom&&d.max_bottom>c.height&&(c.height=d.max_bottom);return c},open:function(a,c,d,e){return b("Popup").open(a,d,c,e)}};e.exports=g}),null);
__d("PlatformDialogClient",["Arbiter","AsyncDialog","AsyncRequest","DOMEventListener","PlatformBaseVersioning","PlatformDialog","PopupWindow","QueryString","URI","UserAgent_DEPRECATED","guid"],(function(a,b,c,d,e,f){__p&&__p();var g=575,h="FB_DIALOG_RESPONSE";b("AsyncDialog").getLoadingDialog().setWidth(g);b("DOMEventListener").add(window,"message",function(event){/\.facebook\.com$/.test(event.origin)&&new RegExp("^"+h+":").test(event.data)&&b("Arbiter").inform(b("PlatformDialog").RESPONSE,JSON.parse(event.data.substr(h.length+1)))});var i={};b("Arbiter").subscribe(b("PlatformDialog").RESPONSE,function(event,a){var b=a.state;i[b]&&(i[b].callback(a),a.state=i[b].state,delete i[b])},b("Arbiter").SUBSCRIBE_NEW);function j(a){return function(){b("Arbiter").inform(b("PlatformDialog").RESPONSE,babelHelpers["extends"]({state:a},k.REQUEST_ABORTED_ERROR))}}var k={REQUEST_ABORTED_ERROR:{error_code:-200,error_message:"Request aborted."},async:function(a,c,d){var e=b("guid")(),f=c.state;c.state=e;c.redirect_uri=new(b("URI"))("/dialog/return/arbiter").setSubdomain("www").setFragment(b("QueryString").encode({origin:c.redirect_uri})).getQualifiedURI().toString();c.display="async";i[e]={callback:d||function(){},state:f};b("AsyncDialog").send(new(b("AsyncRequest"))(this.getURI(a,c)).setMethod("GET").setReadOnly(!0).setAbortHandler(j(e)))},popup:function(a,c,d,e,f){__p&&__p();var h=b("guid")(),j=d.state;d.state=h;d.client_id=d.app_id=c;d.redirect_uri=new(b("URI"))("/dialog/return/arbiter").setSecure(b("URI").getRequestURI().isSecure()).setSubdomain("www").setFragment(b("QueryString").encode({origin:d.redirect_uri})).addQueryData(e||{}).addQueryData({relation:"opener",close:!0}).toString();d.display=b("UserAgent_DEPRECATED").mobile()?"touch":"popup";i[h]={callback:f||function(){},state:j};c=b("URI").getRequestURI();e=c.getDomain();h=e.replace("developers","www");b("PopupWindow").open(new(b("URI"))(this.getURI(a,d)).setDomain(h).setProtocol("https").toString(),210,g)},getURI:function(a,c){if(c.version){var d=new(b("URI"))("/"+c.version+"/dialog/"+a);delete c.version;return d.addQueryData(c)}return b("PlatformBaseVersioning").versionAwareURI(new(b("URI"))("/dialog/"+a).addQueryData(c))}};e.exports=k}),null);
__d("PlatformDialogResize",["DialogPosition","DOMDimensions","Layer","getElementPosition","getViewportDimensions","throttle"],(function(a,b,c,d,e,f){__p&&__p();b("DialogPosition").setFixedTopMargin(40);var g=[],h,i;function j(a){return function(b){return b[a]}}function k(a){return Math.max.apply(null,a)}function l(a,c){return b("DOMDimensions").measureElementBox(a,c,!0,!0,!0)}function m(a){var c=b("DOMDimensions").getElementDimensions(a),d=b("getElementPosition")(a);return{width:d.x+c.width+l(a,"right"),height:d.y+c.height+l(a,"bottom")}}function n(){return g.map(function(a){return a.isShown()&&a.getContentRoot()?m(a.getRoot().children[0]):{width:0,height:0}})}var o=function(){var a=b("getViewportDimensions")(),c=b("DOMDimensions").getDocumentDimensions();c=n().concat(c,a,h);var d=k(c.map(j("width")))-a.width;c=k(c.map(j("height")))-a.height;return{dx:d,dy:c}},p=b("throttle")(function(){var a=o();try{window.outerHeight+a.dy>window.screen.availHeight?(window.resizeBy(a.dx,0),window.resizeTo(window.outerWidth,window.screen.availHeight)):window.resizeBy(a.dx,a.dy),window.moveBy(a.dx/-2,0)}catch(a){}},200);b("Layer").subscribe("show",function(event,a){g.length===0&&(i=setInterval(p,200)),g.push(a),p()});b("Layer").subscribe("hide",function(event,a){a=g.indexOf(a);a!==-1&&(g.splice(a,1),p());g.length===0&&(clearInterval(i),i=null)});a={auto:function(a,b){h={width:a,height:b},p(),setTimeout(p,250)},setResize:function(a,c){o=function(){var d=b("getViewportDimensions")(),e=a-d.width;d=c-d.height;return{dx:e,dy:d}};return this}};e.exports=a}),null);
__d("CanvasNavigationFullScreen",["cx","AppInstallLogger","AppInstallLoggerEvents","Arbiter","CSS","Event","FullScreen"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!1,i=null;a={initLink:function(a,c){if(h)return;else h=!0;i=a;b("CSS").conditionClass(c,"_4-os",b("FullScreen").isSupported());b("Event").listen(c,"click",this.setFullScreen.bind(null,!0));b("FullScreen").subscribe("changed",function(){b("FullScreen").isFullScreen()?b("Arbiter").inform("canvas.enter_fullscreen"):b("Arbiter").inform("canvas.exit_fullscreen")})},isSupported:function(){var a=h&&b("FullScreen").isSupported();return!!a},getFullScreen:function(){return!!b("FullScreen").isFullScreen()},setFullScreen:function(a){!0;a?(b("AppInstallLogger").log(b("AppInstallLoggerEvents").RHC_SETTINGS_UNIT_APP_FULLSCREENED,i),a=b("FullScreen").enableFullScreen(document.getElementById("iframe_canvas"))):a=b("FullScreen").disableFullScreen();return a}};e.exports=a}),null);
__d("XAppFriendsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/platform/games/appfriends/",{app_id:{type:"Int",required:!0}})}),null);
__d("CanvasPresenceController",["Arbiter","AsyncRequest","AvailableList","AvailableListConstants","PresenceStatus","XAppFriendsController"],(function(a,b,c,d,e,f){__p&&__p();var g=60*1e3,h=!1,i=[],j=0,k,l,m,n;function o(){var a=0;i.forEach(function(c){b("PresenceStatus").get(c)==b("AvailableListConstants").ACTIVE&&a++});(m===undefined||m!==a>1)&&(m=a>1,b("Arbiter").inform("canvas.friendsOnlineUpdated",m))}function p(a){var c=b("XAppFriendsController").getURIBuilder().setInt("app_id",j).getURI();new(b("AsyncRequest"))().setURI(c).setHandler(function(b){i=b.payload.ids,a&&a(),o()}).send()}function q(){if(j===0){n=q;return}h=!0;p(function(){k=setInterval(p,g),l=b("AvailableList").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,o)})}function r(){h=!1,clearInterval(k),b("AvailableList").unsubscribe(l)}a={setAppID:function(a){j=a,n&&n()},setAppFriends:function(a){i=a},useFriendsOnline:function(a){if(a==h)return;a?q():r()}};e.exports=a}),null);
__d("JSONRPC",["Log"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=0,this.$2={},this.remote=function(a){this.$3=a;return this.remote}.bind(this),this.local={},this.$4=a}a.prototype.stub=function(a){"use strict";this.remote[a]=function(){var b={jsonrpc:"2.0",method:a};for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];typeof d[d.length-1]==="function"&&(b.id=++this.$1,this.$2[b.id]=d.pop());b.params=d;this.$4(JSON.stringify(b),this.$3||{method:a})}.bind(this)};a.prototype.read=function(a,c){"use strict";__p&&__p();a=JSON.parse(a);var d=a.id;if(!a.method){if(!this.$2[d]){b("Log").warn("Could not find callback %s",d);return}var e=this.$2[d];delete this.$2[d];delete a.id;delete a.jsonrpc;e(a);return}var f=this;e=this.local[a.method];var g;d?g=function(a,b){var e={jsonrpc:"2.0",id:d};e[a]=b;setTimeout(function(){f.$4(JSON.stringify(e),c)},0)}:g=function(){};if(!e){b("Log").error('Method "%s" has not been defined',a.method);g("error",{code:-32601,message:"Method not found",data:a.method});return}a.params.push(g.bind(null,"result"));a.params.push(g.bind(null,"error"));try{e=e.apply(c||null,a.params);typeof e!=="undefined"&&g("result",e)}catch(c){b("Log").error("Invokation of RPC method %s resulted in the error: %s",a.method,c.message),g("error",{code:-32603,message:"Internal error",data:c.message})}};e.exports=a}),null);
__d("XdArbiter",["Arbiter","Log","QueryString","Queue"],(function(a,b,c,d,e,f){__p&&__p();var g=/^apps\./.test(location.hostname)?"canvas":"tab",h={},i=[],j=new(b("Queue"))();c={setRpcHandler:function(a){j.start(a)},handleMessage:function(a,c,d){__p&&__p();try{if(typeof a==="string"){if(/^FB_RPC:/.test(a)){j.enqueue([a.substring(7),{origin:c,source:d||h[g]}]);return}a=JSON.parse(a)}if(!a.method)return;typeof a.params==="string"&&(a.params=JSON.parse(a.params));b("Arbiter").inform("Connect.Unsafe."+a.method,a.params,b("Arbiter").BEHAVIOR_PERSISTENT)}catch(a){}},register:function(a,c,d){c=c||g;b("Arbiter").inform("XdArbiter/register",{origin:d});h[c]=a;h[d]=a;b("Arbiter").inform("XdArbiter.register",c,b("Arbiter").BEHAVIOR_PERSISTENT);this.scheduleDispatch();return c},scheduleDispatch:function(){var a=this,b=42;function c(){var d=i.shift();d&&a.send.apply(a,d);i.length&&setTimeout(c,b)}setTimeout(c,b)},hasProxy:function(a){a=a||g;return!!h[a]},send:function(a,c,d){var e=d in h?d:g;c=c||h[e];typeof a!=="string"&&(a=b("QueryString").encode(a));try{c.proxyMessage(a,d)}catch(a){b("Log").debug("XdArbiter: Proxy for %s not available, page might have been navigated: %s",e,a.message),delete h[e]}return!0}};d=a.XdArbiter;a.XdArbiter=c;if(d){if(d._p.length)while(d._p.length)c.register.apply(c,d._p.shift());if(d._m.length)while(d._m.length)c.handleMessage.apply(c,d._m.shift())}e.exports=c}),null);
__d("PlatformAppController",["errorCode","Arbiter","AsyncRequest","Bootloader","CanvasNavigationFullScreen","CanvasPresenceController","CSS","CurrentUser","Dialog","JSONRPC","PlatformDialogABTest","PlatformDialogClient","PlatformDialogWhitelistedParams","Style","URI","Vector","XdArbiter","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={oauth:!0,test_flow:!0,app_requests:!0,game_group_create:!0,game_group_join:!0,gift:!0,feed:!0,share:!0,share_open_graph:!0,payer_promotion:!0,payerpromotion:!0,payment_module:!0,payment_module_iap:!0,payment_subscription:!0},i,j,k=!0,l=0,m=!1,n,o=!1,p=window._cstart,q=0,r,s,t={},u=new(b("JSONRPC"))(function(a,c){b("XdArbiter").send("FB_RPC:"+a,c.source||b("ge")(i).contentWindow.frames["fb_xdm_frame_"+location.protocol.replace(":","")],c.origin||j)});b("Arbiter").subscribe("XdArbiter/register",function(a,c){r&&c.origin!=j&&new(b("AsyncRequest"))().setURI("/platform/app_owned_url_check/").setData({appid:r,url:c.origin}).setHandler(function(a){a=a.getPayload();a.allowed&&(j=c.origin)}).send()});function c(a){var b=parseInt(a.x,10);a=parseInt(a.y,10);b>=0&&a>=0&&window.scrollTo(b,a)}function d(a){var c=b("ge")(a.frame.replace(/_fb_https$/,""));c&&(b("CSS").addClass(c,"noresize"),c.style.height=a.height+"px")}function f(){var a=b("ge")(i),c=0,d=0;while(a)c+=parseInt(a.offsetLeft,10),d+=parseInt(a.offsetTop,10),a=a.offsetParent;a=b("Vector").getViewportDimensions();var e=b("Vector").getScrollPosition();return{clientWidth:a.x,clientHeight:a.y,scrollLeft:e.x,scrollTop:e.y,offsetLeft:c,offsetTop:d}}function v(a,c){if(!b("PlatformDialogWhitelistedParams")[c])return a;var d={};b("PlatformDialogWhitelistedParams").common.forEach(function(b){d[b]=a[b]});b("PlatformDialogWhitelistedParams")[c].forEach(function(b){d[b]=a[b]});return d}function g(a,c,d){__p&&__p();var e=a.method;delete a.method;delete a.access_token;delete a.next;delete a.context;delete a.locale;a.display="async";if(!/^[\w\-_.]+$/.test(e))throw new Error("Malformed method name");Object.keys(a).forEach(function(b){if(/[\s\x80-\x9f]/.test(b))delete a[b];else if(/\./.test(b)){var c=b.replace(/\./g,"_");Object.prototype.hasOwnProperty.call(a,c)&&delete a[b]}});(!a.redirect_uri||new(b("URI"))(a.redirect_uri).getOrigin()!=new(b("URI"))(this.origin).getOrigin())&&(a.redirect_uri=this.origin);e=="apprequests"&&(e="app_requests",a.context="canvas_app_requests");if(e=="pay"){var f=a.action;(f==="purchaseitem"||f==="purchase_item")&&s&&s.usePaymentModules&&(e="payment_module",a.action="payment_module");f==="purchaseiap"&&s&&s.iapUsePaymentModule&&(e="payment_module_iap",a.action="payment_module_iap");f==="purchaseitem"||f==="purchase_item"||f==="purchaseiap"?h[e]=!0:s&&s.useNewPayDialog&&(f==="create_subscription"||f==="createsubscription"||f==="changesubscription"||f==="modifysubscription"||f==="cancelsubscription"||f==="reactivatesubscription"||f==="settlesubscription")?(e="payment_subscription",f==="create_subscription"&&(a.action="createsubscription")):h[e]=!1}e=="fbpromotion"&&(e="payer_promotion",a.action="payer_promotion");e==="stream_publish"&&(e="stream.publish");(e=="permissions.oauth"||e=="permissions.request"||e=="oauth")&&(e="oauth");e==="stream.publish"&&(h[e]=!!b("PlatformDialogABTest").share_dialog_delegate_stream_publish_dialog);a=v(a,e);if(h[e]){var g=a.redirect_uri;b("PlatformDialogClient").async(e,a,function(d){d.error_code==1340004?b("CurrentUser").getID()&&b("CurrentUser").getID()!="0"?c(d):new(b("URI"))("/login.php").addQueryData("next",b("URI").getRequestURI().toString()).go():e=="app_requests"&&d.error_code==1349146?w(e,a,c,d,g):c(d)});return}f=new(b("URI"))("/fbml/ajax/dialog/"+e.replace(/\./g,"_")).setQueryData(a);f=new(b("AsyncRequest"))().setMethod("GET").setReadOnly(!0).setURI(f).setAbortHandler(function(){d(b("PlatformDialogClient").REQUEST_ABORTED_ERROR)});new(b("Dialog"))().setAsync(f).setModal(!0).setWideDialog(!0).show().setCloseHandler(c)}function w(a,c,d,e,f){c.redirect_uri=f,b("PlatformDialogClient").async("oauth",c,function(g){g.error?d(e):(c.redirect_uri=f,b("PlatformDialogClient").async(a,c,function(a){d(a)}))})}function x(a){m=a}function y(a,b){o=a,n=b}u.stub("navigate");function z(a){if(m){u.remote.navigate(a);return!0}return!1}u.stub("enterFullScreen");b("Arbiter").subscribe("canvas.enter_fullscreen",u.remote.enterFullScreen);u.stub("exitFullScreen");b("Arbiter").subscribe("canvas.exit_fullscreen",u.remote.exitFullScreen);u.stub("fireEvent");b("Arbiter").subscribe("canvas.friendsOnlineUpdated",u.remote.fireEvent.bind(u.remote));function A(a){var c=a.time-p+q;switch(a.name){case"StopIframeAppTtiTimer":q=c;return{time_delta_ms:c,type:"tti"};case"StartIframeAppTtiTimer":p=a.time;break;case"RecordIframeAppTti":o&&b("Bootloader").loadModules(["CanvasIFrameLogger"],function(b){b.log(c,a.appId,n)},"PlatformAppController");return{time_delta_ms:c,type:"tti"}}}u.local.setSize=d;u.local.getPageInfo=f;u.local.scrollTo=c;u.local.showDialog=g;u.local.setNavigationEnabled=x;u.local.isFullScreenSupported=b("CanvasNavigationFullScreen").isSupported;u.local.getFullScreen=b("CanvasNavigationFullScreen").getFullScreen;u.local.logTtiMessage=A;u.local.useFriendsOnline=b("CanvasPresenceController").useFriendsOnline.bind(b("CanvasPresenceController"));b("XdArbiter").setRpcHandler(function(a){u.read.apply(u,a)});u.stub("hidePluginObjects");b("Arbiter").subscribe("layer_shown",function(){++l===1&&(k?u.remote.hidePluginObjects():b("Style").set(b("ge")("pagelet_canvas_content"),"visibility","hidden"))});u.stub("showPluginObjects");b("Arbiter").subscribe("layer_hidden",function(){--l===0?k?u.remote.showPluginObjects():b("Style").set(b("ge")("pagelet_canvas_content"),"visibility",""):l<0&&(l=0)});function B(a){t[a.name]=a;a=b("ge")(a.name);a&&(i=a)}d={setActiveIframeAndAppID:function(a,c,d){i=a,j=c,r=d,b("CanvasPresenceController").setAppID(r)},setInformAppOnLayerChange:function(a){k=a},setNavigationEnabled:x,setTtiEnabled:y,handleNavigation:z,init:B,getFrameParams:function(a){return t[a]},setConfig:function(a){s=a}};a.PlatformAppController=d;e.exports=d}),null);
__d("FavIcon",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i;function j(){var a=b("DOM").scry(document.head,"link");a&&a.forEach(function(a){(a.rel.indexOf("icon")!=-1||a.rel.indexOf("shortcut icon")!=-1)&&b("DOM").remove(a)})}a={isToggledResource:function(){return i&&g.href===i?!0:!1},set:function(a){g&&b("DOM").remove(g),j(),g=b("DOM").create("link",{type:"image/x-icon",rel:"icon",href:a}),b("DOM").appendContent(b("DOM").find(document,"head"),g)},setToggleResources:function(a,b){g=document.querySelector('link[rel*=icon][href*=".ico"]');if(!g)return;h=b||g.href;i=a},toggle:function(){if(!g||!i)return;if(g.href===h){this.set(i);return}this.set(h)},toggleSet:function(a){if(!g||!i||!h)return;a=a?i:h;g.href!==a&&this.set(a)}};e.exports=a}),null);
__d("PlatformCanvasController",["fbt","AsyncRequest","CSS","DocumentTitle","DOM","DOMEventListener","FavIcon","PageTransitions","PlatformAppController","UIPagelet","URI","UserActivity","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h="iframe_canvas",i=24e4,j=5e3,k=6e4,l,m,n,o,p,q,r;function s(a){var c=b("ge")("pagelet_canvas_content");b("CSS").hide(c);b("DOM").scry(c,"iframe").forEach(function(a){a.src=""});b("DOM").setContent(b("ge")("canvas_throbber_text"),g._("Loading {app-name}",[g._param("app-name",a)]))}function t(a,c,d,e){var f=b("ge")("pagelet_canvas_footer_content"),g=b("ge")("pagelet_canvas_content");b("DOM").setContent(g,a);b("DOM").setContent(f,c);b("CSS").show(g);b("DocumentTitle").set(d);b("FavIcon").set(e)}function u(a){__p&&__p();if(a.getSubdomain()!="apps")return!1;var c,d=b("DOM").scry(document,"a[data-appname]");for(var e=0;e<d.length;e++)if(d[e].href==a){c=d[e].getAttribute("data-appname");break}if(!c)return!1;d=a.getPath().split("/")[1];if(d=="l.php")return!1;s(c);e=a.getUnqualifiedURI();new(b("AsyncRequest"))().setURI(new(b("URI"))("/ajax/canvas.php")).setData({fb_app_name:d,uri:e.toString()}).setMethod("GET").setReadOnly(!0).setStatusElement("canvas_throbber").setHandler(function(a){a=a.getPayload();b("CSS").conditionClass(document.body,"center_fixed_width_app",!a.is_liquid);t(a.main_html,a.footer_html,a.page_title,a.favicon);b("PageTransitions").transitionComplete()}).send();return!0}function v(a){if(!String(a.getPath()).startsWith("/"+n+"/")&&!String(a.getPath()).startsWith("/"+m+"/"))return!1;a=a.getUnqualifiedURI();a.setPath("/"+a.getPath().split("/").slice(2).join("/"));return b("PlatformAppController").handleNavigation(a.toString())}function w(a){return v(a)||u(a)}function x(){var a=b("ge")("pagelet_ego_pane"),c=Date.now();a!==null&&l>0&&c-o>=i&&(o=c,b("UIPagelet").loadFromEndpoint("WebEgoPane","pagelet_ego_pane",{pid:9,data:[m,++p]},{bundle:!1}))}b("UserActivity").subscribe(function(){var a=Date.now();a-o>=i-j&&setTimeout(x,j)});function y(){var a=Date.now();l>0&&a-q>=k&&(q=a,b("UIPagelet").loadFromEndpoint("CanvasShowcaseSliderPagelet","pagelet_canvas_showcase",{pid:129,data:[m,++r]},{bundle:!1}))}function a(a,c,d,e,f){__p&&__p();l=d;o=Date.now();p=0;q=Date.now();r=0;m&&m!==a&&x();m=a;n=c;d=b("ge")(h);b("PlatformAppController").setConfig(f);d&&b("DOMEventListener").add(d,"load",function(){b("PlatformAppController").setNavigationEnabled(!1)});f&&f.displayShowcase&&setInterval(y,k);b("PlatformAppController").setInformAppOnLayerChange(!e);b("PlatformAppController").setNavigationEnabled(!1);b("PageTransitions").registerHandler(w)}c={setup:a};e.exports=c}),null);
__d("XGameroomLandingPageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/gameroom/download/",{at:{type:"String"},fbsource:{type:"Int"},video_id:{type:"FBID"},canvas_url:{type:"String"},app_id:{type:"FBID"}})}),null);