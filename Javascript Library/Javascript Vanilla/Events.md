# Events in JS

## HTML DOM Events

    DOMContentLoaded  # document
    blur              # input / textarea
    click             # any visible element
    change            # select
    focus             # any visible element
    keyup             # window / any focused element
    mouseover         # any visible element
    resize            # window
    scroll            # window / any scrollable element
    submit            # form
    touchstart        # for mobile devices

## Event Listener

    element.addEventListener(eventType, (event) => {
      // Do something (**callback**)
    });

## Iteration

To put a mic on each element you selected with `document.querySelectorAll`()

## Prevent Default Behavior

When a link automatically take you to another directly after a click, you cannot listening this event.

So you **"prevent the default behavior"**.

    const link = document.querySelector("link");
    link.addEventListener("click", (event) => {
      event.preventDefault(); // stops the browser following the link
      console.log("Cliked the link!");
    })
