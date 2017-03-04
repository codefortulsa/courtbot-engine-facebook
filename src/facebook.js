import request from "request";
import log4js from "log4js";

request.defaults.baseUrl = "https://graph.facebook.com/v2.6/me/messages"

export function sendMessage(userId, message, opt) {
  const logger = log4js.getLogger("facebook-message-send");
  logger.info("Sending message.", {message, user});
  return new Promise(function(resolve, reject) {
    request({url: "?access_token="+opt.token, method:"POST", json: true, body:{recipient:{id:user},message:{text:message}}}, function(err) {
      if(err) {
        logger.error("Error sending message:", err);
        reject(err);
        return;
      }
      logger.info("Facebook message sent successfully");
      resolve();
    });
  });
}
