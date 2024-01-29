import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  // get the stuff from the api
  const response = await fetch(colorApiUrl);
  const colors = await response.json();
  console.log(colors);

  // console log some values...
  // .name.closest_named_hex
  console.log(colors.name.closest_named_hex);
  // .name.value
  console.log(colors.name.value);

  // call the setColorsToGuess function
  setColorToGuess(colors.name.closest_named_hex, colors.name.value);

  return colors;

  // --^-- your code here --^--
}
