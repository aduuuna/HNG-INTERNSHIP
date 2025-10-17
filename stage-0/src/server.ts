import json = require("express");
import express = require("express");

const app = express()


app.get("/me", async (req, res) => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();

    const result = {
      "status" : "success",
      "user" : {
        "email": "owusujoyansah@gmail.com",
        "name": "Joy Owusu Ansah",
        "stack": "Node.js/Express",
      },
      "timestamp": new Date().toISOString(),
      "fact": data.fact,
    };

    res.json(result);

  } catch(error) {
    console.error("There was an error fetching cat fact:", error);
    res.status(500).json({status: "error", message: "Something went wrong"});
  }
});


app.listen(3000, () => {
  console.log("Server is running. Check it out on http://localhost:3000")
});