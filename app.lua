local lapis = require("lapis")

local app = lapis.Application()
app:enable("etlua")

app:match("/pages/*", function(self)
	return {render = self.params.splat}
end)

app:match("/*", function()
	return {render = "index"}
end)

return app
