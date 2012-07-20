/*
 * jQuery Responsive Facebook Comments
 * Copyright 2012 Rick Janusz
 *
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 */
(function ($) {
    $.fn.extend({
        fbresponsivecomments: function (options) {

            // Create some defaults, extending them with any options that were provided
            var defaults = {
                'appId': 'your_app_id_here',  // App ID
                'url': 'your_url_here', // Your url: 'http://www.example.com' 
                'posts' : '5' // how many posts to show initially
            };

            var options = $.extend(defaults, options);

            return this.each(function () {
                var o = options;

                // Load the SDK Asynchronously
                (function(d, s, id) {
				  var js, fjs = d.getElementsByTagName(s)[0];
				  if (d.getElementById(id)) return;
				  js = d.createElement(s); js.id = id;
				  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId="+o.appId;
				  fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
           
	               $(window).bind("load", function(){
					    FB.XFBML.parse( );
					}); 
						                
					$('body').prepend('<div id="fb-root"></div>');
                
            });
        }
    });
})(jQuery);