## <span style="color:#007FFF;">Function Declarations and Arrow Functions<span>

**Component** => JS fct and classes

React components return `JSX elements`

    // JavaScript function: returns any valid JavaScript type
    function javascriptFunction() {
      return "Hello world";
    }

    // React function component: returns JSX
    function ReactComponent(props) {
      return <h1>{props.content}</h1>;
    }

⚠️ React component in _PascalCasing_

#### <span style="color:#FF7F50;">**Function declaration**</span> and <span style="color:#FF7F50;">**arrow function**</span> can be used to write functiun components in React

    // Function declaration syntax
    function MyComponent(props) {
      return <div>{props.content}</div>;
    }

    // Arrow function syntax
    const MyComponent = (props) => {
      return <div>{props.content}</div>;
    };

    // Arrow function syntax (shorthand)
    const MyComponent = (props) => <div>{props.content}</div>;

    /*
    In the last example we are using several shorthands that arrow functions allow:

    1. No parentheses around a single parameter
    2. Implicit return (as compared to using the "return" keyword)
    3. No curly braces for function body
    */

* ⚠️ fct declarations don't worry about **hoisting**, not the case for arrow functions !
* ⚠️


📌  _**hoisting** = In JS, it is the behavior where variable and function declarations are moved to the top of their containing scope before code execution._

## <span style="color:#007FFF;">Template Literals<span>

In ES6, A **template literal** in JS is a string enclosed by backticks ( \` ) that allows for easy and readable variable interpolation and multiline inclusion, as well as **concatenation** with other strings using the **${ }** syntax.

### 🔦 Template Literals In React :
* enable the inclusion of conditional logic using the ternary operator directly within JSX<br>

        import React from "react";

        function App() {
          const [isRedColor, setRedColor] = React.useState(false);

          const toggleColor = () => setRedColor((prev) => !prev);

          return (
            <button
              onClick={toggleColor}
              style={{
                background: isRedColor ? "red" : "black",
                color: "white",
              }}
            >
              Button is {isRedColor ? "red" : "not red"}
            </button>
          );
        }

        export default App;

* make it easy to **create dynamic JSX content** by combining variable values with static strings.


        import React from "react";
        import Head from "./Head";

        function Layout(props) {
          // Shows site name (i.e. Reed Barger) at end of page title
          const title = `${props.title} | Reed Barger`;

          return (
            <>
              <Head>
                <title>{title}</title>
              </Head>
              <main>{props.children}</main>
            </>
          );
        }

## <span style="color:#007FFF;">Short Conditionals: &&, ||, Ternary Operator<span>
