 This plugin was made to take the guesswork out of making the facebook comments responsive and able to work on mobile phones without loading issues.
 
 What ended up working was to turn mobile off and make the container div responsive (based off of percent) then refresh the content on page load.  Works great! Give it a try.

Initialization
To initialize the plugin simply call:
 <pre>
 
    
 // Put this inside the jQuery document ready statement
    $('#container').fbresponsivecomments({
        appId:'your_appId_here',
        url: ';your_domain_here'' 
    });
    
 // Put this in the body where you want the comments to show up
&lt;div id="container">
     &lt;div class="fb-comments" data-href="YOUR PAGE URL HERE" data-num-posts="2" mobile="false">&lt;/div>
&lt;/div>

</pre>
Options:
* 'appId': 'your_appId_here',              
* 'url': 'your_url_here',               
* 'posts' : '5'                           

1. **appId** _**required**_ : the appId Facebook gives you when you create an app found at [Facebook Apps](http://developers.facebook.com/apps)
2. **url** _**required**_ : the domain it will reside on. Ex. http://www.example.com 
3. **posts** _**optional**_  : _default: 5_  - the amount of posts to show initially. If there are more comments than the default it will produce a button that reads "load more posts"