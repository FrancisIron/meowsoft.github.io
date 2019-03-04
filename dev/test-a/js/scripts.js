// JavaScript source code
var mobile = false;

$(document).ready(function() {
	/** Initialize MaterializeCSS **/
	// Sidenav
    M.Sidenav.init($('.sidenav'), {
        menuWidth: 300,
		edge: 'right',
		loseOnClick: true,
		onCloseStart: function() {
			var array = $('.sidenav').find(".collapsible");
			for (var i = 0; i < array.length; i++) {
				M.Collapsible.getInstance($(array[i])).close();
			}
		}
    });
	// Dropdown
    M.Dropdown.init($('.dropdown-trigger'));
	// Collapsible
	var collapsibleOptions = {
		onOpenStart: function(ul) {
			var icon = $(ul).find('.collapsible-arrow-icon')[0];
			$(icon).fadeOut(300, function() {
				$(icon).html('arrow_drop_up');
				$(icon).fadeIn(300);
			});
		}, onCloseStart: function(ul) {
			var icon = $(ul).find('.collapsible-arrow-icon')[0];
			$(icon).fadeOut(300, function() {
				$(icon).html('arrow_drop_down');
				$(icon).fadeIn(300);
			});
		}
	};
    M.Collapsible.init($('.collapsible'), collapsibleOptions);

	/** Initialize Spectrum **/
	$(".color-pickers").spectrum({
		containerClassName: 'color-picker-container',
		preferredFormat: "hex3",
		showButtons: false,
		showInput: true,
		showAlpha: true
	});
	$(".color-pickers-palette-only").spectrum({
		containerClassName: 'color-picker-container',
		showPaletteOnly: true,
		showPalette: true
	});
	$('#color-backs').on("dragstop.spectrum", function(e, color) {
		changeBackgroundColors(color);
		fnSaveUserSettingsBackgroundColor(color.toHsvString());
	});
	$('#color-texts').on("dragstop.spectrum", function(e, color) {
		changeTextColors(color);
		fnSaveUserSettingsTextColor(color.toHsvString());
	});

	/** Other Scripts **/
	checkMobile();
  
	if (mobile) {
		//$("#test").text("This is a mobile device");
	}
});
     
function changeBackgroundColors(color) {
		$('nav, .sidenav, .color-picker-container').css("background-color",color);
		$('.name, .email').css("text-shadow","0 0 2px "+ color)
}

function changeTextColors(color) {
		$('html, body, head, nav, a, button, p, span, li, i, link, ul, .color-picker-container, .sp-input').css("color",color);
}

function checkMobile(){
	//console.log("checkMobile");
	if (/mobi|android|ios/i.test(navigator.userAgent.toLowerCase())) {
		//console.log("Is Mobile!");
    mobile = true; // mobile!
	}
}
