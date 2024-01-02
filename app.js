const port = 8000;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.post("/completion", async (req, res) => {
  const API_key = "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";
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", content: req.body.message }],
      max_token: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions ",
      options
    );

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`your server is running on the port ${port}`);
});
