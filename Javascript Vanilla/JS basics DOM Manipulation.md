## <span style="color:orange;">Finding elements</span>

    document.getElementById("some-id")

<span style="color:violet;">querySelector</span> returns the **first** element having this class

    document.querySelector(".class-name")

<span style="color:violet;">querySelectorAll</span> returns **all** the elements having this class

    document.querySelectorAll(".class-name")


## <span style="color:orange;">Insert HTML</span>

Using <span style="color:violet;">insertAdjacentHTML()</span>:

    // Select a `<ul>` element
      const list = document.getElementById("some-list-id");

    // Append an `<li>` using `.insertAdjacentHTML`
      list.insertAdjacentHTML("beforeend", "<li>Luke</li>");

Using <span style="color:violet;">appendChild()</span>

    // Select a `<ul>` element
      const list = document.getElementById("some-list-id");

    // Create a `Node` object
      const listItem = document.createElement("li"); // => <li></li>

    // Sets inner text to "Luke"
      listItem.innerHTML = "Luke";

    // Append it to the list
      list.appendChild(listItem);

## <span style="color:orange;">Accessing content</span>

    <a id="link-id" data-sample="hello" href="https://www.lewagon.com/fr">Le Wagon</a>

    const element = document.getElementById("link-id");

      // Get the text inside the `element`
    element.innerText
    element.innerHTML
      // => "Le Wagon"

      // Get the link (href) of `element`
    element.attributes.href.value


    element.dataset.sample
      // => "hello"

      // You can also change or add data to the `element`
    element.dataset.sample = "new value";

## <span style="color:orange;">Styling</span>

    element.style.display = "none";
    element.style.display = "";
<br>

    element.classList.add("red");
    element.classList.remove("red");
    element.classList.toggle("red");
    element.classList.contains("red");
