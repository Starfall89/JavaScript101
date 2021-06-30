# Introduction

## What is JavaScript?

For backend development there is a variety of languages but JavaScript dominates the frontend because it is built into all modern web browsers. JavaScript is an OOP language but it is different from many other OOP languages. To draw an analogy, HTML is the skeleton, CSS is the skin and JavaScript is what provides the motive force. 

## How does the browser understand JavaScript?

It has its own engine that executes code inside script tags.

## Location of script tags

Script tags can really be placed in the body or the head section. 

However, this creates a problem. The browser will wait until all the scripts have been loaded until the next html is parsed. 

In the past this was solved by putting the script tags at the bottom of the body. However, the problem with this is that a lot of modern sites require dynamic functionality and simply cannot wait until everything is rendered to start loading script. 

As such the modern approach is to use async or defer attributes on scripts placed in the head. This tells the browser to continue parsing WHILE the scripts are being downloaded. 

The general rule of when to use the two:

 - If the script is modular and does not rely on any scripts then use async.
 - If the script relies upon or is relied upon by another script then use defer.

# Nodemon

Nodemon is an extremely helpful tool that helps to test standalone Javascript files. 

Simply do 

nodemon [file.js]

And now nodemon will automatically run this file whenever alterations to it are made. Be sure to (npm install -g nodemon) to ensure that you can use nodemon globally.