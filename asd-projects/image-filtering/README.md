# Image Filtering
Use higher order functions to apply filters to images.

**Table of Contents**
- [Overview](#Overview)
  - [Learning Objectives](#learning-objectives)
  - [Project Grading](#project-grading)
- [TODOs](#todos)
  - [TODO 0: Study Existing Code (no coding)](#todo-0-study-existing-code-no-coding)
  - [TODO 1: Create the `applyFilter` Function Part 1](#todo-1-create-the-applyfilter-function-part-1)
  - [TODO 2: Create the `applyFilter` Function Part 2](#todo-2-create-the-applyfilter-function-part-2)
  - [TODO 3: Create a Filter Function](#todo-3-create-a-filter-function)
  - [TODO 4: Update `applyFilter`](#todo-4-update-applyfilter)
  - [TODO 5: Create More Filter Functions](#todo-5-create-more-filter-functions)
  - [TODO 6: Create the `applyFilterNoBackground` Function](#todo-6-create-the-applyfilternobackground-function)
  - [Challenge Task: Smudge](#challenge-task-smudge)
  - [Submit Your Work](#submit-your-work)

# Overview

<img src="img/before.png"> ==> <img src="img/after.png">

In this project you will be building a simple program that applies filters to images. You will also be creating multiple filters!

## Learning Objectives
- Practice working with multidimensional arrays
- Practice working with nested for loops
- Practice using higher order functions

## Project Grading

### Best Practices (15 points)

1. Use the built-in constants instead of magic numbers - 5 points
2. Use comments to describe your filters - 5 points
3. Use proper indentation - 5 points

### Program Progress (85 points)

* TODO 0 - 0 points, but important to go through anyway
* TODO 1 - 10 points
* TODO 2 - 10 points
* TODO 3 - 10 points 
* TODO 4 - 10 points 
* TODO 5 - 20 points 
* TODO 6 - 25 points 
* Challenge - 25 points (bonus)
**NOTE:** the bonus will not give you a score of over 100 should you earn that many points, but can be done as an alternative to the required TODOs.

# TODOs

## TODO 0: Study Existing Code (no coding)

Before you begin working, you should look at the `image.js` file to see what has already been provided for you. In that file, you will find the following:

* `SQUARE_SIZE` constant - change this if you want to change the size of the image. Note that you will also need to change the corresponding CSS for the `.square` class's `width` and `height` properties.
* `RED`, `GREEN`, and `BLUE` constants - use these for index values when you create your filters.
* `image` data - use this variable to refer to the array storing the image data. Note that it contains only "rgb strings".
* `render` function - you will not need to use this; your program already calls the function
* `rgbStringToArray` function - use this to convert the "rgb string" values into arrays of numbers that are easier to process.
* `rgbArrayToString` function - use this to convert a numerical array back into an "rgb string". You will need to convert your filtered data back into a string for it to apply.

Once you have looked over the above and are comfortable with it, move on to the rest of the project below.

## TODO 1: Create the `applyFilter` Function Part 1
This TODO and all future TODOs should be completed inside of the `index.js` file.

Your first task is to create an `applyFilter` function. This is a big one, so we'll break it down into steps.

### Step 1: Make and Call the Function
First thing's first: make the function. Give it the name `applyFilter`, and for now, don't give it any parameters. That will change later, but it is good enough for now.

Once you've done that, call the function up in the "document ready" section (this runs as soon as your web page has loaded -- you may have noticed this in other projects, as well).

### Step 2: Make the Loops
Next, make the nested loops to loop over your `image` data. Be careful not to mix up the counting variables of each loop. These nested loops should be placed inside of your `applyFilter` function.

## TODO 2: Create the `applyFilter` Function Part 2

Before moving on, go through TODO 0 if you haven't already to look at the code in `image.js`. The code in there can be used in your `index.js` file where you are currently working. This is important, because you will be using the `rgbStringToArray()` and `rgbArrayToString()` functions that were created in the `image.js` file.  

Now, for this step, you will need to alter your image. This should be done in the body of the inner loop, and is done in five steps (one line of code each, in order):

### Step 1

Pull out one of the string values from the `image` array. You will want to store this value in a variable (for example, you may want to call the variable `rgbString`).

### Step 2

Make a new `rgbNumbers` variable. Use `rgbStringToArray()` with `rgbString` as an argument to produce a new array. Store the array in the `rgbNumbers` variable (by assigning the result of `rgbStringToArray()` to the variable).

**NOTE:** The `rgbNumbers` array (and any other array produced by `rgbStringToArray` consists of three values. Use the indices of `RED`, `GREEN`, and `BLUE` to access those three values. Each of them corresponds to the amount of red, green, or blue in the pixel that the array was created from.

**Example:** `rgbNumbers[GREEN] = 0;` would set the "green" portion of the `rgbNumbers` array to `0` (thus removing all "green")

### Step 3

Alter the contents of the `rgbNumbers` array. For now, simply change the `RED` value to its maximum (`255`). Don't forget that you have the `RED`, `GREEN`, and `BLUE` constants to use as indices for your `rgbNumbers` array.

### Step 4

Use `rgbArrayToString()` to convert the `rgbNumbers` array back into a string. You can do so by passing `rgbNumbers` as an argument to the `rgbArrayToString` function. Feel free to overwrite the `rgbString` variable with the new value.

### Step 5

Store the new `rgbString` back in the `image` array (put it at the same index location that you first pulled the original `rgbString` out of).

Once this is done, check your preview to see if your image became much more yellow/orange/red. If so, then you are ready for the next step!

## TODO 3: Create a Filter Function

This step is simple. Create a new function called `reddify` that takes a single array as an argument. This function should change the `RED` index of the array to have a value of `255`. 

That's it! There is no return or output for this function.

## TODO 4: Update `applyFilter`

Now, you need to make your `applyFilter` be a higher order function that uses other functions to apply filters to the image. This can be done in three steps.

1. Give your `applyFilter` function a single parameter called `filterFunction`. This parameter is going to store the filter function.
2. Up where you call your `applyFilter` function, plug `reddify` in as an argument. Remember that you are *not* calling `reddify` here.
3. Find the line where `applyFilter` changes the `rgbNumbers` array. Replace that line with a call to `filterFunction` with `rgbNumbers` as the argument to `filterFunction`.

If it works, then your preview should show your image tinted red. If it doesn't, check the following for errors:

* make sure that you are not calling `reddify` when you pass it as an argument to `applyFilter`
* make sure that you are not calling `filterFunction` in the parameter list
* make sure that you ***are*** calling `filterFunction` with `rgbNumbers` as an argument on the correct line

## TODO 5: Create More Filter Functions

Now that `applyFilter` is a higher order function, you should make more filters to pass to `applyFilter`. You must make at minimum the two filters below, but you can make more if you want. Before you begin, however, you should also make a new function called `keepInBounds`

### `keepInBounds` Function
When changing a color value, you must make sure that you never go above `255` or below `0`. While your browser won't do anything weird if you do go past those bounds, you may have unexpected results when applying multiple filters in a row.

To avoid this, you must make a new function with the following description:
* **Name:** `keepInBounds`
* **Parameters:** 1 (name it whatever you want, but expect it to be a number)
* **Description:** This function should do the following:
    1. If the parameter has a value of less than `0`, return `0`.
    2. If the parameter has a value of greater than `255`, return `255`.
    3. If the parameter's value is between `0` and `255`, return the parameter's value.
    4. For full credit, you *MUST NOT* use `if` statements in the function. Use `Math.max()` and `Math.min()` to decide what value to return. (Alternatively, you can look up the "ternary operator" on Google and use that, but it is not required).

<details> <summary> CLICK FOR HINTS on using Math.max() and Math.min() </summary>

`Math.max()` returns the largest value passed to it. For instance, `Math.max(20, 100)` would return `100`. By itself, this isn't very useful, but what if you used variables (or parameters, hint-hint).

```js
// Example
var x = 50;
var y = 15;
var result1 = Math.max(x, 30);
var result2 = Math.max(y, 30);
```

In this case, `result1` would be `50` and `result2` would be `30`. 

Notice what this means. By hard-coding `30` here and using a variable, `Math.max()` enforces a *minimum* value. That is, you will never get a value of less than 30. **How can you use this to make sure that `keepInBounds` will never have a value of less than `0`?**

`Math.min()` works similarly, but in reverse.

```js
// Example
var x = 50;
var y = 15;
var result1 = Math.min(x, 30);
var result2 = Math.min(y, 30);
```

In this case, `result1` would be `30` and `result2` would be `15`. 

See how this is the opposite of `Math.max()`? By hard-coding `30` here and using a variable, `Math.min()` enforces a *maximum* value. That is, you will never get a value of *greater than* 30. **How can you use this to make sure that `keepInBounds` will never have a value of greater than `255`?**

**Final Hint:** You can pass the result of `Math.max()` as an argument to `Math.min()` if you wish. The reverse is also true. That would be the fastest way to write this code.

Alternatively, you can make a temporary variable to store the results of the `Math.min()` and `Math.max()` function calls, then `return` that once you are done.

</details>

<br>

Test your code by inserting the following lines into your program (you may delete them when the tests pass). Open up a preview of your work and check the console to see if `0`, `255`, and `127` are printing. If they are, then everything is good.

```js
console.log(keepInBounds(-30)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(127)); // should print 127
```

### Filter 1: `decreaseBlue`
This filter should subtract at least `50` from the `BLUE` value of a pixel. Be sure to use the `keepInBounds()` function to make certain the value doesn't go below `0`! 

Recall that all filter functions should have a single parameter (an array of numbers representing the rgb color values). Also recall that you don't need to return anything from the filter functions. As long as you update the array value, that is fine.

**Hint:** The code of your function should look like:

    <blue value> = keepInBounds(<blue value> - 50);

### Filter 2: `increaseGreenByBlue`
This filter should add the `BLUE` value to the `GREEN` value of a pixel. Be sure to use the `keepInBounds()` function to make certain that the value does not go over `255`!

### Apply the Filters
Once you have both filters created, apply all three of them by calling `applyFilter` 3 times, with each filter passed as arguments in turn. This should be done up at the top where you are already calling it with `reddify`.

## TODO 6: Create the `applyFilterNoBackground` Function

Now it's time to apply everything you've done all at once. 

Create a new function called `applyFilterNoBackground`. It should be identical to the `applyFilter` function except for one difference: it will not apply the filter to the background color!

It is up to you to figure out how to make this work, but here is one hint that you can use.

The background color can be gotten by looking at the top left pixel of your image (recall what the index numbers for the top left pixel are). Any other pixel with that color, you can assume is part of the background! It might help if you simply compare the string stored in the top left pixel with the other pixels when making your comparison. Whatever you do, **do not hard code the value**.

Once you've got this function working, replace **two** of your three `applyFilter` function calls with `applyFilterNoBackground`. Good luck!

## Challenge Task: Smudge

As a final challenge, you can try to apply a smudge to your image. A smudge is where you take colors from neighboring pixels and slide them over, making it look like you smudged the image with your finger. You can even customize the smudge with filters to affect how much color (and even which colors!) you smudge over.

If you want to give this challenge a try, here are some hints as to how to proceed:

1. The best way to perform a smudge is to look at a neighbor pixel and copy **some** of its color over to the current pixel being altered. **DON'T** alter both at the same time. How you want to the neighbor to affect the current pixel should be determined by a new filter function.
2. You will need a different H.O.F. than either `applyFilter` or `applyFilterNoBackground`. This is only because the filter functions for smudging will require multiple arguments. 
3. The way you iterate over your `image` array will determine which direction you can apply the smudge (e.g. left, right, up, down, or some combination thereof)
4. Your filter function will need to take in at least two arguments (one for the pixel being altered and one for the neighbor pixel getting smudged over). If you are going to do a diagonal smudge (not recommended), then you will need more than two arguments for all pixels involved in the smudge.

# Submit Your Work

Submit your work regularly. Because these files are already being tracked by your GitHub repo, you can skip the "git add" step. Instead, enter the following commands:

```bash
git commit -a -m "saving image filtering"
git push
```

Congratulations on using using higher order functions!
