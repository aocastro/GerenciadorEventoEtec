$(document).ready(function() {
    $('#table-checklist').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/checklist/modelo/list-checklist.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/pt_br.json"
        },
        "columns": [{
                "data": 'idChecklist',
                "className": 'text-center'
            },
            {
                "data": 'objeto',
                "className": 'text-center'
            },
            {
                "data": 'idChecklist',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-info btn-sm btn-view"><i class="fas fa-eye"></i></button>
                    <button id="${data}" class="btn btn-warning btn-sm btn-edit"><i class="fas fa-edit text-white"></i></button>
                    `
                }
            }
        ]
    })
})