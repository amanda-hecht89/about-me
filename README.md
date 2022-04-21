## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
//drew in scetchbook//
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
// I need: a header, a h1, and paragraph inside are my div-pronouns and div-location. Another paragraph is my favorite animal, containg a button and a photo. Footer containing date and greeting.//  
1. **For each HTML element ask: Why do I need this?**
//header: contains metadata//
//h1: introduction//
//div: to contain pronouns//
//div: to contain location//
//paragraph: animal and hidden button with photo// 
//footer: closing of the website//
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
//h1: add title of website.//
//add divs for pronoun and location.//
//add button for hidden photo of animal.//
//add photo off animal to button.//
//add footer for clsoing of website//
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
// when website loads image ishidden. Visitor clicks on button and a photo appears. when visitor reloads page image disappears.//
1. **Think about how to validate each of your features according to a Definition of Done**
//console.log() each item to confirm that its correct. cal also check in github for correct syntax of code.//
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
//1: event listener for button existance//
//2: hidden image//
//3: add image//
//4: check to see if worked.// 
Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
