// .storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      {
        name: "Light Bg",
        value: "#fcfcfc",
      },
      {
        name: "Dark Bg",
        value: "#333333",
      },
    ],
  },
};
