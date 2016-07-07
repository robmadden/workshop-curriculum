var getColorType = function(color) {
  var message;
  
  switch (color) {
    case "red":
    case "blue":
    case "yellow":
      message = "The color " + color + " is a primary color!";
      break;
    case "orange":
    case "violet":
    case "green":
      message = "The color " + color + " is a secondary color!";
      break;
    default:
      message = "Sorry, I don't know that color.";
  }
  return message;
};
