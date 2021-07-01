local app = require("weblit-app")

app.bind({
	host = "0.0.0.0",
	port = 8080
})

app.use(require("weblit-logger"))
app.use(require("weblit-auto-headers"))
app.use(require("weblit-etag-cache"))

local etlua = require("etlua")

local template
local env
function template(path)
	local file = assert(io.open(path, "r"))
	local content = file:read("*all")
	file:close()
	return assert(etlua.compile(content))(env)
end
env = {template = template}

app.route(
	{
		path = "/pages/:page:"
	},
	function(req, res, go)
		p(req)
		local body = template("pages/" .. req.params.page:gsub("%.html$", ".etlua"))
		res.code = 200
		res.body = body
		res.headers["Content-Type"] = "text/html"
		-- return go()
	end
)

local static = require("weblit-static")("")
app.route(
	{path = "/resources/:name:"},
	function(req, res, go) static(req, res, go) end
)
app.route(
	{path = "/css/:name:"},
	function(req, res, go) static(req, res, go) end
)
app.route(
	{path = "/js/:name:"},
	function(req, res, go) static(req, res, go) end
)

app.route(
	{},
	function(req, res, go)
		p(req)
		local body = template("index.etlua")
		res.code = 200
		res.body = body
		res.headers["Content-Type"] = "text/html"
		return go()
	end
)

app.start()
