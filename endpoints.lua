return {
	{
		path = "/",
		view = "pages.home",
	},
	{
		path = "/home",
		view = "pages.home",
		name = "home",
	},
	{
		path = "/login",
		view = "pages.login",
		name = "login",
	},
	{
		path = "/register",
		view = "pages.register",
		name = "register",
	},
	{
		path = "/communities",
		view = "pages.communities.index",
		name = "communities",
	},
	{
		path = "/communities/create",
		view = "pages.communities.create",
		name = "communities.create",
	},
	{
		path = "/communities/:community_id",
		view = "pages.communities.community.index",
		name = "community",
	},
	{
		path = "/communities/:community_id/edit",
		view = "pages.communities.community.edit",
		name = "community.edit",
	},
	{
		path = "/communities/:community_id/changes",
		view = "pages.communities.community.changes",
		name = "community.changes",
	},
	{
		path = "/communities/:community_id/inbox",
		view = "pages.communities.community.inbox",
		name = "community.inbox",
	},
	{
		path = "/communities/:community_id/leaderboards/create",
		view = "pages.leaderboards.create",
		name = "leaderboards.create",
	},
	{
		path = "/communities/:community_id/difftables/create",
		view = "pages.difftables.create",
		name = "difftables.create",
	},
	{
		path = "/leaderboards",
		view = "pages.leaderboards.index",
		name = "leaderboards",
	},
	{
		path = "/leaderboards/:leaderboard_id",
		view = "pages.leaderboards.leaderboard.index",
		name = "leaderboard",
	},
	{
		path = "/leaderboards/:leaderboard_id/edit",
		view = "pages.leaderboards.leaderboard.edit",
		name = "leaderboard.edit",
	},
	{
		path = "/difftables",
		view = "pages.difftables.index",
		name = "difftables",
	},
	{
		path = "/difftables/:difftable_id",
		view = "pages.difftables.difftable.index",
		name = "difftable",
	},
	{
		path = "/users",
		view = "pages.users.index",
		name = "users",
	},
	{
		path = "/users/:user_id",
		view = "pages.users.user.index",
		name = "user",
	},
	{
		path = "/users/:user_id/edit",
		view = "pages.users.user.edit",
		name = "user.edit",
	},
	{
		path = "/users/:user_id/inbox",
		view = "pages.users.user.inbox",
		name = "user.inbox",
	},
	{
		path = "/notecharts",
		view = "pages.notecharts.index",
		name = "notecharts",
	},
	{
		path = "/notecharts/:notechart_id",
		view = "pages.notecharts.notechart.index",
		name = "notechart",
	},
	{
		path = "/help",
		view = "pages.help",
		name = "help",
	},
	{
		path = "/download",
		view = "pages.download",
		name = "download",
	},
	{
		path = "/donate",
		view = "pages.donate",
		name = "donate",
	},
	{
		path = "/notfound",
		view = "pages.404",
		name = "notfound",
	},
}


