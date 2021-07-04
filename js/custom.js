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
            {
                data: "inputmodes",
                render(data, type, row, meta) {
                    return Array.isArray(data) ? data.join(',') : ''
                }
            },
            {data: "user_count"},
            {data: "description"},
            {
                className: 'table-icon-row',
                render(data, type, row, meta) {
                    return '<a href="#" class="table-icon green green-h" title="Join community"><i class="fas fa-sign-in-alt"></i></a>'
                }
            },
        ]
    });
    $(".data-table-leaderboards").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/leaderboards",
        columns: [
            {
                data: "name",
                render(data, type, row, meta) {
                    return '<a href="/leaderboards/' + row.id + '">' + data + '</a>';
                }
            },
            {data: "name"},
            {
                data: "name",
                render(data, type, row, meta) {
                    return '<a href="/users/' + row.id + '">' + data + '</a>';
                }
            },
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
    $(".data-table-users").DataTable({
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
    $(".data-table-notecharts").DataTable({
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
            {
                data: "name",
                render(data, type, row, meta) {
                    return '<a href="/leaderboards/' + row.id + '">' + data + '</a>';
                }
            },
            {data: "name"},
            {
                data: "name",
                render(data, type, row, meta) {
                    return '<a href="/users/' + row.id + '">' + data + '</a>';
                }
            },
            {data: "name"},
            {data: "name"},
            {
                className: 'table-icon-row',
                render(data, type, row, meta) {
                    return `
                    <a href="/leaderboards/` + row.id + `/settings" class="table-icon orange orange-h" title="Edit leaderboard">
                        <i class="fas fa-pen"></i>
                    </a>
                    <a href="#" class="table-icon red red-h" title="Delete leaderboard" data-bs-toggle="modal" data-bs-target="#delete-modal">
                        <i class="fas fa-trash"></i>
                    </a>
                    `;
                }
            },
        ]
    });
    $(".data-table-community-users").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/communities/" + window.PineconeRouter.currentContext.params.community_id + "/users",
        columns: [
            {data: "id"},
            {
                data: "name",
                render(data, type, row, meta) {
                    return '<a href="/users/' + row.id + '">' + data + '</a>';
                }
            },
            {data: "name"},
            {data: "name"},
            {data: "latest_activity"},
        ]
    });

    $(".data-table-leaderboard-communities").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/leaderboards/" + window.PineconeRouter.currentContext.params.leaderboard_id + "/communities",
        columns: [
            {
                data: "name",
                render(data, type, row, meta) {
                    return '<a href="/communities/' + row.id + '">' + data + '</a>';
                }
            },
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-leaderboard-tables").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/leaderboards/" + window.PineconeRouter.currentContext.params.leaderboard_id + "/tables",
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
        ajax: "/dt/leaderboards/" + window.PineconeRouter.currentContext.params.leaderboard_id + "/users",
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
        ajax: "/dt/tables/" + window.PineconeRouter.currentContext.params.table_id + "/communities",
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
        ajax: "/dt/tables/" + window.PineconeRouter.currentContext.params.table_id + "/leaderboards",
        columns: [
            {data: "name"},
            {data: "name"},
            {data: "name"},
            {data: "name"},
        ]
    });
    $(".data-table-table-notecharts").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/tables/" + window.PineconeRouter.currentContext.params.table_id + "/notecharts",
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

    $(".data-table-notechart-scores").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/notecharts/" + window.PineconeRouter.currentContext.params.notechart_id + "/scores",
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
