import { defineComponent, PropType } from "vue";

// https://tailwindcss.com/docs/customizing-colors
import resolveConfig from "tailwindcss/resolveConfig";
import myConfig from "../../tailwind.config.mjs";
import get from "lodash.get";

const tailwindConfig = resolveConfig(myConfig);

function hexRgb(hex: string) {
  hex = hex.replace("#", "");
  const red = parseInt(
    hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16,
  );
  const green = parseInt(
    hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16,
  );
  const blue = parseInt(
    hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16,
  );

  const alpha = parseInt(hex.length === 3 ? "ff" : hex.slice(6, 8), 16);

  return {
    red,
    green,
    blue,
    alpha,
  };
}

export default defineComponent({
  props: {
    color: {
      type: String as PropType<string>,
      default: null,
    },
    textColor: {
      type: String as PropType<string>,
      default: null,
    },
  },

  computed: {
    resolvedColor() {
      return this.resolveColor(this.color);
    },
    resolvedTextColor() {
      return this.resolveColor(this.textColor);
    },

    colorableTextStyle() {
      return {
        color: this.resolvedTextColor ?? this.resolvedColor,
      };
    },

    colorableTextStyleForBackground() {
      return {
        color: this.resolvedTextColor ??
          this.fontColorForBackgroundColor(this.resolvedColor),
      };
    },

    colorableBackgroundStyle() {
      return {
        backgroundColor: this.resolvedColor,
      };
    },
  },

  methods: {
    resolveColor(txt: string) {
      const colors = get(tailwindConfig, ["theme", "colors"]);

      const color = get(colors, txt);

      return typeof color === "string" ? color : txt;
    },
    fontColorForBackgroundColor(backgroundColor: string) {
      const rgb = hexRgb(backgroundColor);

      // alpha is [0,1], while rgb is [0,255]
      if (rgb.alpha * 255 < 150) {
        return "#000";
      } else {
        const o = Math.round(
          (rgb.red * 299 + rgb.green * 587 + rgb.blue * 114) / 1000,
        );
        return o > 125 ? "#000" : "#fff";
      }
    },
  },
});
