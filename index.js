require("express")()
  .get("/dancer.gif", (req, res) => {
    res.sendFile(__dirname + "/dancer.gif");
  })
  .all("*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  })
  .listen(3000, () => {
    console.log("SUS SERVER IS ON MOAHAHAHAHAHA");
  });
