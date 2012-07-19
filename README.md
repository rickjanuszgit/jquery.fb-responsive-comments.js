jquery.fb-responsive-comments.js
================================

Responsive Facebook comments that span mobile, tablet and desktop

# <h1>Responsive Facebook Comments jQuery Plugin</h1>

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