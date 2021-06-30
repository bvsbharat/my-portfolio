---
title: Helping Browsers Optimize With The CSS Contain Property
date: 2021/4/22
description: There is a growing number of things that we have to do to help the browser achieve for peak performance.
tag: Web performance
author: You
---

# Helping Browsers Optimize With The CSS Contain Property

There is a growing number of things that we have to do to help the browser achieve for peak performance.

- Responsive image syntax has several. For example, needing to tell the browser how large the image will be in our layout with the `sizes` attribute and how big the images are `with` w descriptors.
- Regular images have always had `width` and `height` presentational attributes, which have always been somewhat useful and are now really useful.
- The will-change property in CSS is sometimes needed for more performant animation.
- If you want any offline capability at all, or exotic performance improvements, you have to write custom service workers code.

Now we have `CSS contain` , the point of which is to tell the browser about your layout so it can do things faster. You don’t need to use it, but it’s a nice enhancement for optimization.

```
.item {
contain: layout;
contain: paint;
contain: size;

contain: content; /_ same as `layout paint` _/
contain: strict; /_ same as `layout paint size` _/
}

```

Here’s Rachel specifically about layout:

> With layout containment enabled, the browser knows that nothing outside the element can affect the internal layout, and nothing from inside the element can change anything about the layout of things outside it. This means that it can make any possible optimizations for this scenario.

These things have real implications, like kicking off z-index contexts, clearing floats, and hiding overflow, so they definitely fall into the “know what you are doing” territory. Rachel is right though about design systems:

> I would suggest that this is a great thing to add to any components you create in a component or pattern library, if you are working in this way it is likely each component is designed to be an independent thing that does not affect other elements on the page, making contain: content a useful addition.
