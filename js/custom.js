function init_data_tables() {
    $(".data-table-communities").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/communities",
        columns: [
            {
                data: "name",
                render(data, type, row, meta) {
                    return '<a href="/communities/' + row.id + '">' + data + '</a>';
                }
            },
            {data: "alias"},
            {data: "inputmodes"},
            {data: "members"},
            {data: "description"},
            {data: "name"},
        ]
    });
    $(".data-table-leaderboards").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/leaderboards",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-tables").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/tables",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-players").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/users",
        columns: [
            {data: "name"},
            {data: "tag"},
            {data: "tag"},
            {data: "latest_activity"},
        ]
    });
    $(".data-table-charts").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/notecharts",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });

    $(".data-table-community-leaderboards").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/communities/" + window.PineconeRouter.currentContext.params.community_id + "/leaderboards",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-community-players").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/communities/" + window.PineconeRouter.currentContext.params.community_id + "/users",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });

    $(".data-table-leaderboard-communities").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/leaderboard/" + window.PineconeRouter.currentContext.params.leaderboard_id + "/communities",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-leaderboard-tables").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/leaderboard/" + window.PineconeRouter.currentContext.params.leaderboard_id + "/tables",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-leaderboard-users").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/leaderboard/" + window.PineconeRouter.currentContext.params.leaderboard_id + "/users",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });

    $(".data-table-table-communities").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/table/" + window.PineconeRouter.currentContext.params.table_id + "/communities",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-table-leaderboards").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/table/" + window.PineconeRouter.currentContext.params.table_id + "/leaderboards",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-table-charts").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/table/" + window.PineconeRouter.currentContext.params.table_id + "/notecharts",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });

    $(".data-table-chart-scores").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/notechart/" + window.PineconeRouter.currentContext.params.notechart_id + "/scores",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
}
