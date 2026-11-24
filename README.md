# Diretório Acadêmico — Web Semântica e Linked Open Data

Trabalho acadêmico demonstrativo, baseado nos modelos HTML/CSS fornecidos pelo professor. **Dados de pessoas, projetos e publicações são fictícios.**

## Integrantes
- [PREENCHER INTEGRANTE 1]
- [PREENCHER INTEGRANTE 2]
- [PREENCHER INTEGRANTE 3]

## Endereços (preencher após publicar)
- Site: https://SEU-USUARIO.github.io/diretorio-web-semantica/
- RDF: https://SEU-USUARIO.github.io/diretorio-web-semantica/dados.ttl
- Ontologia: https://SEU-USUARIO.github.io/diretorio-web-semantica/ontologia.owl

## Execução local
1. Instale Python 3.10+.
2. No terminal, na raiz do projeto: `python -m http.server 8000 --directory docs`.
3. Acesse `http://localhost:8000`.
4. Para consultas: `python -m pip install rdflib` e `python scripts/testar.py`.

## Publicação GitHub Pages
1. Crie repositório público `diretorio-web-semantica`.
2. Substitua `SEU-USUARIO` em `docs/dados.ttl`, `docs/ontologia.owl`, `ontologia/dados.ttl`, `ontologia/ontologia.owl` e na documentação pelo seu usuário GitHub.
3. Faça commit e push de toda a pasta do projeto.
4. No GitHub: Settings → Pages → Deploy from a branch → `main` → `/docs` → Save.
5. Teste as URLs públicas, os quatro perfis, RDF e OWL.

## Estrutura
- `docs/`: site, JSON, RDF e OWL públicos.
- `dados/`: fonte JSON dos perfis.
- `ontologia/`: ontologia e dados em Turtle.
- `consultas/`: seis consultas `.rq` e resultados `.json`.
- `documentacao/`: dicionário, vocabulários, ontologia, resultados e publicação.
- `proposta/`: objetivo, requisitos e decisões.
- `scripts/testar.py`: validação reproduzível.
- `exemplos-professor/`: HTML originais como referência.

## Cuidados
Os dados RDF são um snapshot consistente com o JSON inicial. Se alterar o JSON, atualize também o RDF e os resultados das consultas; não basta mudar a página. As URIs de pessoa abrem HTML, enquanto o conjunto RDF está em `/dados.ttl`; não há negociação de conteúdo. Não há endpoint SPARQL público.

## Licença e fontes
Dados fictícios do protótipo sob CC BY 4.0; modelo visual original fornecido pelo professor para a atividade. Consulte `documentacao/publicacao-lod.md`.

## Uso de IA
Ver `documentacao/uso-ia.md`.
