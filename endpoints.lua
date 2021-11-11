return {
	{
		path = "/",
		view = "home"
	},
	{
		path = "/home",
		view = "home"
	},
	{
		path = "/login",
		view = "login"
	},
	{
		path = "/register",
		view = "register"
	},

	{
		path = "/communities",
		view = "communities.index"
	},
	{
		path = "/communities/create",
		view = "communities.create"
	},
	{
		path = "/communities/:community_id",
		view = "communities.community.index"
	},
	{
		path = "/communities/:community_id/edit",
		view = "communities.community.edit"
	},
	{
		path = "/communities/:community_id/changes",
		view = "communities.community.changes"
	},
	{
		path = "/communities/:community_id/leaderboards/create",
		view = "leaderboards.create"
	},

	{
		path = "/leaderboards",
		view = "leaderboards.index"
	},
	{
		path = "/leaderboards/:leaderboard_id",
		view = "leaderboards.leaderboard.index"
	},
	{
		path = "/leaderboards/:leaderboard_id/settings",
		view = "leaderboards.leaderboard.settings"
	},

	{
		path = "/tables",
		view = "tables.index"
	},
	{
		path = "/tables/:table_id",
		view = "tables.table"
	},

	{
		path = "/users",
		view = "users.index"
	},
	{
		path = "/users/:user_id",
		view = "users.user.index"
	},
	{
		path = "/users/:user_id/settings",
		view = "users.user.settings"
	},

	{
		path = "/notecharts",
		view = "notecharts.index"
	},
	{
		path = "/notecharts/:notechart_id",
		view = "notecharts.notechart"
	},

	{
		path = "/help",
		view = "help"
	},
	{
		path = "/download",
		view = "download"
	},
	{
		path = "/notfound",
		view = "404"
	},
	{
		path = "notfound",
		view = "404"
	},
}


