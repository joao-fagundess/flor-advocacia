import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Scale, ShieldCheck, MessageCircle, Clock3, MapPin, Mail, Phone, ChevronDown } from 'lucide-react';

const areas = [
  { number: '01', title: 'Direito de Família', text: 'Orientação em divórcio, guarda, pensão alimentícia e inventário, com escuta e atenção a cada contexto.' },
  { number: '02', title: 'Direito Civil', text: 'Apoio em contratos, responsabilidade civil, cobranças e conflitos nas relações do dia a dia.' },
  { number: '03', title: 'Direito Trabalhista', text: 'Análise de relações de trabalho, verbas trabalhistas e direitos de empregados e empregadores.' },
  { number: '04', title: 'Direito Empresarial', text: 'Orientação jurídica para empresas, contratos comerciais e prevenção de conflitos.' },
  { number: '05', title: 'Direito Previdenciário', text: 'Informações e orientação sobre benefícios previdenciários e planejamento.' },
  { number: '06', title: 'Direito do Consumidor', text: 'Atuação em questões envolvendo produtos, serviços, cobranças e relações de consumo.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo site - ${form.assunto || 'Solicitação'}`);
    const body = encodeURIComponent(`Nome: ${form.nome}\nE-mail: ${form.email}\nAssunto: ${form.assunto}\n\nMensagem:\n${form.mensagem}`);
    window.location.href = `mailto:contato@floradvocacia.com.br?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <header className="header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Flor Advocacia - início">
          <span className="brand-mark"><Scale size={23} strokeWidth={1.5}/></span>
          <span><strong>FLOR</strong><small>ADVOCACIA</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X/> : <Menu/>}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#escritorio" onClick={closeMenu}>O escritório</a>
          <a href="#atuacao" onClick={closeMenu}>Áreas de atuação</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="nav-cta" href="#contato" onClick={closeMenu}>Fale conosco <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="eyebrow"><span></span> FLOR ADVOCACIA</p>
            <h1>Segurança jurídica.<br/><em>Relações mais justas.</em></h1>
            <p className="hero-copy">Atendimento jurídico pautado pela ética, transparência e dedicação em cada etapa.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contato">Agende uma conversa <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#atuacao">Conheça nossas áreas <span>↓</span></a>
            </div>
          </div>
          <div className="hero-note"><span>01 / 06</span><span>Ética · Clareza · Compromisso</span></div>
        </section>

        <section className="intro section" id="escritorio">
          <div className="section-kicker">01 — NOSSO ESCRITÓRIO</div>
          <div className="intro-grid">
            <h2>Direito com <em>propósito</em><br/>e proximidade.</h2>
            <div className="intro-text">
              <p className="lead">Acreditamos que uma boa orientação jurídica começa com atenção às pessoas.</p>
              <p>A Flor Advocacia é apresentada como um escritório comprometido com um atendimento responsável, acessível e transparente. Nosso objetivo é compreender cada situação, explicar caminhos possíveis e oferecer suporte jurídico com seriedade.</p>
              <a className="under-link" href="#contato">Entre em contato <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <div className="values">
            <div><ShieldCheck/><strong>Ética profissional</strong><span>Responsabilidade em cada orientação.</span></div>
            <div><MessageCircle/><strong>Comunicação clara</strong><span>Informações diretas e acessíveis.</span></div>
            <div><Clock3/><strong>Dedicação</strong><span>Atenção cuidadosa a cada demanda.</span></div>
          </div>
        </section>

        <section className="practice section" id="atuacao">
          <div className="section-kicker">02 — COMO PODEMOS AJUDAR</div>
          <div className="practice-heading">
            <h2>Áreas de <em>atuação</em></h2>
            <p>Conheça algumas das áreas jurídicas contempladas na apresentação institucional do escritório.</p>
          </div>
          <div className="area-grid">
            {areas.map(area => <article className="area-card" key={area.number}>
              <span className="area-number">{area.number}</span>
              <div><h3>{area.title}</h3><p>{area.text}</p></div>
              <a href="#contato" aria-label={`Solicitar informações sobre ${area.title}`}><ArrowUpRight/></a>
            </article>)}
          </div>
          <p className="disclaimer">A disponibilidade e a atuação em cada área devem ser confirmadas diretamente com os profissionais responsáveis.</p>
        </section>

        <section className="quote-band">
          <span className="quote-mark">“</span>
          <p>Nosso compromisso é transformar informação jurídica em decisões mais conscientes.</p>
          <span className="quote-caption">FLOR ADVOCACIA</span>
        </section>

        <section className="contact section" id="contato">
          <div className="section-kicker">03 — FALE CONOSCO</div>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2>Vamos conversar<br/><em>sobre seu caso?</em></h2>
              <p>Envie uma mensagem para iniciar o contato. As informações serão utilizadas apenas para preparar sua solicitação de atendimento.</p>
              <div className="contact-detail"><Mail/><span><small>E-MAIL</small>contato@floradvocacia.com.br</span></div>
              <div className="contact-detail"><Phone/><span><small>TELEFONE</small> (11) 0000-0000 <small className="muted">Dado demonstrativo — substituir</small></span></div>
              <div className="contact-detail"><MapPin/><span><small>ATENDIMENTO</small>Online e presencial, mediante agendamento</span></div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Seu nome<input required value={form.nome} onChange={e=>setForm({...form,nome:e.target.value})} placeholder="Como podemos chamar você?"/></label>
              <label>Seu e-mail<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="voce@email.com"/></label>
              <label>Assunto<select value={form.assunto} onChange={e=>setForm({...form,assunto:e.target.value})}><option value="">Selecione uma área</option>{areas.map(a=><option key={a.number}>{a.title}</option>)}<option>Outro assunto</option></select><ChevronDown className="select-icon" size={16}/></label>
              <label>Mensagem<textarea required rows="4" value={form.mensagem} onChange={e=>setForm({...form,mensagem:e.target.value})} placeholder="Conte brevemente como podemos ajudar."/></label>
              <button className="button button-dark" type="submit">Enviar mensagem <ArrowUpRight size={17}/></button>
              {sent && <p className="form-note">Seu aplicativo de e-mail deve abrir com a mensagem preenchida. Confira o endereço de contato antes de enviar.</p>}
              <p className="privacy-note">Não inclua dados sigilosos ou documentos pessoais neste formulário inicial.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Scale size={22}/></span><span><strong>FLOR</strong><small>ADVOCACIA</small></span></a>
        <p>Ética, clareza e compromisso.</p>
        <span>© {new Date().getFullYear()} Flor Advocacia. Site demonstrativo.</span>
      </footer>
      <a className="back-top" href="#inicio" aria-label="Voltar ao topo">↑</a>
    </>
  );
}

export default App;