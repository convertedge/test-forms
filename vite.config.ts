import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "https://convertedge.github.io/test-forms",
  build: {
    rollupOptions: {
      input: {
        // key = final output path, value = source html file
        main: resolve(__dirname, "index.html"),
        complex: resolve(__dirname, "complex.html"),
        "email-text": resolve(__dirname, "email-text.html"),
        "no-form": resolve(__dirname, "no-form.html"),
        "one-email": resolve(__dirname, "one-email.html"),
        "one-phone": resolve(__dirname, "one-phone.html"),
        "phone-and-email": resolve(__dirname, "phone-and-email.html"),
        "phone-phone": resolve(__dirname, "phone-phone.html"),
        "phone-text": resolve(__dirname, "phone-text.html"),
        "shortify-test": resolve(__dirname, "shortify-test.html"),
        "two-email": resolve(__dirname, "two-email.html"),
      },
    },
  },
});
