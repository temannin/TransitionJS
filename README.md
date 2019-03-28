![](https://i.imgur.com/iRrJ3hi.png)
![](https://img.shields.io/maintenance/yes/2019.svg?style=for-the-badge) ![](https://img.shields.io/github/size/temannin/TransitionJS/transition.min.js.svg?style=for-the-badge) ![](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
#### Create 'slide-like', timed transitions, for your business or home setup.

Have an extra monitor you're not using? Want to display changing information to you or your customers on it?
TransitionJS makes it easy to create HTML documents that cycle through the content you want to display.

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
  <script src="./transition.min.js"></script>
  <script>
    // Initialize Presentation
    const presentation = new Presentation(3000); // 3000 is the transition interval in ms.
  </script>
</html>
```
2. Style and design each slide how you want.
```css
.slide-1 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  font-size: 40px;
}

.slide-2 {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: purple;
  font-size: 80px;
}

```
3. Done!
![alt text](https://i.imgur.com/rNLeI9i.gif)
