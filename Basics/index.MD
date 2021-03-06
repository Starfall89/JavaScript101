# Introduction

## What is JavaScript?

For backend development there is a variety of languages but JavaScript dominates the frontend because it is built into all modern web browsers. JavaScript is an OOP language but it is different from many other OOP languages. To draw an analogy, HTML is the skeleton, CSS is the skin and JavaScript is what provides the motive force. 

JavaScript was created to make webpages more dynamic and was originally called LiveScript. However, due to the popularity of Java, it was renamed to JavaScript. It is totally independent from Java and has nothing to do with Java however!

There is no alternative to JavScript in the browser!

## How does the browser understand JavaScript?

It has its own engine that executes code inside script tags. It is a dynamic, weakly typed language and intepreted (compiled on the fly) language. It is a "hosted" language that runs on different environments. 

Dynamic: It is not pre-compiled and instead parsed and compiled on the fly. The code is evaluated and executed at runtime. Code can change at runtime! i.e: The type of a variable can change at runtime. 

Weakly Typed: Data types are assigned to variables automatically. This is in contrast to strongly typed languages such as Java. 

Host Environment: Javascript was invented to create more dynamic websites, manipulate HTML, send HTTP requests and more. It CANNOT access the local filesystem, interact with the operating system etc. 

# Server Side JS

NodeJS is simply Google's V8 engine that was extracted so that JS could be run anywhere not just the browser! Web backends can be built using JS as well. 

# The JavaScript Engine

This is built into the browser and is different for each type of one: V8 for chrome and SpiderMonkey for FireFox. The code is parsed, compiled and executed. All of this happens in a single thread! This has several implications for the execution itself.

# JavaScript vs Java

These are totally independent of each other. Java is Object-oriented and strongly typed whereas JavasScript is flexible and weakly typed. 

# index

Note that the index file will be executed by default if you try to execute a folder containing JS files. 

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