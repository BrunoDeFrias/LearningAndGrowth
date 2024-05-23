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
