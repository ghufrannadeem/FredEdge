jQuery(window).load(function() {
    "use strict";
    preloader();
})

jQuery(document).ready(function() {
    "use strict";
    globals_init();
	main_slider_init();
});

/* calculated fields */
var cp_calculatedfieldsf_fbuilder_config_1 = {"obj":"{\"pub\":true,\"identifier\":\"_1\",\"messages\": {\n\t\t\"required\": \"This field is required.\",\n\t\t\"email\": \"Please enter a valid email address.\",\n\t\t\"datemmddyyyy\": \"Please enter a valid date with this format(mm\/dd\/yyyy)\",\n\t\t\"dateddmmyyyy\": \"Please enter a valid date with this format(dd\/mm\/yyyy)\",\n\t\t\"number\": \"Please enter a valid number.\",\n\t\t\"digits\": \"Please enter only digits.\",\n\t\t\"max\": \"Please enter a value less than or equal to {0}.\",\n\t\t\"min\": \"Please enter a value greater than or equal to {0}.\",\n\t\t\"previous\": \"Previous\",\n\t\t\"next\": \"Next\",\n\"pageof\": \"Page {0} of {0}\"\n\t}}"};
var cp_calculatedfieldsf_fbuilder_config_2 = {"obj":"{\"pub\":true,\"identifier\":\"_2\",\"messages\": {\n\t\t\"required\": \"This field is required.\",\n\t\t\"email\": \"Please enter a valid email address.\",\n\t\t\"datemmddyyyy\": \"Please enter a valid date with this format(mm\/dd\/yyyy)\",\n\t\t\"dateddmmyyyy\": \"Please enter a valid date with this format(dd\/mm\/yyyy)\",\n\t\t\"number\": \"Please enter a valid number.\",\n\t\t\"digits\": \"Please enter only digits.\",\n\t\t\"max\": \"Please enter a value less than or equal to {0}.\",\n\t\t\"min\": \"Please enter a value greater than or equal to {0}.\",\n\t\t\"previous\": \"Previous\",\n\t\t\"next\": \"Next\",\n\"pageof\": \"Page {0} of {0}\"\n\t}}"};

function globals_init(){

	AXIOMTHEMES_GLOBALS["strings"] = {
		bookmark_add: 		"Add the bookmark",
		bookmark_added:		"Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab \'Bookmarks\'",
		bookmark_del: 		"Delete this bookmark",
		bookmark_title:		"Enter bookmark title",
		bookmark_exists:		"Current page already exists in the bookmarks list",
		search_error:		"Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
		email_confirm:		"On the e-mail address<b>%s</b> we sent a confirmation email.<br>Please, open it and click on the link.",
		reviews_vote:		"Thanks for your vote! New average rating is:",
		reviews_error:		"Error saving your vote! Please, try again later.",
		error_like:			"Error saving your like! Please, try again later.",
		error_global:		"Global error text",
		name_empty:			"The name can\'t be empty",
		name_long:			"Too long name",
		email_empty:			"Too short (or empty) email address",
		email_long:			"Too long email address",
		email_not_valid:		"Invalid email address",
		subject_empty:		"The subject can\'t be empty",
		subject_long:		"Too long subject",
		text_empty:			"The message text can\'t be empty",
		text_long:			"Too long message text",
		send_complete:		"Send message complete!",
		send_error:			"Transmit failed!",
		login_empty:			"The Login field can\'t be empty",
		login_long:			"Too long login field",
		login_success:		"Login success! The page will be reloaded in 3 sec.",
		login_failed:		"Login failed!",
		password_empty:		"The password can\'t be empty and shorter then 4 characters",
		password_long:		"Too long password",
		password_not_equal:	"The passwords in both fields are not equal",
		registration_success:"Registration success! Please log in!",
		registration_failed:	"Registration failed!",
		geocode_error:		"Geocode was not successful for the following reason:",
		googlemap_not_avail:	"Google map API not available!",
		editor_save_success:	"Post content saved!",
		editor_save_error:	"Error saving post data!",
		editor_delete_post:	"You really want to delete the current post?",
		editor_delete_post_header:"Delete post",
		editor_delete_success:	"Post deleted!",
		editor_delete_error:		"Error deleting post!",
		editor_caption_cancel:	"Cancel",
		editor_caption_close:	"Close"
	};

	AXIOMTHEMES_GLOBALS['ajax_url']			= '#';
	AXIOMTHEMES_GLOBALS['ajax_nonce']		= 'a01225268b';
	AXIOMTHEMES_GLOBALS['ajax_nonce_editor'] = 'fa58d3aca8';
	AXIOMTHEMES_GLOBALS['site_url']			= '/';
	AXIOMTHEMES_GLOBALS['vc_edit_mode']		= false;
	AXIOMTHEMES_GLOBALS['theme_font']		= '';
	AXIOMTHEMES_GLOBALS['theme_skin']		= 'adviser';
	AXIOMTHEMES_GLOBALS['theme_skin_bg']	= '';
	AXIOMTHEMES_GLOBALS['slider_height']	= 520;
	AXIOMTHEMES_GLOBALS['system_message']	= {message: '',status: '',header: ''};
	AXIOMTHEMES_GLOBALS['user_logged_in']	= false;
	AXIOMTHEMES_GLOBALS['toc_menu']		= 'float';
	AXIOMTHEMES_GLOBALS['toc_menu_home']	= true;
	AXIOMTHEMES_GLOBALS['toc_menu_top']	= true;
	AXIOMTHEMES_GLOBALS['menu_fixed']		= true;
	AXIOMTHEMES_GLOBALS['menu_relayout']	= 960;
	AXIOMTHEMES_GLOBALS['menu_responsive']	= 800;
	AXIOMTHEMES_GLOBALS['menu_slider']     = true;
	AXIOMTHEMES_GLOBALS['demo_time']		= 0;
	AXIOMTHEMES_GLOBALS['media_elements_enabled'] = true;
	AXIOMTHEMES_GLOBALS['ajax_search_enabled'] 	= true;
	AXIOMTHEMES_GLOBALS['ajax_search_min_length']	= 3;
	AXIOMTHEMES_GLOBALS['ajax_search_delay']		= 200;
	AXIOMTHEMES_GLOBALS['css_animation']      = true;
	AXIOMTHEMES_GLOBALS['menu_animation_in']  = 'fadeIn';
	AXIOMTHEMES_GLOBALS['menu_animation_out'] = 'fadeOutDown';
	AXIOMTHEMES_GLOBALS['popup_engine']	= 'magnific';
	AXIOMTHEMES_GLOBALS['popup_gallery']	= true;
	AXIOMTHEMES_GLOBALS['email_mask']		= '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';
	AXIOMTHEMES_GLOBALS['contacts_maxlength']	= 1000;
	AXIOMTHEMES_GLOBALS['comments_maxlength']	= 1000;
	AXIOMTHEMES_GLOBALS['remember_visitors_settings']	= false;
	AXIOMTHEMES_GLOBALS['admin_mode']			= false;
	AXIOMTHEMES_GLOBALS['isotope_resize_delta']	= 0.3;
	AXIOMTHEMES_GLOBALS['error_message_box']	= null;
	AXIOMTHEMES_GLOBALS['viewmore_busy']		= false;
	AXIOMTHEMES_GLOBALS['video_resize_inited']	= false;
	AXIOMTHEMES_GLOBALS['top_panel_height']		= 0;

	if (AXIOMTHEMES_GLOBALS['theme_font']=='') AXIOMTHEMES_GLOBALS['theme_font'] = 'Roboto';
	AXIOMTHEMES_GLOBALS['link_color'] = '#493834';
	AXIOMTHEMES_GLOBALS['menu_color'] = '#592131';
	AXIOMTHEMES_GLOBALS['user_color'] = '#f1ad48';

}


//preloader
function preloader(){
    "use strict";
    jQuery(".preloaderimg", "#preloader").fadeOut();
    jQuery("#preloader").delay(200).fadeOut("slow").delay(200, function(){
        jQuery(this).remove();
    });
}

/* init main slider */
function main_slider_init(){
    "use strict";

    if (jQuery("#mainslider_1").length > 0) {

		var setREVStartSize = function() {
		var	tpopt = new Object();
		tpopt.startwidth = 1170;
		tpopt.startheight = 500;
		tpopt.container = jQuery('#rev_slider_1');
		tpopt.fullScreen = "off";
		tpopt.forceFullWidth="off";

		tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi3;

		tpj(document).ready(function() {

			if(tpj('#rev_slider_1').revolution == undefined){
				revslider_showDoubleJqueryError('#rev_slider_1');
			}else{
				revapi3 = tpj('#rev_slider_1').show().revolution({	
					dottedOverlay:"none",
					delay:9000,
					startwidth:1170,
					startheight:500,
					hideThumbs:200,
					thumbWidth:100,
					thumbHeight:50,
					thumbAmount:3,
					simplifyAll:"off",
					navigationType:"bullet",
					navigationArrows:"solo",
					navigationStyle:"round",
					touchenabled:"on",
					onHoverStop:"on",
					nextSlideOnWindowFocus:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					drag_block_vertical: false,
					keyboardNavigation:"off",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,
					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,
					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,
					shadow:0,
					fullWidth:"on",
					fullScreen:"off",
					spinner:"spinner0",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					forceFullWidth:"off",
					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0					
				});
			}
		});
	}
}

