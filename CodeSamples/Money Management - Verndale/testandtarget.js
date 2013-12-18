/**************
	* Custom validation helper functions
	*/
	function isName(str) { return /^[a-zA-Z() ]+$/.test(str); }
	function isNumber(num) { return !isNaN(parseFloat(num)) && isFinite(num); }
	function validateEmail(email) {
		// email checking string
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	function isValue(str) {
		if (str) {
			return true;
		} else {
			return false;
		}
	}
	function isDate(txtDate) {
		var currVal = txtDate;
		if (currVal == '') return false;

		//Declare Regex  
		var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
		var dtArray = currVal.match(rxDatePattern); // is format OK?
		if (dtArray == null) return false;

		//Checks for mm/dd/yyyy format.
		dtMonth = dtArray[1];
		dtDay = dtArray[3];
		dtYear = dtArray[5];

		if (dtMonth < 1 || dtMonth > 12) return false;
		else if (dtDay < 1 || dtDay > 31) return false;
		else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31) return false;
		else if (dtMonth == 2) {
			var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
			if (dtDay > 29 || (dtDay == 29 && !isleap)) return false;
		}
		return true;
	}
	/**************
	* Custom validation functions: part 1
	*/
	function pageOneValid() {
		//check first homephone
		//check second workphone
		//check third cellphone
		// if nothing = 10 then something is wrong

		var numLengthHome = ($('.homephone  .validPhone:eq(0)').val().length) + ($('.homephone  .validPhone:eq(1)').val().length) + ($('.homephone  .validPhone:eq(2)').val().length);
		var numLengthWork = ($('.workphone   .validPhone:eq(0)').val().length) + ($('.workphone   .validPhone:eq(1)').val().length) + ($('.workphone   .validPhone:eq(2)').val().length);
		var numLengthCell = ($('.cellphone  .validPhone:eq(0)').val().length) + ($('.cellphone  .validPhone:eq(1)').val().length) + ($('.cellphone  .validPhone:eq(2)').val().length);

		if ((numLengthHome == 10 || numLengthWork == 10 || numLengthCell == 10)) {
			$('.errorHomePhone').hide();
		} else {
			$('.errorHomePhone').show();
		}
		// reset isValid to true after numbers check
		isValid = true;

		// step one check for valid
		// step 2 if it's all valid continue
		// else close modal and show errors

		// checks for valid email address
		if (!(validateEmail($('.validateEmail:eq(0)').val()))) {
			$('.errorEmail').show();
			isValid = false;
		} else {
			$('.errorEmail').hide();
		}

		// check second one for valid email
		if (!(validateEmail($('.validateEmail:eq(1)').val()))) {
			$('.validateEmail:eq(1)').parents('.formgroup').addClass('error');
			isValid = false;
		} else {
			$('.validateEmail:eq(1)').parents('.formgroup').removeClass('error');
		}

		// if both are filled, check to see if they're same
		// check to see if both are filled	 

		if ($('.validateEmail:eq(0)').val() != $('.validateEmail:eq(1)').val()) {
			$('.validateEmail:eq(1)').parents('.formgroup').addClass('error');
			isValid = false;
		} else {
			$('.validateEmail:eq(1)').parents('.formgroup').removeClass('error');
		}

		// first name
		if (!(isName($('.validateName').val()))) {
			$('.errorName').show();
			isValid = false;
		} else {
			$('.errorName').hide();
		}

		// last name
		if (!(isName($('.validateLName').val()))) {
			$('.errorLastName').show();
			isValid = false;
		} else {
			$('.errorLastName').hide();
		}

		// check for address - any value is fine 
		if (!(isValue($('.validateAddress').val()))) {
			$('.errorAddress').show();
			isValid = false;
		} else {
			$('.errorAddress').hide();
		}
		if (!($('.validateZip').val().length == '5')) {
			$('.errorZipcode').show();
			isValid = false;
		} else {
			$('.errorZipcode').hide();
		}
	}
	/**************
	* Custom validation functions: part 2
	*/
	function page2Valid() {
		$('input, textarea, select', '.part2').each(function () {
			// check type, run appropriate check for the class.

			if (($(this).attr('class')) != 'password') {
				if (!($(this).val())) {
					isValid = false;
					$(this).parents('.formgroup').children('.invalid').show();
					$(this).siblings('.invalid').show();
				} else {
					$(this).parents('.formgroup').children('.invalid').hide();
					$(this).siblings('.invalid').show();
				}

				if ($(this).parent('.dropdown').length) {
					if (!($(this).val())) {
						isValid == false;
						$(this).parents('.formgroup').children('.invalid').show();
						$(this).siblings('.invalid').show();
					} else {
						$(this).parents('.formgroup').children('.invalid').hide();
						$(this).siblings('.invalid').show();
					}
				}
			}
		});
	}
	/**************
	* Custome Text Variables
	*/
	// Tooltips
	var ttName;
	var ttMiddleName;
	var ttLastName;
	var ttEmail;
	var ttConfirmEmail;
	var ttHomePhone;
	var ttWorkPhone;
	var ttCellPhone;
	var ttAddress;
	var ttZipcode;
	var ttIncome;
	var ttGender;
	var ttOccupation;
	var ttDob;
	var ttMarital;
	var ttDependents;
	var ttContactHow;
	var ttContactTime;
	var ttHow;
	var ttSecurityCode;

	// Error Messages
	var errorName = "Please provide your first name.";
	var errorMiddleName;
	var errorLastName;
	var errorEmail;
	var errorConfirmEmail;
	var errorHomePhone;
	var errorWorkPhone;
	var errorCellPhone;
	var errorAddress;
	var errorZipcode;
	var errorIncome;
	var errorGender;
	var errorOccupation;
	var errorDob;
	var errorMarital;
	var errorDependents;
	var errorContactHow;
	var errorContactTime;
	var errorHow;
	var errorSecurityCode;
	
	/* Set wording for modal box */
	var modalText = "Please give us a moment while the Money Management team processes your information.";

	/* bottom callout */
	var bottomCallout = "";

	/* buttons to continue - first page and 2nd page */
	var buttonText1 = "";
	var buttonText2 = "";
	
	// arrays for custom validation
	var tt = new Array(ttName, ttMiddleName, ttLastName, ttEmail, ttConfirmEmail, ttHomePhone, ttWorkPhone, ttCellPhone, ttAddress, ttZipcode, ttIncome, ttGender, ttOccupation, ttDob, ttMarital, ttDependents, ttContactHow, ttContactTime, ttHow, ttSecurityCode);
	var ttClass = new Array(".ttName", ".ttMiddleName", ".ttLastName", ".ttEmail", ".ttConfirmEmail", ".ttHomePhone", ".ttWorkPhone", ".ttCellPhone", ".ttAddress", ".ttZipcode", ".ttIncome", ".ttGender", ".ttOccupation", ".ttDob", ".ttMarital", ".ttDependents", ".ttContactHow", ".ttContactTime", ".ttHow", ".ttSecurityCode");
	var error = new Array(errorName, errorMiddleName, errorLastName, errorEmail, errorConfirmEmail, errorHomePhone, errorWorkPhone, errorCellPhone, errorAddress, errorZipcode, errorIncome, errorGender, errorOccupation, errorDob, errorMarital, errorDependents, errorContactHow, errorContactTime, errorHow, errorSecurityCode);
	var errorClass = new Array(".errorName", ".errorMiddleName", ".errorLastName", ".errorEmail", ".errorConfirmEmail", ".errorHomePhone", ".errorWorkPhone", ".errorCellPhone", ".errorAddress", ".errorZipcode", ".errorIncome", ".errorGender", ".errorOccupation", ".errorDob", ".errorMarital", ".errorDependents", ".errorContactHow", ".errorContactTime", ".errorHow", ".errorSecurityCode");
	
	/*********************
	* Set custom tooltips/error msgs if they exist, per variables
	*********************/
	// loops through each variable for tooltips. changes if there's a .length
	// removes code if there's no text in variable
	for (x = 0; x < tt.length; x++) {
		if ((tt[x])) {
			$(ttClass[x]).children('div:nth-child(2)').html(tt[x]);
		} else {
			// remove tooltip here. .hover_tooltip_on
			$(ttClass[x]).siblings('.hover_tooltip_on').hide(); // this is name of tooltip
		}
	}

	// same. loops through each variable for errors. change if there's a .length
	for (x = 0; x < error.length; x++) {
		if ((error[x])) {
			$(errorClass[x]).children('div:nth-child(2)').html(error[x]);
		}
	}
	
	// Set modal text
	function setModal() {
		if (modalText) {
			$('#simplemodal-container').html('<div class="modal-text">' + modalText + '</div><img src="/Images/CommonImages/modal-load.gif" />');
		} else {
			$('#simplemodal-container').html('<div class="modal-text">Please give us a moment while the Money Management team processes your information.</div><img src="/Images/CommonImages/modal-load.gif" />');
		}
	}

	/***************
	* Tool tip functionality
	*/
	$('.hover_tooltip_on').click(function (e) {
		if ($(this).hasClass('active')) {
			$(this).next($('.tooltip_message')).hide();
			$(this).removeClass('active');
		} else {
			$(this).next($('.tooltip_message')).show();
			$(this).addClass('active');
		}

		$(document).bind("click", function (e) {
			var clicked = $(e.target);
			if (!clicked.hasClass("active")) {
				$(".tooltip").hide();
				$('.hover_tooltip_on').removeClass("active");
			}
		});
	});

	/*************************** 
	* Override 'enter' action and replace with 'click'
	*/
	//$('.form-split').parent('div').unbind('onkeypress');
	//$('.form-split').parent('div').unbind('keypress');
	$('.form-split').parent('div').bind('keydown', function(e) {
		//console.log(e.which);
		
		if(e.which == 13) {
			//console.log('true!');
			e.preventDefault();
			if(page == 1) {
				$('.validateZip').blur(); 
				$('.btn-continue','.tbl.part1').click();
				return false;
			} else {
				$('.btn-submit','.tbl.part2').click();
				return false;
			}
			return false;
		}
		
	});
	/***************************
	* Custom validation (using previously declared functions)
	*/
	// set default global validation variables
	var isValid = true;
	var page = 1;
	
	// bind part1 validation and continue action
	$('.btn-continue','.tbl.part1').click(function (e) {
		e.preventDefault();
		isValid = true;
		pageOneValid();

		if (isValid) {
			page = 2;
			$('.invalid').hide();
			$('.tbl.part1').fadeOut(300, function () {
				$('.tbl.part2').fadeIn(300);
				$('#book').fadeIn('slow', function () {
					// Animation complete
				});
			});
		} else {

		}
	});

	// bind part2 validation and continue/modal action
	$('.btn-submit','.tbl.part2').click(function (e) {
		e.preventDefault();
		$.getScript("/_JS/jquery.simplemodal.1.4.3.min.js", function(data, status) {
			isValid = true;
			page2Valid();
			
			if (isValid) {
				// hide submit btn(s) and show spinner
				$('.btn-submit','.tbl.part2').hide();
				disableSubmitClick($(".btn_final_submit",".tbl.part2"), $(".btn_final_submit",".tbl.part2").parent());
				$(".btn_final_submit",".tbl.part2").click();
				/*
				$('.jmodal').modal({
					append: 'form',
					onOpen: function (dialog) {
						dialog.overlay.fadeIn('normal', function () {
							dialog.container.slideDown('slow', function () {
								dialog.data.fadeIn('normal');
								// set modal text
								$('.jmodal').append('<img src="/Images/CommonImages/modal-load.gif" />');
								// count to 3, submit form
								setTimeout(function () {
									// fire click event on legit, server-side submit button
									$(".btn_final_submit",".tbl.part2").click();
								}, 2000);
							});
						});
					}
				});
				*/
			} else {
				
			}
		});
		
	});

	// check webservice error code and display page 1 or 2
	var wsError = $('.ws-error').html();
	if(wsError != '') {
		if(parseInt(wsError) == 1) {
			if( $('.errmessage1').text().indexOf('you may already have an account with MMI') > -1) {
				$('.errorEmail .invalid_message').html($('.errmessage1').hide().html()).parent('.errorEmail').show();
				$('.modal-click-final').next('.error_popup').hide();
			}
			// if page 1 has the error, dont' do anything
		} else if(parseInt(wsError) == 2) {
			// if page 2 has the error
			$('.btn-continue','.part1').click();
			$('.formgroup', '.part2').each(function() {
				if($(this).hasClass('error')) {
					$(this).find('.invalid').show();
				}
			});
		}
	}
	
});

// ---------------------------------------------------------------------------------------
// BEGIN: manipulate 3rd party captcha css styles
$(function() {
    $(".Captcha div").css({ marginLeft: "0px", textAlign: "left" });
    $(".Captcha div input").css({ borderColor: "#39658D" });

    $(".Captcha_Err div").css({ marginLeft: "0px", textAlign: "left" });
    $(".Captcha_Err div input").css({ borderColor: "#D60000" });
});
