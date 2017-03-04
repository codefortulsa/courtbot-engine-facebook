import log4js from "log4js";
import { sendMessage } from "./facebook";
import {events as emitter} from "courtbot-engine";
import {CourtbotConversation} from "courtbot-engine";

export default function(name, options) {
  const communicationType = "facebook" + (name || "");

  emitter.on("query-communication-types", (types) => types.push(communicationType));

  emitter.on("add-routes", ({router, registrationSource, messageSource}) => {
    router.post("/facebook", function(req,res) {
      log4js.getLogger("facebook").debug("Incomming request", req.body);

      var text = req.body.message.text;
      if(!text){
        res.end();
        return false;
      }
      text = text.toUpperCase().trim();
      var user = req.body.sender.id;
      var conversation = new CourtbotConversation(communicationType, registrationSource, messageSource);

      conversation.on("reply", (reply, result) => {
        result.promise = sendMessage(user,text,options);
      });

      conversation.parse(text, user);
    });
  });

  emitter.on("send-non-reply", (data) => {
    if(data.communicationType === communicationType) {
      data.result.promises.push(sendMessage(data.to, data.msg, options));
    }
  });

  emitter.on("verify-contact", (data) => {
    if(data.communicationType === communicationType) {
      data.result.promises.push(true);
    }
  });
}
