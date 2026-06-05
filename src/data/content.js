export const siteMeta = {
  name: 'Sonar Digital',
  shortName: 'Sonar',
  description:
    'Portal de notícias de tecnologia com foco em software, hardware, mobile, segurança e mercado.',
  defaultImage: '/og/tech-news.svg',
  publisherLogo: '/favicon.svg',
  publisherName: 'Sonar Digital',
  contactEmail: 'editoria@sonardigital.dev',
  locale: 'pt-BR',
  newsLanguage: 'pt',
};

export const navigation = [
  { label: 'Início', path: '/' },
  { label: 'Inovação', path: '/categoria/inovacao' },
  { label: 'Software', path: '/categoria/software' },
  { label: 'Hardware', path: '/categoria/hardware' },
  { label: 'Segurança', path: '/categoria/seguranca' },
  { label: 'Mercado', path: '/categoria/mercado' },
  { label: 'Sobre', path: '/sobre' },
];

export const categories = [
  {
    slug: 'inovacao',
    name: 'Inovação',
    description: 'Tendências, automação e impacto prático no dia a dia.',
    accent: '#14b8a6',
  },
  {
    slug: 'software',
    name: 'Software e Dev',
    description: 'Frameworks, ferramentas, SEO técnico e boas práticas web.',
    accent: '#3b82f6',
  },
  {
    slug: 'hardware',
    name: 'Hardware',
    description: 'PCs, chips, notebooks e dispositivos para trabalho e casa.',
    accent: '#f97316',
  },
  {
    slug: 'mobile',
    name: 'Mobile',
    description: 'Android, iOS, apps e o ecossistema que move o bolso.',
    accent: '#a855f7',
  },
  {
    slug: 'seguranca',
    name: 'Segurança',
    description: 'Privacidade, phishing, infraestrutura e proteção digital.',
    accent: '#ef4444',
  },
  {
    slug: 'mercado',
    name: 'Mercado',
    description: 'Startups, investimento, plataformas e estratégia de produto.',
    accent: '#22c55e',
  },
  {
    slug: 'gadgets',
    name: 'Gadgets',
    description: 'Wearables, áudio, realidade mista e acessórios conectados.',
    accent: '#0ea5e9',
  },
];

const articleImage = '/og/tech-news.svg';

const makeArticle = (article) => ({
  image: articleImage,
  imageAlt: 'Ilustração editorial do Sonar Digital',
  ...article,
});

export const articles = [
  makeArticle({
    slug: 'agentes-inteligentes-ganham-fluxos-de-trabalho-mais-longos',
    title: 'Agentes inteligentes entram na fase de produto e deixam a vitrine',
    summary:
      'Ferramentas com mais contexto e menos fricção começam a encadear tarefas reais em vez de apenas demonstrar capacidade.',
    categorySlug: 'inovacao',
    categoryName: 'Inovação',
    author: 'Marina Costa',
    role: 'Editora de Tecnologia',
    publishedAt: '2026-06-04T08:15:00-03:00',
    updatedAt: '2026-06-04T10:05:00-03:00',
    readTime: '4 min',
    featured: true,
    tags: ['agentes', 'automação', 'produtividade'],
    highlights: [
      'O contexto longo reduz o custo de alternar entre ferramentas e sistemas.',
      'A supervisão humana ainda é necessária para conter erros e vieses.',
      'Portais podem usar automação para triagem, nunca para publicar sem revisão.',
    ],
    sections: [
      {
        heading: 'Do protótipo ao fluxo real',
        paragraphs: [
          'A nova geração de agentes inteligentes já não vive só de demonstração. O foco saiu da curiosidade e entrou na operação, com etapas encadeadas, memória de tarefa e integrações com produtos que o usuário já conhece.',
          'Essa mudança importa porque transforma a promessa em rotina. Em vez de responder perguntas isoladas, o agente passa a agir dentro de um fluxo: organizar informação, buscar fontes, comparar resultados e devolver uma proposta mais completa.',
        ],
      },
      {
        heading: 'O efeito no mercado editorial',
        paragraphs: [
          'Para um portal de notícias, a oportunidade está em usar automação para acelerar triagem, sumarização e análise de tendência, sempre com revisão humana. Isso melhora produtividade sem abrir mão de credibilidade.',
          'O ganho final vem quando a automação ajuda o time a publicar com mais consistência, manter metadados corretos e enriquecer a experiência do leitor sem sacrificar velocidade ou transparência.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'google-releva-experiencia-e-layout-estavel-para-scenarios-com-ads',
    title: 'Google reforça experiência visual e estabilidade como base de busca',
    summary:
      'Páginas rápidas, estáveis e bem estruturadas continuam sendo as melhores candidatas para Search, Discover e monetização saudável.',
    categorySlug: 'software',
    categoryName: 'Software e Dev',
    author: 'Rafael Nunes',
    role: 'Editor de SEO e Plataformas',
    publishedAt: '2026-06-04T07:30:00-03:00',
    updatedAt: '2026-06-04T09:00:00-03:00',
    readTime: '5 min',
    featured: true,
    tags: ['SEO', 'Google', 'Core Web Vitals', 'indexação'],
    highlights: [
      'Estrutura semântica ajuda o Google a entender o conteúdo da página.',
      'Layout instável derruba a experiência e afeta a confiança do usuário.',
      'Sitemap e canonical continuam essenciais em sites grandes.',
    ],
    sections: [
      {
        heading: 'O que continua valendo',
        paragraphs: [
          'Quem publica conteúdo na web ainda precisa do básico bem feito: HTML limpo, links crawláveis, canonical consistente e dados estruturados coerentes com o conteúdo da página.',
          'Em um portal de notícias, isso vale tanto para a home quanto para páginas de categoria e artigo. Se o Google não consegue ler com clareza a hierarquia do site, a descoberta fica mais lenta e menos previsível.',
        ],
      },
      {
        heading: 'Implicação para Ads e UX',
        paragraphs: [
          'Anúncios não precisam virar um obstáculo visual. Quando os espaços são reservados com antecedência, o layout não salta e a leitura segue fluida, o que preserva métricas de experiência e reduz atrito com o leitor.',
          'A regra prática é simples: conteúdo primeiro, publicidade bem encaixada e métricas monitoradas o tempo todo no Search Console e no AdSense.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'notebook-arm-promete-autonomia-de-dois-dias-em-uso-misto',
    title: 'Notebook ARM quer autonomia de dois dias e resfriamento passivo',
    summary:
      'A próxima leva de notebooks ultracompactos tenta unir autonomia, silêncio e desempenho suficiente para trabalho de escritório e criação leve.',
    categorySlug: 'hardware',
    categoryName: 'Hardware',
    author: 'Camila Duarte',
    role: 'Repórter de Hardware',
    publishedAt: '2026-06-03T17:20:00-03:00',
    updatedAt: '2026-06-03T18:05:00-03:00',
    readTime: '3 min',
    featured: false,
    tags: ['notebook', 'ARM', 'bateria', 'hardware'],
    highlights: [
      'O foco saiu de pico de desempenho para eficiência sustentada.',
      'A ausência de ventoinha reduz ruído, mas exige ótimo gerenciamento térmico.',
      'Para publicadores, hardware bom vira pauta se mostrar uso real, não só benchmark.',
    ],
    sections: [
      {
        heading: 'Eficiência acima de pico',
        paragraphs: [
          'Os novos notebooks ARM trabalham com outra proposta: entregar mais autonomia e menos calor em tarefas comuns, mesmo que o desempenho bruto em certos cenários não seja o maior do mercado.',
          'Para quem escreve, pesquisa e administra publicações, isso significa uma máquina mais silenciosa e previsível, com bateria para atravessar a rotina sem depender de tomada a cada reunião.',
        ],
      },
      {
        heading: 'Onde a proposta faz sentido',
        paragraphs: [
          'O segmento deve funcionar melhor para jornalismo, operação e desenvolvimento web do que para cargas pesadas de renderização ou edição avançada.',
          'A equação ideal depende de software otimizado, boa compatibilidade e preço competitivo. Sem isso, a eficiência vira argumento técnico bonito e pouca vantagem concreta.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'phishing-com-ia-exige-novos-habitos-de-seguranca',
    title: 'Phishing com IA acelera ataques e exige novos hábitos de segurança',
    summary:
      'Mensagens mais convincentes e personalizadas tornam golpes menos óbvios para equipes pequenas e usuários comuns.',
    categorySlug: 'seguranca',
    categoryName: 'Segurança',
    author: 'Bruno Leite',
    role: 'Editor de Segurança',
    publishedAt: '2026-06-03T11:40:00-03:00',
    updatedAt: '2026-06-03T12:10:00-03:00',
    readTime: '4 min',
    featured: false,
    tags: ['segurança', 'phishing', 'IA', 'privacidade'],
    highlights: [
      'IA reduz erros de linguagem e dá aparência de autenticidade ao golpe.',
      'Verificação em dois fatores e checagem de domínio seguem obrigatórias.',
      'Treinamento de equipe é tão importante quanto ferramentas de proteção.',
    ],
    sections: [
      {
        heading: 'Golpes mais plausíveis',
        paragraphs: [
          'Ferramentas generativas baixaram a barreira para golpes por e-mail, mensagem e até ligação. O texto sai mais natural, o tom parece mais próximo de um contato legítimo e a taxa de erro cai.',
          'Isso não significa que a defesa ficou impossível. Significa que o usuário precisa olhar para o domínio, o contexto e o pedido antes de clicar, baixar ou responder.',
        ],
      },
      {
        heading: 'Como o portal pode cobrir o tema',
        paragraphs: [
          'Artigos de segurança funcionam melhor quando trazem exemplos claros, checklists práticos e links para ferramentas confiáveis. A prioridade deve ser ensinar, não alarmar.',
          'Para um portal de tecnologia, o ganho editorial está em transformar notícia em orientação útil: o que mudou, como o golpe funciona e o que o leitor precisa fazer hoje.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'android-17-aposta-em-widgets-contextuais-e-janelas-fluidas',
    title: 'Android 17 aposta em widgets contextuais e janelas mais fluidas',
    summary:
      'A próxima versão do sistema amplia o papel dos widgets e melhora a transição entre consumo rápido e multitarefa.',
    categorySlug: 'mobile',
    categoryName: 'Mobile',
    author: 'Julia Almeida',
    role: 'Repórter Mobile',
    publishedAt: '2026-06-03T09:10:00-03:00',
    updatedAt: '2026-06-03T09:55:00-03:00',
    readTime: '3 min',
    featured: false,
    tags: ['Android', 'mobile', 'widgets', 'apps'],
    highlights: [
      'Widgets mais inteligentes reduzem a necessidade de abrir aplicativos o tempo todo.',
      'A interface precisa permanecer consistente em telas pequenas e dobráveis.',
      'Para apps de notícias, isso favorece leitura rápida e notificações úteis.',
    ],
    sections: [
      {
        heading: 'Interface com menos atrito',
        paragraphs: [
          'A ideia dos widgets contextuais é mostrar a informação certa no momento certo, sem obrigar o usuário a abrir dezenas de aplicativos para tarefas pequenas.',
          'Em celulares modernos, isso representa menos toque e mais clareza. O sistema deixa de ser só uma camada de distribuição e passa a ser também uma camada de decisão rápida.',
        ],
      },
      {
        heading: 'Oportunidade para publicadores',
        paragraphs: [
          'Portais que produzem conteúdo curto, atual e segmentado podem se beneficiar de cartões de notícia, alertas e chamadas mais objetivas.',
          'Para funcionar, porém, o conteúdo precisa ser estruturado com metadados corretos, títulos claros e imagens consistentes. Sem isso, a experiência não escala.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'startups-de-tecnologia-atraem-capital-com-foco-em-verticalizacao',
    title: 'Startups de tecnologia atraem capital com foco em verticalização',
    summary:
      'Investidores seguem seletivos, mas produtos que resolvem dores específicas continuam recebendo atenção e aporte.',
    categorySlug: 'mercado',
    categoryName: 'Mercado',
    author: 'Marina Costa',
    role: 'Editora de Mercado',
    publishedAt: '2026-06-02T18:05:00-03:00',
    updatedAt: '2026-06-02T18:35:00-03:00',
    readTime: '4 min',
    featured: false,
    tags: ['mercado', 'startups', 'investimento'],
    highlights: [
      'Soluções verticais vencem quando resolvem problemas específicos com retorno claro.',
      'Crescimento sem retenção já não basta para convencer investidores.',
      'Portais precisam ligar notícia a impacto: produto, receita e adoção.',
    ],
    sections: [
      {
        heading: 'Capital mais seletivo',
        paragraphs: [
          'O mercado continua aberto para soluções tecnológicas, mas a régua subiu. Já não basta prometer automação ampla; é preciso mostrar solução vertical, integração e economia mensurável para o cliente.',
          'Essa mudança favorece startups com foco em nichos como saúde, jurídico, atendimento e vendas. Quanto mais clara a dor, mais fácil justificar investimento e adoção.',
        ],
      },
      {
        heading: 'O que isso muda para a cobertura',
        paragraphs: [
          'Notícias de mercado ficam melhores quando explicam o modelo de negócio, o estágio da empresa e a tese que sustenta o aporte.',
          'Isso ajuda o leitor a entender por que o movimento importa, e não apenas quem levantou capital.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'framework-js-ajusta-pipeline-para-server-components-e-performance',
    title: 'Framework JS ganha atualização com foco em server components e performance',
    summary:
      'A nova versão tenta reduzir custo de execução no cliente e simplificar o caminho até experiências mais rápidas.',
    categorySlug: 'software',
    categoryName: 'Software e Dev',
    author: 'Rafael Nunes',
    role: 'Editor de SEO e Plataformas',
    publishedAt: '2026-06-02T15:40:00-03:00',
    updatedAt: '2026-06-02T16:05:00-03:00',
    readTime: '5 min',
    featured: false,
    tags: ['JavaScript', 'framework', 'performance', 'web'],
    highlights: [
      'Menos JavaScript no cliente tende a melhorar carregamento e interatividade.',
      'Arquitetura de dados precisa ser pensada junto com renderização.',
      'Páginas de notícias se beneficiam de renderização clara e conteúdos indexáveis.',
    ],
    sections: [
      {
        heading: 'Menos trabalho no navegador',
        paragraphs: [
          'A atualização reforça um caminho conhecido: mover parte do trabalho para o servidor, reduzir hidratação desnecessária e deixar a navegação mais estável para o usuário.',
          'Isso não significa abandonar componentes interativos. Significa reservar a interatividade para onde ela realmente agrega valor, sem inflar a página inteira com scripts pesados.',
        ],
      },
      {
        heading: 'O que importa para portais',
        paragraphs: [
          'Sites editoriais precisam combinar renderização eficiente com SEO previsível. Isso inclui headings corretos, breadcrumbs, conteúdo legível no HTML e marcação estruturada consistente.',
          'Quando a base técnica está boa, o conteúdo trabalha melhor. Quando a base quebra, nenhum título forte compensa a lentidão ou o rastreamento ruim.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'headsets-de-realidade-mista-ganham-preco-mais-acessivel',
    title: 'Headsets de realidade mista ficam mais acessíveis para uso corporativo',
    summary:
      'O setor tenta sair do nicho premium e provar valor em treinamento, suporte remoto e visualização de produto.',
    categorySlug: 'gadgets',
    categoryName: 'Gadgets',
    author: 'Camila Duarte',
    role: 'Repórter de Hardware',
    publishedAt: '2026-06-02T08:55:00-03:00',
    updatedAt: '2026-06-02T09:25:00-03:00',
    readTime: '4 min',
    featured: false,
    tags: ['realidade mista', 'gadget', 'XR', 'empresa'],
    highlights: [
      'O mercado quer mostrar utilidade concreta antes de prometer revoluções.',
      'Treinamento e suporte remoto são usos mais fáceis de justificar no curto prazo.',
      'Conteúdo editorial precisa fugir do hype e trazer casos de uso reais.',
    ],
    sections: [
      {
        heading: 'De vitrine para ferramenta',
        paragraphs: [
          'A realidade mista começa a ser vendida menos como promessa futurista e mais como ferramenta operacional para empresas que precisam treinar equipes, mostrar projetos e acompanhar procedimentos.',
          'Isso é importante porque desloca a conversa de curiosidade para produtividade. Quando a tecnologia resolve um fluxo caro, a adoção deixa de ser experimental.',
        ],
      },
      {
        heading: 'Onde a cobertura editorial ganha força',
        paragraphs: [
          'Portais conseguem diferenciar pauta quando mostram preço, cenário de uso, limitações e o perfil de empresa que realmente se beneficia.',
          'O leitor quer contexto, não só anúncio de produto. E contexto vem com comparação, dados e clareza sobre custo-benefício.',
        ],
      },
    ],
  }),
];

export const pages = [
  {
    slug: 'sobre',
    title: 'Sobre o portal',
    description:
      'Entenda a linha editorial, a organização de conteúdo e a estrutura pensada para SEO e monetização responsável.',
    sections: [
      {
        heading: 'Linha editorial',
        paragraphs: [
          'O portal foi desenhado para cobrir tecnologia com equilíbrio entre notícia rápida, análise curta e guias úteis. A prioridade é ajudar o leitor a entender o que mudou e por que isso importa.',
          'A mesma base editorial também serve como laboratório técnico: o site já nasce com SEO, structured data, sitemap e espaços reservados para anúncios sem comprometer a leitura.',
        ],
      },
      {
        heading: 'Como publicamos',
        paragraphs: [
          'Cada matéria deve passar por apuração, revisão de linguagem, checagem de links e validação de metadados antes de ir ao ar.',
          'Isso mantém a página pronta para Search Console, AdSense e distribuição em diferentes superfícies do Google.',
        ],
        items: ['Título claro', 'Imagem consistente', 'Autor definido', 'Data de publicação visível', 'Canonical correto'],
      },
      {
        heading: 'O que o leitor pode esperar',
        paragraphs: [
          'Cobertura objetiva, atualização frequente e foco no que realmente impacta a rotina de quem trabalha com tecnologia.',
          'O portal também evita ruído editorial: publicidade encaixada com cuidado, transparência sobre fontes e páginas institucionais sempre acessíveis.',
        ],
      },
    ],
  },
  {
    slug: 'contato',
    title: 'Contato',
    description:
      'Canal para pautas, correções, parcerias e comunicações editoriais do portal.',
    sections: [
      {
        heading: 'Fale com a redação',
        paragraphs: [
          'Use este canal para enviar sugestões de pauta, correções e contatos de imprensa. Em um portal de tecnologia, rapidez é importante, mas precisão continua sendo o ponto de partida.',
          'Se a sua mensagem envolver correção factual, inclua URL, trecho afetado e a versão correta do dado para que a atualização seja mais rápida.',
        ],
        items: [
          'E-mail editorial: editoria@sonardigital.dev',
          'Assunto recomendado: pauta, correção ou parceria',
          'Tempo de retorno: 1 a 3 dias úteis',
        ],
      },
      {
        heading: 'Parcerias e publicidade',
        paragraphs: [
          'Pedidos comerciais devem deixar claro o objetivo, o público-alvo e o formato desejado. Isso ajuda a manter a separação entre conteúdo editorial e publicidade.',
          'A transparência protege o leitor e também deixa o fluxo de revisão mais simples para a equipe.',
        ],
      },
    ],
  },
  {
    slug: 'privacidade',
    title: 'Privacidade',
    description:
      'Política base sobre cookies, anúncios, analytics e uso responsável de dados no portal.',
    sections: [
      {
        heading: 'Cookies e publicidade',
        paragraphs: [
          'O portal pode usar cookies e tecnologias similares para medir audiência, manter preferências e exibir anúncios por meio de serviços de terceiros, como o Google AdSense.',
          'Quando regras locais exigirem consentimento, a implementação deve respeitar a legislação aplicável e a escolha do visitante.',
        ],
      },
      {
        heading: 'Analytics e medição',
        paragraphs: [
          'Ferramentas de análise podem registrar eventos básicos de navegação para entender quais páginas são mais úteis e quais conteúdos merecem prioridade editorial.',
          'Os dados devem ser usados para melhorar a experiência do site, nunca para identificar pessoas sem base legal adequada.',
        ],
      },
      {
        heading: 'Controle do usuário',
        paragraphs: [
          'O visitante pode limpar cookies no navegador e gerenciar permissões do dispositivo sempre que quiser.',
          'Se houver dúvidas específicas sobre o uso de dados, envie um contato para a redação e descreva a situação com clareza.',
        ],
      },
    ],
  },
  {
    slug: 'termos',
    title: 'Termos de uso',
    description:
      'Regras básicas para leitura, compartilhamento, links externos e uso do conteúdo do portal.',
    sections: [
      {
        heading: 'Uso do conteúdo',
        paragraphs: [
          'O conteúdo publicado neste portal é destinado à leitura, referência e compartilhamento com atribuição adequada. Qualquer reprodução comercial depende de autorização.',
          'Títulos, trechos e imagens devem ser usados com respeito aos direitos autorais e à integridade editorial da matéria original.',
        ],
      },
      {
        heading: 'Links e terceiros',
        paragraphs: [
          'O portal pode apontar para sites de terceiros. Esses destinos têm políticas próprias e devem ser avaliados separadamente pelo leitor.',
          'Publicidade e links patrocinados precisam ser apresentados com distinção visual suficiente para evitar confusão com o conteúdo editorial.',
        ],
      },
      {
        heading: 'Atualizações',
        paragraphs: [
          'Estes termos podem ser atualizados para refletir mudanças técnicas, legais ou editoriais.',
          'A página sempre deve permanecer acessível e fácil de encontrar no rodapé do site.',
        ],
      },
    ],
  },
];
