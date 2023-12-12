import twilio from "twilio";

export const smsSend = async (resp) => {
  const accountSid = "ACcf7da68b9605062f72a5ecc99b338a56";
  const authToken = "83b3a6c3bcea5f175e91f3a93e29ce52";
  const client = twilio(accountSid, authToken);

  const message = await client.messages.create({
    body: "53555353535",
    from: "+12058393628",
    to: "+919687969351",
  });

  resp
    .status(200)
    .json({ success: true, message: "Message sent successfully", message });
};

export const makeCall = async (resp) => {
  const accountSid = "ACcf7da68b9605062f72a5ecc99b338a56";
  const authToken = "83b3a6c3bcea5f175e91f3a93e29ce52";
  const client = twilio(accountSid, authToken);

  const message = await client.calls.create({
    twiml:
      "<Response><Say>Raano Raanaanii riitee Raano Raanaanii riitee Raano Raanaanii riitee Raano Raanaanii riitee Raano Raanaanii riitee</Say></Response>",
    from: "+1 205 839 3628",
    to: "+919687969351",
  });

  resp
    .status(200)
    .json({ success: true, message: "Message sent successfully", message });
};
