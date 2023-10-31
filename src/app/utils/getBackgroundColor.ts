export function getBackgroundColor(bgColorProp: any, bgOpacityProp: number) {
  if (bgColorProp) {
    if (typeof bgColorProp === "string") {
      if (bgColorProp[0] === "#") {
        let hexColor = bgColorProp.slice(1);

        if (hexColor.length === 3) {
          // If the hexadecimal value is 3 digits, expand to 6 digits by doubling each digit
          hexColor = hexColor
            .split("")
            .map((digit: any) => digit + digit)
            .join("");
        }

        if (/^[0-9A-Fa-f]{6}$/g.test(hexColor)) {
          const hexValue = parseInt(hexColor, 16);
          const red = (hexValue >> 16) & 255;
          const green = (hexValue >> 8) & 255;
          const blue = hexValue & 255;
          return `rgba(${red}, ${green}, ${blue}, ${bgOpacityProp || 1})`;
        }
      } else if (bgColorProp.includes(",")) {
        // If bgColorProp contains commas, it might be an RGB or RGBA value
        const components = bgColorProp
          .split(",")
          .map((component) => component.trim());
        if (components.length === 3 || components.length === 4) {
          const red = parseInt(components[0]);
          const green = parseInt(components[1]);
          const blue = parseInt(components[2]);
          const alpha = bgOpacityProp || 1;

          if (
            Number.isInteger(red) &&
            red >= 0 &&
            red <= 255 &&
            Number.isInteger(green) &&
            green >= 0 &&
            green <= 255 &&
            Number.isInteger(blue) &&
            blue >= 0 &&
            blue <= 255 &&
            alpha >= 0 &&
            alpha <= 1
          ) {
            return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
          }
        }
      }
    }
  }
  return bgColorProp;
}
