const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

mongoose.connect(
  "mongodb://127.0.0.1:27017/ecommerceDB"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});
app.post("/save-user", async (req, res) => {

  try {

    const user = new User(req.body);

    await user.save();

    res.json({
      message: "User Saved Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error Saving User"
    });

  }

});

app.post("/save-order", async (req, res) => {

  try {

    const order = new Order(req.body);

    await order.save();

    res.json({
      message: "Order Saved Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error Saving Order"
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});