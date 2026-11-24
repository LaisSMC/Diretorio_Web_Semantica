# Decisões de modelagem
- Reutilizar FOAF para nomes, DCTERMS para títulos e licenças, SKOS para rótulos de áreas, RDFS/OWL para ontologia e Schema.org para descrições.
- Criar classes específicas do domínio acadêmico, porque as perguntas exigem distinção entre Docente e Discente.
- Representar projetos, cursos, departamentos e publicações como recursos (não textos) para permitir junções SPARQL.
- Usar `rdfs:seeAlso` para tópicos externos, sem declarar identidade falsa via `owl:sameAs`.
- Separar fonte JSON, site e RDF gerado. O RDF é um snapshot consistente com o JSON inicial; após edições, é necessário regenerar ou sincronizar o RDF.
- As URIs públicas usam placeholder e devem ser substituídas antes da publicação.
