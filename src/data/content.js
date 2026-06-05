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
    description: 'Ferramentas e processos que mudam a forma como empresas entregam valor com tecnologia.',
    accent: '#14b8a6',
  },
  {
    slug: 'software',
    name: 'Software e Dev',
    description: 'Tendências em desenvolvimento, SEO técnico e plataformas que sustentam sites modernos.',
    accent: '#3b82f6',
  },
  {
    slug: 'hardware',
    name: 'Hardware',
    description: 'Componentes, notebooks e infraestrutura física para quem constrói e opera tecnologia.',
    accent: '#f97316',
  },
  {
    slug: 'mobile',
    name: 'Mobile',
    description: 'Sistemas, apps e dispositivos móveis que impactam produtividade e consumo digital.',
    accent: '#a855f7',
  },
  {
    slug: 'seguranca',
    name: 'Segurança',
    description: 'Risco, defesa e controles para proteger dados, usuários e ambientes conectados.',
    accent: '#ef4444',
  },
  {
    slug: 'mercado',
    name: 'Mercado',
    description: 'Financiamento, estratégias e movimentações do ecossistema de tecnologia.',
    accent: '#22c55e',
  },
  {
    slug: 'gadgets',
    name: 'Gadgets',
    description: 'Dispositivos e acessórios com aplicações concretas em trabalho, saúde e suporte técnico.',
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
      'Plataformas de agentes com contexto longo agora são testadas em fluxo de atendimento, análise de contratos e preparação de briefings.',
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
      'Fluxos de trabalho passam a incluir memória, verificação e integração com sistemas existentes.',
      'A voz humana mantém o controle editorial e evita automação sem contexto.',
      'O valor real aparece na entrega de tarefas completas, não em respostas isoladas.',
    ],
    sections: [
      {
        heading: 'Fluxo operacional em vez de demonstração',
        paragraphs: [
          'O foco mudou de uma vitrine de capacidades para a aplicação em fluxos reais, como triagem de e-mails, preparação de relatórios e orientação de processos internos.',
          'Em vez de gerar um único texto, o agente concentra tarefas: coletar dados, sintetizar informações e propor um rascunho pronto para revisão.',
        ],
      },
      {
        heading: 'Por que isso importa para a redação',
        paragraphs: [
          'No jornalismo de tecnologia, a vantagem vem de agilizar etapas repetitivas sem deixar de checar fontes e ajustar tom editorial.',
          'A automação que funciona melhor integra o trabalho humano no centro, usando IA como suporte, não como substituto.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'google-releva-experiencia-e-layout-estavel-para-scenarios-com-ads',
    title: 'Google reforça experiência visual e estabilidade como base de busca',
    summary:
      'Uma atualização de busca mostra que páginas estáveis, rápidas e com anúncios planejados continuam ganhando vantagem em Search e Discover.',
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
      'Estabilidade visual e velocidade continuam determinantes para ranking e experiência.',
      'Anúncios bem posicionados evitam saltos de layout e preservam métricas de engajamento.',
      'Dados estruturados e canonical consistentes ajudam o Google a indexar a página corretamente.',
    ],
    sections: [
      {
        heading: 'A prioridade do usuário permanece a mesma',
        paragraphs: [
          'O Google reforça que, mesmo com monetização ativa, a página precisa ser previsível e usável desde o primeiro pixel.',
          'Isso exige reservar espaços de anúncio, evitar mudanças bruscas de layout e garantir que o conteúdo central esteja pronto para leitura imediatamente.',
        ],
      },
      {
        heading: 'Implicações para conteúdo e publicidade',
        paragraphs: [
          'Portais de notícia que exibem anúncios precisam pensar a experiência como um todo: texto claro, imagens estáveis e blocos publicitários que não prejudiquem a leitura.',
          'A vantagem competitiva está na combinação de receita e usabilidade, não na colocação de anúncios a qualquer custo.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'notebook-arm-promete-autonomia-de-dois-dias-em-uso-misto',
    title: 'Notebook ARM quer autonomia de dois dias e resfriamento passivo',
    summary:
      'Novos notebooks ARM prometem mais de um dia inteiro de uso leve com resfriamento silencioso e consumo controlado.',
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
      'O foco agora é autonomia real para tarefas de escritório e criação leve.',
      'Resfriamento passivo reduz ruído, mas exige um projeto térmico eficiente.',
      'A utilidade prática vale mais que números máximos de benchmark.',
    ],
    sections: [
      {
        heading: 'Autonomia avaliada no dia a dia',
        paragraphs: [
          'Fabricantes estão priorizando o uso real em texto, planilhas e navegação, em vez de spec sheets focados em pico de desempenho.',
          'O objetivo é oferecer um equipamento que aguente sessões de trabalho longas sem precisar de carga a cada poucas horas.',
        ],
      },
      {
        heading: 'Quando essa proposta faz sentido',
        paragraphs: [
          'Esse tipo de notebook costuma ser atraente para profissionais remotos, jornalistas e equipes que precisam de silêncio e mobilidade.',
          'A proposta perde força quando o foco é edição multimídia pesada ou jogos, porque o desempenho sustentado é o principal diferencial.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'phishing-com-ia-exige-novos-habitos-de-seguranca',
    title: 'Phishing com IA acelera ataques e exige novos hábitos de segurança',
    summary:
      'Golpes de phishing com texto gerado por IA estão mais convincentes e exigem verificação atenta de remetentes e domínios.',
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
      'Mensagens personalizadas e mais naturais reduzem sinais óbvios de fraude.',
      'MFA e revisão de domínio continuam as defesas mais eficazes.',
      'Treinamento de equipe é tão importante quanto ferramentas de proteção.',
    ],
    sections: [
      {
        heading: 'Mensagens mais próximas do real',
        paragraphs: [
          'Ferramentas de IA tornaram os golpes mais parecidos com comunicações oficiais, com termos e formatos que imitam cobranças, atualizações de conta e avisos importantes.',
          'Isso exige que a pessoa revise remetente, endereço do link e a solicitação antes de clicar ou baixar qualquer arquivo.',
        ],
      },
      {
        heading: 'A resposta certa para equipes e leitores',
        paragraphs: [
          'A melhor defesa combina autenticação em dois fatores, políticas de senha fortes e treinamento contínuo da equipe.',
          'Para leitores, o hábito correto é buscar mensagens por canais oficiais. Para empresas, é limitar a exposição de informações sensíveis em comunicações públicas.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'android-17-aposta-em-widgets-contextuais-e-janelas-fluidas',
    title: 'Android 17 aposta em widgets contextuais e janelas mais fluidas',
    summary:
      'A nova versão amplia widgets úteis e melhora a transição entre apps para uma experiência móvel mais fluida.',
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
      'Widgets contextuais entregam informação no momento certo.',
      'Multitarefa fluida melhora uso em telas grandes e dobráveis.',
      'Apps de notícias ganham presença sem exigir abertura total.',
    ],
    sections: [
      {
        heading: 'Menos cliques, mais contexto',
        paragraphs: [
          'A ênfase nos widgets contextuais busca antecipar tarefas, como consultar itinerários, acompanhar resultados ou revisar relatórios sem abrir o app principal.',
          'Isso reduz atrito e torna o telefone mais útil no cotidiano, especialmente para quem alterna entre trabalho e consumo rápido de informação.',
        ],
      },
      {
        heading: 'Oportunidade para publicadores',
        paragraphs: [
          'Portais que trabalham com notícia e atualização ao vivo podem tirar proveito de formatos compactos e chamadas diretas.',
          'Sem essa adaptação, o conteúdo corre o risco de ficar invisível na nova forma de interação do sistema.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'startups-de-tecnologia-atraem-capital-com-foco-em-verticalizacao',
    title: 'Startups de tecnologia atraem capital com foco em verticalização',
    summary:
      'Investidores seguem seletivos, mas preferem startups com produto definido, receita recorrente e impacto claro em um segmento.',
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
      'Investidores valorizam retorno claro em nichos definidos.',
      'Retenção e receita pagante importam mais do que crescimento amplo.',
      'Cobertura precisa conectar rodada à experiência do cliente.',
    ],
    sections: [
      {
        heading: 'Capital com régua mais alta',
        paragraphs: [
          'O interesse no setor não desapareceu, mas ficou mais exigente: startups precisam mostrar casos de uso reais e clientes dispostos a pagar.',
          'Isso favorece nichos como logística, saúde e serviços de campo, onde o valor pode ser medido com números objetivos.',
        ],
      },
      {
        heading: 'Como escrever sobre isso',
        paragraphs: [
          'Um texto de mercado forte descreve o modelo de negócio, o estágio da empresa e a tese por trás do aporte.',
          'Assim o leitor entende por que o investimento é relevante, além de simplesmente saber qual startup recebeu dinheiro.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'framework-js-ajusta-pipeline-para-server-components-e-performance',
    title: 'Framework JS ganha atualização com foco em server components e performance',
    summary:
      'A atualização prioriza server components para reduzir JavaScript no cliente e acelerar o carregamento inicial.',
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
      'Renderização no servidor reduz a quantidade de código que precisa rodar no navegador.',
      'Menos hidratação significa páginas mais rápidas e estáveis.',
      'Portais de notícia se beneficiam de HTML completo já no primeiro carregamento.',
    ],
    sections: [
      {
        heading: 'Menos trabalho para o navegador',
        paragraphs: [
          'A nova versão reforça a tendência de mover lógica para o servidor, entregando páginas interativas sem forçar o navegador a compilar grandes blocos de JavaScript.',
          'Isso é particularmente útil para sites com muito conteúdo editorial, onde a prioridade é leitura e indexação imediata.',
        ],
      },
      {
        heading: 'Por que isso importa para sites de notícia',
        paragraphs: [
          'Páginas que chegam prontas ao HTML ajudam crawlers e mantêm a experiência mais estável, especialmente em conexões móveis.',
          'A arquitetura também exige que dados e componentes sejam planejados de forma integrada, mas o retorno aparece em velocidade e SEO mais consistentes.',
        ],
      },
    ],
  }),
  makeArticle({
    slug: 'headsets-de-realidade-mista-ganham-preco-mais-acessivel',
    title: 'Headsets de realidade mista ficam mais acessíveis para uso corporativo',
    summary:
      'A tecnologia busca provas de valor em treinamento, suporte remoto e visualização de projetos, em vez de ser apenas uma promessa futurista.',
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
      'O foco agora é aplicação corporativa, como treinamento e suporte remoto.',
      'A viabilidade depende de comprovar redução de custos ou ganho de produtividade.',
      'A cobertura precisa mostrar cenário de uso real, não promessas vagas.',
    ],
    sections: [
      {
        heading: 'Ferramenta para empresas, não apenas vitrine',
        paragraphs: [
          'Os headsets estão sendo reposicionados para casos de uso práticos, como instrução de campo, inspeção remota e revisão de projetos.',
          'Quando a tecnologia demonstra economia de tempo e menos deslocamento, a adoção deixa de ser experimental.',
        ],
      },
      {
        heading: 'O que o leitor quer saber',
        paragraphs: [
          'Uma pauta forte compara preço, casos de uso e as limitações da solução, especialmente para empresas que avaliam investimento.',
          'O foco deve ser o retorno prático: menos viagens, menos erros e melhor colaboração entre equipes.',
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
      'Entenda a linha editorial, a organização de conteúdo e a estrutura pensada para conteúdo e monetização responsável.',
    sections: [
      {
        heading: 'Linha editorial',
        paragraphs: [
          'O portal foi desenhado para cobrir tecnologia com equilíbrio entre notícia rápida, análise curta e guias úteis. A prioridade é ajudar o leitor a entender o que mudou e por que isso importa.',
          'A mesma base editorial também serve como laboratório técnico: o site já nasce com dados estruturados, sitemap e espaços reservados para anúncios sem comprometer a leitura.',
        ],
      },
      {
        heading: 'Como publicamos',
        paragraphs: [
          'Cada matéria deve passar por apuração, revisão de linguagem, checagem de links e validação de metadados antes de ir ao ar.',
          'Isso mantém a página pronta para publicação e distribuição em diferentes superfícies.',
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
          'O portal pode usar cookies e tecnologias similares para medir audiência, manter preferências e exibir anúncios por meio de serviços de terceiros.',
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
