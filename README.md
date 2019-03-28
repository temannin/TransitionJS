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
    <!-- Slides placed like this -->
    <!-- Each slide tag represents a new slice of content you want to display -->
    <slide class="slide-1">Test1</slide>
    <slide class="slide-2">Test2</slide>
  </body>

  <!-- Import TransitionJS file -->
  <script src="./transition.js"></script>
  <script>
    // Initialize Presentation
    const presentation = new Presentation(3000); // 3000 is the transition interval in ms.
  </script>
</html>
```
