

	 // Controls what size Kaz banner should be for resizing in responsive design

var largeBanner =
  '<img src="/Plndr/img/banners/kazbahbanner1.jpg" class="kazbanner" border="0" alt="" height="100" width="980" usemap="#kaz" style="padding: 10px; margin-bottom: 5px; background:none repeat scroll 0 0 #C0C0C0; position:relative; left: 7px;"/>' +
    '<map name="kaz">' +
       '<area shape="rect" coords="0,0,264,50" href="/product/browse?a=14875&catId=&vtsPreview=vts" alt="">' +
       '<area shape="rect" coords="264,0,412,50" href="/product/browse?a=15055&catId=&vtsPreview=vts " alt="">' +
       '<area shape="rect" coords="412,0,542,50" href="/product/browse?a=14886&catId=&vtsPreview=vts" alt="">' +
       '<area shape="rect" coords="542,0,677,50" href=" /product/browse?a=14888&catId=&vtsPreview=vts" alt="">' + 
       '<area shape="rect" coords="677,0,800,50" href="/product/browse?a=14887&catId=&vtsPreview=vts " alt="">' +
       '<area shape="rect" coords="800,0,980,50" href="/product/browse?a=14875&catId=&vtsPreview=vts" alt="">' +
      '</map>';

var medBanner = '<img src="/Plndr/img/banners/kazbahbanner1.jpg" class="kazbanner-med" border="0" alt=""  width="686" usemap="#kaz" style="padding: 10px; margin-bottom: 5px; background:none repeat scroll 0 0 #C0C0C0; position:relative; left: 7px;"/>' +
   '<map name="kaz">' +
       '<area shape="rect" coords="0,0,186,38" href="/product/browse?a=14875&catId=&vtsPreview=vts" alt="">' +
       '<area shape="rect" coords="186,0,289,38" href="/product/browse?a=15055&catId=&vtsPreview=vts " alt="">' +
       '<area shape="rect" coords="289,0,380,38" href="/product/browse?a=14886&catId=&vtsPreview=vts" alt="">' +
       '<area shape="rect" coords="380,0,473,38" href=" /product/browse?a=14888&catId=&vtsPreview=vts" alt="">' +
       '<area shape="rect" coords="473,0,560,38" href="/product/browse?a=14887&catId=&vtsPreview=vts " alt="">' +
       '<area shape="rect" coords="560,0,687,38" href="/product/browse?a=14875&catId=&vtsPreview=vts" alt="">' +
      '</map>';
var smallBanner = '<a href="/product/browse?a=14875&catId=&vtsPreview=vts"><img src="/Plndr/img/banners/kazbanner_small.jpg" class="kazbanner-small" border="0" alt="" height="50" width="453" usemap="#kaz" style="padding: 5px; margin-bottom: 5px; background:none repeat scroll 0 0 #C0C0C0; position:relative; left: 9px;"/></a>';
var smallerBanner = '<a href="/product/browse?a=14875&catId=&vtsPreview=vts"><img src="/Plndr/img/banners/kazbanner_small.jpg" class="kazbanner-smaller" border="0" alt="" height="50" width="297" usemap="#kaz" style="padding: 5px; margin-bottom: 5px; background:none repeat scroll 0 0 #C0C0C0; position:relative; left: 7px;"/></a>';


	var $window = $(window);
	// banner is where the banner is inserted 
	var $banner = $('.kaz-banner');
	var $value = window.location.href.indexOf;

	if ((window.location.href.indexOf("catId=2") > -1) && ($('.kaz-banner').length > 0)) {
	  $('.kaz-banner').hide();
	} 

	// this is called by an event listener in the onload functions
	// for reference --  992px or greater (monitors. most tablets, iphone4s/5) /
	// 768px to 991px (most other phones),  
	// 480px to 767px and 360 to 480px (hardly any phones use these resolutions, maybe old school Nokia phones).

	function checkWidth() {/// <reference path="jquery.fancybox-1.3.4.pack.js" />


	  var windowsize = $window.width();

	  if ((getInternetExplorerVersion() > 8) || getInternetExplorerVersion() == -1) {

		if (windowsize > 992) {
		  $banner.html(largeBanner);
		} else if ((windowsize < 992) && (windowsize >= 768)) {
		  $banner.html(medBanner);
		} else if ((windowsize < 768) && (windowsize >= 480)) {
		  $banner.html(smallBanner);
		} else if ((windowsize < 480)) {
		  $banner.html(smallerBanner);
		}

	  } else {
		$banner.html(largeBanner); // IE8 and lower
	  }

	  function getInternetExplorerVersion()
	  // Returns the version of Internet Explorer or a -1
	  // (indicating the use of another browser). 
	  {
		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
		  var ua = navigator.userAgent;
		  var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		  if (re.exec(ua) != null)
			rv = parseFloat(RegExp.$1);
		}
		return rv;
	  }