# Perguntas de competência e resultados

## 1. Docentes e departamentos

**SPARQL:** `consultas/consulta01.rq`

**Resultado obtido:** `consultas/resultados/consulta01.json` (2 linha(s)).

**Explicação:** Relaciona Docente ao Departamento por voc:lotadoEm.

## 2. Discentes de Sistemas de Informação

**SPARQL:** `consultas/consulta02.rq`

**Resultado obtido:** `consultas/resultados/consulta02.json` (2 linha(s)).

**Explicação:** Relaciona Discente ao Curso por voc:matriculadoEm.

## 3. Docentes em Web Semântica

**SPARQL:** `consultas/consulta03.rq`

**Resultado obtido:** `consultas/resultados/consulta03.json` (2 linha(s)).

**Explicação:** Relaciona Docente à Area por voc:atuaEm.

## 4. Docentes e discentes no mesmo projeto

**SPARQL:** `consultas/consulta04.rq`

**Resultado obtido:** `consultas/resultados/consulta04.json` (3 linha(s)).

**Explicação:** Faz junção de Docente, Discente e Projeto por voc:participaDe.

## 5. Publicações de Ana e coautores

**SPARQL:** `consultas/consulta05.rq`

**Resultado obtido:** `consultas/resultados/consulta05.json` (1 linha(s)).

**Explicação:** Relaciona Pessoa e Publicacao por voc:autorDe; coautores compartilham publicação.

## 6. Pessoas da unidade ICE

**SPARQL:** `consultas/consulta06.rq`

**Resultado obtido:** `consultas/resultados/consulta06.json` (4 linha(s)).

**Explicação:** Recupera docentes e discentes pela mesma Unidade via voc:vinculadoA.

## Detalhamento das classes e propriedades utilizadas por consulta

1. **Consulta 01 (`consulta01.rq`):**
   * **Classes:** `voc:Docente`, `voc:Departamento`.
   * **Propriedades:** `foaf:name` (nome do docente), `voc:lotadoEm` (vincula o docente ao departamento) e `rdfs:label` (rótulo do departamento).
2. **Consulta 02 (`consulta02.rq`):**
   * **Classes:** `voc:Discente`, `voc:Curso`.
   * **Propriedades:** `foaf:name` (nome do discente), `voc:matriculadoEm` (vincula o discente ao curso), `voc:anoIngresso` (opcional, via `OPTIONAL`) e `rdfs:label` (filtro pelo nome do curso `"Sistemas de Informação"`).
3. **Consulta 03 (`consulta03.rq`):**
   * **Classes:** `voc:Docente`, `voc:Area`.
   * **Propriedades:** `foaf:name` (nome do docente), `voc:atuaEm` (vincula o docente à área de pesquisa) e `skos:prefLabel` (filtro pelo rótulo controlado `"Web Semântica"`).
4. **Consulta 04 (`consulta04.rq` — relacionamento entre múltiplas entidades):**
   * **Classes:** `voc:Docente`, `voc:Discente`, `voc:Projeto`.
   * **Propriedades:** `voc:participaDe` (aplicada simultaneamente a um indivíduo `voc:Docente` e a um indivíduo `voc:Discente` apontando para o mesmo recurso `voc:Projeto`), `foaf:name` (nomes de ambos) e `rdfs:label` (título do projeto).
5. **Consulta 05 (`consulta05.rq` — relacionamento entre múltiplas entidades e coautoria):**
   * **Classes:** `voc:Docente`, `voc:Publicacao`, `voc:Pessoa`.
   * **Propriedades:** `voc:autorDe` (recupera as publicações da docente filtrada e, em um bloco `OPTIONAL`, busca outros recursos `voc:Pessoa` ligados à mesma publicação com filtro `?coautor != ?docente`), `dcterms:title`, `voc:anoPublicacao` e `foaf:name`.
6. **Consulta 06 (`consulta06.rq` — consulta polimórfica pela superclasse):**
   * **Classes:** `voc:Pessoa` (recupera instâncias de `voc:Docente` e `voc:Discente` quando combinada com a hierarquia `rdfs:subClassOf` da ontologia), `voc:Unidade`.
   * **Propriedades:** `voc:vinculadoA` (liga a pessoa à unidade acadêmica), `rdf:type` (identifica o tipo específico de vínculo), `foaf:name` e `rdfs:label` (filtro `"Instituto de Ciências Exatas"`).