document.querySelector("button").addEventListener("click", function () {
    setTimeout(alert("Your Order is Accepted"), 3000);

    setTimeout(() => {
      alert("Your Order is being cooked ");
    }, 8000);

    setTimeout(() => {
      alert("Your Order is ready ");
    }, 10000);

    setTimeout(() => {
      alert("Your Order out for delivery ");
    }, 12000);
  });