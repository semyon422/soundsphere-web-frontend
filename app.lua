local lapis = require("lapis")

local app = lapis.Application()
app:enable("etlua")

local api_url = "/api"
local access_url = "/ac"
local endpoints = require("endpoints")

for _, endpoint in ipairs(endpoints) do
	app:match(endpoint.name, endpoint.path, function(self)
		self.api_url = api_url
		self.access_url = access_url
		self.view = endpoint.view
		return {render = "index"}
	end)
end

return app
