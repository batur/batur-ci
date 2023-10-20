#!/usr/bin/env node

import figlet from "figlet";

figlet.text(
  "Batur",
  {
    font: "Cyberlarge",
  },
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  }
);
