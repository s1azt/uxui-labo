import{_ as i}from"./iframe-Cg2ATuqu.js";import"./addCollection-Coy8QxYf.js";import{i as x,s as m}from"./lit-element-C4bBeaiV.js";import{e as v,a as k,b as f,d as z,c as F,t as _}from"./theme-orange-f2H5lz6O.js";import{t as c,a as E}from"./theme-blue-DE0pcxX7.js";import{i as C}from"./font-family-loader-B6C8t9Oq.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=o=>(r,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,r)}):customElements.define(o,r)},S=(o,r,t)=>{const e=o[r];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((a,b)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(b.bind(null,new Error("Unknown variable dynamic import: "+r+(r.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},p="yg-theme",T=o=>{localStorage.setItem(p,o);const r=new CustomEvent("theme-change",{detail:{theme:o}});window.dispatchEvent(r)};window.yg=window.yg||{};window.yg.setTheme=T;const A={...c,colors:{...c.colors,primary:"#2B4366","text-primary":"#2B4366","back-ground-primary":"#2B4366","others-primary-push":"#1E2F4A","back-ground-primary-light":"#E8ECF0","border-primary":"#2B4366","others-sidebar-top":"#2B4366","others-sidebar-bottom":"#E8ECF0","others-primary-hover":"#E8ECF0","primary-thin":"#E8ECF0","back-ground-screen-base":"#FCFBFA"},boxShadow:{...c.boxShadow,"input-focus":"0px 0px 6px 0px #2B4366"}},D={...c,colors:{...E.colors,...c.colors,"back-ground-primary":"#1F1F1F","back-ground-yellow":"#ED8F0D","back-ground-base":"#EDEDED","back-ground-sidebar-back":"#242523","back-ground-status-darkblue":"#1F60A2","back-ground-status-modified":"#FFF8E6","label-modified":"#F49507","text-primary":"#1F1F1F","text-yellow":"#ED8F0D","border-primary":"#1F1F1F","border-yellow":"#ED8F0D","others-placeholder":"#9C9FA4","hover-primary":"#101010","hover-error":"#950000","hover-primary-thin":"#F9F9F9","disable-error":"#F9E1DD","disabled-bg":"#F2F2F2","others-sidebar-top":"#1F1F1F","others-sidebar-bottom":"#808080",primary:"#1F1F1F"},boxShadow:{...c.boxShadow,1:"0px 4px 15px 0px rgba(164,164,164,0.8)",2:"0px 4px 30px 0px rgba(155,155,155,0.8)",3:"0px 4px 15px 0px rgba(72,72,72,0.8)"}},R=(o,r)=>(()=>{switch(o){case"red":return _;case"blue":return c;case"darkCyan":return F;case"darkBlue":return z;case"purple":return f;case"green":return k;case"orange":return v;case"networkLine":return D;case"monitoring":return A}})();function h(o,r=""){const t={};for(const[e,a]of Object.entries(o)){const b=e==="DEFAULT"?r:r?`${r}-${e}`:e;typeof a=="object"&&a!==null?Object.assign(t,h(a,b)):t[b]=a}return t}const y=o=>{const r=R(o);if(o){let e=r.colors;try{e=h(r.colors)}catch(a){console.error(a)}return{colors:e}}const t=localStorage.getItem(p);return y(t||"blue")};window.yg=window.yg||{};window.yg.getTheme=y;window.addEventListener("DOMContentLoaded",function(){console.log("Coknock Version:","2.5.3")});C();const j=x`/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: Noto Sans JP; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
} .container {
  width: 100%;
} @media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
} @media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
} @media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
} @media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
} @media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
} .pointer-events-none {
  pointer-events: none;
} .pointer-events-auto {
  pointer-events: auto;
} .visible {
  visibility: visible;
} .invisible {
  visibility: hidden;
} .static {
  position: static;
} .fixed {
  position: fixed;
} .absolute {
  position: absolute;
} .relative {
  position: relative;
} .inset-0 {
  inset: 0px;
} .bottom-1\\/2 {
  bottom: 50%;
} .bottom-\\[calc\\(100\\%-1px\\)\\] {
  bottom: calc(100% - 1px);
} .bottom-full {
  bottom: 100%;
} .left-0 {
  left: 0px;
} .left-1\\/2 {
  left: 50%;
} .left-2 {
  left: 0.5rem;
} .left-\\[2\\.6px\\] {
  left: 2.6px;
} .left-\\[calc\\(100\\%-1px\\)\\] {
  left: calc(100% - 1px);
} .left-full {
  left: 100%;
} .left-px {
  left: 1px;
} .right-0 {
  right: 0px;
} .right-1 {
  right: 0.25rem;
} .right-1\\/2 {
  right: 50%;
} .right-2 {
  right: 0.5rem;
} .right-\\[38px\\] {
  right: 38px;
} .right-\\[4px\\] {
  right: 4px;
} .right-\\[calc\\(100\\%-1px\\)\\] {
  right: calc(100% - 1px);
} .right-full {
  right: 100%;
} .top-0 {
  top: 0px;
} .top-1 {
  top: 0.25rem;
} .top-1\\/2 {
  top: 50%;
} .top-\\[1px\\] {
  top: 1px;
} .top-\\[2px\\] {
  top: 2px;
} .top-\\[3px\\] {
  top: 3px;
} .top-\\[72px\\] {
  top: 72px;
} .top-\\[calc\\(100\\%-1px\\)\\] {
  top: calc(100% - 1px);
} .top-full {
  top: 100%;
} .z-10 {
  z-index: 10;
} .z-20 {
  z-index: 20;
} .z-50 {
  z-index: 50;
} .col-span-1 {
  grid-column: span 1 / span 1;
} .col-span-12 {
  grid-column: span 12 / span 12;
} .col-span-2 {
  grid-column: span 2 / span 2;
} .col-span-4 {
  grid-column: span 4 / span 4;
} .-m-1 {
  margin: -0.25rem;
} .mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
} .mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
} .mx-auto {
  margin-left: auto;
  margin-right: auto;
} .my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
} .my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
} .mb-0 {
  margin-bottom: 0px;
} .mb-1 {
  margin-bottom: 0.25rem;
} .mb-2 {
  margin-bottom: 0.5rem;
} .mb-3 {
  margin-bottom: 0.75rem;
} .mb-4 {
  margin-bottom: 1rem;
} .mb-5 {
  margin-bottom: 1.25rem;
} .ml-2 {
  margin-left: 0.5rem;
} .ml-4 {
  margin-left: 1rem;
} .ml-5 {
  margin-left: 1.25rem;
} .ml-auto {
  margin-left: auto;
} .mr-2 {
  margin-right: 0.5rem;
} .mr-4 {
  margin-right: 1rem;
} .mr-5 {
  margin-right: 1.25rem;
} .mt-1 {
  margin-top: 0.25rem;
} .mt-2 {
  margin-top: 0.5rem;
} .mt-3 {
  margin-top: 0.75rem;
} .mt-4 {
  margin-top: 1rem;
} .mt-5 {
  margin-top: 1.25rem;
} .box-border {
  box-sizing: border-box;
} .line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
} .block {
  display: block;
} .inline-block {
  display: inline-block;
} .inline {
  display: inline;
} .flex {
  display: flex;
} .inline-flex {
  display: inline-flex;
} .table {
  display: table;
} .grid {
  display: grid;
} .hidden {
  display: none;
} .size-10 {
  width: 2.5rem;
  height: 2.5rem;
} .size-16 {
  width: 4rem;
  height: 4rem;
} .size-4 {
  width: 1rem;
  height: 1rem;
} .size-5 {
  width: 1.25rem;
  height: 1.25rem;
} .size-6 {
  width: 1.5rem;
  height: 1.5rem;
} .size-7 {
  width: 1.75rem;
  height: 1.75rem;
} .size-8 {
  width: 2rem;
  height: 2rem;
} .size-\\[10px\\] {
  width: 10px;
  height: 10px;
} .size-\\[14px\\] {
  width: 14px;
  height: 14px;
} .size-\\[18px\\] {
  width: 18px;
  height: 18px;
} .size-full {
  width: 100%;
  height: 100%;
} .h-0 {
  height: 0px;
} .h-1 {
  height: 0.25rem;
} .h-10 {
  height: 2.5rem;
} .h-11 {
  height: 2.75rem;
} .h-12 {
  height: 3rem;
} .h-14 {
  height: 3.5rem;
} .h-2 {
  height: 0.5rem;
} .h-20 {
  height: 5rem;
} .h-24 {
  height: 6rem;
} .h-32 {
  height: 8rem;
} .h-48 {
  height: 12rem;
} .h-5 {
  height: 1.25rem;
} .h-56 {
  height: 14rem;
} .h-6 {
  height: 1.5rem;
} .h-64 {
  height: 16rem;
} .h-7 {
  height: 1.75rem;
} .h-8 {
  height: 2rem;
} .h-9 {
  height: 2.25rem;
} .h-\\[100px\\] {
  height: 100px;
} .h-\\[10px\\] {
  height: 10px;
} .h-\\[112px\\] {
  height: 112px;
} .h-\\[164px\\] {
  height: 164px;
} .h-\\[190px\\] {
  height: 190px;
} .h-\\[22px\\] {
  height: 22px;
} .h-\\[260px\\] {
  height: 260px;
} .h-\\[26px\\] {
  height: 26px;
} .h-\\[30px\\] {
  height: 30px;
} .h-\\[35px\\] {
  height: 35px;
} .h-\\[38px\\] {
  height: 38px;
} .h-\\[40px\\] {
  height: 40px;
} .h-\\[42px\\] {
  height: 42px;
} .h-\\[44px\\] {
  height: 44px;
} .h-\\[46px\\] {
  height: 46px;
} .h-\\[47px\\] {
  height: 47px;
} .h-\\[50px\\] {
  height: 50px;
} .h-\\[52px\\] {
  height: 52px;
} .h-\\[54px\\] {
  height: 54px;
} .h-\\[63px\\] {
  height: 63px;
} .h-\\[7px\\] {
  height: 7px;
} .h-\\[80px\\] {
  height: 80px;
} .h-\\[93px\\] {
  height: 93px;
} .h-full {
  height: 100%;
} .h-px {
  height: 1px;
} .max-h-0 {
  max-height: 0px;
} .max-h-32 {
  max-height: 8rem;
} .max-h-48 {
  max-height: 12rem;
} .max-h-\\[1000px\\] {
  max-height: 1000px;
} .max-h-full {
  max-height: 100%;
} .min-h-0 {
  min-height: 0px;
} .min-h-7 {
  min-height: 1.75rem;
} .min-h-8 {
  min-height: 2rem;
} .min-h-\\[37px\\] {
  min-height: 37px;
} .min-h-\\[54px\\] {
  min-height: 54px;
} .min-h-\\[56px\\] {
  min-height: 56px;
} .min-h-\\[84px\\] {
  min-height: 84px;
} .min-h-full {
  min-height: 100%;
} .w-0 {
  width: 0px;
} .w-1 {
  width: 0.25rem;
} .w-10 {
  width: 2.5rem;
} .w-48 {
  width: 12rem;
} .w-64 {
  width: 16rem;
} .w-7 {
  width: 1.75rem;
} .w-8 {
  width: 2rem;
} .w-9 {
  width: 2.25rem;
} .w-\\[12px\\] {
  width: 12px;
} .w-\\[131px\\] {
  width: 131px;
} .w-\\[145px\\] {
  width: 145px;
} .w-\\[179px\\] {
  width: 179px;
} .w-\\[209px\\] {
  width: 209px;
} .w-\\[260px\\] {
  width: 260px;
} .w-\\[2px\\] {
  width: 2px;
} .w-\\[300px\\] {
  width: 300px;
} .w-\\[60px\\] {
  width: 60px;
} .w-\\[68px\\] {
  width: 68px;
} .w-\\[7px\\] {
  width: 7px;
} .w-\\[95px\\] {
  width: 95px;
} .w-auto {
  width: auto;
} .w-fit {
  width: -moz-fit-content;
  width: fit-content;
} .w-full {
  width: 100%;
} .w-px {
  width: 1px;
} .min-w-0 {
  min-width: 0px;
} .min-w-7 {
  min-width: 1.75rem;
} .min-w-8 {
  min-width: 2rem;
} .min-w-\\[100px\\] {
  min-width: 100px;
} .min-w-\\[128px\\] {
  min-width: 128px;
} .min-w-\\[200px\\] {
  min-width: 200px;
} .min-w-\\[220px\\] {
  min-width: 220px;
} .min-w-\\[400px\\] {
  min-width: 400px;
} .min-w-\\[70px\\] {
  min-width: 70px;
} .min-w-\\[96px\\] {
  min-width: 96px;
} .min-w-full {
  min-width: 100%;
} .max-w-2xl {
  max-width: 42rem;
} .max-w-32 {
  max-width: 8rem;
} .max-w-\\[1160px\\] {
  max-width: 1160px;
} .max-w-full {
  max-width: 100%;
} .flex-1 {
  flex: 1 1 0%;
} .flex-shrink {
  flex-shrink: 1;
} .flex-shrink-0 {
  flex-shrink: 0;
} .shrink {
  flex-shrink: 1;
} .shrink-0 {
  flex-shrink: 0;
} .flex-grow {
  flex-grow: 1;
} .grow {
  flex-grow: 1;
} .grow-0 {
  flex-grow: 0;
} .grow-\\[2\\] {
  flex-grow: 2;
} .grow-\\[4\\] {
  flex-grow: 4;
} .basis-0 {
  flex-basis: 0px;
} .border-collapse {
  border-collapse: collapse;
} .-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} .-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} .translate-x-1\\/2 {
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} .translate-y-1\\/2 {
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} .-rotate-45 {
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} .rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} .rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} .rotate-\\[270deg\\] {
  --tw-rotate: 270deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} .transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} @keyframes pulse {

  50% {
    opacity: .5;
  }
} .animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
} .\\!cursor-not-allowed {
  cursor: not-allowed !important;
} .cursor-default {
  cursor: default;
} .cursor-none {
  cursor: none;
} .cursor-not-allowed {
  cursor: not-allowed;
} .cursor-pointer {
  cursor: pointer;
} .cursor-text {
  cursor: text;
} .select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
} .resize-none {
  resize: none;
} .list-disc {
  list-style-type: disc;
} .appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
} .grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
} .grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
} .grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
} .grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
} .grid-rows-\\[0fr\\] {
  grid-template-rows: 0fr;
} .grid-rows-\\[1fr\\] {
  grid-template-rows: 1fr;
} .flex-row {
  flex-direction: row;
} .flex-col {
  flex-direction: column;
} .flex-wrap {
  flex-wrap: wrap;
} .flex-nowrap {
  flex-wrap: nowrap;
} .content-center {
  align-content: center;
} .items-start {
  align-items: flex-start;
} .items-end {
  align-items: flex-end;
} .items-center {
  align-items: center;
} .justify-start {
  justify-content: flex-start;
} .justify-end {
  justify-content: flex-end;
} .justify-center {
  justify-content: center;
} .justify-between {
  justify-content: space-between;
} .gap-1 {
  gap: 0.25rem;
} .gap-12 {
  gap: 3rem;
} .gap-2 {
  gap: 0.5rem;
} .gap-3 {
  gap: 0.75rem;
} .gap-4 {
  gap: 1rem;
} .gap-5 {
  gap: 1.25rem;
} .gap-6 {
  gap: 1.5rem;
} .gap-8 {
  gap: 2rem;
} .gap-\\[6px\\] {
  gap: 6px;
} .space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
} .space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
} .space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
} .space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
} .space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
} .self-stretch {
  align-self: stretch;
} .overflow-auto {
  overflow: auto;
} .overflow-hidden {
  overflow: hidden;
} .overflow-x-auto {
  overflow-x: auto;
} .overflow-y-auto {
  overflow-y: auto;
} .truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} .whitespace-nowrap {
  white-space: nowrap;
} .whitespace-pre-line {
  white-space: pre-line;
} .whitespace-pre-wrap {
  white-space: pre-wrap;
} .text-nowrap {
  text-wrap: nowrap;
} .break-words {
  overflow-wrap: break-word;
} .break-all {
  word-break: break-all;
} .rounded {
  border-radius: 0.25rem;
} .rounded-2xl {
  border-radius: 1rem;
} .rounded-\\[10px\\] {
  border-radius: 10px;
} .rounded-\\[16px\\] {
  border-radius: 16px;
} .rounded-\\[20px\\] {
  border-radius: 20px;
} .rounded-\\[6px\\] {
  border-radius: 6px;
} .rounded-full {
  border-radius: 9999px;
} .rounded-lg {
  border-radius: 0.5rem;
} .rounded-none {
  border-radius: 0px;
} .rounded-sm {
  border-radius: 0.125rem;
} .rounded-xl {
  border-radius: 0.75rem;
} .rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
} .rounded-b-\\[20px\\] {
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
} .rounded-b-md {
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
} .rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
} .rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
} .rounded-t-2xl {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
} .rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
} .rounded-tl-2xl {
  border-top-left-radius: 1rem;
} .rounded-tr-2xl {
  border-top-right-radius: 1rem;
} .border {
  border-width: 1px;
} .border-0 {
  border-width: 0px;
} .border-2 {
  border-width: 2px;
} .border-\\[0\\.5px\\] {
  border-width: 0.5px;
} .border-x {
  border-left-width: 1px;
  border-right-width: 1px;
} .border-x-0 {
  border-left-width: 0px;
  border-right-width: 0px;
} .border-b {
  border-bottom-width: 1px;
} .border-b-2 {
  border-bottom-width: 2px;
} .border-l {
  border-left-width: 1px;
} .border-l-2 {
  border-left-width: 2px;
} .border-r {
  border-right-width: 1px;
} .border-t {
  border-top-width: 1px;
} .border-solid {
  border-style: solid;
} .border-dashed {
  border-style: dashed;
} .\\!border-none {
  border-style: none !important;
} .border-\\[\\"\\#C3C6CF\\"\\] {
  border-color: "#C3C6CF";
} .border-\\[\\#a16207\\] {
  --tw-border-opacity: 1;
  border-color: rgb(161 98 7 / var(--tw-border-opacity));
} .border-alert-list-blue {
  --tw-border-opacity: 1;
  border-color: rgb(13 126 241 / var(--tw-border-opacity));
} .border-alert-list-light-blue {
  --tw-border-opacity: 1;
  border-color: rgb(163 201 255 / var(--tw-border-opacity));
} .border-back-ground-base {
  --tw-border-opacity: 1;
  border-color: rgb(230 230 230 / var(--tw-border-opacity));
} .border-back-ground-base-blur {
  border-color: #00000066;
} .border-back-ground-black {
  --tw-border-opacity: 1;
  border-color: rgb(58 60 64 / var(--tw-border-opacity));
} .border-back-ground-disabled {
  --tw-border-opacity: 1;
  border-color: rgb(242 242 242 / var(--tw-border-opacity));
} .border-back-ground-error {
  --tw-border-opacity: 1;
  border-color: rgb(186 26 26 / var(--tw-border-opacity));
} .border-back-ground-error-light {
  --tw-border-opacity: 1;
  border-color: rgb(255 218 214 / var(--tw-border-opacity));
} .border-back-ground-primary {
  --tw-border-opacity: 1;
  border-color: rgb(31 96 162 / var(--tw-border-opacity));
} .border-back-ground-primary-light {
  --tw-border-opacity: 1;
  border-color: rgb(235 241 255 / var(--tw-border-opacity));
} .border-back-ground-screen-base {
  --tw-border-opacity: 1;
  border-color: rgb(241 240 244 / var(--tw-border-opacity));
} .border-back-ground-table-header {
  --tw-border-opacity: 1;
  border-color: rgb(242 242 242 / var(--tw-border-opacity));
} .border-back-ground-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
} .border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
} .border-body {
  --tw-border-opacity: 1;
  border-color: rgb(26 28 30 / var(--tw-border-opacity));
} .border-border-base {
  --tw-border-opacity: 1;
  border-color: rgb(204 204 204 / var(--tw-border-opacity));
} .border-border-disabled {
  --tw-border-opacity: 1;
  border-color: rgb(242 242 242 / var(--tw-border-opacity));
} .border-border-divider {
  --tw-border-opacity: 1;
  border-color: rgb(224 226 235 / var(--tw-border-opacity));
} .border-border-error {
  --tw-border-opacity: 1;
  border-color: rgb(186 26 26 / var(--tw-border-opacity));
} .border-border-primary {
  --tw-border-opacity: 1;
  border-color: rgb(31 96 162 / var(--tw-border-opacity));
} .border-border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
} .border-calendar-day {
  --tw-border-opacity: 1;
  border-color: rgb(245 245 245 / var(--tw-border-opacity));
} .border-calendar-day-of-week {
  --tw-border-opacity: 1;
  border-color: rgb(168 171 180 / var(--tw-border-opacity));
} .border-disabled-base {
  --tw-border-opacity: 1;
  border-color: rgb(227 226 230 / var(--tw-border-opacity));
} .border-disabled-bg {
  --tw-border-opacity: 1;
  border-color: rgb(241 240 244 / var(--tw-border-opacity));
} .border-disabled-text {
  border-color: #00000059;
} .border-divider {
  --tw-border-opacity: 1;
  border-color: rgb(224 226 235 / var(--tw-border-opacity));
} .border-error-base {
  --tw-border-opacity: 1;
  border-color: rgb(186 26 26 / var(--tw-border-opacity));
} .border-error-bg {
  --tw-border-opacity: 1;
  border-color: rgb(255 218 214 / var(--tw-border-opacity));
} .border-error-border {
  --tw-border-opacity: 1;
  border-color: rgb(186 26 26 / var(--tw-border-opacity));
} .border-error-hover {
  --tw-border-opacity: 1;
  border-color: rgb(149 0 0 / var(--tw-border-opacity));
} .border-error-text {
  --tw-border-opacity: 1;
  border-color: rgb(186 26 26 / var(--tw-border-opacity));
} .border-error-thin {
  --tw-border-opacity: 1;
  border-color: rgb(255 218 214 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-1 {
  --tw-border-opacity: 1;
  border-color: rgb(51 161 223 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-10 {
  --tw-border-opacity: 1;
  border-color: rgb(139 234 217 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-11 {
  --tw-border-opacity: 1;
  border-color: rgb(174 239 227 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-12 {
  --tw-border-opacity: 1;
  border-color: rgb(206 249 241 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-2 {
  --tw-border-opacity: 1;
  border-color: rgb(87 188 245 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-3 {
  --tw-border-opacity: 1;
  border-color: rgb(135 204 243 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-4 {
  --tw-border-opacity: 1;
  border-color: rgb(161 222 255 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-5 {
  --tw-border-opacity: 1;
  border-color: rgb(184 229 255 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-6 {
  --tw-border-opacity: 1;
  border-color: rgb(218 242 255 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-7 {
  --tw-border-opacity: 1;
  border-color: rgb(42 175 151 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-8 {
  --tw-border-opacity: 1;
  border-color: rgb(67 197 173 / var(--tw-border-opacity));
} .border-graph-bui-bunrui-9 {
  --tw-border-opacity: 1;
  border-color: rgb(99 209 189 / var(--tw-border-opacity));
} .border-graph-bui-bunrui1 {
  --tw-border-opacity: 1;
  border-color: rgb(51 161 223 / var(--tw-border-opacity));
} .border-graph-bui-bunrui10 {
  --tw-border-opacity: 1;
  border-color: rgb(139 234 217 / var(--tw-border-opacity));
} .border-graph-bui-bunrui11 {
  --tw-border-opacity: 1;
  border-color: rgb(174 239 227 / var(--tw-border-opacity));
} .border-graph-bui-bunrui12 {
  --tw-border-opacity: 1;
  border-color: rgb(206 249 241 / var(--tw-border-opacity));
} .border-graph-bui-bunrui2 {
  --tw-border-opacity: 1;
  border-color: rgb(87 188 245 / var(--tw-border-opacity));
} .border-graph-bui-bunrui3 {
  --tw-border-opacity: 1;
  border-color: rgb(135 204 243 / var(--tw-border-opacity));
} .border-graph-bui-bunrui4 {
  --tw-border-opacity: 1;
  border-color: rgb(161 222 255 / var(--tw-border-opacity));
} .border-graph-bui-bunrui5 {
  --tw-border-opacity: 1;
  border-color: rgb(184 229 255 / var(--tw-border-opacity));
} .border-graph-bui-bunrui6 {
  --tw-border-opacity: 1;
  border-color: rgb(218 242 255 / var(--tw-border-opacity));
} .border-graph-bui-bunrui7 {
  --tw-border-opacity: 1;
  border-color: rgb(42 175 151 / var(--tw-border-opacity));
} .border-graph-bui-bunrui8 {
  --tw-border-opacity: 1;
  border-color: rgb(67 197 173 / var(--tw-border-opacity));
} .border-graph-bui-bunrui9 {
  --tw-border-opacity: 1;
  border-color: rgb(99 209 189 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui-1 {
  --tw-border-opacity: 1;
  border-color: rgb(154 223 86 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui-2 {
  --tw-border-opacity: 1;
  border-color: rgb(184 242 126 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui-3 {
  --tw-border-opacity: 1;
  border-color: rgb(211 253 169 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui-4 {
  --tw-border-opacity: 1;
  border-color: rgb(219 208 110 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui-5 {
  --tw-border-opacity: 1;
  border-color: rgb(243 233 142 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui-6 {
  --tw-border-opacity: 1;
  border-color: rgb(253 248 207 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui1 {
  --tw-border-opacity: 1;
  border-color: rgb(154 223 86 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui10 {
  --tw-border-opacity: 1;
  border-color: rgb(194 216 239 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui11 {
  --tw-border-opacity: 1;
  border-color: rgb(223 236 249 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui2 {
  --tw-border-opacity: 1;
  border-color: rgb(184 242 126 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui3 {
  --tw-border-opacity: 1;
  border-color: rgb(211 253 169 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui4 {
  --tw-border-opacity: 1;
  border-color: rgb(219 208 110 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui5 {
  --tw-border-opacity: 1;
  border-color: rgb(243 233 142 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui6 {
  --tw-border-opacity: 1;
  border-color: rgb(253 248 207 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui7 {
  --tw-border-opacity: 1;
  border-color: rgb(255 247 180 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui8 {
  --tw-border-opacity: 1;
  border-color: rgb(236 255 211 / var(--tw-border-opacity));
} .border-graph-seibi-bunrui9 {
  --tw-border-opacity: 1;
  border-color: rgb(151 190 231 / var(--tw-border-opacity));
} .border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
} .border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
} .border-green-tin {
  --tw-border-opacity: 1;
  border-color: rgb(218 255 224 / var(--tw-border-opacity));
} .border-input {
  --tw-border-opacity: 1;
  border-color: rgb(198 198 202 / var(--tw-border-opacity));
} .border-link {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 238 / var(--tw-border-opacity));
} .border-neutral {
  --tw-border-opacity: 1;
  border-color: rgb(227 226 230 / var(--tw-border-opacity));
} .border-neutral-dark {
  --tw-border-opacity: 1;
  border-color: rgb(93 94 98 / var(--tw-border-opacity));
} .border-neutral-dark-bg {
  --tw-border-opacity: 1;
  border-color: rgb(171 171 174 / var(--tw-border-opacity));
} .border-neutral-dark-text {
  --tw-border-opacity: 1;
  border-color: rgb(93 94 98 / var(--tw-border-opacity));
} .border-neutral-screen {
  --tw-border-opacity: 1;
  border-color: rgb(241 240 244 / var(--tw-border-opacity));
} .border-neutral-thin {
  --tw-border-opacity: 1;
  border-color: rgb(84 95 112 / var(--tw-border-opacity));
} .border-number-plate-dark {
  --tw-border-opacity: 1;
  border-color: rgb(67 71 78 / var(--tw-border-opacity));
} .border-others-error-push {
  --tw-border-opacity: 1;
  border-color: rgb(149 0 0 / var(--tw-border-opacity));
} .border-others-green {
  --tw-border-opacity: 1;
  border-color: rgb(64 147 82 / var(--tw-border-opacity));
} .border-others-green-light {
  --tw-border-opacity: 1;
  border-color: rgb(218 255 224 / var(--tw-border-opacity));
} .border-others-green-thin {
  --tw-border-opacity: 1;
  border-color: rgb(218 255 224 / var(--tw-border-opacity));
} .border-others-orenge {
  --tw-border-opacity: 1;
  border-color: rgb(229 137 0 / var(--tw-border-opacity));
} .border-others-pale-blue {
  --tw-border-opacity: 1;
  border-color: rgb(140 180 218 / var(--tw-border-opacity));
} .border-others-placeholder {
  --tw-border-opacity: 1;
  border-color: rgb(116 119 127 / var(--tw-border-opacity));
} .border-others-primary-hover {
  border-color: #1f60a214;
} .border-others-primary-light {
  --tw-border-opacity: 1;
  border-color: rgb(13 126 241 / var(--tw-border-opacity));
} .border-others-primary-push {
  --tw-border-opacity: 1;
  border-color: rgb(0 49 92 / var(--tw-border-opacity));
} .border-others-side-bar-bottom {
  --tw-border-opacity: 1;
  border-color: rgb(135 178 219 / var(--tw-border-opacity));
} .border-others-side-bar-top {
  --tw-border-opacity: 1;
  border-color: rgb(17 88 154 / var(--tw-border-opacity));
} .border-others-sidebar-bottom {
  --tw-border-opacity: 1;
  border-color: rgb(135 178 219 / var(--tw-border-opacity));
} .border-others-sidebar-hover {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
} .border-others-sidebar-top {
  --tw-border-opacity: 1;
  border-color: rgb(17 88 154 / var(--tw-border-opacity));
} .border-others-yellow {
  --tw-border-opacity: 1;
  border-color: rgb(255 243 136 / var(--tw-border-opacity));
} .border-pale-blue {
  --tw-border-opacity: 1;
  border-color: rgb(163 201 255 / var(--tw-border-opacity));
} .border-primary {
  --tw-border-opacity: 1;
  border-color: rgb(31 96 162 / var(--tw-border-opacity));
} .border-primary-hover {
  border-color: color-mix(in srgb, #1f60a2 8%, transparent);
} .border-primary-push {
  --tw-border-opacity: 1;
  border-color: rgb(0 49 92 / var(--tw-border-opacity));
} .border-primary-thin {
  --tw-border-opacity: 1;
  border-color: rgb(235 241 255 / var(--tw-border-opacity));
} .border-red-300 {
  --tw-border-opacity: 1;
  border-color: rgb(252 165 165 / var(--tw-border-opacity));
} .border-table-bg-th-default {
  --tw-border-opacity: 1;
  border-color: rgb(245 245 245 / var(--tw-border-opacity));
} .border-table-bg-th-syakensyo {
  --tw-border-opacity: 1;
  border-color: rgb(241 240 244 / var(--tw-border-opacity));
} .border-table-border-th-default {
  --tw-border-opacity: 1;
  border-color: rgb(195 198 207 / var(--tw-border-opacity));
} .border-table-border-th-syakensyo {
  --tw-border-opacity: 1;
  border-color: rgb(198 198 202 / var(--tw-border-opacity));
} .border-text-base {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity));
} .border-text-base-light {
  --tw-border-opacity: 1;
  border-color: rgb(102 102 102 / var(--tw-border-opacity));
} .border-text-disabled {
  --tw-border-opacity: 1;
  border-color: rgb(153 153 153 / var(--tw-border-opacity));
} .border-text-error {
  --tw-border-opacity: 1;
  border-color: rgb(186 26 26 / var(--tw-border-opacity));
} .border-text-link {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 238 / var(--tw-border-opacity));
} .border-text-primary {
  --tw-border-opacity: 1;
  border-color: rgb(31 96 162 / var(--tw-border-opacity));
} .border-text-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
} .border-transparent {
  border-color: transparent;
} .border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
} .border-yellow {
  --tw-border-opacity: 1;
  border-color: rgb(255 239 100 / var(--tw-border-opacity));
} .border-x-border-base {
  --tw-border-opacity: 1;
  border-left-color: rgb(204 204 204 / var(--tw-border-opacity));
  border-right-color: rgb(204 204 204 / var(--tw-border-opacity));
} .border-b-border-base {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(204 204 204 / var(--tw-border-opacity));
} .border-b-white {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(255 255 255 / var(--tw-border-opacity));
} .border-l-border-base {
  --tw-border-opacity: 1;
  border-left-color: rgb(204 204 204 / var(--tw-border-opacity));
} .border-l-white {
  --tw-border-opacity: 1;
  border-left-color: rgb(255 255 255 / var(--tw-border-opacity));
} .border-r-border-base {
  --tw-border-opacity: 1;
  border-right-color: rgb(204 204 204 / var(--tw-border-opacity));
} .border-t-border-base {
  --tw-border-opacity: 1;
  border-top-color: rgb(204 204 204 / var(--tw-border-opacity));
} .border-t-transparent {
  border-top-color: transparent;
} .\\!bg-back-ground-primary-light {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(235 241 255 / var(--tw-bg-opacity)) !important;
} .\\!bg-transparent {
  background-color: transparent !important;
} .bg-\\[\\#005C27\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(0 92 39 / var(--tw-bg-opacity));
} .bg-\\[\\#A7A7A7\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(167 167 167 / var(--tw-bg-opacity));
} .bg-\\[\\#D4C74F\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(212 199 79 / var(--tw-bg-opacity));
} .bg-\\[\\#F49507\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(244 149 7 / var(--tw-bg-opacity));
} .bg-\\[\\#FFF8E6\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(255 248 230 / var(--tw-bg-opacity));
} .bg-\\[\\#f5fff7\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(245 255 247 / var(--tw-bg-opacity));
} .bg-\\[\\#fefce8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(254 252 232 / var(--tw-bg-opacity));
} .bg-\\[\\#ffeeee\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(255 238 238 / var(--tw-bg-opacity));
} .bg-alert-list-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(13 126 241 / var(--tw-bg-opacity));
} .bg-alert-list-light-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(163 201 255 / var(--tw-bg-opacity));
} .bg-back-ground-base {
  --tw-bg-opacity: 1;
  background-color: rgb(230 230 230 / var(--tw-bg-opacity));
} .bg-back-ground-base-blur {
  background-color: #00000066;
} .bg-back-ground-black {
  --tw-bg-opacity: 1;
  background-color: rgb(58 60 64 / var(--tw-bg-opacity));
} .bg-back-ground-disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(242 242 242 / var(--tw-bg-opacity));
} .bg-back-ground-error {
  --tw-bg-opacity: 1;
  background-color: rgb(186 26 26 / var(--tw-bg-opacity));
} .bg-back-ground-error-light {
  --tw-bg-opacity: 1;
  background-color: rgb(255 218 214 / var(--tw-bg-opacity));
} .bg-back-ground-primary {
  --tw-bg-opacity: 1;
  background-color: rgb(31 96 162 / var(--tw-bg-opacity));
} .bg-back-ground-primary-light {
  --tw-bg-opacity: 1;
  background-color: rgb(235 241 255 / var(--tw-bg-opacity));
} .bg-back-ground-screen-base {
  --tw-bg-opacity: 1;
  background-color: rgb(241 240 244 / var(--tw-bg-opacity));
} .bg-back-ground-table-header {
  --tw-bg-opacity: 1;
  background-color: rgb(242 242 242 / var(--tw-bg-opacity));
} .bg-back-ground-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
} .bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
} .bg-black\\/10 {
  background-color: rgb(0 0 0 / 0.1);
} .bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 246 255 / var(--tw-bg-opacity));
} .bg-body {
  --tw-bg-opacity: 1;
  background-color: rgb(26 28 30 / var(--tw-bg-opacity));
} .bg-border-base {
  --tw-bg-opacity: 1;
  background-color: rgb(204 204 204 / var(--tw-bg-opacity));
} .bg-border-disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(242 242 242 / var(--tw-bg-opacity));
} .bg-border-divider {
  --tw-bg-opacity: 1;
  background-color: rgb(224 226 235 / var(--tw-bg-opacity));
} .bg-border-error {
  --tw-bg-opacity: 1;
  background-color: rgb(186 26 26 / var(--tw-bg-opacity));
} .bg-border-primary {
  --tw-bg-opacity: 1;
  background-color: rgb(31 96 162 / var(--tw-bg-opacity));
} .bg-border-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
} .bg-calendar-day {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
} .bg-calendar-day-of-week {
  --tw-bg-opacity: 1;
  background-color: rgb(168 171 180 / var(--tw-bg-opacity));
} .bg-disabled-base {
  --tw-bg-opacity: 1;
  background-color: rgb(227 226 230 / var(--tw-bg-opacity));
} .bg-disabled-bg {
  --tw-bg-opacity: 1;
  background-color: rgb(241 240 244 / var(--tw-bg-opacity));
} .bg-disabled-text {
  background-color: #00000059;
} .bg-divider {
  --tw-bg-opacity: 1;
  background-color: rgb(224 226 235 / var(--tw-bg-opacity));
} .bg-error-base {
  --tw-bg-opacity: 1;
  background-color: rgb(186 26 26 / var(--tw-bg-opacity));
} .bg-error-bg {
  --tw-bg-opacity: 1;
  background-color: rgb(255 218 214 / var(--tw-bg-opacity));
} .bg-error-border {
  --tw-bg-opacity: 1;
  background-color: rgb(186 26 26 / var(--tw-bg-opacity));
} .bg-error-hover {
  --tw-bg-opacity: 1;
  background-color: rgb(149 0 0 / var(--tw-bg-opacity));
} .bg-error-text {
  --tw-bg-opacity: 1;
  background-color: rgb(186 26 26 / var(--tw-bg-opacity));
} .bg-error-thin {
  --tw-bg-opacity: 1;
  background-color: rgb(255 218 214 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-1 {
  --tw-bg-opacity: 1;
  background-color: rgb(51 161 223 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-10 {
  --tw-bg-opacity: 1;
  background-color: rgb(139 234 217 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-11 {
  --tw-bg-opacity: 1;
  background-color: rgb(174 239 227 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-12 {
  --tw-bg-opacity: 1;
  background-color: rgb(206 249 241 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-2 {
  --tw-bg-opacity: 1;
  background-color: rgb(87 188 245 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-3 {
  --tw-bg-opacity: 1;
  background-color: rgb(135 204 243 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-4 {
  --tw-bg-opacity: 1;
  background-color: rgb(161 222 255 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-5 {
  --tw-bg-opacity: 1;
  background-color: rgb(184 229 255 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-6 {
  --tw-bg-opacity: 1;
  background-color: rgb(218 242 255 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-7 {
  --tw-bg-opacity: 1;
  background-color: rgb(42 175 151 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-8 {
  --tw-bg-opacity: 1;
  background-color: rgb(67 197 173 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui-9 {
  --tw-bg-opacity: 1;
  background-color: rgb(99 209 189 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui1 {
  --tw-bg-opacity: 1;
  background-color: rgb(51 161 223 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui10 {
  --tw-bg-opacity: 1;
  background-color: rgb(139 234 217 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui11 {
  --tw-bg-opacity: 1;
  background-color: rgb(174 239 227 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui12 {
  --tw-bg-opacity: 1;
  background-color: rgb(206 249 241 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui2 {
  --tw-bg-opacity: 1;
  background-color: rgb(87 188 245 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui3 {
  --tw-bg-opacity: 1;
  background-color: rgb(135 204 243 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui4 {
  --tw-bg-opacity: 1;
  background-color: rgb(161 222 255 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui5 {
  --tw-bg-opacity: 1;
  background-color: rgb(184 229 255 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui6 {
  --tw-bg-opacity: 1;
  background-color: rgb(218 242 255 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui7 {
  --tw-bg-opacity: 1;
  background-color: rgb(42 175 151 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui8 {
  --tw-bg-opacity: 1;
  background-color: rgb(67 197 173 / var(--tw-bg-opacity));
} .bg-graph-bui-bunrui9 {
  --tw-bg-opacity: 1;
  background-color: rgb(99 209 189 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui-1 {
  --tw-bg-opacity: 1;
  background-color: rgb(154 223 86 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui-2 {
  --tw-bg-opacity: 1;
  background-color: rgb(184 242 126 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui-3 {
  --tw-bg-opacity: 1;
  background-color: rgb(211 253 169 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui-4 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 208 110 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui-5 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 233 142 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui-6 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 248 207 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui1 {
  --tw-bg-opacity: 1;
  background-color: rgb(154 223 86 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui10 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 216 239 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui11 {
  --tw-bg-opacity: 1;
  background-color: rgb(223 236 249 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui2 {
  --tw-bg-opacity: 1;
  background-color: rgb(184 242 126 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui3 {
  --tw-bg-opacity: 1;
  background-color: rgb(211 253 169 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui4 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 208 110 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui5 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 233 142 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui6 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 248 207 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui7 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 247 180 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui8 {
  --tw-bg-opacity: 1;
  background-color: rgb(236 255 211 / var(--tw-bg-opacity));
} .bg-graph-seibi-bunrui9 {
  --tw-bg-opacity: 1;
  background-color: rgb(151 190 231 / var(--tw-bg-opacity));
} .bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
} .bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
} .bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
} .bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
} .bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
} .bg-green-tin {
  --tw-bg-opacity: 1;
  background-color: rgb(218 255 224 / var(--tw-bg-opacity));
} .bg-input {
  --tw-bg-opacity: 1;
  background-color: rgb(198 198 202 / var(--tw-bg-opacity));
} .bg-link {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 238 / var(--tw-bg-opacity));
} .bg-neutral {
  --tw-bg-opacity: 1;
  background-color: rgb(227 226 230 / var(--tw-bg-opacity));
} .bg-neutral-dark {
  --tw-bg-opacity: 1;
  background-color: rgb(93 94 98 / var(--tw-bg-opacity));
} .bg-neutral-dark-bg {
  --tw-bg-opacity: 1;
  background-color: rgb(171 171 174 / var(--tw-bg-opacity));
} .bg-neutral-dark-text {
  --tw-bg-opacity: 1;
  background-color: rgb(93 94 98 / var(--tw-bg-opacity));
} .bg-neutral-screen {
  --tw-bg-opacity: 1;
  background-color: rgb(241 240 244 / var(--tw-bg-opacity));
} .bg-neutral-thin {
  --tw-bg-opacity: 1;
  background-color: rgb(84 95 112 / var(--tw-bg-opacity));
} .bg-number-plate-dark {
  --tw-bg-opacity: 1;
  background-color: rgb(67 71 78 / var(--tw-bg-opacity));
} .bg-others-error-push {
  --tw-bg-opacity: 1;
  background-color: rgb(149 0 0 / var(--tw-bg-opacity));
} .bg-others-green {
  --tw-bg-opacity: 1;
  background-color: rgb(64 147 82 / var(--tw-bg-opacity));
} .bg-others-green-light {
  --tw-bg-opacity: 1;
  background-color: rgb(218 255 224 / var(--tw-bg-opacity));
} .bg-others-green-thin {
  --tw-bg-opacity: 1;
  background-color: rgb(218 255 224 / var(--tw-bg-opacity));
} .bg-others-orenge {
  --tw-bg-opacity: 1;
  background-color: rgb(229 137 0 / var(--tw-bg-opacity));
} .bg-others-pale-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(140 180 218 / var(--tw-bg-opacity));
} .bg-others-placeholder {
  --tw-bg-opacity: 1;
  background-color: rgb(116 119 127 / var(--tw-bg-opacity));
} .bg-others-primary-hover {
  background-color: #1f60a214;
} .bg-others-primary-light {
  --tw-bg-opacity: 1;
  background-color: rgb(13 126 241 / var(--tw-bg-opacity));
} .bg-others-primary-push {
  --tw-bg-opacity: 1;
  background-color: rgb(0 49 92 / var(--tw-bg-opacity));
} .bg-others-side-bar-bottom {
  --tw-bg-opacity: 1;
  background-color: rgb(135 178 219 / var(--tw-bg-opacity));
} .bg-others-side-bar-top {
  --tw-bg-opacity: 1;
  background-color: rgb(17 88 154 / var(--tw-bg-opacity));
} .bg-others-sidebar-bottom {
  --tw-bg-opacity: 1;
  background-color: rgb(135 178 219 / var(--tw-bg-opacity));
} .bg-others-sidebar-hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
} .bg-others-sidebar-top {
  --tw-bg-opacity: 1;
  background-color: rgb(17 88 154 / var(--tw-bg-opacity));
} .bg-others-yellow {
  --tw-bg-opacity: 1;
  background-color: rgb(255 243 136 / var(--tw-bg-opacity));
} .bg-pale-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(163 201 255 / var(--tw-bg-opacity));
} .bg-primary {
  --tw-bg-opacity: 1;
  background-color: rgb(31 96 162 / var(--tw-bg-opacity));
} .bg-primary-hover {
  background-color: color-mix(in srgb, #1f60a2 8%, transparent);
} .bg-primary-push {
  --tw-bg-opacity: 1;
  background-color: rgb(0 49 92 / var(--tw-bg-opacity));
} .bg-primary-thin {
  --tw-bg-opacity: 1;
  background-color: rgb(235 241 255 / var(--tw-bg-opacity));
} .bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
} .bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
} .bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
} .bg-table-bg-th-default {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
} .bg-table-bg-th-syakensyo {
  --tw-bg-opacity: 1;
  background-color: rgb(241 240 244 / var(--tw-bg-opacity));
} .bg-table-border-th-default {
  --tw-bg-opacity: 1;
  background-color: rgb(195 198 207 / var(--tw-bg-opacity));
} .bg-table-border-th-syakensyo {
  --tw-bg-opacity: 1;
  background-color: rgb(198 198 202 / var(--tw-bg-opacity));
} .bg-text-base {
  --tw-bg-opacity: 1;
  background-color: rgb(51 51 51 / var(--tw-bg-opacity));
} .bg-text-base-light {
  --tw-bg-opacity: 1;
  background-color: rgb(102 102 102 / var(--tw-bg-opacity));
} .bg-text-disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
} .bg-text-error {
  --tw-bg-opacity: 1;
  background-color: rgb(186 26 26 / var(--tw-bg-opacity));
} .bg-text-link {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 238 / var(--tw-bg-opacity));
} .bg-text-primary {
  --tw-bg-opacity: 1;
  background-color: rgb(31 96 162 / var(--tw-bg-opacity));
} .bg-text-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
} .bg-transparent {
  background-color: transparent;
} .bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
} .bg-yellow {
  --tw-bg-opacity: 1;
  background-color: rgb(255 239 100 / var(--tw-bg-opacity));
} .bg-opacity-40 {
  --tw-bg-opacity: 0.4;
} .bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
} .from-others-sidebar-top {
  --tw-gradient-from: #11589a var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(17 88 154 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
} .to-others-sidebar-bottom {
  --tw-gradient-to: #87b2db var(--tw-gradient-to-position);
} .bg-cover {
  background-size: cover;
} .bg-center {
  background-position: center;
} .bg-no-repeat {
  background-repeat: no-repeat;
} .stroke-alert-list-blue {
  stroke: #0d7ef1;
} .stroke-alert-list-light-blue {
  stroke: #a3c9ff;
} .stroke-back-ground-base {
  stroke: #e6e6e6;
} .stroke-back-ground-base-blur {
  stroke: #00000066;
} .stroke-back-ground-black {
  stroke: #3a3c40;
} .stroke-back-ground-disabled {
  stroke: #f2f2f2;
} .stroke-back-ground-error {
  stroke: #ba1a1a;
} .stroke-back-ground-error-light {
  stroke: #ffdad6;
} .stroke-back-ground-primary {
  stroke: #1f60a2;
} .stroke-back-ground-primary-light {
  stroke: #ebf1ff;
} .stroke-back-ground-screen-base {
  stroke: #f1f0f4;
} .stroke-back-ground-table-header {
  stroke: #f2f2f2;
} .stroke-back-ground-white {
  stroke: #ffffff;
} .stroke-black {
  stroke: #000000;
} .stroke-body {
  stroke: #1a1c1e;
} .stroke-border-base {
  stroke: #ccc;
} .stroke-border-disabled {
  stroke: #f2f2f2;
} .stroke-border-divider {
  stroke: #e0e2eb;
} .stroke-border-error {
  stroke: #ba1a1a;
} .stroke-border-primary {
  stroke: #1f60a2;
} .stroke-border-white {
  stroke: #ffffff;
} .stroke-calendar-day {
  stroke: #f5f5f5;
} .stroke-calendar-day-of-week {
  stroke: #a8abb4;
} .stroke-disabled-base {
  stroke: #e3e2e6;
} .stroke-disabled-bg {
  stroke: #f1f0f4;
} .stroke-disabled-text {
  stroke: #00000059;
} .stroke-divider {
  stroke: #e0e2eb;
} .stroke-error-base {
  stroke: #ba1a1a;
} .stroke-error-bg {
  stroke: #ffdad6;
} .stroke-error-border {
  stroke: #BA1A1A;
} .stroke-error-hover {
  stroke: #950000;
} .stroke-error-text {
  stroke: #ba1a1a;
} .stroke-error-thin {
  stroke: #FFDAD6;
} .stroke-graph-bui-bunrui-1 {
  stroke: #33a1df;
} .stroke-graph-bui-bunrui-10 {
  stroke: #8bead9;
} .stroke-graph-bui-bunrui-11 {
  stroke: #aeefe3;
} .stroke-graph-bui-bunrui-12 {
  stroke: #cef9f1;
} .stroke-graph-bui-bunrui-2 {
  stroke: #57bcf5;
} .stroke-graph-bui-bunrui-3 {
  stroke: #87ccf3;
} .stroke-graph-bui-bunrui-4 {
  stroke: #a1deff;
} .stroke-graph-bui-bunrui-5 {
  stroke: #b8e5ff;
} .stroke-graph-bui-bunrui-6 {
  stroke: #daf2ff;
} .stroke-graph-bui-bunrui-7 {
  stroke: #2aaf97;
} .stroke-graph-bui-bunrui-8 {
  stroke: #43c5ad;
} .stroke-graph-bui-bunrui-9 {
  stroke: #63d1bd;
} .stroke-graph-bui-bunrui1 {
  stroke: #33a1df;
} .stroke-graph-bui-bunrui10 {
  stroke: #8bead9;
} .stroke-graph-bui-bunrui11 {
  stroke: #aeefe3;
} .stroke-graph-bui-bunrui12 {
  stroke: #cef9f1;
} .stroke-graph-bui-bunrui2 {
  stroke: #57bcf5;
} .stroke-graph-bui-bunrui3 {
  stroke: #87ccf3;
} .stroke-graph-bui-bunrui4 {
  stroke: #a1deff;
} .stroke-graph-bui-bunrui5 {
  stroke: #B8E5FF;
} .stroke-graph-bui-bunrui6 {
  stroke: #DAF2FF;
} .stroke-graph-bui-bunrui7 {
  stroke: #2aaf97;
} .stroke-graph-bui-bunrui8 {
  stroke: #43C5AD;
} .stroke-graph-bui-bunrui9 {
  stroke: #63d1bd;
} .stroke-graph-seibi-bunrui-1 {
  stroke: #9adf56;
} .stroke-graph-seibi-bunrui-2 {
  stroke: #b8f27e;
} .stroke-graph-seibi-bunrui-3 {
  stroke: #d3fda9;
} .stroke-graph-seibi-bunrui-4 {
  stroke: #dbd06e;
} .stroke-graph-seibi-bunrui-5 {
  stroke: #f3e98e;
} .stroke-graph-seibi-bunrui-6 {
  stroke: #fdf8cf;
} .stroke-graph-seibi-bunrui1 {
  stroke: #9adf56;
} .stroke-graph-seibi-bunrui10 {
  stroke: #c2d8ef;
} .stroke-graph-seibi-bunrui11 {
  stroke: #dfecf9;
} .stroke-graph-seibi-bunrui2 {
  stroke: #b8f27e;
} .stroke-graph-seibi-bunrui3 {
  stroke: #d3fda9;
} .stroke-graph-seibi-bunrui4 {
  stroke: #dbd06e;
} .stroke-graph-seibi-bunrui5 {
  stroke: #f3e98e;
} .stroke-graph-seibi-bunrui6 {
  stroke: #fdf8cf;
} .stroke-graph-seibi-bunrui7 {
  stroke: #fff7b4;
} .stroke-graph-seibi-bunrui8 {
  stroke: #ecffd3;
} .stroke-graph-seibi-bunrui9 {
  stroke: #97bee7;
} .stroke-green-tin {
  stroke: #DAFFE0;
} .stroke-input {
  stroke: #c6c6ca;
} .stroke-link {
  stroke: #0000ee;
} .stroke-neutral {
  stroke: #e3e2e6;
} .stroke-neutral-dark {
  stroke: #5d5e62;
} .stroke-neutral-dark-bg {
  stroke: #ababae;
} .stroke-neutral-dark-text {
  stroke: #5D5E62;
} .stroke-neutral-screen {
  stroke: #f1f0f4;
} .stroke-neutral-thin {
  stroke: #545f70;
} .stroke-number-plate-dark {
  stroke: #43474e;
} .stroke-others-error-push {
  stroke: #950000;
} .stroke-others-green {
  stroke: #409352;
} .stroke-others-green-light {
  stroke: #daffe0;
} .stroke-others-green-thin {
  stroke: #DAFFE0;
} .stroke-others-orenge {
  stroke: #e58900;
} .stroke-others-pale-blue {
  stroke: #8cb4da;
} .stroke-others-placeholder {
  stroke: #74777f;
} .stroke-others-primary-hover {
  stroke: #1f60a214;
} .stroke-others-primary-light {
  stroke: #0d7ef1;
} .stroke-others-primary-push {
  stroke: #00315c;
} .stroke-others-side-bar-bottom {
  stroke: #87b2db;
} .stroke-others-side-bar-top {
  stroke: #11589a;
} .stroke-others-sidebar-bottom {
  stroke: #87b2db;
} .stroke-others-sidebar-hover {
  stroke: #ffffff;
} .stroke-others-sidebar-top {
  stroke: #11589a;
} .stroke-others-yellow {
  stroke: #FFF388;
} .stroke-pale-blue {
  stroke: #A3C9FF;
} .stroke-primary {
  stroke: #1f60a2;
} .stroke-primary-hover {
  stroke: color-mix(in srgb, #1f60a2 8%, transparent);
} .stroke-primary-push {
  stroke: #00315c;
} .stroke-primary-thin {
  stroke: #ebf1ff;
} .stroke-table-bg-th-default {
  stroke: #F5F5F5;
} .stroke-table-bg-th-syakensyo {
  stroke: #F1F0F4;
} .stroke-table-border-th-default {
  stroke: #C3C6CF;
} .stroke-table-border-th-syakensyo {
  stroke: #C6C6CA;
} .stroke-text-base {
  stroke: #333333;
} .stroke-text-base-light {
  stroke: #666666;
} .stroke-text-disabled {
  stroke: #999999;
} .stroke-text-error {
  stroke: #ba1a1a;
} .stroke-text-link {
  stroke: #0000ee;
} .stroke-text-primary {
  stroke: #1f60a2;
} .stroke-text-white {
  stroke: #ffffff;
} .stroke-white {
  stroke: #ffffff;
} .stroke-yellow {
  stroke: #FFEF64;
} .object-contain {
  -o-object-fit: contain;
     object-fit: contain;
} .object-cover {
  -o-object-fit: cover;
     object-fit: cover;
} .p-1 {
  padding: 0.25rem;
} .p-2 {
  padding: 0.5rem;
} .p-3 {
  padding: 0.75rem;
} .p-4 {
  padding: 1rem;
} .p-6 {
  padding: 1.5rem;
} .p-8 {
  padding: 2rem;
} .p-\\[9px\\] {
  padding: 9px;
} .px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
} .px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
} .px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
} .px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
} .px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
} .px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
} .px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
} .px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
} .px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
} .px-\\[10px\\] {
  padding-left: 10px;
  padding-right: 10px;
} .py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
} .py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
} .py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
} .py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
} .py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
} .py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
} .py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
} .py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
} .py-\\[2px\\] {
  padding-top: 2px;
  padding-bottom: 2px;
} .\\!pl-8 {
  padding-left: 2rem !important;
} .\\!pr-8 {
  padding-right: 2rem !important;
} .pb-2 {
  padding-bottom: 0.5rem;
} .pb-4 {
  padding-bottom: 1rem;
} .pl-4 {
  padding-left: 1rem;
} .pl-9 {
  padding-left: 2.25rem;
} .pr-2 {
  padding-right: 0.5rem;
} .pt-2 {
  padding-top: 0.5rem;
} .pt-4 {
  padding-top: 1rem;
} .text-left {
  text-align: left;
} .text-center {
  text-align: center;
} .text-right {
  text-align: right;
} .text-start {
  text-align: start;
} .font-\\[\\'A-OTF_Shin_Maru_Go_Pro\\'\\] {
  font-family: 'A-OTF Shin Maru Go Pro';
} .font-\\[\\'Noto_Sans_JP\\'\\] {
  font-family: 'Noto Sans JP';
} .\\!text-\\[14px\\] {
  font-size: 14px !important;
} .\\!text-\\[16px\\] {
  font-size: 16px !important;
} .\\!text-\\[20px\\] {
  font-size: 20px !important;
} .\\!text-body-small {
  font-size: 12px !important;
  line-height: 150% !important;
  letter-spacing: 0px !important;
  font-weight: 500 !important;
} .text-2xl {
  font-size: 1.75rem;
} .text-\\[10px\\] {
  font-size: 10px;
} .text-\\[13px\\] {
  font-size: 13px;
} .text-\\[14px\\] {
  font-size: 14px;
} .text-\\[15px\\] {
  font-size: 15px;
} .text-\\[16px\\] {
  font-size: 16px;
} .text-\\[20px\\] {
  font-size: 20px;
} .text-\\[40px\\] {
  font-size: 40px;
} .text-base {
  font-size: 1rem;
} .text-body-large {
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 500;
} .text-body-medium {
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 500;
} .text-body-small {
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 500;
} .text-display-medium {
  font-size: 42px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 700;
} .text-display-small {
  font-size: 36px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 700;
} .text-headline-medium {
  font-size: 28px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 700;
} .text-headline-small {
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 700;
} .text-label-large {
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 700;
} .text-label-medium {
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 700;
} .text-label-small {
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 700;
} .text-lg {
  font-size: 1.25rem;
} .text-sm {
  font-size: 0.875rem;
} .text-xl {
  font-size: 1.375rem;
} .text-xs {
  font-size: 0.75rem;
} .font-bold {
  font-weight: 700;
} .font-medium {
  font-weight: 500;
} .font-semibold {
  font-weight: 600;
} .leading-\\[21px\\] {
  line-height: 21px;
} .leading-\\[24px\\] {
  line-height: 24px;
} .leading-\\[26px\\] {
  line-height: 26px;
} .leading-\\[30px\\] {
  line-height: 30px;
} .leading-\\[38px\\] {
  line-height: 38px;
} .leading-\\[46px\\] {
  line-height: 46px;
} .leading-loose {
  line-height: 2;
} .leading-none {
  line-height: 1;
} .leading-tight {
  line-height: 1.25;
} .tracking-tight {
  letter-spacing: -0.025em;
} .tracking-wide {
  letter-spacing: 0.025em;
} .\\!text-error-text {
  --tw-text-opacity: 1 !important;
  color: rgb(186 26 26 / var(--tw-text-opacity)) !important;
} .\\!text-text-disabled {
  --tw-text-opacity: 1 !important;
  color: rgb(153 153 153 / var(--tw-text-opacity)) !important;
} .\\!text-white {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
} .text-\\[\\#a16207\\] {
  --tw-text-opacity: 1;
  color: rgb(161 98 7 / var(--tw-text-opacity));
} .text-alert-list-blue {
  --tw-text-opacity: 1;
  color: rgb(13 126 241 / var(--tw-text-opacity));
} .text-alert-list-light-blue {
  --tw-text-opacity: 1;
  color: rgb(163 201 255 / var(--tw-text-opacity));
} .text-back-ground-base {
  --tw-text-opacity: 1;
  color: rgb(230 230 230 / var(--tw-text-opacity));
} .text-back-ground-base-blur {
  color: #00000066;
} .text-back-ground-black {
  --tw-text-opacity: 1;
  color: rgb(58 60 64 / var(--tw-text-opacity));
} .text-back-ground-disabled {
  --tw-text-opacity: 1;
  color: rgb(242 242 242 / var(--tw-text-opacity));
} .text-back-ground-error {
  --tw-text-opacity: 1;
  color: rgb(186 26 26 / var(--tw-text-opacity));
} .text-back-ground-error-light {
  --tw-text-opacity: 1;
  color: rgb(255 218 214 / var(--tw-text-opacity));
} .text-back-ground-primary {
  --tw-text-opacity: 1;
  color: rgb(31 96 162 / var(--tw-text-opacity));
} .text-back-ground-primary-light {
  --tw-text-opacity: 1;
  color: rgb(235 241 255 / var(--tw-text-opacity));
} .text-back-ground-screen-base {
  --tw-text-opacity: 1;
  color: rgb(241 240 244 / var(--tw-text-opacity));
} .text-back-ground-table-header {
  --tw-text-opacity: 1;
  color: rgb(242 242 242 / var(--tw-text-opacity));
} .text-back-ground-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
} .text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
} .text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
} .text-body {
  --tw-text-opacity: 1;
  color: rgb(26 28 30 / var(--tw-text-opacity));
} .text-border-base {
  --tw-text-opacity: 1;
  color: rgb(204 204 204 / var(--tw-text-opacity));
} .text-border-disabled {
  --tw-text-opacity: 1;
  color: rgb(242 242 242 / var(--tw-text-opacity));
} .text-border-divider {
  --tw-text-opacity: 1;
  color: rgb(224 226 235 / var(--tw-text-opacity));
} .text-border-error {
  --tw-text-opacity: 1;
  color: rgb(186 26 26 / var(--tw-text-opacity));
} .text-border-primary {
  --tw-text-opacity: 1;
  color: rgb(31 96 162 / var(--tw-text-opacity));
} .text-border-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
} .text-calendar-day {
  --tw-text-opacity: 1;
  color: rgb(245 245 245 / var(--tw-text-opacity));
} .text-calendar-day-of-week {
  --tw-text-opacity: 1;
  color: rgb(168 171 180 / var(--tw-text-opacity));
} .text-disabled-base {
  --tw-text-opacity: 1;
  color: rgb(227 226 230 / var(--tw-text-opacity));
} .text-disabled-bg {
  --tw-text-opacity: 1;
  color: rgb(241 240 244 / var(--tw-text-opacity));
} .text-disabled-text {
  color: #00000059;
} .text-divider {
  --tw-text-opacity: 1;
  color: rgb(224 226 235 / var(--tw-text-opacity));
} .text-error-base {
  --tw-text-opacity: 1;
  color: rgb(186 26 26 / var(--tw-text-opacity));
} .text-error-bg {
  --tw-text-opacity: 1;
  color: rgb(255 218 214 / var(--tw-text-opacity));
} .text-error-border {
  --tw-text-opacity: 1;
  color: rgb(186 26 26 / var(--tw-text-opacity));
} .text-error-hover {
  --tw-text-opacity: 1;
  color: rgb(149 0 0 / var(--tw-text-opacity));
} .text-error-text {
  --tw-text-opacity: 1;
  color: rgb(186 26 26 / var(--tw-text-opacity));
} .text-error-thin {
  --tw-text-opacity: 1;
  color: rgb(255 218 214 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-1 {
  --tw-text-opacity: 1;
  color: rgb(51 161 223 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-10 {
  --tw-text-opacity: 1;
  color: rgb(139 234 217 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-11 {
  --tw-text-opacity: 1;
  color: rgb(174 239 227 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-12 {
  --tw-text-opacity: 1;
  color: rgb(206 249 241 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-2 {
  --tw-text-opacity: 1;
  color: rgb(87 188 245 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-3 {
  --tw-text-opacity: 1;
  color: rgb(135 204 243 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-4 {
  --tw-text-opacity: 1;
  color: rgb(161 222 255 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-5 {
  --tw-text-opacity: 1;
  color: rgb(184 229 255 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-6 {
  --tw-text-opacity: 1;
  color: rgb(218 242 255 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-7 {
  --tw-text-opacity: 1;
  color: rgb(42 175 151 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-8 {
  --tw-text-opacity: 1;
  color: rgb(67 197 173 / var(--tw-text-opacity));
} .text-graph-bui-bunrui-9 {
  --tw-text-opacity: 1;
  color: rgb(99 209 189 / var(--tw-text-opacity));
} .text-graph-bui-bunrui1 {
  --tw-text-opacity: 1;
  color: rgb(51 161 223 / var(--tw-text-opacity));
} .text-graph-bui-bunrui10 {
  --tw-text-opacity: 1;
  color: rgb(139 234 217 / var(--tw-text-opacity));
} .text-graph-bui-bunrui11 {
  --tw-text-opacity: 1;
  color: rgb(174 239 227 / var(--tw-text-opacity));
} .text-graph-bui-bunrui12 {
  --tw-text-opacity: 1;
  color: rgb(206 249 241 / var(--tw-text-opacity));
} .text-graph-bui-bunrui2 {
  --tw-text-opacity: 1;
  color: rgb(87 188 245 / var(--tw-text-opacity));
} .text-graph-bui-bunrui3 {
  --tw-text-opacity: 1;
  color: rgb(135 204 243 / var(--tw-text-opacity));
} .text-graph-bui-bunrui4 {
  --tw-text-opacity: 1;
  color: rgb(161 222 255 / var(--tw-text-opacity));
} .text-graph-bui-bunrui5 {
  --tw-text-opacity: 1;
  color: rgb(184 229 255 / var(--tw-text-opacity));
} .text-graph-bui-bunrui6 {
  --tw-text-opacity: 1;
  color: rgb(218 242 255 / var(--tw-text-opacity));
} .text-graph-bui-bunrui7 {
  --tw-text-opacity: 1;
  color: rgb(42 175 151 / var(--tw-text-opacity));
} .text-graph-bui-bunrui8 {
  --tw-text-opacity: 1;
  color: rgb(67 197 173 / var(--tw-text-opacity));
} .text-graph-bui-bunrui9 {
  --tw-text-opacity: 1;
  color: rgb(99 209 189 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui-1 {
  --tw-text-opacity: 1;
  color: rgb(154 223 86 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui-2 {
  --tw-text-opacity: 1;
  color: rgb(184 242 126 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui-3 {
  --tw-text-opacity: 1;
  color: rgb(211 253 169 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui-4 {
  --tw-text-opacity: 1;
  color: rgb(219 208 110 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui-5 {
  --tw-text-opacity: 1;
  color: rgb(243 233 142 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui-6 {
  --tw-text-opacity: 1;
  color: rgb(253 248 207 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui1 {
  --tw-text-opacity: 1;
  color: rgb(154 223 86 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui10 {
  --tw-text-opacity: 1;
  color: rgb(194 216 239 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui11 {
  --tw-text-opacity: 1;
  color: rgb(223 236 249 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui2 {
  --tw-text-opacity: 1;
  color: rgb(184 242 126 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui3 {
  --tw-text-opacity: 1;
  color: rgb(211 253 169 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui4 {
  --tw-text-opacity: 1;
  color: rgb(219 208 110 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui5 {
  --tw-text-opacity: 1;
  color: rgb(243 233 142 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui6 {
  --tw-text-opacity: 1;
  color: rgb(253 248 207 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui7 {
  --tw-text-opacity: 1;
  color: rgb(255 247 180 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui8 {
  --tw-text-opacity: 1;
  color: rgb(236 255 211 / var(--tw-text-opacity));
} .text-graph-seibi-bunrui9 {
  --tw-text-opacity: 1;
  color: rgb(151 190 231 / var(--tw-text-opacity));
} .text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
} .text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
} .text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
} .text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
} .text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
} .text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
} .text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
} .text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity));
} .text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(22 101 52 / var(--tw-text-opacity));
} .text-green-tin {
  --tw-text-opacity: 1;
  color: rgb(218 255 224 / var(--tw-text-opacity));
} .text-input {
  --tw-text-opacity: 1;
  color: rgb(198 198 202 / var(--tw-text-opacity));
} .text-link {
  --tw-text-opacity: 1;
  color: rgb(0 0 238 / var(--tw-text-opacity));
} .text-neutral {
  --tw-text-opacity: 1;
  color: rgb(227 226 230 / var(--tw-text-opacity));
} .text-neutral-dark {
  --tw-text-opacity: 1;
  color: rgb(93 94 98 / var(--tw-text-opacity));
} .text-neutral-dark-bg {
  --tw-text-opacity: 1;
  color: rgb(171 171 174 / var(--tw-text-opacity));
} .text-neutral-dark-text {
  --tw-text-opacity: 1;
  color: rgb(93 94 98 / var(--tw-text-opacity));
} .text-neutral-screen {
  --tw-text-opacity: 1;
  color: rgb(241 240 244 / var(--tw-text-opacity));
} .text-neutral-thin {
  --tw-text-opacity: 1;
  color: rgb(84 95 112 / var(--tw-text-opacity));
} .text-number-plate-dark {
  --tw-text-opacity: 1;
  color: rgb(67 71 78 / var(--tw-text-opacity));
} .text-others-error-push {
  --tw-text-opacity: 1;
  color: rgb(149 0 0 / var(--tw-text-opacity));
} .text-others-green {
  --tw-text-opacity: 1;
  color: rgb(64 147 82 / var(--tw-text-opacity));
} .text-others-green-light {
  --tw-text-opacity: 1;
  color: rgb(218 255 224 / var(--tw-text-opacity));
} .text-others-green-thin {
  --tw-text-opacity: 1;
  color: rgb(218 255 224 / var(--tw-text-opacity));
} .text-others-orenge {
  --tw-text-opacity: 1;
  color: rgb(229 137 0 / var(--tw-text-opacity));
} .text-others-pale-blue {
  --tw-text-opacity: 1;
  color: rgb(140 180 218 / var(--tw-text-opacity));
} .text-others-placeholder {
  --tw-text-opacity: 1;
  color: rgb(116 119 127 / var(--tw-text-opacity));
} .text-others-primary-hover {
  color: #1f60a214;
} .text-others-primary-light {
  --tw-text-opacity: 1;
  color: rgb(13 126 241 / var(--tw-text-opacity));
} .text-others-primary-push {
  --tw-text-opacity: 1;
  color: rgb(0 49 92 / var(--tw-text-opacity));
} .text-others-side-bar-bottom {
  --tw-text-opacity: 1;
  color: rgb(135 178 219 / var(--tw-text-opacity));
} .text-others-side-bar-top {
  --tw-text-opacity: 1;
  color: rgb(17 88 154 / var(--tw-text-opacity));
} .text-others-sidebar-bottom {
  --tw-text-opacity: 1;
  color: rgb(135 178 219 / var(--tw-text-opacity));
} .text-others-sidebar-hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
} .text-others-sidebar-top {
  --tw-text-opacity: 1;
  color: rgb(17 88 154 / var(--tw-text-opacity));
} .text-others-yellow {
  --tw-text-opacity: 1;
  color: rgb(255 243 136 / var(--tw-text-opacity));
} .text-pale-blue {
  --tw-text-opacity: 1;
  color: rgb(163 201 255 / var(--tw-text-opacity));
} .text-primary {
  --tw-text-opacity: 1;
  color: rgb(31 96 162 / var(--tw-text-opacity));
} .text-primary-hover {
  color: color-mix(in srgb, #1f60a2 8%, transparent);
} .text-primary-push {
  --tw-text-opacity: 1;
  color: rgb(0 49 92 / var(--tw-text-opacity));
} .text-primary-thin {
  --tw-text-opacity: 1;
  color: rgb(235 241 255 / var(--tw-text-opacity));
} .text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
} .text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity));
} .text-table-bg-th-default {
  --tw-text-opacity: 1;
  color: rgb(245 245 245 / var(--tw-text-opacity));
} .text-table-bg-th-syakensyo {
  --tw-text-opacity: 1;
  color: rgb(241 240 244 / var(--tw-text-opacity));
} .text-table-border-th-default {
  --tw-text-opacity: 1;
  color: rgb(195 198 207 / var(--tw-text-opacity));
} .text-table-border-th-syakensyo {
  --tw-text-opacity: 1;
  color: rgb(198 198 202 / var(--tw-text-opacity));
} .text-text-base {
  --tw-text-opacity: 1;
  color: rgb(51 51 51 / var(--tw-text-opacity));
} .text-text-base-light {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity));
} .text-text-disabled {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity));
} .text-text-error {
  --tw-text-opacity: 1;
  color: rgb(186 26 26 / var(--tw-text-opacity));
} .text-text-link {
  --tw-text-opacity: 1;
  color: rgb(0 0 238 / var(--tw-text-opacity));
} .text-text-primary {
  --tw-text-opacity: 1;
  color: rgb(31 96 162 / var(--tw-text-opacity));
} .text-text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
} .text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
} .text-yellow {
  --tw-text-opacity: 1;
  color: rgb(255 239 100 / var(--tw-text-opacity));
} .underline {
  text-decoration-line: underline;
} .opacity-0 {
  opacity: 0;
} .opacity-100 {
  opacity: 1;
} .opacity-50 {
  opacity: 0.5;
} .opacity-60 {
  opacity: 0.6;
} .opacity-70 {
  opacity: 0.7;
} .opacity-80 {
  opacity: 0.8;
} .shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-1 {
  --tw-shadow: 0px 4px 15px 0px rgba(164,164,164,0.2);
  --tw-shadow-colored: 0px 4px 15px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-2 {
  --tw-shadow: 0px 4px 30px 0px rgba(155,155,155,0.2);
  --tw-shadow-colored: 0px 4px 30px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-3 {
  --tw-shadow: 0px 4px 15px 0px rgba(72,72,72,0.2);
  --tw-shadow-colored: 0px 4px 15px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-\\[0px_4px_4px_0px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.25\\)\\] {
  --tw-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  --tw-shadow-colored: 0px 4px 4px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-elevation-2 {
  --tw-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  --tw-shadow-colored: 0px 3px 1px -2px var(--tw-shadow-color), 0px 2px 2px 0px var(--tw-shadow-color), 0px 1px 5px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-input-focus {
  --tw-shadow: 0px 0px 6px 0px #2158C3;
  --tw-shadow-colored: 0px 0px 6px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
} .outline {
  outline-style: solid;
} .outline-1 {
  outline-width: 1px;
} .outline-offset-\\[-1px\\] {
  outline-offset: -1px;
} .blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
} .filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
} .transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
} .transition-\\[grid-template-rows\\] {
  transition-property: grid-template-rows;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
} .transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
} .transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
} .transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
} .transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
} .duration-150 {
  transition-duration: 150ms;
} .duration-200 {
  transition-duration: 200ms;
} .duration-300 {
  transition-duration: 300ms;
} .ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
} .before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
} .before\\:top-0::before {
  content: var(--tw-content);
  top: 0px;
} .before\\:top-px::before {
  content: var(--tw-content);
  top: 1px;
} .before\\:border-x-\\[10px\\]::before {
  content: var(--tw-content);
  border-left-width: 10px;
  border-right-width: 10px;
} .before\\:border-t-\\[10px\\]::before {
  content: var(--tw-content);
  border-top-width: 10px;
} .before\\:border-transparent::before {
  content: var(--tw-content);
  border-color: transparent;
} .before\\:border-t-back-ground-black::before {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(58 60 64 / var(--tw-border-opacity));
} .before\\:border-t-border-base::before {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(204 204 204 / var(--tw-border-opacity));
} .after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
} .after\\:border-x-\\[10px\\]::after {
  content: var(--tw-content);
  border-left-width: 10px;
  border-right-width: 10px;
} .after\\:border-t-\\[10px\\]::after {
  content: var(--tw-content);
  border-top-width: 10px;
} .after\\:border-transparent::after {
  content: var(--tw-content);
  border-color: transparent;
} .after\\:border-t-back-ground-black::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(58 60 64 / var(--tw-border-opacity));
} .after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity));
} .last\\:border-b-0:last-child {
  border-bottom-width: 0px;
} .focus-within\\:border-primary:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(31 96 162 / var(--tw-border-opacity));
} .focus-within\\:shadow-input-focus:focus-within {
  --tw-shadow: 0px 0px 6px 0px #2158C3;
  --tw-shadow-colored: 0px 0px 6px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .focus-within\\:shadow-none:focus-within {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} .active\\:top-1:active {
  top: 0.25rem;
} .active\\:top-\\[2px\\]:active {
  top: 2px;
} .disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
} .disabled\\:border-disabled-bg:disabled {
  --tw-border-opacity: 1;
  border-color: rgb(241 240 244 / var(--tw-border-opacity));
} .disabled\\:\\!bg-disabled-bg:disabled {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(241 240 244 / var(--tw-bg-opacity)) !important;
} .disabled\\:bg-disabled-bg:disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(241 240 244 / var(--tw-bg-opacity));
} .disabled\\:\\!text-white:disabled {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
} .disabled\\:text-disabled-text:disabled {
  color: #00000059;
} .disabled\\:shadow-none:disabled {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
} @media(hover:hover) {

  .hover\\:flex:where(:-moz-any-link, :enabled, summary, div):hover {
    display: flex;
  }

  .hover\\:flex:where(:any-link, :enabled, summary, div):hover {
    display: flex;
  }

  .hover\\:border-primary:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-border-opacity: 1;
    border-color: rgb(31 96 162 / var(--tw-border-opacity));
  }

  .hover\\:border-primary:where(:any-link, :enabled, summary, div):hover {
    --tw-border-opacity: 1;
    border-color: rgb(31 96 162 / var(--tw-border-opacity));
  }

  .hover\\:bg-\\[\\#E6E6E6\\]:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(230 230 230 / var(--tw-bg-opacity));
  }

  .hover\\:bg-\\[\\#E6E6E6\\]:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(230 230 230 / var(--tw-bg-opacity));
  }

  .hover\\:bg-back-ground-primary-light:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(235 241 255 / var(--tw-bg-opacity));
  }

  .hover\\:bg-back-ground-primary-light:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(235 241 255 / var(--tw-bg-opacity));
  }

  .hover\\:bg-black\\/10:where(:-moz-any-link, :enabled, summary, div):hover {
    background-color: rgb(0 0 0 / 0.1);
  }

  .hover\\:bg-black\\/10:where(:any-link, :enabled, summary, div):hover {
    background-color: rgb(0 0 0 / 0.1);
  }

  .hover\\:bg-black\\/20:where(:-moz-any-link, :enabled, summary, div):hover {
    background-color: rgb(0 0 0 / 0.2);
  }

  .hover\\:bg-black\\/20:where(:any-link, :enabled, summary, div):hover {
    background-color: rgb(0 0 0 / 0.2);
  }

  .hover\\:bg-disabled-bg:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(241 240 244 / var(--tw-bg-opacity));
  }

  .hover\\:bg-disabled-bg:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(241 240 244 / var(--tw-bg-opacity));
  }

  .hover\\:bg-error-hover:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(149 0 0 / var(--tw-bg-opacity));
  }

  .hover\\:bg-error-hover:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(149 0 0 / var(--tw-bg-opacity));
  }

  .hover\\:bg-error-thin:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(255 218 214 / var(--tw-bg-opacity));
  }

  .hover\\:bg-error-thin:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(255 218 214 / var(--tw-bg-opacity));
  }

  .hover\\:bg-gray-100:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }

  .hover\\:bg-gray-100:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }

  .hover\\:bg-gray-300:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(209 213 219 / var(--tw-bg-opacity));
  }

  .hover\\:bg-gray-300:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(209 213 219 / var(--tw-bg-opacity));
  }

  .hover\\:bg-others-primary-hover:where(:-moz-any-link, :enabled, summary, div):hover {
    background-color: #1f60a214;
  }

  .hover\\:bg-others-primary-hover:where(:any-link, :enabled, summary, div):hover {
    background-color: #1f60a214;
  }

  .hover\\:bg-others-primary-push:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(0 49 92 / var(--tw-bg-opacity));
  }

  .hover\\:bg-others-primary-push:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(0 49 92 / var(--tw-bg-opacity));
  }

  .hover\\:bg-primary-hover:where(:-moz-any-link, :enabled, summary, div):hover {
    background-color: color-mix(in srgb, #1f60a2 8%, transparent);
  }

  .hover\\:bg-primary-hover:where(:any-link, :enabled, summary, div):hover {
    background-color: color-mix(in srgb, #1f60a2 8%, transparent);
  }

  .hover\\:bg-primary-thin:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(235 241 255 / var(--tw-bg-opacity));
  }

  .hover\\:bg-primary-thin:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(235 241 255 / var(--tw-bg-opacity));
  }

  .hover\\:bg-red-600:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(220 38 38 / var(--tw-bg-opacity));
  }

  .hover\\:bg-red-600:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(220 38 38 / var(--tw-bg-opacity));
  }

  .hover\\:bg-white:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }

  .hover\\:bg-white:where(:any-link, :enabled, summary, div):hover {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }

  .hover\\:text-headline-small:where(:-moz-any-link, :enabled, summary, div):hover {
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0px;
    font-weight: 700;
  }

  .hover\\:text-headline-small:where(:any-link, :enabled, summary, div):hover {
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0px;
    font-weight: 700;
  }

  .hover\\:font-bold:where(:-moz-any-link, :enabled, summary, div):hover {
    font-weight: 700;
  }

  .hover\\:font-bold:where(:any-link, :enabled, summary, div):hover {
    font-weight: 700;
  }

  .hover\\:text-gray-600:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
  }

  .hover\\:text-gray-600:where(:any-link, :enabled, summary, div):hover {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
  }

  .hover\\:text-primary:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-text-opacity: 1;
    color: rgb(31 96 162 / var(--tw-text-opacity));
  }

  .hover\\:text-primary:where(:any-link, :enabled, summary, div):hover {
    --tw-text-opacity: 1;
    color: rgb(31 96 162 / var(--tw-text-opacity));
  }

  .hover\\:text-red-500:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity));
  }

  .hover\\:text-red-500:where(:any-link, :enabled, summary, div):hover {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity));
  }

  .hover\\:text-white:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .hover\\:text-white:where(:any-link, :enabled, summary, div):hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .hover\\:opacity-100:where(:-moz-any-link, :enabled, summary, div):hover {
    opacity: 1;
  }

  .hover\\:opacity-100:where(:any-link, :enabled, summary, div):hover {
    opacity: 1;
  }

  .hover\\:shadow-elevation-4:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.20), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    --tw-shadow-colored: 0px 2px 4px -1px var(--tw-shadow-color), 0px 4px 5px 0px var(--tw-shadow-color), 0px 1px 10px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .hover\\:shadow-elevation-4:where(:any-link, :enabled, summary, div):hover {
    --tw-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.20), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    --tw-shadow-colored: 0px 2px 4px -1px var(--tw-shadow-color), 0px 4px 5px 0px var(--tw-shadow-color), 0px 1px 10px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .hover\\:shadow-md:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .hover\\:shadow-md:where(:any-link, :enabled, summary, div):hover {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .hover\\:shadow-none:where(:-moz-any-link, :enabled, summary, div):hover {
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .hover\\:shadow-none:where(:any-link, :enabled, summary, div):hover {
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
} @media (min-width: 768px) {

  .md\\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .md\\:block {
    display: block;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:min-h-\\[200px\\] {
    min-height: 200px;
  }

  .md\\:min-h-\\[300px\\] {
    min-height: 300px;
  }

  .md\\:min-h-\\[400px\\] {
    min-height: 400px;
  }

  .md\\:max-w-\\[180px\\] {
    max-width: 180px;
  }

  .md\\:max-w-\\[200px\\] {
    max-width: 200px;
  }

  .md\\:max-w-\\[300px\\] {
    max-width: 300px;
  }

  .md\\:max-w-\\[400px\\] {
    max-width: 400px;
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
} @media (min-width: 1024px) {

  .lg\\:flex-row {
    flex-direction: row;
  }

  .lg\\:items-start {
    align-items: flex-start;
  }
} @media (prefers-color-scheme: dark) {

  .dark\\:bg-gray-700 {
    --tw-bg-opacity: 1;
    background-color: rgb(55 65 81 / var(--tw-bg-opacity));
  }
}`,d="theme-style",n=class n extends m{constructor(r=""){super(),this.fixedTheme=null,this.args="",this.currentTheme="blue",this.args=r,this.currentTheme=localStorage.getItem(p),this.currentTheme&&document.documentElement.setAttribute("data-theme",this.currentTheme),window.addEventListener("theme-change",t=>{this.handleThemeChange(t,{childStyles:r})})}attatchStyles(r){this.handleThemeChange({detail:{theme:this.currentTheme}},{childStyles:r})}updated(r){var t;(t=this.shadowRoot)!=null&&t.getElementById(d)||this.attatchStyles(this.args)}async handleThemeChange(r,t={childStyles:""}){var g,s,w;const e=(g=r==null?void 0:r.detail)==null?void 0:g.theme;this.currentTheme=e,e&&document.documentElement.setAttribute("data-theme",e);let a=(s=this.shadowRoot)==null?void 0:s.getElementById(d);a||(a=document.createElement("style"),a.id=d,(w=this.shadowRoot)==null||w.appendChild(a));let b="";t.childStyles&&(b+=t.childStyles),a.textContent!==b&&(a.textContent=b),this.fixedTheme&&(a.textContent=await S(Object.assign({"../../../../public/styles/dist/output-blue.module.css":()=>i(()=>import("./output-blue.module-BxY_4OLS.js"),[],import.meta.url),"../../../../public/styles/dist/output-darkBlue.module.css":()=>i(()=>import("./output-darkBlue.module-C8kT_fVD.js"),[],import.meta.url),"../../../../public/styles/dist/output-darkCyan.module.css":()=>i(()=>import("./output-darkCyan.module-Ag1RrAAu.js"),[],import.meta.url),"../../../../public/styles/dist/output-green.module.css":()=>i(()=>import("./output-green.module-piq-YIBl.js"),[],import.meta.url),"../../../../public/styles/dist/output-monitoring.module.css":()=>i(()=>import("./output-monitoring.module-CTB-KYOR.js"),[],import.meta.url),"../../../../public/styles/dist/output-networkLine.module.css":()=>i(()=>import("./output-networkLine.module-BMwj_cTp.js"),[],import.meta.url),"../../../../public/styles/dist/output-orange.module.css":()=>i(()=>import("./output-orange.module-DXlZCkSi.js"),[],import.meta.url),"../../../../public/styles/dist/output-purple.module.css":()=>i(()=>import("./output-purple.module-CNOflUYb.js"),[],import.meta.url),"../../../../public/styles/dist/output-red.module.css":()=>i(()=>import("./output-red.module-CTZWRJyE.js"),[],import.meta.url)}),`../../../../public/styles/dist/output-${this.fixedTheme}.module.css`,8).then(u=>u.default)+t.childStyles,document.documentElement.setAttribute("data-theme",this.fixedTheme))}};n.styles=j;let l=n;export{l as E,y as g,M as t};
