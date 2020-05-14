# Content Creator
This is one of my mini projects based on ReactJS, redux, flex, RWD. Thanks to which, without having to have any knowledge about HTML and CSS, we can prepare:
* a simple one page website,
* product page for your store
* other applications ...

divided into:
* full image
* full text
* image left, text right
* text left, image right

You can save your content to a file (JSON) and later work on it by loading the entire file or only it's content

## Important
For the option to save to file (JSON) or to receive a ready .html file, the title and at least one element must be added

## For more advanced users
The generated .html file has no margins and paddings.

The title is also alt for images.

At the moment the project doesn't have wysiwyg, which I hope will be improved. However, you can enter HTML tags into the content (for example: `<a>`, `<ul>`, etc. ...)

Additionally there are also added CSS classes that don't have any properties, you can easily use them in your own CSS, as to not overwrite flex and RWD:

```html
<div class="flex-wrapper">

  <div class="fi full-image">
    <img class="full-image_image" src="#"  alt="[title]">
  </div>

  <div class="ft full-text">
    <h2 class="full-text_h2">[Full Text TITLE]</h2>
    <p class="full-text_p">[Full Text PARAGRAPH]</p>
  </div>

  <div class="iltr image-left-text-right">
    <div class="il image-left">
      <img class="image-left-text-right_image" src="#"  alt="[title]">
    </div>
    <div class="tr text-right">
      <h2 class="image-left-text-right_h2">[Text Right TITLE]</h2>
      <p class="image-left-text-right_p">[Text Right PARAGRAPH]</p>
    </div>
  </div>

  <div class="tlir text-left-image-right">
    <div class="tl text-left">
      <h2 class="text-left-image-right_h2">[Text Left TITLE]</h2>
      <p class="text-left-image-right_p">[Text Left PARAGRAPH]</p>
    </div>
    <div class="ir image-right">
      <img class="text-left-image-right_image" src="#" alt="[title]">
    </div>
  </div>

</div>
```

The classes mentioned above are:
* full-image
* full-image_image
* full-text
* full-text_h2
* full-text_p
* image-left-text-right
* image-left
* image-left-text-right_image
* text-right
* image-left-text-right_h2
* image-left-text-right_p
* text-left-image-right
* text-left
* text-left-image-right_h2
* text-left-image-right_p
* image-right
* text-left-image-right_image

### The project is also online at [netlify](https://content-creator.netlify.app/)
Here, I only share the code and my approach
