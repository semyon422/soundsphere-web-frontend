local config = require("lapis.config")

config("development", {
	port = 8080,
	secret = "please-change-me",
	hmac_digest = "sha256",
	recaptcha_site_key = "",
})

