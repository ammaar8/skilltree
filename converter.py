import json
import csv
from os import kill

skilltree = {
    "nodes": [],
    "edges": []
}
with open('skilltree.csv', 'r')  as f:
    reader = csv.DictReader(f)
    for row in reader:
        skilltree['nodes'].append(
            {
                "data": {
                    key: val for key, val in row.items() if key != 'classes'
                },
                "classes": row['classes']
            }
        )
        if not row["super"] == '':
            skilltree['edges'].append(
                {"data": {
                    'id': row['super'] + '_' + row['id'],
                    'source': row['super'],
                    'target': row['id']
                }}
            )
        
with open ('skilltree.js', 'w') as f:
    f.write("var skilltree = " + json.dumps(skilltree))