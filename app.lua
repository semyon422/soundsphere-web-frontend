local lapis = require("lapis")
local config = require("lapis.config").get()

local app = lapis.Application()
app:enable("etlua")
app.layout = require("views.layout")

local api_url = "/api"
local access_url = "/ac"
local endpoints = require("endpoints")

for _, endpoint in ipairs(endpoints) do
	app:match(endpoint.name, endpoint.path, function(self)
		self.api_url = api_url
		self.access_url = access_url
		self.recaptcha_site_key = config.recaptcha_site_key
		self.view = endpoint.view
		return {render = "index"}
	end)
end

return app
