# Dicionário de dados
| Campo / relação | Tipo | Significado e regra |
|---|---|---|
| pessoa.id | string | Identificador único, sem espaços |
| pessoa.tipo | enum | Docente ou Discente |
| pessoa.nome | string | Nome de exibição fictício, obrigatório |
| pessoa.cargo | string | Cargo ou situação acadêmica |
| pessoa.unidade | URI / chave | Unidade institucional, obrigatória |
| pessoa.departamento | URI / chave | Obrigatório para docentes |
| pessoa.curso | URI / chave | Obrigatório para discentes |
| pessoa.ingresso | gYear | Ano de ingresso, somente discentes |
| pessoa.formacao | string[] | Formação acadêmica |
| pessoa.areas | URI[] | Referências a áreas SKOS |
| pessoa.disciplinas | string[] | Disciplinas ministradas |
| pessoa.projetos | URI[] | Projetos em que participa |
| pessoa.publicacoes | URI[] | Trabalhos de autoria da pessoa |
| publicacao.titulo | string | Título de publicação fictícia |
| publicacao.ano | gYear | Ano da publicação |
| publicacao.autores | URI[] | Lista de autores (consistente com autorDe) |
| voc:vinculadoA | objeto Pessoa→Unidade | Unidade da pessoa |
| voc:lotadoEm | objeto Docente→Departamento | Lotação docente |
| voc:matriculadoEm | objeto Discente→Curso | Matrícula discente |
| voc:atuaEm | objeto Pessoa→Area | Área de pesquisa ou interesse |
| voc:participaDe | objeto Pessoa→Projeto | Participação em projeto |
| voc:autorDe | objeto Pessoa→Publicacao | Autoria de publicação |
| pessoa.email | URI / string | E-mail institucional de contato (`foaf:mbox`) |
| pessoa.paginaPessoal | URI | Endereço da página pessoal (`foaf:homepage`) |
| pessoa.gruposPesquisa | URI[] | Grupos ou núcleos de pesquisa integrados pela pessoa |
| pessoa.linksAcademicos | objeto[] | Lista de perfis externos (`rotulo` e `url`, mapeados via `rdfs:seeAlso`) |
| voc:integraGrupo | objeto Pessoa→GrupoPesquisa | Vínculo entre pessoa e grupo de pesquisa |
