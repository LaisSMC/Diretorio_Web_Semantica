# Passo a passo para executar, publicar e apresentar

1. Extraia o ZIP. Abra a pasta `Diretorio_Web_Semantica` no VS Code.
2. Abra o terminal do VS Code e rode `python -m http.server 8000 --directory docs` (Windows também pode usar `py -m http.server 8000 --directory docs`).
3. Acesse `http://localhost:8000`, clique nos quatro perfis e confira as informações. Não abra `index.html` com duplo clique: `fetch` exige servidor HTTP.
4. Em outro terminal, rode `python -m pip install rdflib` e `python scripts/testar.py`. Confira as seis consultas e os resultados em `consultas/resultados`.
5. Preencha os três integrantes no `README.md`. Revise `documentacao/` e `proposta/`, principalmente as justificativas.
6. Pesquise FOAF, Dublin Core, SKOS, OWL e Schema.org nos sites oficiais, Google e Google Scholar. Registre fontes e data de acesso.
7. Crie repositório público no GitHub chamado `diretorio-web-semantica`.
8. Substitua `SEU-USUARIO` nos arquivos RDF/OWL e documentação pelo seu usuário GitHub. Não altere os nomes das pastas.
9. Faça upload de **todo o conteúdo da pasta do projeto** ao repositório (inclusive `docs`). Faça commit.
10. Em Settings → Pages, escolha Deploy from a branch, `main`, `/docs`, Save. Aguarde a publicação.
11. Abra o endereço público, por exemplo `https://SEU-USUARIO.github.io/diretorio-web-semantica/`. Teste `dados.ttl`, `ontologia.owl`, os quatro perfis e três links DBpedia.
12. Se mudou os perfis JSON, atualize também os triplos Turtle e os resultados das consultas para evitar divergências.
13. Faça capturas de tela do site, das URLs públicas e do terminal mostrando as seis consultas. Guarde como evidências.
14. Apresente: (a) JSON alimentando perfis, (b) ontologia e classes, (c) RDF e URIs, (d) links externos, (e) consultas 4 e 5 como exemplos de junções.
15. Cada integrante deve saber explicar `Docente` vs `Discente`, `vinculadoA`, `participaDe`, `autorDe`, diferença entre RDF e OWL e por que `rdfs:seeAlso` não é `owl:sameAs`.

**Atenção:** não afirme que o site já está publicado. A hospedagem e a pesquisa externa documentada ainda dependem do grupo.
