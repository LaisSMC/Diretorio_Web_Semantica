const dataUrl = 'perfis.json';

function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

function list(items, cls = 'clean-list') {
  return '<ul class="' + cls + '">' + items.map(v => '<li>' + esc(v) + '</li>').join('') + '</ul>';
}

function link(id) {
  return 'perfil.html?id=' + encodeURIComponent(id);
}

fetch(dataUrl)
  .then(r => {
    if (!r.ok) throw Error(r.status);
    return r.json();
  })
  .then(d => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const p = d.pessoas.find(x => x.id === id);
    const target = document.getElementById('conteudo');

    if (!id) {
      target.innerHTML =
        '<h1>Diretório de perfis acadêmicos</h1>' +
        '<p>Exemplo didático com dados fictícios. Perfis gerados a partir de JSON e correspondentes em RDF.</p>' +
        '<div class="layout"><div>' +
        ['Docente', 'Discente'].map(t =>
          '<section class="card"><h2>' + t + 's</h2>' +
          list(d.pessoas.filter(x => x.tipo === t).map(x => x.nome)) +
          '<p>' + d.pessoas.filter(x => x.tipo === t).map(x =>
            '<a href="' + link(x.id) + '">Ver perfil: ' + esc(x.nome) + '</a>'
          ).join('<br>') + '</p></section>'
        ).join('') +
        '</div><aside><section class="card"><h2>Dados semânticos</h2>' +
        '<p><a href="dados.ttl">RDF/Turtle</a></p>' +
        '<p><a href="ontologia.owl">Ontologia OWL</a></p>' +
        '<p><a href="perfis.json">Dados JSON</a></p>' +
        '</section></aside></div>';
      return;
    }

    if (!p) {
      target.textContent = 'Perfil não encontrado';
      return;
    }

    document.title = p.nome + ' | Diretório Acadêmico';

    const areas = (p.areas || []).map(x => d.areas[x]);
    const projects = (p.projetos || []).map(x => d.projetos[x]);
    const grupos = (p.gruposPesquisa || []).map(x => (d.gruposPesquisa || {})[x]).filter(Boolean);
    const pubs = (p.publicacoes || []).map(x => d.publicacoes[x].titulo);
    const links = p.linksAcademicos || [];

    const root = new URL('.', location.href);
    const uri = new URL('recurso/pessoa/' + p.id, root).href;

    const personJsonLd = {
      '@context': {
        '@vocab': new URL('ontologia.owl#', root).href,
        'name': 'http://xmlns.com/foaf/0.1/name',
        'mbox': 'http://xmlns.com/foaf/0.1/mbox',
        'homepage': 'http://xmlns.com/foaf/0.1/homepage',
        'seeAlso': 'http://www.w3.org/2000/01/rdf-schema#seeAlso'
      },
      '@id': uri,
      '@type': p.tipo,
      'name': p.nome
    };
    if (p.email) personJsonLd.mbox = 'mailto:' + p.email;
    if (p.paginaPessoal) personJsonLd.homepage = p.paginaPessoal;
    if (links.length) personJsonLd.seeAlso = links.map(l => l.url);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(personJsonLd);
    document.head.appendChild(script);

    const vinculoHtml =
      '<dl class="contact-list">' +
      '<div><dt>Instituição</dt><dd>' + esc(d.instituicao.nome) + '</dd></div>' +
      '<div><dt>Unidade</dt><dd>' + esc(d.instituicao.unidade) + '</dd></div>' +
      '<div><dt>Departamento/Curso</dt><dd>' + esc(p.tipo === 'Docente' ? d.instituicao.departamento : d.instituicao.curso) + '</dd></div>' +
      (p.ingresso ? '<div><dt>Ingresso</dt><dd>' + esc(p.ingresso) + '</dd></div>' : '') +
      (p.email ? '<div><dt>E-mail</dt><dd><a href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a></dd></div>' : '') +
      '</dl>';

    const paginaPessoalHtml = p.paginaPessoal
      ? '<section class="card"><h2>Página pessoal</h2>' +
        '<p><a href="' + esc(p.paginaPessoal) + '" target="_blank" rel="noopener noreferrer">Acesse a página pessoal</a></p>' +
        '<p class="note">Link ilustrativo (dados fictícios).</p></section>'
      : '';

    const linksAcademicosHtml = links.length
      ? '<section class="card"><h2>Redes e perfis acadêmicos</h2>' +
        '<ul class="social-links">' +
        links.map(l =>
          '<li><a href="' + esc(l.url) + '" target="_blank" rel="me noopener noreferrer">' + esc(l.rotulo) + '</a></li>'
        ).join('') +
        '</ul></section>'
      : '';

    target.innerHTML =
      '<section class="profile-heading"><div>' +
      '<p class="eyebrow">Perfil de ' + esc(p.tipo.toLowerCase()) + '</p>' +
      '<h1>' + esc(p.nome) + '</h1>' +
      '<p class="role">' + esc(p.cargo) + '</p>' +
      '<p class="quick-info">' + esc(d.instituicao.unidade) + '</p>' +
      '</div></section>' +
      '<div class="layout"><div>' +
      '<section class="card"><h2>Apresentação</h2><p>' + esc(p.apresentacao) + '</p></section>' +
      '<section class="card"><h2>Formação acadêmica</h2>' + list(p.formacao) + '</section>' +
      '<section class="card"><h2>Áreas de atuação/interesse</h2>' + list(areas, 'tag-list') + '</section>' +
      (p.disciplinas ? '<section class="card"><h2>Disciplinas</h2>' + list(p.disciplinas) + '</section>' : '') +
      '<section class="card"><h2>Projetos</h2>' + list(projects) + '</section>' +
      '<section class="card"><h2>Grupos de pesquisa</h2>' + (grupos.length ? list(grupos) : '<p>Nenhum grupo cadastrado.</p>') + '</section>' +
      '<section class="card"><h2>Publicações e trabalhos</h2>' + (pubs.length ? list(pubs) : '<p>Nenhuma publicação cadastrada.</p>') + '</section>' +
      '</div><aside>' +
      '<section class="card"><h2>Vínculo institucional</h2>' + vinculoHtml + '</section>' +
      paginaPessoalHtml +
      linksAcademicosHtml +
      '<section class="card"><h2>Identificação semântica</h2>' +
      '<p><code>' + esc(uri) + '</code></p>' +
      '<p><a href="dados.ttl">Dados RDF</a></p>' +
      '<p><a href="ontologia.owl">Ontologia OWL</a></p>' +
      '</section></aside></div>';
  })
  .catch(e => {
    document.getElementById('conteudo').textContent = 'Erro ao carregar os dados. Execute em servidor HTTP. ' + e.message;
  });