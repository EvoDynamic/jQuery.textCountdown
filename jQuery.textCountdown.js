(function ($) {
	$.widget('evo.textCountdown',{
		options: {
			characters: 100,
			remaining: null,
			indicatorClass: '',
			indicator: null,
			indicatorWrapper: 'span',
			indicatorText: 'Characters remaining'
		},
		_create: function(){						
			this.options.indicator = $('<' + this.options.indicatorWrapper + '>');
			if(this.options.indicatorClass!='')
				this.options.indicator.addClass(this.options.indicatorClass);
			this.element.after(this.options.indicator);
			this.element.change(eval(this.check)).keyup(eval(this.check));
			this.check();
		},
		addClass: function(v){
			if(v===undefined){
				return this.options.indicatorClass;
			}
			this.options.indicatorClass += ' ' + v;
			this.options.indicator.addClass(v);			
		},
		check: function(){
			var duh = this;
			if(!duh.element) duh = $(this).data('evo-textCountdown');
			if(duh.element){
				duh.options.remaining = duh.options.characters - duh.element.val().length;
				if(duh.options.remaining<0){
					duh.element.val(duh.element.val().substring(0, duh.options.characters));
					duh.options.remaining=0;
				}
				duh.options.indicator.html(duh.options.remaining + ' ' + duh.options.indicatorText);
			}
		}
	});
}(jQuery));