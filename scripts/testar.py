from pathlib import Path
from rdflib import Graph
import json
r=Path(__file__).resolve().parents[1]
d=json.loads((r/'dados/perfis.json').read_text(encoding='utf8'))
assert len([p for p in d['pessoas'] if p['tipo']=='Docente'])>=2
assert len([p for p in d['pessoas'] if p['tipo']=='Discente'])>=2
g=Graph().parse(r/'ontologia/dados.ttl',format='turtle')
o=Graph().parse(r/'ontologia/ontologia.owl',format='turtle')
print('Triplas de dados:',len(g),'— triplas da ontologia:',len(o))
for i in range(1,7):
 q=(r/f'consultas/consulta{i:02}.rq').read_text(encoding='utf8')
 rows=list(g.query(q))
 print(f'Consulta {i}: {len(rows)} resultado(s)')
 assert rows
print('VALIDAÇÃO CONCLUÍDA')
