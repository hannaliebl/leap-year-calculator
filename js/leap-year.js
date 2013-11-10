// is a single year a leap year?
function isLeapYear(year) {
	if ((year % 4 === 0 && year % 100 != 0) || (year % 100 === 0 && year % 400 === 0)) {
		return year;
	} else {
		return false;
	}
};

// given a range of years, create new_array, which is only the leap years in a given range
function leapYearRange(year_one, year_two) {
	var range = [];
	for (var i = year_one; i <= year_two; i++) {
		range.push(i);
	}
	var new_array = [];
	range.forEach(
		function(year) { 
			if ((year % 4 === 0 && year % 100 != 0) || (year % 100 === 0 && year % 400 === 0))
				new_array.push(year);
		}
	);
	return new_array;
};

// check whether current year is leap year, if not, return next leap year
$(function() {
	$("button#next-leap-year").click(function() {
		$("p#show-next-leap-year").empty();
		var currentyear = new Date().getFullYear();
		if ((currentyear % 4 === 0 && currentyear % 100 != 0) || (currentyear % 100 === 0 && currentyear % 400 === 0)) {
			$("p#show-next-leap-year").append('This year is a leap year!');
		} else { 
			for (var i = 0; i < 5; i++) {
			currentyear += i;
			if ((currentyear % 4 === 0 && currentyear % 100 != 0) || (currentyear % 100 === 0 && currentyear % 400 === 0)) {
				$("p#show-next-leap-year").append(' ' + currentyear + ' ' + 'is the next leap year.');
			}
		}
		}
	});
});

// second form field - display whether or not an inputted year is a leap year
$(function() {
	$("form#leap-year-finder").submit(function() {
		$("p#answer-single-year").empty();
		$("p.text-danger").addClass("hidden");
		var inputtedyear = $("input#year").val();
		if (isNaN(inputtedyear) === true) {
			$("p.text-danger").removeClass("hidden");
		} else {
		var result = isLeapYear(inputtedyear);
		if (result === inputtedyear) {
			$("p#answer-single-year").append('Yes,' + ' ' + inputtedyear + ' ' + 'is a leap year.');
		} else {
			$("p#answer-single-year").append('No,' + ' ' + inputtedyear + ' ' + 'is not a leap year.');
		}
	}
	return false;
	});
	return false;
});

// last form field - display all leap years within a given range as an unordered list
$(function() {
	$("form#leap-year-range-finder").submit(function() {
		$("p.text-danger.bottom").addClass("hidden");
		$("ul#leap-year-range").empty();
		$("h2#leap-year-range-heading").empty();
		var inputtedyear_one = $("input#first-year").val();
		var inputtedyear_two = $("input#second-year").val();
		if (isNaN(inputtedyear_two) === true || isNaN(inputtedyear_one) === true || inputtedyear_two <= inputtedyear_one) {
			$("p.text-danger.bottom").removeClass("hidden");
		} else {
		$("h2#leap-year-range-heading").removeClass("hidden").append('All the Leap Years Between' + ' ' + inputtedyear_one + ' ' + 'and' + ' ' + inputtedyear_two + ' are:');
		$('html, body').animate({
			scrollTop: $("h2#leap-year-range-heading").offset().top
			}, 500);
		var result_two = leapYearRange(inputtedyear_one, inputtedyear_two);
		result_two.forEach(function(year) {
		$("ul#leap-year-range").append('<li>' + year + '</li>');
	});
	}
		return false;
	});
	return false;
});