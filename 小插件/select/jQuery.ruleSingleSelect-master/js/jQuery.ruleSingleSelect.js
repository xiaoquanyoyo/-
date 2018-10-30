(function($) { 
	$.fn.ruleSingleSelect = function (options) {
		 var setting = {       
			callfunc: null    
		};
		var opts = $.extend({}, setting, options);
		function DropDown(el) {
			this.dd = $(el);
			this.placeholder = this.dd.children('span');
			this.option = this.dd.find('ul.dropdown > li');
			this.value = 0;
			this.text = '';
			this.index = -1;
			this.initEvents();
		}
		DropDown.prototype = {
			initEvents : function() {
				var obj = this;

				obj.dd.on('click', function(event){
					$(this).toggleClass('active');
					return false;
				});

				obj.option.on('click',function(){
					var _opt = $(this);
					obj.value = _opt.attr("data-id");
					obj.text = _opt.text();
					obj.index = _opt.index();
					obj.placeholder.text(obj.text);
					if (typeof (opts.callfunc) != 'undefined' && opts.callfunc != null)
					opts.callfunc();
				});
			},
			getValue : function() {
				return this.value;
			},
			getText : function() {
				return this.text;
			},
			getIndex : function() {
				return this.index;
			}
		}
		
	
		return $(this).each(function () {
			new DropDown(this);
		});
	}
			
})(jQuery);  