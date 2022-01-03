async function getmenu() {
    try {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=e`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      appnedMeal(data);
    } catch (er) {
      console.log(er);
    }
  }
  getmenu();
  var cart = [];
  var Tprice = [];

  function appnedMeal(data) {
    data.meals.map(function (ele) {
      var div = document.createElement("div");
      var image = document.createElement("img");
      image.src = ele.strMealThumb;

      var name = document.createElement("p");
      name.textContent = ele.strMeal;

      var price = document.createElement("p");
      price.textContent =
        "Rs" + " " + Math.floor(Math.random() * (500 - 100 + 1) + 100);

      var add_to_cart = document.createElement("button");
      add_to_cart.textContent = "Add to Cart";
      add_to_cart.addEventListener("click", function () {
        addToCart(ele, price);
      });

      div.append(image, name, price, add_to_cart);
      document.querySelector("#dishes").append(div);
    });
  }

  function addToCart(ele, price) {
    cart.push(ele);
    var count = cart.length;
    document.querySelector("#count").textContent = count;
    Tprice.push(price);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("Tprice", JSON.stringify(Tprice));
  }