# Download the helper library from https://www.twilio.com/docs/python/install
import os
from flask import Flask
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)
sid= 'ACb9ffd0ecb0a6d9c4db7eeed5da422474'
token = '49beaf68fce01b5a9b575d7c10427622'

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = sid
auth_token = token
client = Client(account_sid, auth_token)

# message = client.messages \
#     .create(
#          body='This is the ship that made the Kessel Run in fourteen parsecs?',
#          from_='+18443225674',
#          to='+15407629870'
#      )
    
@app.route("/")
def hello():
  return "Hello World!"

@app.route('/sms', methods=['POST', 'GET'])
def sms():
    body = request.values.get('Body', None)

    # Start our TwiML response
    resp = MessagingResponse()

    # Determine the right reply for this message
    if body == 'hello':
        resp.message("Hi!")
    elif body == 'bye':
        resp.message("Goodbye")
    return str(resp)


if __name__ == "__main__":
  app.run()