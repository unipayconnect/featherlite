const emailTemplate = (name, email, message = "") => (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>New Contact Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
      <table width="100%" bgcolor="#f5f5f5" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
              <!-- Header -->
              <tr style="background-color: #053c61;">
                <td style="padding: 20px; text-align: center;">
                  <img src="https://featherlitefurniture.com/assets/img/logo.png" alt="Featherlite Logo" height="40" />
                  <h2 style="color: #ffffff; margin: 10px 0 0;">New Contact Form Submission</h2>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td style="padding: 30px;">
                  <p style="font-size: 16px; color: #333;">Hello Team,</p>
                  <p style="font-size: 15px; color: #333;">You have received a new inquiry through the <strong>Featherlite Real Estate</strong> website:</p>

                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
                    <tr>
                      <td width="150" style="font-weight: bold; color: #053c61;">Name:</td>
                      <td style="color: #333;">${name}</td>
                    </tr>
                    <tr>
                      <td width="150" style="font-weight: bold; color: #053c61;">Email:</td>
                      <td style="color: #333;">${email}</td>
                    </tr>
                    <tr>
                      <td width="150" style="font-weight: bold; color: #053c61;">Message:</td>
                      <td style="color: #333;">${message.replace(/\n/g, "<br/>")}</td>
                    </tr>
                  </table>

                  <p style="margin-top: 30px; font-size: 14px; color: #888;">
                    This is an automated message from the Featherlite contact system.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr style="background-color: #f0f0f0;">
                <td style="padding: 20px; text-align: center; font-size: 12px; color: #999;">
                  © ${new Date().getFullYear()} Featherlite. All rights reserved.<br/>
                  <a href="https://featherlitefurniture.com" style="color: #053c61; text-decoration: none;">Visit Website</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `);

module.exports = { emailTemplate }