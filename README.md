# jwt-widget-sample
Cisco Webex Teams - developer sample demonstrating use of JWT with the Webex Teams widgets

## Simple demo with hard-coded credentials

1. Edit widget.html and replace 'from' user access token and 'to' user Webex Teams id (email)
2. Start web server, per launch.json
3. Open http://localhost:3000/widget.html directly in a browser to confirm widget config
4. Open http://localhost:3000/onebank_complete.html and click 'Ask Sandy' for popup of widget.html

## Demo using 'persistent guest' and JWT token

1. Edit launch.json and replace persistent guest issuer id/secret, and 'to' user Webex Teams id 
2. Restart web server
3. Open http://localhost:3000/onebank_complete.html, enter any value in the 'Username' text box and click 'Ask John'.  App should create (or access an existing) persistent guest account and place a call in the popup.
