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
  const from = req.body.from;
  const text = req.body.text;
  //--Devolver un request status cuando el campo text o from esten vacios,o ambos.
  if (!from && !text) {
    //Si ambos estan vacios
    return res
      .status(400)
      .json({ error: "From and text properties are empty" });
  } else if (!from) {
    //Si from esta vacio
    return res.status(400).json({ error: "From is empty" });
  } else if (!text) {
    //Si text esta vacio
    return res.status(400).json({ error: "Text is empty" });
  }
  const newMessage = {
    id: messagesData.length,
    from: from,
    text: text,
    timeSent: new Date() //<--Obtener la feche en que se creo el mensaje
  };
  messagesData.push(newMessage);
  return res.send(newMessage);
});

//--Obtener messages por ID.
app.get("/messages/id/:messageId", function (req, res) {
  const id = Number(req.params.messageId);
  const findMessageById = messagesData.find((message) => message.id === id);
  if (findMessageById) {
    return res.send(findMessageById);
  } else {
    res.status(404).json({ error: "Message with id " + id + " not found" });
  }
});

//--Borrar un messages ya existente.
app.delete("/messages/delete/:messageId", function (req, res) {
  const id = Number(req.params.messageId);
  const index = messagesData.findIndex((message) => message.id === id);
  messagesData.splice(index, 1);
  res.send({ success: true });
});

//--Obtener messages  filtrando una palabra o texto.
app.get("/messages/search", function (req, res) {
  const term = req.query.text.toLowerCase();
  const searchTermByText = messagesData.filter((message) =>
    message.text.toLowerCase().includes(term)
  ); //--Devuevle un array de objetos con los objetos que contienen el texto filtrado.
  if (!term) {
    //--Si el termino esta vacio nos devolvera un error "bad request"
    return res.status(400).json({ error: "bad request" });
  } else if (searchTermByText.length > 0) {
    //-Cuando filtramos y hacemos match, se agregara cada objeto con el texto filtrado al array, por tanto sera > 0 siempre.
    return res.send(searchTermByText);
  } else {
    //--En caso contrario de no encontrar ninguna match, el array estara vacio por tanto nos devolvera un 404.
    return res.status(404).json({ error: "not found" });
  }
});

//--Obtener los ultimos 10 messages
app.get("/messages/latest/:quatityOfMessages", function (req, res) { //--TODO arreglar linea 90 para recibir los ultimos diez si no tengo parametro
  const numberOfMessagesToShow = Number(req.params.quatityOfMessages);
  const lastMessages = messagesData.slice(-numberOfMessagesToShow);
  const last10Messages = messagesData.slice(-10);
  
  if (!lastMessages) {
    return res.send(last10Messages);
  } else {
    return res.status(200).send(lastMessages);
  }
});

//Modificar un mensaje ya existente.
app.put("/messages/update/:messageId" , function(req,res){
  const id = Number(req.params.messageId)
  const findMessage = messagesData.find((msg) => msg.id === id)
  const from = req.body.from
 
  const text = req.body.text
if (!findMessage) {
  return res.status(404).json({error:"Id not found"})
}

  findMessage.from = from
  findMessage.text = text

  if (!from && !text) {
    return res
      .status(400)
      .json({ error: "From and text properties are empty" });
  } else if (!from) {
    return res.status(400).json({ error: "From is empty" });
  } else if (!text) {
    return res.status(400).json({ error: "Text is empty" });
  }

  return res.json({success: "true"})
})


app.listen(5000, () => {
  console.log("Listening on port 5000");
});
