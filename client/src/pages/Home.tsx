/**
 * Design reminder — Quiet Academic Record:
 * English-first academic archive with restrained typography, generous white space,
 * a small meridian mark, and evidence-led research writing. Avoid decorative imagery.
 */
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Braces,
  Droplets,
  Network,
} from "lucide-react";

const scholarProfile =
  "https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&user=z0qx-qMAAAAJ";

const publications = [
  {
    title:
      "Taming Two-Dimensional Polymerization by a Machine-Learning Discovered Crystallization Model",
    authors: <><strong>J. Tian</strong>, K. A. Treaster, L. Xiong, Z. Wang, A. M. Evans, H. Li</>,
    venue: "Angewandte Chemie · 136 (39) · e202408937",
    year: "2024",
    citations: "15 citations",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=z0qx-qMAAAAJ&citation_for_view=z0qx-qMAAAAJ:d1gkVwhDpl0C",
  },
  {
    title:
      "Intrinsic Mechanical Properties of Two-Dimensional Covalent Organic Frameworks",
    authors: <>L. Xiong, C. Fu, <strong>J. Tian</strong>, Y. Geng, L. Han, H. Zhang, H. Li</>,
    venue: "Chemical Science · 16 (35) · 15913–15925",
    year: "2025",
    citations: "12 citations",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=z0qx-qMAAAAJ:u5HHmVD_uO8C",
  },
  {
    title:
      "MlCOFSyn: A Machine Learning Framework To Facilitate the Synthesis of 2D Covalent Organic Frameworks",
    authors: <>Y. Shi, <strong>J. Tian</strong>, H. Li</>,
    venue: "Journal of Chemical Information and Modeling · 65 (12) · 6027–6037",
    year: "2025",
    citations: "4 citations",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=z0qx-qMAAAAJ:u-x6o8ySG0sC",
  },
  {
    title:
      "Atomistic Structure, Motion, and Thermal Conductivity of van der Waals Grain Boundaries in Two-Dimensional Covalent Organic Frameworks",
    authors: <>L. Xiong, Z. Wang, <strong>J. Tian</strong>, K. Du, J.-L. Brédas, H. Li</>,
    venue: "Advanced Functional Materials · e22089",
    year: "2026",
    citations: "",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=z0qx-qMAAAAJ:2osOgNQ5qMEC",
  },
];

const doctoralFocus = [
  {
    icon: Droplets,
    title: "IDP conformations & LLPS",
    description: "Intrinsic disorder · Conformational ensembles · Liquid–liquid phase separation",
  },
  {
    icon: Braces,
    title: "Coarse-grained force fields",
    description: "Developing coarse-grained MD · ML-based coarse graining",
  },
  {
    icon: Network,
    title: "Machine learning architectures",
    description: "Transformer · Graph neural networks · Diffusion models",
  },
];

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>[{index}]</span>
      <span className="section-label__rule" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Jiaxin Tian home">
          <img src="/manus-storage/meridian-node-logo_89f13216.png" alt="" className="brand__mark" />
          <span className="brand__name">Jiaxin Tian</span>
        </a>
        <nav className="site-nav" aria-label="On this page">
          <a href="#research">Research</a>
          <a href="#education">Education</a>
          <a href="#publications">Publications</a>
        </nav>
        <a className="scholar-link" href={scholarProfile} target="_blank" rel="noreferrer">
          Google Scholar <ArrowUpRight size={14} strokeWidth={1.6} />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__main">
            <div className="hero__identity">
              <img src="/manus-storage/jiaxin-cat-avatar_682555b3.png" alt="Jiaxin Tian’s cat avatar" className="hero__avatar" />
              <div>
                <p className="kicker">PH.D. STUDENT · HKUST CBE</p>
                <h1 id="hero-title">Jiaxin Tian</h1>
              </div>
            </div>
            <p className="hero__role">Ph.D. Student in Chemical &amp; Biological Engineering</p>
            <p className="hero__statement">
              I build <strong>AI for Science</strong> models with physically grounded inductive biases,
              combining molecular simulation and modern machine learning for biomolecular systems.
            </p>
            <div className="hero__contacts">
              <a href="mailto:jtianaq@connect.ust.hk">jtianaq@connect.ust.hk</a>
              <span aria-hidden="true">·</span>
              <a href={scholarProfile} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>

        <section className="research-section section-wrap" id="research" aria-labelledby="research-title">
          <div className="research-section__intro">
            <SectionLabel index="01">Research</SectionLabel>
            <h2 id="research-title">AI for Science with <em>physical priors.</em></h2>
          </div>

          <div className="focus-list" aria-label="Doctoral research areas">
            {doctoralFocus.map(({ icon: Icon, title, description }, index) => (
              <article className="focus-item" key={title}>
                <span className="focus-item__index">0{index + 1}</span>
                <Icon className="focus-item__icon" size={20} strokeWidth={1.35} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section" id="education" aria-labelledby="education-title">
          <div className="section-wrap education-section__grid">
            <div className="education-section__heading">
              <SectionLabel index="02">Education</SectionLabel>
              <h2 id="education-title">Academic path.</h2>
              <p>
                A cross-disciplinary foundation spanning connected systems, economics,
                microelectronics, and molecular engineering.
              </p>
            </div>

            <div className="timeline" aria-label="Education timeline">
              <article className="timeline-item timeline-item--active">
                <span className="timeline-item__year">PRESENT</span>
                <div className="timeline-item__line"><span /></div>
                <div className="timeline-item__content">
                  <p className="timeline-item__level">Ph.D. Student</p>
                  <h3>The Hong Kong University of Science and Technology</h3>
                  <p>Chemical &amp; Biological Engineering</p>
                  <p className="timeline-item__advisor">Advised by Prof. Shensheng Chen</p>
                </div>
              </article>
              <article className="timeline-item">
                <span className="timeline-item__year">M.Sc.</span>
                <div className="timeline-item__line"><span /></div>
                <div className="timeline-item__content">
                  <p className="timeline-item__level">Master’s Degree</p>
                  <h3>Shanghai University</h3>
                  <p>School of Microelectronics</p>
                  <p className="timeline-item__advisor">Advised by Prof. Haoyuan Li</p>
                </div>
              </article>
              <article className="timeline-item">
                <span className="timeline-item__year">B.Eng.</span>
                <div className="timeline-item__line"><span /></div>
                <div className="timeline-item__content">
                  <p className="timeline-item__level">Bachelor’s Degree</p>
                  <h3>Beijing Institute of Technology</h3>
                  <p>Internet of Things Engineering · School of Computer Science &amp; Technology</p>
                  <p className="timeline-item__advisor">Dual Degree in Economics</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="publications-section section-wrap" id="publications" aria-labelledby="publications-title">
          <div className="publications-section__topline">
            <SectionLabel index="03">Publications</SectionLabel>
            <a className="text-action" href={scholarProfile} target="_blank" rel="noreferrer">All publications <ArrowUpRight size={15} /></a>
          </div>
          <div className="publications-section__headline-row">
            <h2 id="publications-title">Selected work.</h2>
            <p>Titles and citation counts are linked to the public Google Scholar record.</p>
          </div>

          <div className="publication-list">
            <div className="publication-list__labels" aria-hidden="true">
              <span>Index</span><span>Record</span><span>Year</span><span />
            </div>
            {publications.map((publication, index) => (
              <a href={publication.url} target="_blank" rel="noreferrer" className="publication" key={publication.title} aria-label={`Open ${publication.title} on Google Scholar`}>
                <span className="publication__index">[{String(index + 1).padStart(2, "0")}]</span>
                <div className="publication__copy">
                  <h3>{publication.title}</h3>
                  <p className="publication__authors">{publication.authors}</p>
                  <p className="publication__venue">{publication.venue}</p>
                </div>
                <div className="publication__meta"><span>{publication.year}</span>{publication.citations && <small>{publication.citations}</small>}</div>
                <ArrowUpRight className="publication__arrow" size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <p className="publication-disclaimer">Citation counts are a public Google Scholar snapshot captured on 18 Aug 2026 and may change.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand"><img src="/manus-storage/meridian-node-logo_89f13216.png" alt="" className="site-footer__logo" /><span>Jiaxin Tian</span></div>
        <p>AI for Science · molecular simulation · scientific machine learning.</p>
        <a href={scholarProfile} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
