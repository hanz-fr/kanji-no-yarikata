import { SVG, Svg } from "@svgdotjs/svg.js";
import { useTheme } from "next-themes";

interface IDrawKanjiSVG {
  svg: Promise<string>;
}

const DrawKanjiSVG: React.FC<IDrawKanjiSVG> = ({ svg }) => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme != "system" ? theme : systemTheme;

  const drawKanji = async () => {
    try {
      const svgText = await svg;

      /* Remove ]> or any stray characters from drawing */
      const sanitizedSvgText = svgText?.replace(/]>|<!\[CDATA\[|\]\]>/g, "");

      const container = document.getElementById("drawing-container");
      if (!container) return;

      container.innerHTML = sanitizedSvgText as string;

      const svgElement = container.querySelector("svg");
      if (!(svgElement instanceof SVGElement)) {
        throw new Error("No valid SVG element found in the container.");
      }

      const draw: Svg = SVG(svgElement);
      const strokes = draw.find("path");

      /* Drawing properties */
      strokes.forEach((stroke, index) => {
        stroke.stroke({ color: "#08f3ff", width: 5 }).fill("none");
        stroke.opacity(0);

        setTimeout(() => {
          stroke
            .opacity(1)
            .animate(1000)
            .stroke({
              color: `${currentTheme == "dark" ? "#ffffff" : "#000000"}`,
            });
        }, index * 1000);
      });
    } catch (error) {
      console.error(error);
    }
  };

  drawKanji();

  return <div id="drawing-container" className="flex justify-center" />;
};

export default DrawKanjiSVG;
