import proxyquire from "proxyquire";
import setup from './setup';

describe("facebook", () => {
  const {sandbox, chance, expect} = setup();

  let facebook;
  let request;
  let sendMessageStub;
  let testee;
  let log4js;
  let infoStub;
/* No route tests exsist at this time. *
 * This is old code from copying from  *
 * the twilio engine.                  */

/*
  beforeEach(() => {
    sendMessageStub = sandbox.stub().returns(Promise.resolve());
    infoStub = sandbox.stub();

    log4js = {
      getLogger: sandbox.stub().returns({
        info: infoStub,
        debug: sandbox.stub(),
        error: sandbox.stub()
      })
    };

    testee = proxyquire("../src/facebook.js", {
      "request":{sendMessage:sendMessageStub},
      log4js
    });
  });

  describe("sendMessage", () => {
    let phone;
    let msg;
    let opt;

    beforeEach(() => {
      msg = chance.paragraph();
      opt = {
        facebookToken: chance.guid(),
        facebookUser: chance.guid()
      };
      sendMessageStub.callsArgWith(1, undefined);
    });

    it("creates a twilio client with the account and token", () => {
      return testee.sendNonReplyMessage(phone, msg, opt)
        .then(() => expect(twilio).to.have.been.calledWith(opt.twilioAccount, opt.twilioToken));
    });

    it("calls sendMessage on the client with the correct params", () => {
      return testee.sendNonReplyMessage(phone, msg, opt)
        .then(() => expect(sendMessageStub).to.have.been.calledWith({to: phone, from: opt.twilioPhone, body: msg}));
    });

    it("rejects the promise if there is an error", () => {
      sendMessageStub.callsArgWith(1, "error!");
      return testee.sendNonReplyMessage(phone, msg, opt).should.eventually.be.rejectedWith("error!");
    });

    it("resolves the promise if there is not an error", () => {
      return testee.sendNonReplyMessage(phone, msg, opt).should.eventually.be.fulfilled;
    });
  });
*/
});
