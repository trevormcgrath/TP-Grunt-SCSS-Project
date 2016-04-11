# Learning How To Use SASS/SCSS With Grunt
This is a guide on how to get started learning to write your styles in .scss form instead of .css form.

###First off, why use a CSS Preprocessor, and why use SASS/SCSS?###
In case you haven't noticed, writing CSS can become pretty repetitive. From having to look up hex values for colors, targeting the right elements of your HTML markup, making sure things are responsive... and oh wait what is that? the client decided on a different design comp, and you need to find NEW hex color codes, new fonts, etc. This becomes pretty time consuming.

This is where the CSS Preprocessor comes in. The CSS Preprosessor is a language extention of CSS that compiles into regular, web friendly CSS that browsers can understand.

* Essentially, CSS Preprocessors:
  * Saves you time
  * Write neater code that has reusable pieces and variables
  * Calculations and logic within your code
  * More organized and easy for others to step into your project

__Ok I'm onboard for the CSS Preprocessor game, but why SCSS?__

Well, I simply went with what's popular. Look at it by the numbers.
In a poll of ~1000 developers reading a design blog, the results came in as follows:

![picture alt](https://blog.keycdn.com/blog/wp-content/uploads/2015/09/sass-vs-less-poll.webp)

Image courtesy of [this keycdn](https://www.keycdn.com/blog/sass-vs-less/) article.

SASS is just simply more popular. While I'm sure LESS is great, I think we should go with SASS since it is quickly becoming the industry standard.

###Ok, Enough Chit Chat, How Do I Get This Working On My Machine?###
So for the purposes of this tutorial, I'll be teaching how to compile your SASS/SCSS using Grunt. There are a ton of different ways to do it, so if you don't like my Gruntfile setup, you'll have to learn your method elsewhere.

Also, I assume that you use a Mac. (Sorry Windows users)

* Below, we're going to go through how to install:
  * NodeJS
  * GruntJS
  * SASS

To download the most current version of NodeJS, [click here](https://nodejs.org/en/) and follow their instructions.
Downloading NodeJs will install something called Node Package Manager, or "npm" for short. This package manager allows us to install plugins and other cool things in the same way Sublime Text's package manager does. Node package manager is updated a lot more frequently than Node is, so to make sure you have the latest version installed, open up your Terminal and enter this into the command line:

`sudo npm install npm -g`

Now that you have Node and Node Package Manager installed, let's install Grunt.

Grunt has great documentation on how to get started installing everything [here](http://gruntjs.com/getting-started), however if you want the "Don't Care, Too Long Didn't Read Version", enter the below code into your command line to install Grunt:

`npm install -g grunt-cli`




