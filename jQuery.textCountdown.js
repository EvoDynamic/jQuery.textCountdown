/* jQuery Text Countdown Plugin v0.1 - 2015-07-24
* https://github.com/EvoDynamic/jQuery.textCountdown
* Author: Brian Seim, EvoDynamic LLC
* Sites:http://brianseim.com
* 		http://evodynamic.com 
* Copyright 2015 EvoDynamic LLC; Licensed MIT*/
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
		},
		_setOption: function(key, value) {
			this._super(key, value);
			this.check();
		},
		_setOptions: function(options) {
			this._super(options);
			this.check();
		}
	});
}(jQuery));