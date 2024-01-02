const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

app.post("./completion", async (req, res) => {
  const api = "";
  const options = {
    methode: "POST",
    headers: {
      Authorization: `Bearer${api}`,
      Content_type: "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", contet: req.body.message }],
      max_token: 100,
    }),
  };
  try {
    const response = await fetch("url", options);
    const data = response.json();
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
