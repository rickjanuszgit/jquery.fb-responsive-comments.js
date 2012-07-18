jquery.fb-responsive-comments.js
================================

Responsive Facebook comments that span mobile, tablet and desktop

# <h1>Responsive Facebook Comments jQuery Plugin</h1>

To initialize the plugin simply call:
 <pre>
jQuery('div you want it inserted to').fbresponsivecomments({
     appid:'your_appId_here',
     channelUrl: 'your_domain_here' });
</pre>
Options:
* 'appId': 'your_appId_here',              
* 'channelUrl': 'your_url_here',               
* 'posts' : '5',                              
* 'commentsClass' : 'comments',                 
* 'loadSDK' : true                             

1. **appID** _**required**_ : the appId Facebook gives you when you create an app found at [Facebook Apps](http://developers.facebook.com/apps)
2. **channelUrl** _**required**_ : the domain it will reside on. Ex. www.example.com **Note:** this url must NOT comtain http://
3. **posts** _**optional**_  : _default: 5_  - the amount of posts to show initially. If there are more comments than the default it will produce a button that reads "load more posts"
4. **commentsClass** _**optional**_ : _default: comments_ - you can attach any class you want to the fbml comments tag for optional styling
5. **loadSDK** _**optional**_ : _default: true_ - this will load the Facebook SDK and the root div