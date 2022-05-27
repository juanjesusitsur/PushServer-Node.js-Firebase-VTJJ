var FCM = require("fcm-node");
var serverKey =
  "AAAA0q58IDw:APA91bGF562tG5eGcy_gxKxJZxZzqkhZ6U1lSpOrvyZ81OPMoaj-IjlgA1CmEV3FCZcRJwp4T7TnCkBg28BKFDSaoOXZeXBlbrcHPA5JrU4WF1XVKyC0mg1RD4DmLJoWDawskTYrB9rq"; // * Llave del servidor
//! ESTA ES LA LLAVES DE FIREBASE UNICA
var fcm = new FCM(serverKey);

var message = {
  //! ESTE ID ES UNICO PARA CADA USUARIO
  to: "eIKrDmDYQRW28V5Q7kp0uc:APA91bEzphYsKXAgPcsoB7AmYIjOp0vjd7Fv6X3IxtS8JauuFb7BHLYq5edOVtGqGGaZuXv4yUfj_jQtYHmoDeTZ9dOmnUH1PbPEvIAcPgUeBpVhw2tU3pj3l_5newFe4nJdUc3e8wLb", // * ID DEL DISPOSITIVO UNICO
  notification: {
    title: "Notificacion de prueba NodeJS",
    body: "Este mensaje de prueba se mando desde NODEJS",
    sound: "default",
  },

  data: {
    // * Puede ser cualquier dato que se desee enviar al dispositivo desde el servidor a traves de la notificacion push de firebase cloud messaging (FCM)
    title: "¡Hola soy tu amigo Yisus!",
    body: "Hola",
  },
};

fcm.send(message, function (err, response) {
  if (err) {
    console.log("Algo ha salido mal!" + err);
    console.log("Responde:! " + response);
  } else {
    // showToast("Enviado correctamente con respuesta");
    console.log("Enviado correctamente con respuesta: ", response);
  }
});
