local lapis = require("lapis")

local app = lapis.Application()
app:enable("etlua")

local endpoints = require("endpoints")

for _, endpoint in ipairs(endpoints) do
	app:match(endpoint.path, function(self)
		self.view = endpoint.view
		return {render = "index"}
	end)
end

return app
