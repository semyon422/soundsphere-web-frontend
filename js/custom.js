function init_data_tables() {
    $(".data-table-all").DataTable({
        scrollX: true,
    });

    $(".data-table-communities").DataTable({
        scrollX: true,
        order: [[ 2, "desc" ]]
    });
    $(".data-table-players").DataTable({
        scrollX: true,
        serverSide: true,
        ajax: "/dt/users",
        columns: [
            {"data": "name"},
            {"data": "tag"},
            {"data": "tag"},
            {"data": "latest_activity"},
        ]
    });
}
