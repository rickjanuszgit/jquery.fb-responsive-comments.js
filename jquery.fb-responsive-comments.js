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
                'channelUrl': 'your_url_here', // Your url: 'www.example.com' // MUST NOT CONTAIN 'http://'
                'status': true, // check login status
                'cookie': true, // enable cookies to allow the server to access the session
                'xfbml': true, // parse XFBML
                'posts' : '5', // how many posts to show initially
                'commentsClass' : 'comments', // give the fbml tag a class default is comments
                'loadSDK' : true
            };

            var options = $.extend(defaults, options);

            return this.each(function () {
                var o = options;
				var channel = '//'+ o.channelUrl;
                window.fbAsyncInit = function () {
                    FB.init({
                        appId: o.appId, // App ID
                        channelUrl: channel, // Channel File
                        status: true, // check login status
                        cookie: true, // enable cookies to allow the server to access the session
                        xfbml: true // parse XFBML
                    });

                    // listen for and handle auth.statusChange events
                    FB.Event.subscribe('auth.statusChange',

                    function (response) {
                        if (response.authResponse) {
                            // user has auth'd your app and is logged into Facebook
                            FB.api('/me',

                            function (me) {
                                if (me.name) {
                                    $('#auth-displayname').text(me.name);
                                }
                            })
                            $('#auth-loggedout').css('display', 'none');
                            $('#auth-loggedin').css('display', 'block');
                        } else {
                            // user has not auth'd your app, or is not logged into Facebook
                            $('#auth-loggedout').css('display', 'block');
                            $('#auth-loggedin').css('display', 'none');
                        }
                    });

                    // respond to clicks on the login and logout links
                    $('#auth-loginlink').click(function (e) {
                        FB.login();
                        e.preventDefault();
                    });
                    $('#auth-logoutlink').click(function (e) {
                        FB.logout();
                        e.preventDefault();
                    });

                    // Additional initialization code here
                };

				if(o.loadSDK === true) {
	                // Load the SDK Asynchronously
	                (function (d) {
	                    var js, id = 'facebook-jssdk',
	                        ref = d.getElementsByTagName('script')[0];
	                    if (d.getElementById(id)) {
	                        return;
	                    }
	                    js = d.createElement('script');
	                    js.id = id;
	                    js.async = true;
	                    js.src = "//connect.facebook.net/en_US/all.js";
	                    ref.parentNode.insertBefore(js, ref);
	                }(document));
	                
					$('body').prepend('<div id="fb-root"></div>');
                }
				var loggInOut = '<div id="auth-status"><div id="auth-loggedout"><a href="#" id="auth-loginlink">Log in to Facebook</a></div> <div id="auth-loggedin"> Hi, <span id="auth-displayname"></span> (<a href="#" id="auth-logoutlink">Log out of Facebook </a>) </div> </div>';
    
				var commentsHref = 'http://'+o.channelUrl;
				var fbcomments = '<fb:comments class='+o.commentsClass+' href='+commentsHref+' num_posts='+o.posts+'></fb:comments>';
				$(loggInOut).appendTo($(this));
				$(fbcomments).appendTo($(this));

            });
        }
    });
})(jQuery);