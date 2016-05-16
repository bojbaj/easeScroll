# easeScroll
this is a jquery plugin to make elements position fix with scroll animation.

Demo
==
[Click here to see demo](http://kookweb.github.io/easeScroll/)

How it works
==

include plugin to your html page and after jquery.

```html
<body>
    ...
    
    <div class="easeScroll" style="position:absolute; left: 10px; top: 10px; width: 50px; height: 50px; border: 1px solid #000;">&nbsp;</div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.js"></script>
    <script src="[path_to_js]/easeScroll.js"></script>
</body>
```

then call the plugin with your custom parameters :
```js
$(function () {
    $('.easeScroll').easeScroll({
        speed: 500,                //Animation speed in milisecond, default is 500 miliseconds
        callback: function () { },  //This evet fire up after scroll completed
    });
});
```
