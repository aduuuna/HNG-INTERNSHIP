import json = require("express");
import express = require("express");

const app = express()


app.get("/me", async (req, res) => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();

    const result = {
      "status" : "sucess",
      "user" : {
        "email": "owusujoyansah@gmail.com",
        "name": "Joy Owusu Ansah",
        "stack": "Backend development",
      },
      "timesatmp": new Date().toISOString(),
      "fact": data.fact,
    };

    res.json(result);

  } catch(error) {
    console.error("There was an error fecthing cat fact:", error);
    res.status(500).json({message: "Something went wrong"});
  }
});


app.listen(3000, () => {
  console.log("Server is running. Check it out on http://localhost:3000")
});