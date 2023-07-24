# Move Rotate Resize Handler JavaScript
## resizer.js and resizer.css 
### A simple javascript object that provide easy way to make any dom element resizable. It provide handles to move, resize and rotate target element.


## How to install
    npm install move-rotate-resizer

## [download from gitHub](https://github.com/developergovindgupta/move-rotate-resizer)
### [resizer.js](https://raw.githubusercontent.com/developergovindgupta/move-rotate-resizer/master/resizer.js)
### [resizer.min.js](https://raw.githubusercontent.com/developergovindgupta/move-rotate-resizer/master/resizer.min.js)
### [resizer.css](https://raw.githubusercontent.com/developergovindgupta/move-rotate-resizer/master/resizer.css)

[<img src="./resizer.png">](https://developergovindgupta.github.io/move-rotate-resizer)
## [DEMO-GH-Pages](https://developergovindgupta.github.io/move-rotate-resizer) 
## [DEMO-CodeSandBox](https://codesandbox.io/s/move-rotate-resizer-demo-bh8q3) 
## [DEMO-CodeSandBox](https://codesandbox.io/s/move-rotate-resizer-demo-2-3x33ys) 

## How to use
    import resizer from 'move-rotate-resizer';
    or
    import resizer from './js/resizer.min.js';
    or
    <link rel="stylesheet" href="resizer.css" />
    <script type="text/javascript" src="resizer.js"></script>




## Usase Example-1

    resizer.add(document.getElementById('div1'));

## Methods and Descriptions
|Method|Description|
|-|-|
|add(target [,options])|add target dom element to resizer. it register event listener.|
|remove(target)|remove target dom element from resizer. it remove all event listener.|
|show(target)|show resizer handler on target dom element by javascript code.|
|hide()|hide resizer handler by javascript code.|

## Properties and Descriptions
|Propery|Description|
|-|-|
|target|return current selected target dom element|
|resizer|return resizer handlers dom element|
|hoverLine|return resizer hoverLine dom element|

## Dom Element Attribute
|Attribute|Description|
|-|-|
|isLocked|"true" then resize handler can not change the target position or size|
|isDisabled|"true" then resize handler not visible|

## Options passed with add method
    let options = {
        minWidth: 30,               // minimum width in px
        minHeight: 30,              // minimum height in px
        aspectRatio: true,          // if true width height ratio will maintain
        resizeFromCenter: false,    // if true then resize both side from center
        onDragStart: null,          // call-back function that called when dragging start
        onDragging: null,           // call-back function that called every mouse movement till mousedown
        onDragEnd: null,            // call-back function that called when mouse button is released after move
        onResizeStart: null,        // call-back function that called when any resize handler is start dragging
        onResizing: null,           // call-back function that called every mouse movement till musedown
        onResizeEnd: null,          // call-back function that called when release resize handler
        onRotateStart: null,        // call-back function that called when rotate handler is started dragging
        onRotating: null,           // call-back function that called every movement of rotate handler
        onRotateEnd: null,          // call-back function that called when release rotate handler
        onResizerShown: null,       // call-back function that called when resizer is first time shown on target
        onResizerHide: null,        // call-back function that called when resizer is hide on target
        isHideOnResize: true,       // if true then resizer will not visible at the time of dragging so that target visible clearly
        isHoverLine: true,          // if true then target element on mouse hover hoverLine visible for highlight target element
        boundWithContainer:false,   // if true/HTMLDivElement then target element can not move outside the container element.
        resizers: {
            n: true,                // top middle resize handler            true:visible|false:hidden
            s: true,                // bottom middle resize handler
            e: true,                // right middle resize handler
            w: true,                // left middle resize handler
            ne: true,               // top-right resize handler
            nw: true,               // top-left resize handler
            se: true,               // bottom-right resize handler
            sw: true,               // bottom-left resize handler
            r: true,                // rotate handler
        },
    };

### Note callBack function receive an props having properties
|props-property|description|
|-|-|
|size|{left,top,width,height}|
|angle|target element rotate angle|
|evtTarget|resizer target element that call the callback function|
|handler|current resize handler that is draging|


## Example Code
### HTML
    <!DOCTYPE html>
    <html>
    <head>
        <title>move-rotate-resize:demo</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="src/styles.css" />
        <link rel="stylesheet" href="/node_modules/move-rotate-resizer/resizer.css" />
    </head>
    <body>
        <h1>DEMO : move-rotate-resizer</h1>
        <h2>resizer.js and resizer.css</h2>
        <hr />
        <div class="container">
            <div id="div1" class="target">div1</div>
            <div id="div2" class="target">div2</div>
        </div>
    </body>
    </html>
    <script src="src/index.js"></script>

### Script [index.js]
    import resizer from 'move-rotate-resizer';

    document.querySelectorAll('.target').forEach((target) => {
        resizer.add(target);
    });

## [DEMO](https://codesandbox.io/s/move-rotate-resizer-demo-bh8q3) 

## Example Code 2

### HTML
    <!DOCTYPE html>
    <html>
    <head>
        <title>Parcel Sandbox</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="./src/styles.css" />
    </head>

    <body>
        <div class="container">
            <div class="content">
                <div class="print-area">
                    <div id="center-resize" class="target" style="left: 400px; top: 200px;" isLocked="false" isDisabled="false"> 
                        Center Resize  
                    </div>
                    <div id="corner-resize" class="target" style="left: 800px; top: 200px;">   
                        Corner Resize 
                    </div>
                    <div id="free-resize" class="target" style="left: 400px; top: 600px;">
                        Free Resize
                    </div>
                    <div id="bound-resize" class="target" style="left: 800px; top: 600px;">
                        Can't Move Outside
                    </div>
                </div>
            </div>
        </div>

        <script src="src/index.js"></script>
    </body>
    </html>

### Script [index.js] 
    import resizer from "move-rotate-resizer";

    let options = {
    onDragStart: function (e) {
        e.target.style.opacity = "0.8";
        e.target.style.zIndex = "999";
    },
    onDragging: function (e) { },
    onDragEnd: function (e) {
        e.target.style.opacity = "";
        e.target.style.zIndex = "";
    },
    onRotateStart: function (e) {
        e.target.style.opacity = "0.8";
        e.target.style.zIndex = "999";
    },
    onRotating: function (e) { },
    onRotateEnd: function (e) {
        e.target.style.opacity = "";
        e.target.style.zIndex = "";
    },
    onResizeStart: function (e) {
        e.target.style.opacity = "0.8";
        e.target.style.zIndex = "999";
    },
    onResizing: function (e) { },
    onResizeEnd: function (e) {
        e.target.style.opacity = "";
        e.target.style.zIndex = "";
    },
    resizers: {
        n: true,
        s: true,
        e: true,
        w: true,
        ne: true,
        nw: true,
        se: true,
        sw: true,
        r: true
    }
    };
    let div1 = document.querySelector("#center-resize");
    resizer.add(div1, { ...options, ...{ resizeFromCenter: true } });
    let div2 = document.querySelector("#corner-resize");
    resizer.add(div2, { ...options, ...{} });
    let div3 = document.querySelector("#free-resize");
    resizer.add(div3, { ...options, ...{ aspectRatio: false } });
    let div4 = document.querySelector("#bound-resize");
    resizer.add(div4, { ...options, ...{ boundWithContainer: true } });

    document.body.addEventListener("click", function (e) {
        resizer.hide();
    });



## [DEMO](https://codesandbox.io/s/move-rotate-resizer-demo-2-3x33ys) 


### download css file and include in your html file.
### [resizer.css](https://raw.githubusercontent.com/developergovindgupta/move-rotate-resizer/master/resizer.css)

## Developed by Govind Gupta
