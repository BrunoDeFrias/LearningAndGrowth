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

⚠️ fct declarations don't worry about **hoisting**, not the case for arrow functions !

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

By leveraging JavaScript operators like the ternary, &&, and ||, one can **conditionally render JSX elements** in React based on variable state, streamlining code and clarifying rendering logic.

    import React from "react";

    function App() {
      const isLoggedIn = true;

      if (isLoggedIn) {
        // Shows: Welcome back!
        return <div>Welcome back!</div>;
      }
      return <div>Who are you?</div>;
    }

    // Shows: Welcome back! using de ternary operator
      return isLoggedIn ? <div>Welcome back!</div> : <div>Who are you?</div>;
    }
    // or inside curly braces
      return <div>{isLoggedIn ? "Welcome back!" : "Who are you?"}</div>;
    }
    // If true: Welcome back!, if false: nothing
      return <div>{isLoggedIn && "Welcome back!"}</div>;
    }
     // If true: nothing, if false: Who are you?
      return <div>{isLoggedIn || "Who are you?"}</div>;
    }

    export default App;

## <span style="color:#007FFF;">Three Array Methods: .map(), .filter(), .reduce()</span>

In React, JSX elements can easily incorporate primitive values using curly braces, and arrays can be iterated over using the **.map()** method for rendering each element individually. Additional array methods like **.filter()** can be chained for filtering elements, while understanding that both .map() and .filter() are variations of the **.reduce()** method, capable of transforming array values into any data type, including non-array values.

    import React from "react";

    function App() {
      const programmers = ["Reed", "John", "Jane"];

      return (
        <ul>
          {/* Returns 'Reed' */}
          {programmers
            .filter((programmer) => !programmer.startsWith("J"))
            .map((programmer) => (
              <li>{programmer}</li>

            // with .reduce ()
            .reduce((acc, programmer) => {
              if (!programmer.startsWith("J")) {
                return acc.concat(programmer);
              } else {
                return acc;
              }
            }, [])
            .map((programmer) => (
              <li>{programmer}</li>
            ))}
        </ul>
      );
    }

    export default App;

## <span style="color:#007FFF;">Object Tricks: Property Shorthand, Destructuring, Spread Operator</span>

- 🔦 **Property Shorthand**: A syntax _to create objects_ concisely by using variables directly as property names and values when they are identical.

        const name = "Reed";
        const user = {
          // instead of name: name, we can use...
          name,
        };
        console.log(user.name); // Reed

- 🔦 **Destructuring**: A syntax _to extract_ values from objects or arrays into separate variables.

        const user = {
          name: "Reed",
          age: 28,
          isEnglishSpeaker: true,
        };

        // Dot property access
        const name = user.name;
        const age = user.age;

        // Object destructuring
        const { age, name, isEnglishSpeaker: knowsEnglish } = user;
        // Use ':' to rename a value as you destructure it

        console.log(knowsEnglish); // true


- 🔦 **Spread Operator**: An operator _to copy properties_ of an object or elements of an array into a new context, like a new object or array.

        const user = {
          name: "Reed",
          age: 28,
        };

        const moreUserInfo = {
          age: 70,
          country: "USA",
        };

        // Copy all of user's properties into secondUser
        const secondUser = {
          ...user,
          ...moreUserInfo,
          computer: "MacBook Pro",
        };

        console.log(secondUser);
        // { name: "Reed", age: 70, country: "USA", computer: "Macbook Pro" }

