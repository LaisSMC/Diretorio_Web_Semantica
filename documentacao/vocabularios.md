# Pesquisa e justificativa dos vocabulários
| Vocabulário | URL oficial | Utilização | Decisão |
|---|---|---|---|
| FOAF | http://xmlns.com/foaf/0.1/ | foaf:name | Reutilizado para nomes de pessoas |
| Dublin Core Terms | https://www.dublincore.org/specifications/dublin-core/dcmi-terms/ | dcterms:title, dcterms:license | Reutilizado para metadados |
| SKOS | https://www.w3.org/TR/skos-reference/ | skos:prefLabel | Reutilizado para áreas controladas |
| OWL 2 | https://www.w3.org/TR/owl2-overview/ | classes, propriedades e disjunção | Reutilizado para ontologia |
| Schema.org | https://schema.org/ | schema:description | Reutilizado para descrições |
| DBpedia | https://www.dbpedia.org/ | rdfs:seeAlso para três conceitos | Links externos relacionados, não equivalência de indivíduos |

## Taxonomia e alinhamento
`Pessoa` é superclasse de `Docente` e `Discente`, que são classes disjuntas. As áreas são um vocabulário controlado de quatro conceitos; não há tesauro criado. Uma ontologia de fundamentação não é necessária ao escopo.

## Verificação externa
As URLs oficiais são pontos de partida para a pesquisa documental; o grupo deve conferir os vocabulários e registrar data de acesso e evidência da pesquisa no Google e Google Scholar antes da entrega. Não se afirma que tal pesquisa manual já foi realizada.

## Registro de pesquisa documental e vocabulários complementares (2026-11-24)

Além dos termos iniciais, foram reutilizadas propriedades padronizadas para contatos e perfis acadêmicos externos, evitando a criação de propriedades proprietárias redundantes:

* **FOAF (`foaf:mbox` e `foaf:homepage`):** utilizados para representar o e-mail institucional (`mailto:`) e a página pessoal de docentes e discentes.
* **RDF Schema (`rdfs:seeAlso`):** utilizado tanto para apontar conceitos temáticos para a DBpedia quanto para associar os perfis aos seus registros externos (Currículo Lattes, ORCID, ResearchGate, LinkedIn e GitHub) sem afirmar identidade estrita (`owl:sameAs`).

### Síntese da verificação nas fontes oficiais e literatura

| Vocabulário / Fonte | Consulta / Referência verificada | Data de acesso | Justificativa técnica da escolha |
| :--- | :--- | :--- | :--- |
| **FOAF** (`http://xmlns.com/foaf/0.1/`) | Especificação FOAF Vocabulary Specification (`foaf:Person`, `foaf:name`, `foaf:mbox`, `foaf:homepage`) e buscas no Google Scholar por `"FOAF" "academic profiles" ontology` | 2026-11-24 | Padrão consolidado na Web Semântica para descrição de pessoas, contatos e páginas pessoais, dispensando ontologias de topo complexas (como BFO ou DOLCE) para este escopo. |
| **SKOS** (`https://www.w3.org/TR/skos-reference/`) | Recomendação W3C SKOS Simple Knowledge Organization System (`skos:Concept`, `skos:prefLabel`) e buscas por `"SKOS" "controlled vocabulary" Linked Open Data` | 2026-11-24 | Adequado para representar áreas de conhecimento como conceitos controlados ligados a recursos externos sem impor axiomas lógicos pesados. |
| **Dublin Core Terms** (`https://www.dublincore.org/specifications/dublin-core/dcmi-terms/`) | Especificação DCMI Metadata Terms (`dcterms:title`, `dcterms:license`, `dcterms:modified`) | 2026-11-24 | Amplamente adotado em repositórios acadêmicos para metadados descritivos de publicações, projetos, licenciamento e proveniência. |
| **Schema.org** (`https://schema.org/`) | Vocabulário `schema:description` e integração JSON-LD em páginas HTML | 2026-11-24 | Facilita a indexação por motores de busca comerciais quando embutido via JSON-LD nas páginas de perfil. |
| **DBpedia** (`https://www.dbpedia.org/`) | Recursos `Semantic_Web`, `Open_data` e `Artificial_intelligence` | 2026-11-24 | Núcleo central da nuvem Linked Open Data, permitindo contextualizar as áreas de pesquisa com URIs estáveis e amplamente referenciadas. |