export default function getAll() {
    return [{
        'id': 4,
        'parent_id': null,
        'name': 'Vertrouwelijk',
        'is_final_depth': false,
        'children': [{'id': 7, 'parent_id': 4, 'name': 'Facturen', 'is_final_depth': false, 'children': []}, {
            'id': 9,
            'parent_id': 4,
            'name': 'Energy',
            'is_final_depth': false,
            'children': [{
                'id': 11,
                'parent_id': 9,
                'name': 'Contracten',
                'is_final_depth': true,
                'children': [],
            }, {'id': 12, 'parent_id': 9, 'name': 'Nog een', 'is_final_depth': true, 'children': []}, {
                'id': 17,
                'parent_id': 9,
                'name': 'Verbruiks overzichten',
                'is_final_depth': true,
                'children': [],
            }],
        }],
    }, {
        'id': 5,
        'parent_id': null,
        'name': 'Openbaar',
        'is_final_depth': false,
        'children': [{'id': 6, 'parent_id': 5, 'name': 'Facturen', 'is_final_depth': false, 'children': []}, {
            'id': 8,
            'parent_id': 5,
            'name': 'Energy',
            'is_final_depth': false,
            'children': [{'id': 10, 'parent_id': 8, 'name': 'Contracten', 'is_final_depth': true, 'children': []}],
        }],
    }];
}
