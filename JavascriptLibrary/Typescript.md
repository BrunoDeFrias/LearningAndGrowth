Ce fichier correspond au prise de notes de ma lecture sur Typescript du site :

### [The Valley of Code](https://thevalleyofcode.com/typescript/1-first-typescript-program)

* ⚠️ **compiles to Javascript**
* `.ts` files ✅
* **Superset** of Javascript => _Javascript is valid Typescript_

## <span style="color:orange;">Types</span>

🔍 Go or C are typed languages / Python or Ruby are dynamic languages

### What is it ?
A _Rigid structure_ : <br>
You can add types to yous **variables**, **fct arguments** and fct return types

Advatanges :
* the compiler (or editors) `point out bugs` as you write the code thanks to the types
* code become `more explicit` for teamwork

        const greeting : string = "hello!"

### Typing funtions

So we must have **2 types**: the type of the _parameters values_, and the type of _the return value_.

    const multiply = (a: number, b: number): number => {
      return a * b
    }

🔦 run `ts-node test.ts` to see the output in the terminal<br>
🔦 `tsc` is the Typecript compiler that create the corresponding `.js` file

### Valid types

Valid types are

* number
* string
* boolean
* void
* null
* undefined
* Array
* …and more.

`any` => catch-call that allows any type

## <span style="color:orange;">Type aliases and interfaces</span>

Type aliases / interface :

    type Dog = { // or interface Dog {
      name: string
      age: number // or age?: number to get optional
    }

Then when you create an object, you set this to be its type :

    const jack: Dog = {
      name: 'Jack',
      age: 3
    }

Type aliases or interfaces are not limited to typing objects, of course:

    interface Pair {
      a: number;
      b: number;
    }

    const multiply = (nums: Pair) => {
      return nums.a * nums.b
    }

    multiply({ a:1, b: 2 })

### Union types

    const run = (a: number | string) => {
      //...
    }

### Typing arrays with generics

    const nums: Array<number> = [1, 2, 3]

We use generics often with `useState` in React:

    type GitHubData = {
      avatar_url: string
      name: string
      created_at: string
      bio: string
    }

    function App() {
      const [data, setData] = useState<GitHubData>()
    }
