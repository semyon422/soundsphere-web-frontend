ready(() => {
    if (document.getElementById("properties-modal") != null) {
        var propModal = document.getElementById("properties-modal");
        var bsPropModal = new bootstrap.Modal(propModal);


        document.addEventListener("keydown", (e) => {
            if (e.key == "`") {
                bsPropModal.toggle();
            }
        })
    }




    if (document.querySelector(".data-table") != null) {
        var dtTables = {};


        function dtToggleCols(e) {
            let tableId = e.target.getAttribute("data-table");
            let table = document.getElementById(tableId);
            let dtTable = dtTables[tableId];

            let colIndexes = table.getAttribute("data-toggle-cols").split(" ");
            if (colIndexes[0] == "") {
                return;
            }

            colIndexes = colIndexes.map(Number);

            colIndexes.forEach(index => {
                let col = dtTable.column(index);
                col.visible(!col.visible());
            })
        };


        const dtDefaultOptions = {
            language: {
                lengthMenu: "Rows: _MENU_",
                info: "_START_ to _END_ of _TOTAL_ rows",
                infoEmpty: "0 to 0 of 0 rows",
                infoFiltered: "(_MAX_ total)",
                paginate: {
                    first:      "First",
                    last:       "Last",
                    next:       "Next",
                    previous:   "Prev"
                },
            },
        }


        var dtAllOptions = {
            ...dtDefaultOptions,
            scrollX: true,
        }
        document.querySelectorAll(".data-table-all").forEach(table => { dtInit(table, dtAllOptions); });


        var dtColOptions = {
            ...dtDefaultOptions,
            searching: false,
            paging: false,
            info: false,
            columnDefs: [
                { orderable: false, targets: ["_all"] }
            ],
        }
        document.querySelectorAll(".data-table-col").forEach(table => { dtInit(table, dtColOptions); });

        
        var dtSlimOptions = {
            ...dtColOptions,
            scrollX: true,
        }
        document.querySelectorAll(".data-table-slim").forEach(table => { dtInit(table, dtSlimOptions); });


        function dtInit(table, options) {
            let toggleOption = dtGetToggleOption(table);
            if (toggleOption != null) {
                if (options.hasOwnProperty("columnDefs")) {
                    options["columnDefs"].push(toggleOption);
                } else {
                    options["columnDefs"] = [toggleOption];
                }
            }

            options["order"] = dtGetOrder(table);

            const insertTopId = table.getAttribute("data-insert-top");
            const insertBottomId = table.getAttribute("data-insert-bottom");

            let insertTopHTML;
            let domTop = "<'col'>";
            if (insertTopId != null) {
                insertTopHTML = dtGetInsert(insertTopId);
                domTop = "<'" + insertTopId + "'>";
            }

            let insertBottomHTML;
            let domBottom = "<'col'>";
            if (insertBottomId != null) {
                insertBottomHTML = dtGetInsert(insertBottomId);
                domBottom = "<'" + insertBottomId + "'>";
            }

            options["dom"] =
                "<'row'<'col'l>" + domTop + "<'col'f>>" +
                "<'row'<'col'tr>>" +
                "<'row'<'col'i>" + domBottom + "<'col'p>>";

            let dtTable = $(table).DataTable({
                ...options,
                initComplete: function(settings, json) {
                    if (insertTopId != null)
                        dtSetInsert(insertTopId, insertTopHTML);
                    
                    if (insertBottomId != null)
                        dtSetInsert(insertBottomId, insertBottomHTML);

                    addEventListeners(document.querySelectorAll(".data-table-col-toggle"), "change", dtToggleCols);
                }
            })

            dtTables[dtTable.table().node().id] = dtTable;
        }


        function dtGetToggleOption(table) {
            let toggleCols = table.getAttribute("data-toggle-cols");

            if (toggleCols != null){
                let colIndexes = toggleCols.split(" ");
                if (colIndexes[0] == "") {
                    return;
                }

                colIndexes = colIndexes.map(Number);
            
                return {
                    targets: colIndexes,
                    visible: false
                }
            }
        }


        function dtGetOrder(table) {
            let orderItems = [];

            let orders = table.getAttribute("data-orders");
            if (orders != null) {
                orders.split(" ").forEach(order => {
                    let col = parseInt(order.slice(0, -1));
                    let dir = order.slice(-1) == "a" ? "asc" : "desc";
                    orderItems.push([col, dir]);
                });
            } else {
                orderItems[0] = [0, "asc"];
            }
            
            return orderItems;
        }


        function dtGetInsert(insertId) {
            let insert = document.getElementById(insertId);

            const insertHTML = insert.innerHTML;

            insert.parentNode.removeChild(insert);

            return insertHTML;
        }

        function dtSetInsert(insertId, insertHTML) {
            document.querySelector("." + insertId).outerHTML = insertHTML;
        }
    }



    
    if (document.querySelector("form") != null) {
        document.querySelectorAll("form").forEach(form => form.setAttribute("novalidate", true));

        querySelectorAlls(["input", "select", "textarea"]).forEach(input => {
            if (input.classList.contains("form-no-invalid-message"))
                return;

            let invalidMessage = input.getAttribute("data-invalid");

            if (invalidMessage != null) {
                input.setCustomValidity(invalidMessage);
            } else {
                invalidMessage = "";
            }

            if (getSiblingByClass(input, "form-invalid-message") == null) {
                input.insertAdjacentHTML("afterend", "<div class=\"form-invalid-message\">" + invalidMessage + "</div>");
            }
        });


        addEventListeners(querySelectorAlls(["input", "select", "textarea"]), "input", (e) => {
            validateInput(e.target);
        });


        addEventListeners(querySelectorAlls(["input", "select", "textarea"]), "invalid", (e) => {
            showInvalidMessage(e.target);
        });


        addEventListeners(querySelectorAlls(["input", "select", "textarea"]), "change", (e) => {
            let input = e.target;

            if (input.getAttribute("data-invalid") != null && input.validity.customError) {
                input.setCustomValidity("");
                hideInvalidMessage(input);
            }
        });

        addEventListeners(document.querySelectorAll("form"), "submit", (e) => {
            let form = e.target;

            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
        });


        function validateInput(input) {
            if (input.validity.valid) {
                hideInvalidMessage(input);
            } else {
                showInvalidMessage(input);
            }
        }

        
        function showInvalidMessage(input) {
            input.classList.add("form-invalid");

            let messageDiv = getSiblingByClass(input, "form-invalid-message");
            messageDiv.innerHTML = input.validationMessage;
        }

        function hideInvalidMessage(input) {
            input.classList.remove("form-invalid");

            let messageDiv = getSiblingByClass(input, "form-invalid-message");
            messageDiv.innerHTML = "";
        }
    }




    if (document.getElementById("confirm-password") != null) {
        var password = document.getElementById("password");
        var confPassword = document.getElementById("confirm-password");
    
    
        addEventListeners([password, confPassword], "input", (e) => {
            if (confPassword.value == "") {
                return;
            }
    
            if (password.value != confPassword.value) {
                confPassword.setCustomValidity("Passwords don't match.");
                confPassword.checkValidity();
            } else {
                confPassword.setCustomValidity("");
                hideInvalidMessage(confPassword);
            }
        });
    }




    if (document.querySelector("input[type=file]") != null) {
        addEventListeners(document.querySelectorAll("input[type=file]"), "dragenter", (e) => {
            let input = e.target;

            input.classList.add("input-file-dragenter");
        });

        addEventsListeners(document.querySelectorAll("input[type=file]"), ["dragleave", "drop"], (e) => {
            let input = e.target;

            input.classList.remove("input-file-dragenter");
            input.focus();
        });

        const acceptedExtensions = ["png", "jpg", "jpeg"];
        addEventListeners(document.querySelectorAll("input.input-image"), "change", (e) => {
            let input = e.target;

            const filepath = input.value;
            if (acceptedExtensions.indexOf(filepath.split(".").pop().toLowerCase()) == -1)
            {
                e.preventDefault();
                input.value = "";
            }
        });
    }
        


    
    if (document.getElementById("player-edit") != null) {
        document.getElementById("username-color-l").addEventListener("change", showPlayerName);
        document.getElementById("username-color-r").addEventListener("change", showPlayerName);
        document.getElementById("username").addEventListener("change", showPlayerName);

        function showPlayerName() {
            const colorL = document.getElementById("username-color-l").value;
            const colorR = document.getElementById("username-color-r").value;
            const name = document.getElementById("username").value;

            let preview = document.getElementById("username-preview");
            preview.innerHTML = name;
            preview.style.background = "linear-gradient(45deg, " + colorL + ", " + colorR + ")";
            preview.style.webkitBackgroundClip = "text";
        }
    }
});
