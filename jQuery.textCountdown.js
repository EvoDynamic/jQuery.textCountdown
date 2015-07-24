(function ($) {
	$.fn.textCountdown = function (options) {
		var settings = $.extend({
			// These are the defaults.
			class: '',
			characters: 10,
			action: 'initialize'
		}, options);

		if (settings.action == 'initialize') {
			return this.each(function () {
				if (!$(this).next().length || !$(this).next().eq(0).hasClass('textCountdown')) {
					var remaining = settings.characters - $(this).val().length;
					$(this)
					 .data('characters', settings.characters)
					 .data('class', settings.class)
					 .change(checkCharacters)
					 .keyup(checkCharacters);
					addResultSpan(this, remaining);
				}
			});
		}
		return this;
	};

	function addResultSpan(elem, remaining) {
		$(elem).after('<span class="textCountdownResult ' + $(elem).data('class') + '">' + remaining + ' Characters remaining</span>');
	}

	function checkCharacters(event) {
		var elem = event.target;
		var remaining = $(elem).data('characters') - $(elem).val().length;
		if (remaining < 0) {
			$(elem).val($(elem).val().substring(0, $(elem).data('characters')))
			remaining = 0;
		}
		if ($(elem).nextAll('.textCountdownResult').length)
			$(elem).nextAll('.textCountdownResult').text(remaining + ' Characters Remaining');
		else
			addResultSpan(elem, remaining);
	}
}(jQuery));