"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 8772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mail)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/mail.ts

async function handler(req, res) {
    if (req.method === "POST") {
        const { name , email , subject , message  } = req.body; // No need to parse JSON again
        // Create a transporter object
        const transporter = external_nodemailer_default().createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || ""),
            secure: false,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            },
            debug: true
        });
        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: `${subject}`,
            text: "-",
            html: `
            <div>
                <h1>From: ${name}</h1>
                <a href="mailto: ${email}">${email}</a>
				<p>${message}</p>
            </div>
            `
        };
        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).send({
                message: "Sent successfully"
            });
        } catch (error) {
            console.error("Error sending email:", error);
            return res.status(500).send({
                message: "Failed to send email",
                error
            });
        }
    } else {
        // If User visits this route on the browser (i.e via GET request), just redirect them back home
        res.redirect("/");
    }
}
/* harmony default export */ const mail = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8772));
module.exports = __webpack_exports__;

})();