# Plum UI

## What is Plum UI

Plum UI is a set of desktop oriented components and directives
for [Vue.js](https://vuejs.org/). I made them for fun, practice and most of all to make my dev life a
little easier. These elements are the ones that I used most of all while making 
varoius web tools and prototypes at work and I kinda like this adobe style for 
UI, so I figured why not make a new component library out of it.

## What can it do?

### Components

- Button
- FileSelect
- Icon
- Input
- Range
- Scroller
- Table
- ToggleGroup
- Window

### Directives
- Draggable
- Resizable
- Dropbox

## Components

### PlmInput

`<plm-input>` is just a stylized input element with no specific behaviour.

#### Example

<p data-height="180" data-theme-id="light" data-slug-hash="LNvMwR" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/LNvMwR/">PlmInput</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmIcon

Plum UI comes with a set of default icons that are used in other components. 
Icons are stored in `dev/assets/icons` and webpack is already configured to make 
a font out of them. So feel free to add your own icons to the set.

`<plm-icon>` element used to place them in templates.

#### Props

Name | Type | Description
 --- | --- | ---
`icon` | `String` | Icon name

#### Example

<p data-height="180" data-theme-id="light" data-slug-hash="zqXeOG" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/zqXeOG/">PlmIcon</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmButton 

`<plm-button>` is a styled button with standart behaviour with two additional props.

#### Props

Name | Type | Values | Description
 --- | --- | --- | ---
`toggled` | `Boolean` | | Adds additional styling to button to make it look toggled depending on the value
`group` | `String` | `'first', 'last', ''` | Adds additional styling to buttons to make them look like a group

#### Example

<p data-height="265" data-theme-id="light" data-slug-hash="YqMZpq" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/YqMZpq/">PlmButton</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmToggleGroup

`<plm-toggle-group>` is a radio or checkbox-like inputs, rendered with buttons as toggle elements

#### Props

Name | Type | Description
 --- | --- | ---
`values` | `Array<Object>` | Array of toggle values: `{ value, <label>, <disabled> }`
`selected` | `String` or `Array` | Selected value
`multiple` | `Boolean` | Checkbox or radio behaviour
`group` | `Boolean` | Adds additional styling to toggles to make them look like a group

#### Example

<p data-height="265" data-theme-id="light" data-slug-hash="LNvMMN" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/LNvMMN/">PlmToggleGroup</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmRange

`<plm-range>` is a range selector that comes in two forms: stepper or slider. 
Label for the input could be provided with unnamed `<slot>` inside element.

#### Props

Name | Type | Values | Description
 --- | --- | --- | ---
`min` | `Number` | | Minimum value
`max` | `Number` | | Maximum value
`type` | `String` | `'stepper', 'slider'` | Range type
`step` | `Number` | | Range step
`unit` | `String` | | Unit label
`value` | `Number` | | Input value

#### Example

<p data-height="385" data-theme-id="light" data-slug-hash="bpJQyq" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/bpJQyq/">PlmRange</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmFileSelect

`<plm-file-select>` is a replacement of the default `input[type="file"]` element 
and additional support of drag and drop mode.

#### Props

Name | Type | Description
 --- | --- | ---
`dropbox` | `Boolean` | Enable drag and drop mode

#### Events

Name | Description
 --- | ---
`file-change` | Event emitted when file in the input changes

#### Example

<p data-height="340" data-theme-id="light" data-slug-hash="jqRXNa" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/jqRXNa/">PlmFileSelect</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmTable

`<plm-table>` allows you to easily display a set of tabular data with optional 
pagination. Table columns could be represented with simple strings or an object
to provide additional configuration.

#### Props

Name | Type | Description
 --- | --- | ---
`headers` | `Array<String>` or `Array<Object>` | An array of headers. Could be just key names or an object `{ key, <label>, <width> }`
`values` | `Array<RowValues>` | Array of displayed values. Keys must correspond to ones, provided in `headers` prop
`pagination` | `Number` | Optional pagination value

#### Example

<p data-height="1000" data-theme-id="light" data-slug-hash="GZLPXE" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/GZLPXE/">PlmTable</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmScroller

`<plm-scroller>` provides a scrollable container with stylable scroll tracks and thumbs

#### Example

<p data-height="895" data-theme-id="light" data-slug-hash="wGZRjp" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/wGZRjp/">PlmScroller</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmWindow

`<plm-window>` is a window component with three slots avaliable:

 - `content` - main content of the window
 - `header` - window header
 - `footer` - window footer

Window could be minimized and go fullscreen. By default window is draggable and resizable, but this could be changed 
with additional props.

#### Props

Name | Type | Description
 --- | --- | ---
`draggable` | `Boolean` | Allows window to be draggable
`resizable` | `Boolean` | Allows window to be resizable

#### Events

Name | Description
 --- | ---
`close` | Event emitted when close button is clicked

#### Example

<p data-height="720" data-theme-id="light" data-slug-hash="NNmeez" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/NNmeez/">PlmWindow</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Directives

### PlmDraggable

`v-plm-draggable` directive makes element draggable, additional configuration avaliable
with params

#### Params

Name | Type | Values | Description
 --- | --- | --- | ---
`top` | `Number` | | Initial `top` position of the element
`left` | `Number` | | Initial `left` position of the element
`container` | `String` | | DOM query selector for element, that draggable element won't be able to leave
`handle` | `String` | | DOM query selector for element, that will activate dragging
`dragAxis` | `String` | `'x', 'y', 'xy'` | Active drag axis for the element, if not provided defaults to `'xy'`
`dragDisabled` | `Boolean` | | Disable dragging

#### Example

<p data-height="651" data-theme-id="light" data-slug-hash="KzLdmg" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/KzLdmg/">PlmDraggable</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmResizable

`v-plm-resizable` directive makes element resizable, additional configuration avaliable
with params

#### Params

Name | Type | Values | Description
 --- | --- | --- | ---
`width` | `Number` | | Initial `width` of the element
`height` | `Number` | | Initial `height` of the element
`resAxis` | `String` | `'x', 'y', 'xy'` | Active resize axis for the element, if not provided defaults to `'xy'`
`resDisabled` | `Boolean` | | Disable resizing

#### Example

<p data-height="352" data-theme-id="light" data-slug-hash="xVNwNm" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/xVNwNm/">PlmResizable</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### PlmDropbox

`v-plm-dropbox` directive allows you to drop files on the element. No events fired
on drop, but directive supports `twoWay` to set data on the passed value. Right now only 
supports files.

#### Example

<p data-height="239" data-theme-id="light" data-slug-hash="regmre" data-default-tab="result" data-user="gribnoysup" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/gribnoysup/pen/regmre/">PlmDropbox</a> by Sergey (<a href="http://codepen.io/gribnoysup">@gribnoysup</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## License

MIT
