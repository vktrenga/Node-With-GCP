const express = require('express');
const router = express.Router();
const app = express();
const dotenv = require('dotenv');
dotenv.config();

router.get('/hello', function (req, res) {
  res.send('Hello World Edited! final with cloud build');
});

const deliveries = [
  {
     id: "1",
     pickupAddress: "1000 4th Ave, Seattle, WA, 98104",
     pickupPhoneNumber: "+14148928000",
     dropoffAddress: "1201 3rd Ave, Seattle, WA, 98101",
     dropoffPhoneNumber: "+14148928000",
     instructions: "",
     status: "CREATED",
  },
  {
     id: "2",
     pickupAddress: "1000 4th Ave, Seattle, WA, 98104",
     pickupPhoneNumber: "+14148915000",
     dropoffAddress: "1201 3rd Ave, Seattle, WA, 98101",
     dropoffPhoneNumber: "+14148915000",
     instructions: "",
     status: "CREATED",
  }
];

router.get("/deliveries", function (req, res) {
  res.send({
     status: "00",
     message: "successs",
     data: deliveries,
 });
});

router.get("/deliveries/:id/select", function (req, res) {
  const id = req.params["id"];
  const delivery = deliveries.find((obj) => obj.id === id);
  if (!delivery) {
    res.send({
        status: "01",
        message: "not found",
        data: null,
      });
  }
  res.send({
     status: "00",
     message: "successs",
     data: { ...delivery, status: "QUEUED" },
    });
});

router.get("/deliveries/:id/confirm-pickup", function (req, res) {
  const id = req.params["id"];
  const delivery = deliveries.find((obj) => obj.id === id);
  if (!delivery) {
    res.send({
        status: "01",
        message: "not found",
        data: null,
      });
  }
  res.send({
     status: "00",
     message: "successs",
     data: { ...delivery, status: "PICKED_UP" },
    });
});

router.get("/deliveries/:id/complete", function (req, res) {
  const id = req.params["id"];
  const delivery = deliveries.find((obj) => obj.id === id);
  if (!delivery) {
    res.send({
        status: "01",
        message: "not found",
        data: null,
      });
  }
  res.send({
     status: "00",
     message: "successs",
     data: { ...delivery, status: "COMPLETED" },
    });
});

app.use(`/${process.env.VERSION}`, router);
app.listen(3000, function () {
  console.log(process.env.VERSION);
  console.log('Example app listening on port 3000!');
});