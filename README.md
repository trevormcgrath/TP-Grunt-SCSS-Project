# Learning How To Use SASS/SCSS With Grunt
This is a guide on how to get started learning to write your styles in .scss form instead of .css form. Also, I assume that you use a Mac. (Sorry Windows users)

###First off, why use a CSS Preprocessor, and why use SASS/SCSS?###
In case you haven't noticed, writing CSS can become pretty repetitive. From having to look up hex values for colors, targeting the right elements of your HTML markup, making sure things are responsive... and oh wait what is that? the client decided on a different design comp, and you need to find NEW hex color codes, new fonts, etc. This becomes pretty time consuming.

This is where the CSS Preprocessor comes in. The CSS Preprosessor is a language extention of CSS that compiles into regular, web friendly CSS that browsers can understand.

* Essentially, CSS Preprocessors:
  * Saves you time
  * Write neater code that has reusable pieces and variables
  * Calculations and logic within your code
  * More organized and easy for others to step into your project

###Ok I'm onboard for the CSS Preprocessor game, but why SCSS?###

Well, I simply went with what's popular. Look at it by the numbers.
In a poll of ~1000 developers reading a design blog, the results came in as follows:

![picture alt](https://blog.keycdn.com/blog/wp-content/uploads/2015/09/sass-vs-less-poll.webp)

Image and resources used above courtesy of [this keycdn](https://www.keycdn.com/blog/sass-vs-less/) article.

SASS is just simply more popular. While I'm sure LESS is great, I think we should go with SASS since it is quickly becoming the 'industry standard'.

###Ok, Enough Chit Chat, How Do I Get This Working On My Machine?###
So for the purposes of this tutorial, I'll be teaching how to compile your SASS/SCSS using Grunt. There are a ton of different ways to do it, so if you don't like my Gruntfile setup, you'll have to learn your method elsewhere.

* Below, we're going to go through how to install:
  * NodeJS
  * GruntJS
  * SASS

__Before installing any of these, go ahead and check to see if you have these installed already by typing the following into your command line, if it returns a version number, you already have that installed!__

`node -v`

`grunt --version`

`sass -v`

####Downloading NodeJS####
To download the most current version of NodeJS, [click here](https://nodejs.org/en/) and follow their instructions.
Downloading NodeJs will install something called Node Package Manager, or "npm" for short. This package manager allows us to install plugins and other cool things in the same way Sublime Text's package manager does. Node package manager is updated a lot more frequently than Node is, so to make sure you have the latest version installed, open up your Terminal and enter this into the command line:

`sudo npm install npm -g`

Now that you have Node and Node Package Manager installed, let's install Grunt.

####Downloading GruntJS####
Grunt has great documentation on how to get started installing everything [here](http://gruntjs.com/getting-started), however if you want the "Don't Care, Too Long Didn't Read Version", enter the below code into your command line to install Grunt:

`sudo npm install -g grunt-cli`

The way that Grunt works, now that it is installed, is that when used in the command line (For example, while in Terminal, you type 'grunt'), it checks your __current directory__ for a gruntfile, and then runs the tasks or commands that you have dictated in that file. I'll get into the gruntfile setup later, but first we need to finally install SASS.

####Downloading SASS####
To install SASS, you need to have Ruby installed on your machine. Congratulations, since you have a Mac, you have Ruby installed! So to install SASS it's as easy as typing the following into your command line:

`sudo gem install sass`

###You now have everything installed, now how to compile .scss files into .css files###

We're almost there! So take a deep breath, refocus, and bear with me. First, you need to create and figure 2 things: your package.json file, and your gruntfile.js file.

Your package.json file is meta-data about your project, like the name, version number, but more importantly, the plugins necessary to make your gruntfile.js work. There's a couple of different ways of creating and setting up your package.json file, but since we're lazy, just create a new file in your text editor, name it package.json, and [copy and paste the code from the package.json I made for this project](https://github.com/trevormcgrath/TP-Grunt-SCSS-Project/blob/master/package.json). I'll explain how to get those plugins I mentioned brought in later, first, let's get your gruntfile.js set up.

Your gruntfile.js is the real heavy lifter here. This is the file that will explicitly state what you want done. For example, compile your .scss files into .css files. In the same way you created a new file for your package.json, do the same but name your file gruntfile.js, and [my code can be found by clicking here](https://github.com/trevormcgrath/TP-Grunt-SCSS-Project/blob/master/gruntfile.js).

####Ok, I've got everything installed, I've got a Gruntfile and package.json... Now what?####
There are a lot of ways to set up your gruntfile and configure it, however for the purposes of this tutorial I won't be going into that.

Set up your file structure similiar to the one I have made for this project. 




