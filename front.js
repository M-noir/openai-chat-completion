const app = () => {
  const getMessage = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you?",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("http://localhost:8000/completion", options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  getMessage();
};
app();
