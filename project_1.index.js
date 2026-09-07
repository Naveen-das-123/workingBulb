console.log("Working bulb");
// image
let image = document.body.appendChild(document.createElement("img"));
image.style.width = "100px";
image.style.display = "block";
image.style.marginTop = "30px";
image.setAttribute(
  "src",
  "https://www.freepnglogos.com/uploads/bulb-png/light-bulb-png-transparent-image-png-transparent-best-4.png",
);

// object of bulbON button
let onObj = document.getElementById("on");

// object of bulbOff button
let offObj = document.getElementById("off");

// object of all "on and off" button
let allFunction = document.getElementById("all");

// creating turnON function
const bulbOn = () => {
  offObj.style.cursor = "default";
  image.setAttribute(
    "src",
    "https://thumbs.dreamstime.com/z/incandescent-light-bulb-turned-illustration-30087099.jpg",
  );

  onObj.style.cursor = "not-allowed";
};

// creating turnOff function
const bulbOff = () => {
  onObj.style.cursor = "default";
  image.setAttribute(
    "src",
    "https://www.freepnglogos.com/uploads/bulb-png/light-bulb-png-transparent-image-png-transparent-best-4.png",
  );

  offObj.style.cursor = "not-allowed";
};

// on
const bulb = (event) => {
  // check
  if (event.target.value === "on") {
    image.setAttribute(
      "src",
      "https://thumbs.dreamstime.com/z/incandescent-light-bulb-turned-illustration-30087099.jpg",
    );
    allFunction.innerText = "off";
    event.target.value = "off";
  } else {
    image.setAttribute(
      "src",
      "https://www.freepnglogos.com/uploads/bulb-png/light-bulb-png-transparent-image-png-transparent-best-4.png",
    );
    allFunction.innerText = "on";
    event.target.value = "on";
  }
};
