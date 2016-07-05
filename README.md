# Tweenmax Training
Sublime Skinz tweenmax course

## Beginning with it

Clone the repo

Install gulp as global

```sh
npm install -g gulp
```

Install all the dependencies

```sh
npm i
```

## Understanding Tweenmax

Tweenmax allows to create easy animations and timelines. In this course, we will use a lot of timeline because they're easily modified.

### Create a timeline :

```javascript
var tween = new TimelineMax()
```

Using a TimelineMax instance, we can access to all functionnalities and all easing functions. You can use TimelineLite if you want it to be lighter.

### Timeline possibilities

You can use `from`, `to` or `fromTo` to define whether you want to change the beginning state of the animated element, the end one or both.

## MagicScroll

We can easily use MagicScroll and Tweenmax together. We just need to add the plugin gsap.animation.

### Controller

MagicScroll needs a Controller, it will contain every scene of ou scroll.

You can create it using :

```javascript
var controller = new ScrollMagic.Controller()
```

### Scene

A Scene is the screen part that needs to be visible for the rest of our script to be launched. It is defined with a `triggerElement`

You can create it using :

```javascript
var scene = new ScrollMagic.Scene({triggerElement: '.mySelector'})
```


## MagicScroll and Tweenmax

Just create your Tweenmax animation and send it to the scene using
```javascript
myScene.setTween(myTween)
```
