 This plugin was made to take the guesswork out of making the facebook comments responsive and able to work on mobile phones without loading issues. It's based off of a technique used here:https://gist.github.com/2111366 . There were several mods made, this technique didn't work fully for the comments but it did solve the loading problem we were experiencing with the mobile version from Facebook.
 
 What ended up working was to turn mobile off and make the container div responsive (based off of percent). Works great! Give it a try.

To initialize the plugin simply call:
 <pre>
jQuery('div you want it inserted to').fbresponsivecomments({
     appId:'your_appId_here',
     url: 'your_domain_here' });
</pre>
Options:
* 'appId': 'your_appId_here',              
* 'url': 'your_url_here',               
* 'posts' : '5'                           

1. **appId** _**required**_ : the appId Facebook gives you when you create an app found at [Facebook Apps](http://developers.facebook.com/apps)
2. **url** _**required**_ : the domain it will reside on. Ex. http://www.example.com 
3. **posts** _**optional**_  : _default: 5_  - the amount of posts to show initially. If there are more comments than the default it will produce a button that reads "load more posts"