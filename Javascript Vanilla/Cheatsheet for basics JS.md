# JS & DOM

### :camel: <span style="color:red;">**lowerCamelCase**</span> :camel:

### :warning: <span style="color:red;">Use **semicolon ";"** to end a statement</span> :warning:

    A statement is considered a complete piece of code that expresses an action, like assigning a value to a variable, or invoking a function.

### :grey_exclamation: <span style="color:red;">equality for comparison => " === " not " == "</span> :grey_exclamation:

### <span style="color:orange;">Types in JS</span>

>| String | Number | Boolean |
>|--------|--------|---------|
>| "Hello" | 42 /3,14 | True / False |

### <span style="color:orange;">Checking types</span>

>**typeof**("Boris")<br>
>// => `string`

### <span style="color:orange;">Casting types</span>

>Number.**parseInt**('42', 10);
(42).**toString**;

### <span style="color:orange;">Data structure</span>

>| [ 'Hello', 'Le', 'Wagon', 42 ] | { name: 'bob', age: 42 } // { 'name': 'bob', 'age': 42 }
>|--------------------------------|--------------------------------------------------------|
>| => **Array** | => **Object** |

### <span style="color:orange;">Arrays</span>

    const fruits = [];
    fruits.push("Apple");    // Create
    fruits[0];               // Read
    fruits[0] = "Banana";    // Update
    fruits.splice(0, 1);     // Delete (1 item at index 0)

### <span style="color:orange;">Objects</span>

Defining an object

    const student = {
      firstName: "Boris",
      lastName: "Paillard"
    };

    console.log(typeof student);
      // => "object"
    console.log(student);

Reading a property:

    console.log(student.firstName);
      // => "Boris"
    console.log(student['firstName']);    // Another way
      // => "Boris"

Setting a property:

    student.firstName = "Romain";
    console.log(student.firstName);
      // => "Romain"

### <span style="color:orange;">Null & Undefined</span>

    let age;  // undefined
    let name = null;

### <span style="color:orange;">Interpolation</span>

:mag: Use backtips **\` \`** and **$**

    const firstName = "Ringo";
    const lastName = "Starr";

    const message = `${firstName} ${lastName} is a drummer`;
      // => "Ringo Starr is a drummer";

### <span style="color:orange;">Control flow</span>

    const age = 14;

    if (age >= 18) {
      console.log("You can vote");
    } else {
      console.log("You can't vote");
    }

#### <span style="color:yellow;">_Falsy values_</span>

    false
    undefined
    null
    0
    NaN
    ""

#### <span style="color:yellow;">_Ternary operator_</span>

    const raining = true;
    const accessory = (raining ? "umbrella" : "sunglasses");
    // => "umbrella"

### <span style="color:orange;">Variables</span>

`let` variables can be **reassigned** with another value

    let total = 0;
    total += 1;

with `const` variables reassignment is **forbidden**

    const fullName = "Sebastien Saunier";
    const message  = `Hello ${fullName}`;

### <span style="color:orange;">Named functions</span>

    function sayHi(name) {
      return `Hi, ${name}!`;
    }

    const sayHello = (name) => {
      return `Hello, ${name}!`;
    }
      // Fat Arrow function

    const sayHello = (name) => `Hello, ${name}!`;
      // Inline arrow function, with implicit return

    sayHi("Seb");
      // Hi, Seb!

    sayHello("Seb");
      // Hello, Seb!

#### <span style="color:yellow;">_Anonymous function_</span>

    () => {
      // SOMETHING SMART
    }
