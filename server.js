const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const messagesData = require("./messages.json");
app.use(cors());

/*Cambie a "messages.json"
 const welcomeMessage = {
   id: 0,
   from: "Bart",
   text: "Welcome to CYF chat system!",
 };

 const messages = [welcomeMessage];
 Para usar estos valores predeterminados, la respuesta se debe enviar como send.json()*/

//--Leer todoos los messages.
app.get("/messages", function (request, response) {
  response.send(messagesData);
});

//--Crear un nuevo messages.
app.post("/messages", function (req, res) {
  const newMessage = {
    id: messagesData.length,
    from: req.body.from,
    text: req.body.text,
  };
  messagesData.push(newMessage);
  return res.send(newMessage);
});

//--Obtener messages por ID.
app.get("/messages/:messageId", function (req, res) {
  const id = Number(req.params.messageId);
  const findMessageById = messagesData.find((message) => message.id === id);
  if (findMessageById) {
    return res.send(findMessageById);
  } else {
    res.status(404).json({ error: "Message with id " + id + " not found" });
  }
});

//--Borrar un messages ya existente.
app.delete("/messages/:messageId", function (req, res) {
  const id = Number(req.params.messageId);
  const index = messagesData.findIndex((message) => message.id === id);
  messagesData.splice(index, 1);
  res.send({ success: true });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
