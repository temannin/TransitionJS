# TransitionJS
#### Create 'slide-like' timed transitions for your business or home setup.

Have an extra monitor? Need to display changing information to your customers on-site? TransitionJS makes it easy to create HTML documents that cycle through the content you want to display.

### Getting started
1. Create HTML Document
```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>

  <body>
    <slide class="slide-1">Test</slide>
    <slide class="slide-2">Tyler</slide>
  </body>

  <script src="./transition.js"></script>
  <script>
    const presentation = new Presentation(3000);
  </script>
</html>
```
