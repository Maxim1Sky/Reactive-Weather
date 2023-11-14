import sunny from "../assets/Sunny.svg";
import cloudy from "../assets/Cloudy.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";

function findIcon(frcs) {
  if (frcs === "Sunny") return sunny;
  if (frcs === "Cloudy") return cloudy;
  if (frcs === "Rainy") return rainy;
  if (frcs === "Partly cloudy") return partlyCloudy;
}

module.exports = findIcon;
