# Declaração de uso de IA
Ferramenta utilizada: ChatGPT (OpenAI). Finalidades: apoio à implementação de site dinâmico, criação de dados fictícios, modelagem OWL/RDF, elaboração de consultas SPARQL e documentação.

**Pedido representativo:** "Faça o trabalho de Web Semântica conforme o PDF e os HTML/CSS anexados e dê um passo a passo".

**Partes assistidas por IA:** código JavaScript, ontologia, RDF, consultas, dados de exemplo e textos de documentação.

**Validação:** RDF/Turtle e OWL carregados com RDFLib; consultas executadas e resultados armazenados; estrutura JSON verificada. O grupo ainda deve testar manualmente no navegador e validar a publicação online.

**Responsabilidade:** os integrantes devem revisar os artefatos e ser capazes de explicar e alterar as decisões de modelagem.

## Evolução incremental e validação realizada pelo trio (2026-11-24)

* **Ferramenta adicional utilizada:** Google Gemini, para revisão de aderência ao enunciado, expansão dos campos de perfil (grupos de pesquisa, e-mail institucional, página pessoal e links acadêmicos externos), atualização do JSON-LD em `docs/app.js`, inclusão de `voc:GrupoPesquisa` e `voc:integraGrupo` na ontologia/RDF e complementação da documentação.
* **Síntese dos pedidos realizados:** Solicitação de checklist de acompanhamento a partir do PDF do trabalho, inclusão incremental dos campos faltantes nos modelos de perfil sem quebrar a compatibilidade das consultas existentes e detalhamento das justificativas de vocabulários e consultas SPARQL.
* **Processo de verificação:** Todos os arquivos modificados foram inspecionados via `git diff` no GitHub Desktop, testados localmente em servidor HTTP (`python -m http.server 8000 --directory docs`) com inspeção do JSON-LD no navegador e validados via script automatizado (`python scripts/testar.py` com `rdflib`).