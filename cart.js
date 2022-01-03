var cart_item = JSON.parse(localStorage.getItem("cart"));
  display(cart_item);

  function display(cart_item) {
    cart_item.map(function (ele, index) {
      var div = document.createElement("div");
      var image = document.createElement("img");
      image.src = ele.strMealThumb;

      var button = document.createElement("button");
      button.textContent = "Remove";
      button.addEventListener("click", function () {
        remove(index);
      });
      div.append(image, button);

      document.querySelector("#cart_items").append(div);
    });
  }

  function remove(index) {
    cart_item.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart_item));
    // display(cart_item);
  }