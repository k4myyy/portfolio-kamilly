
"use client";

import { useEffect, useState } from "react";

// Projetos desenvolvidos
const projects = [
  {
    number: "01",
    title: "Avança Fácil",
    type: "Tecnologia + educação",
    description:
      "Projeto acadêmico na área de tecnologia e educação, desenvolvido em equipe durante a Residência Tecnológica. Mais detalhes sobre a proposta serão apresentados futuramente.",
    tags: ["Educação", "UX/UI", "Aplicação web"],
    status: "Projeto acadêmico",
  },
  {
    number: "02",
    title: "Jogo de Dados",
    type: "Desenvolvimento web",
    description:
      "Aplicação desenvolvida em Next.js e React para trabalhar componentes, propriedades, estados e lógica de uma partida entre dois jogadores.",
    tags: ["Next.js", "React", "JavaScript"],
    status: "Atividade acadêmica",
  },
  {
    number: "03",
    title: "Projetos de programação",
    type: "Estudos e prática",
    description:
      "Exercícios e aplicações desenvolvidos durante a formação em Sistemas para Internet, explorando lógica de programação, Java, orientação a objetos e desenvolvimento web.",
    tags: ["Java", "POO", "HTML", "CSS"],
    status: "Em evolução",
  },
];

// Tecnologias e ferramentas que estudo
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Java",
  "Git",
  "GitHub",
  "Figma",
  "VS Code",
  "IntelliJ IDEA",
];

// Tecnologias utilizadas neste portfólio
const portfolioTechnologies = [
  "Next.js",
  "React",
  "JavaScript",
  "CSS3",
  "Git",
  "GitHub",
  "API REST",
  "VS Code",
  "Vercel",
];

// Busca os repositórios públicos do GitHub
function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/k4myyy/repos?sort=updated&per_page=6"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível carregar os repositórios");
        }

        return response.json();
      })
      .then((data) => {
        const publicRepos = data.filter((repo) => !repo.fork);
        setRepos(publicRepos);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="repo-area">
      {loading && (
        <p className="muted">
          Carregando repositórios do GitHub...
        </p>
      )}

      {error && (
        <p className="muted">
          Não foi possível carregar os repositórios agora.
          Você pode visitar meu GitHub pelo link abaixo.
        </p>
      )}

      {!loading && !error && repos.length === 0 && (
        <p className="muted">
          Ainda não há repositórios públicos para exibir.
        </p>
      )}

      <div className="repo-grid">
        {repos.map((repo) => (
          <a
            className="repo-card"
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            key={repo.id}
          >
            <span className="repo-language">
              {repo.language || "Projeto"}
            </span>

            <h3>{repo.name.replaceAll("-", " ")}</h3>

            <p>
              {repo.description ||
                "Repositório público no GitHub."}
            </p>

            <span className="repo-link">
              Ver repositório ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Links do menu
  const links = [
    ["home", "Início"],
    ["sobre", "Sobre"],
    ["academica", "Acadêmica"],
    ["profissional", "Profissional"],
    ["projetos", "Projetos"],
  ];

  // Navegação entre as seções
  function goTo(id) {
    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <main>
  
      <header className="topbar">
        <a
          className="brand"
          href="#home"
          onClick={() => setActive("home")}
        >
          KK<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {links.map(([id, label]) => (
            <button
              key={id}
              className={
                active === id
                  ? "nav-link selected"
                  : "nav-link"
              }
              onClick={() => goTo(id)}
            >
              {label}
            </button>
          ))}

          <a
            className="nav-cta"
            href="https://github.com/k4myyy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot"></span>
            PORTFÓLIO • 2026
          </p>

          <h1>
            Olá, eu sou
            <br />
            <em>Kamilly Kauany.</em>
          </h1>

          <p className="hero-text">
            Estudante de Sistemas para Internet,
            interessada em tecnologia, criatividade
            e soluções que aproximam pessoas do conhecimento.
          </p>

          <div className="hero-actions">
            <button
              className="button primary"
              onClick={() => goTo("projetos")}
            >
              Conheça meus projetos <span>↗</span>
            </button>

            <a
              className="button secondary"
              href="https://github.com/k4myyy"
              target="_blank"
              rel="noreferrer"
            >
              Meu GitHub ↗
            </a>
          </div>

          <div className="hero-note">
            <span>✳</span>
            Aprendendo, criando e evoluindo um projeto de cada vez.
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Elemento gráfico decorativo"
        >
          <div className="art-orbit orbit-one"></div>
          <div className="art-orbit orbit-two"></div>

          <div className="art-card">
            <span className="art-small">
              HELLO, WORLD!
            </span>

            <strong>
              Ideias que
              <br />
              <i>viram</i> código.
            </strong>

            <span className="art-spark">✳</span>

            <span className="art-bottom">
              CRIATIVIDADE + TECNOLOGIA
            </span>
          </div>

          <span className="floating f-one">{"{ }"}</span>
          <span className="floating f-two">✳</span>
          <span className="floating f-three">01 — 05</span>
        </div>
      </section>

      <section className="intro-strip">
        <span>DESENVOLVIMENTO</span>
        <b>✳</b>
        <span>TECNOLOGIA</span>
        <b>✳</b>
        <span>APRENDIZADO CONTÍNUO</span>
        <b>✳</b>
        <span>CRIATIVIDADE</span>
      </section>

      <section className="section about" id="sobre">
        <div className="section-heading">
          <p className="eyebrow">01 / SOBRE MIM</p>

          <h2>
            Tecnologia com
            <br />
            <em>propósito.</em>
          </h2>
        </div>

        <div className="about-content">
          <p className="lead">
            Sou estudante de Sistemas para Internet
            na Universidade Católica de Pernambuco (Unicap),
            por meio do programa Embarque Digital,
            ligado ao Porto Digital.
          </p>

          <p>
            Minha trajetória começou na formação técnica
            em Informática e continua na graduação,
            onde venho desenvolvendo conhecimentos
            em programação, desenvolvimento web,
            lógica e design de interfaces.
            Gosto de aprender na prática,
            transformar ideias em projetos e explorar
            como a tecnologia pode contribuir com a educação.
          </p>

          <div className="facts">
            <div>
              <strong>2025</strong>
              <span>Início da graduação</span>
            </div>

            <div>
              <strong>1º lugar</strong>
              <span>Demoday Porto Digital 2025.2</span>
            </div>

            <div>
              <strong>Web</strong>
              <span>Área de aprendizado</span>
            </div>
          </div>

          <div className="portfolio-tech">
            <p className="eyebrow">
              TECNOLOGIAS UTILIZADAS NESTE PORTFÓLIO
            </p>

            <h3>Como desenvolvi este site.</h3>

            <p>
              Este portfólio foi desenvolvido com Next.js
              e React, utilizando JavaScript para as
              funcionalidades e CSS para a estilização.
              Também utilizei a API pública do GitHub
              para apresentar meus repositórios.
            </p>

            <div className="skill-list compact">
              {portfolioTechnologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-heading">
          <p className="eyebrow">
            02 / FERRAMENTAS E TECNOLOGIAS
          </p>

          <h2>
            O que utilizo
            <br />
            <em>e estudo.</em>
          </h2>
        </div>

        <div className="skills-content">
          <p className="muted">
            Tecnologias, ferramentas e conteúdos
            explorados ao longo da minha formação
            e dos projetos acadêmicos.
          </p>

          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <div className="module-list">
            <div>
              <b>01</b>
              <span>Lógica de programação e algoritmos</span>
            </div>

            <div>
              <b>02</b>
              <span>Programação orientada a objetos</span>
            </div>

            <div>
              <b>03</b>
              <span>Desenvolvimento de interfaces web</span>
            </div>

            <div>
              <b>04</b>
              <span>Componentização com React</span>
            </div>

            <div>
              <b>05</b>
              <span>Versionamento de código com Git</span>
            </div>

            <div>
              <b>06</b>
              <span>Prototipação e design de interfaces</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section timeline-section"
        id="academica"
      >
        <div className="section-heading">
          <p className="eyebrow">03 / FORMAÇÃO</p>

          <h2>
            Experiência
            <br />
            <em>acadêmica.</em>
          </h2>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-date">
              2025 — atual
            </span>

            <div>
              <h3>
                Tecnólogo em Sistemas para Internet
              </h3>

              <p className="place">
                Universidade Católica de Pernambuco — Unicap
              </p>

              <p>
                Graduação na área de tecnologia,
                com formação em desenvolvimento de sistemas,
                programação, web e inovação,
                por meio do programa Embarque Digital /
                Porto Digital.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <span className="timeline-date">
              Concluído em 2025
            </span>

            <div>
              <h3>Técnico em Informática</h3>

              <p className="place">
                Formação técnica
              </p>

              <p>
                Formação introdutória em informática,
                com contato com programação,
                fundamentos de tecnologia
                e desenvolvimento de projeto acadêmico.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <span className="timeline-date">
              2025.2
            </span>

            <div>
              <h3>
                Residência Tecnológica — Demoday
              </h3>

              <p className="place">
                Porto Digital
              </p>

              <p>
                Participação em projeto desenvolvido
                em equipe durante a formação.
                A equipe conquistou o primeiro lugar
                no Demoday do ciclo 2025.2.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="section professional"
        id="profissional"
      >
        <div className="section-heading">
          <p className="eyebrow">04 / TRAJETÓRIA</p>

          <h2>
            Experiência
            <br />
            <em>profissional.</em>
          </h2>
        </div>

        <div className="professional-card">
          <div className="job-top">
            <span className="job-tag">
              CARGO ATUAL
            </span>

            <span className="timeline-date">
              Assistente Administrativa
            </span>
          </div>

          <h3>Centro de Ensino e Pesquisa</h3>

          <p className="place">
            Fundação Manoel da Silva Almeida —
            Hospital Maria Lucinda | Recife, Pernambuco
          </p>

          <p>
            Após o encerramento do contrato de Jovem Aprendiz,
            passei a integrar o Centro de Ensino e Pesquisa.
            Atualmente, presto apoio administrativo aos setores
            vinculados ao Centro, auxiliando na organização
            de documentos, nas demandas acadêmicas e nos
            processos relacionados ao ensino e à pesquisa.
          </p>

          <div className="skill-list compact">
            <span>Gestão documental</span>
            <span>Apoio a processos acadêmicos</span>
            <span>Rotinas administrativas</span>
            <span>Ensino e pesquisa</span>
          </div>
        </div>

        <div className="professional-card">
          <div className="job-top">
            <span className="job-tag">
              EXPERIÊNCIA ANTERIOR
            </span>

            <span className="timeline-date">
              Jovem Aprendiz — Área Administrativa
            </span>
          </div>

          <h3>
            Fundação Manoel da Silva Almeida —
            Hospital Maria Lucinda
          </h3>

          <p className="place">
            Recife, Pernambuco | Contrato encerrado
          </p>

          <p>
            Durante o contrato de aprendizagem,
            atuei em diferentes setores do hospital:
            Faturamento, Qualidade e Segurança do Paciente,
            Radiologia/Arquivo Ambulatorial
            e Recursos Humanos (RH).
            Nesse período, desenvolvi atividades
            de apoio às rotinas administrativas
            e à organização de documentos.
          </p>

          <div className="skill-list compact">
            <span>Organização de documentos</span>
            <span>Apoio administrativo</span>
            <span>Comunicação profissional</span>
            <span>Trabalho em equipe</span>
          </div>
        </div>
      </section>

      <section className="section projects" id="projetos">
        <div className="section-heading">
          <p className="eyebrow">05 / NA PRÁTICA</p>

          <h2>
            Projetos em
            <br />
            <em>construção.</em>
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-meta">
                <span>{project.number} / 03</span>
                <span>{project.status}</span>
              </div>

              <p className="project-type">
                {project.type}
              </p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="skill-list compact">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="github-heading">
          <div>
            <p className="eyebrow">
              CÓDIGO E REPOSITÓRIOS
            </p>

            <h3>Também estou no GitHub.</h3>
          </div>

          <a
            className="text-link"
            href="https://github.com/k4myyy"
            target="_blank"
            rel="noreferrer"
          >
            Acessar perfil ↗
          </a>
        </div>

        <GithubRepos />
      </section>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#home">
            KK<span>.</span>
          </a>

          <p>
            Construindo conhecimento,
            uma linha de código por vez.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/k4myyy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="#home">
            Voltar ao topo ↑
          </a>
        </div>

        <small>
          © 2026 Kamilly Kauany.
          Desenvolvido com Next.js e React.
        </small>
      </footer>
    </main>
  );
}
