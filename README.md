# jwt-widget-sample
Cisco Webex Teams - developer sample demonstrating use of JWT with the Webex Teams widgets

https://developer.webex.com/docs/guest-issuer

## Simple messaging/video demo with hard-coded credentials

1. Install dependencies:

    ```
    npm install
    ```

1. Edit `public/widget.html` update the variables:

    * `data-access-token` -> sign in and grab your personal access token from https://developer.webex.com/docs/api/getting-started
    * `data-destination-id` -> = the Webex Teams user Id/email of the target user
    * `data-destination-type` -> `email`

    >Note: the 'from' user identified with the access token must be different from the target user (you can't call yourself)

2. Start the Express web server, per VS Code/`launch.json` or:

    ```
    node app.js
    ```

3. Open http://localhost:3000/widget.html directly in a browser to confirm widget load and can send messages/video

4. Open http://localhost:3000/onebank_complete.html and click 'Ask Sandy' for popup of `widget.html`

## Demo using persistent guest and JWT token

1. Create a guest issuer application at: https://developer.webex.com/my-apps

    Note the **Guest Issuer Id** and **Shared Secret**

1. Edit `vscode/launch.json` and replace guest issuer id/secret, and 'to' user Webex Teams Id/email

2. Restart the application/Express

3. Open http://localhost:3000/onebank_complete.html, enter any value in the 'Username' login text box, and click 'Ask John'.  

    The app should create (or access an existing) persistent guest account and place a video call in the popup with the guest user as the 'from' party
