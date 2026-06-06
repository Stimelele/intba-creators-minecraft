"use client";

import { useEffect, useState } from "react";

const discordUrl = "https://discord.gg/distanttorch";

const backgroundParticles = Array.from({ length: 38 }, (_, index) => {
  const types = ["emerald", "code", "spark"];

  return {
    type: types[index % types.length],
    left: `${(index * 31 + 5) % 100}%`,
    delay: `${-((index * 0.67) % 9).toFixed(2)}s`,
    duration: `${8 + (index % 8) * 0.62}s`,
    size: `${5 + (index % 5) * 2}px`,
    drift: `${index % 2 === 0 ? 16 + index : -16 - index}px`
  };
});

const copy = {
  en: {
    navFeatures: "Features",
    navPlugins: "Our Plugins",
    navCommunity: "Community",
    navDiscord: "Discord",
    eyebrow: "Minecraft creators community",
    title: "INTBA CREATORS Minecraft",
    lead: "A place for Minecraft plugin creators, server builders and technical minds to meet, share ideas, build tools and grow together.",
    primary: "Join the community",
    secondary: "Explore features",
    badgeTitle: "Built for creators",
    badgeText: "Plugin makers, config designers, server owners and people who just love turning ideas into playable systems.",
    featuresTitle: "What the community is about",
    features: [
      "Share plugin concepts, experiments and finished projects with other Minecraft creators.",
      "Find people to cooperate on Paper, Spigot, Bukkit and server-side systems.",
      "Exchange feedback on code, configs, panels, webhooks, APIs and Minecraft automation.",
      "Collect resources, snippets and ideas that help creators ship better server features.",
      "Build a focused creator space instead of another random general Minecraft chat."
    ],
    communityTitle: "Creator paths",
    pluginsKicker: "our plugins",
    pluginsTitle: "Creator plugins",
    pluginsDesc: "Public plugin releases and featured projects from the INTBA CREATORS community.",
    pluginName: "Cigarettes",
    pluginOwnerLabel: "Owner",
    pluginDescription: "A Minecraft plugin focused on cigarette-themed gameplay mechanics. The public download slot is prepared for the upcoming jar release.",
    pluginTags: ["Minecraft plugin", "Paper / Spigot", "Community release"],
    pluginDownload: "Download plugin",
    pluginPending: "Waiting for papierosy.jar",
    pluginUploadHint: "Upload the jar as public/plugins/papierosy.jar and redeploy to enable this button.",
    distantPluginName: "Distant Torch",
    distantPluginDescription: "A magic torch system for Minecraft servers with detection zones, Discord webhooks, custom sessions and distant redstone rigs.",
    distantPluginTags: ["Security", "Discord webhooks", "Redstone rigs"],
    distantPluginBadge: "Best Plugin from INTBA CREATORS",
    paths: [
      "Plugin development",
      "Server systems",
      "Web panels",
      "Discord integrations",
      "Redstone tech",
      "Creative experiments"
    ],
    sessionTitle: "For people who build",
    sessionDesc: "INTBA CREATORS Minecraft is focused on the social side of creation: meeting builders, discussing ideas and making Minecraft projects less lonely."
  },
  pl: {
    navFeatures: "Funkcje",
    navPlugins: "Our Plugins",
    navCommunity: "Spolecznosc",
    navDiscord: "Discord",
    eyebrow: "Spolecznosc tworcow Minecraft",
    title: "INTBA CREATORS Minecraft",
    lead: "Miejsce dla osob tworzacych pluginy Minecraft, systemy serwerowe i techniczne projekty. Tu mozna wymieniac pomysly, budowac razem i rozwijac swoje projekty.",
    primary: "Dolacz do spolecznosci",
    secondary: "Zobacz funkcje",
    badgeTitle: "Stworzone dla tworcow",
    badgeText: "Programisci pluginow, autorzy configow, wlasciciele serwerow i osoby, ktore lubia zmieniac pomysly w dzialajace systemy.",
    featuresTitle: "O co chodzi w spolecznosci",
    features: [
      "Pokazuj pomysly na pluginy, eksperymenty i gotowe projekty innym tworca Minecraft.",
      "Szukaj osob do wspolpracy przy Paper, Spigot, Bukkit i systemach serwerowych.",
      "Wymieniaj feedback o kodzie, configach, panelach, webhookach, API i automatyzacjach.",
      "Zbieraj zasoby, snippety i inspiracje, ktore pomagaja robic lepsze funkcje serwerowe.",
      "Buduj skupione miejsce dla creatorow, a nie kolejny losowy chat o wszystkim."
    ],
    communityTitle: "Sciezki creatorow",
    pluginsKicker: "our plugins",
    pluginsTitle: "Pluginy creatorow",
    pluginsDesc: "Publiczne pluginy i wyroznione projekty ze spolecznosci INTBA CREATORS.",
    pluginName: "Papierosy",
    pluginOwnerLabel: "Wlasciciel",
    pluginDescription: "Plugin Minecraft skupiony na mechanikach zwiazanych z papierosami. Publiczny slot pobierania jest juz przygotowany pod nadchodzacy plik jar.",
    pluginTags: ["Plugin Minecraft", "Paper / Spigot", "Community release"],
    pluginDownload: "Pobierz plugin",
    pluginPending: "Oczekuje na papierosy.jar",
    pluginUploadHint: "Wrzuc jar jako public/plugins/papierosy.jar i zrob redeploy, aby wlaczyc ten przycisk.",
    distantPluginName: "Distant Torch",
    distantPluginDescription: "System magicznych pochodni dla serwerow Minecraft z wykrywaniem stref, webhookami Discord, sesjami web i dalekimi rigami redstone.",
    distantPluginTags: ["Security", "Webhooki Discord", "Rigi redstone"],
    distantPluginBadge: "Najlepszy Plugin od INTBA CREATORS",
    paths: [
      "Tworzenie pluginow",
      "Systemy serwerowe",
      "Panele webowe",
      "Integracje Discord",
      "Techniczny redstone",
      "Kreatywne eksperymenty"
    ],
    sessionTitle: "Dla ludzi, ktorzy tworza",
    sessionDesc: "INTBA CREATORS Minecraft skupia sie na spolecznej stronie tworzenia: poznawaniu builderow, rozmowach o pomyslach i robieniu projektow Minecraft mniej samotnie."
  }
};

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const [pluginReady, setPluginReady] = useState(false);
  const t = copy[lang];
  const pluginLogo = lang === "pl" ? "/plugins/papierosy.png" : "/plugins/cigarettes.png";
  const plugins = [
    {
      name: t.pluginName,
      logo: pluginLogo,
      description: t.pluginDescription,
      tags: t.pluginTags,
      downloadHref: "/plugins/papierosy.jar",
      downloadReady: pluginReady,
      pendingText: t.pluginPending,
      uploadHint: t.pluginUploadHint
    },
    {
      name: t.distantPluginName,
      logo: "/plugins/distant-torch-logo.png",
      description: t.distantPluginDescription,
      tags: t.distantPluginTags,
      downloadHref: "https://distant-torch.vercel.app/downloads/dtorch-latest.jar",
      downloadReady: true,
      badge: t.distantPluginBadge
    }
  ];

  useEffect(() => {
    fetch("/plugins/papierosy.jar", { method: "HEAD" })
      .then((response) => setPluginReady(response.ok))
      .catch(() => setPluginReady(false));
  }, []);

  return (
    <main className="landing-shell intba-landing">
      <div className="minecraft-particles" aria-hidden="true">
        {backgroundParticles.map((particle, index) => (
          <span
            className={`minecraft-particle ${particle.type}`}
            key={`${particle.left}-${index}`}
            style={{
              "--particle-left": particle.left,
              "--particle-delay": particle.delay,
              "--particle-duration": particle.duration,
              "--particle-size": particle.size,
              "--particle-drift": particle.drift
            }}
          />
        ))}
      </div>

      <nav className="landing-nav">
        <a className="landing-logo intba-logo" href="/">
          <img src="/brand/intba-creators-logo.png" alt="INTBA CREATORS Minecraft" />
        </a>
        <div className="landing-links">
          <a href="#features">{t.navFeatures}</a>
          <a href="#plugins">{t.navPlugins}</a>
          <a href="#community">{t.navCommunity}</a>
          <a href={discordUrl}>{t.navDiscord}</a>
          <button className="language-button" type="button" onClick={() => setLang(lang === "en" ? "pl" : "en")}>
            <img className="flag-icon" src={`/flags/${lang}.svg`} alt="" />
            {lang.toUpperCase()}
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="render-slot intba-render-slot" aria-label="INTBA CREATORS Minecraft character render">
          <img className="hero-render intba-render" src="/brand/intba-creators-render.png" alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-lead">{t.lead}</p>
          <div className="hero-actions">
            <a className="primary-button" href={discordUrl}>{t.primary}</a>
            <a className="secondary-button" href="#features">{t.secondary}</a>
          </div>
          <div className="command-card creator-card">
            <span>{t.badgeTitle}</span>
            <p>{t.badgeText}</p>
          </div>
        </div>
      </section>

      <section className="landing-card session-card">
        <div>
          <p className="section-kicker">community</p>
          <h2>{t.sessionTitle}</h2>
        </div>
        <p>{t.sessionDesc}</p>
      </section>

      <section className="landing-card" id="features">
        <p className="section-kicker">features</p>
        <h2>{t.featuresTitle}</h2>
        <div className="feature-grid">
          {t.features.map((feature, index) => (
            <article className="feature-tile" key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-card plugins-card" id="plugins">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">{t.pluginsKicker}</p>
            <h2>{t.pluginsTitle}</h2>
          </div>
          <p>{t.pluginsDesc}</p>
        </div>

        <div className="plugin-list">
          {plugins.map((plugin) => (
            <article className={`plugin-showcase ${plugin.badge ? "best-plugin" : ""}`} key={plugin.name}>
              {plugin.badge ? <span className="plugin-badge">{plugin.badge}</span> : null}
              <div className="plugin-logo-frame">
                <img src={plugin.logo} alt={plugin.name} />
              </div>
              <div className="plugin-content">
                <div className="plugin-title-row">
                  <div>
                    <span className="plugin-label">INTBA plugin</span>
                    <h3>{plugin.name}</h3>
                  </div>
                  <div className="plugin-owner">
                    <img src="https://mc-heads.net/avatar/Bagwolish/64" alt="Bagwolish Minecraft head" />
                    <div>
                      <span>{t.pluginOwnerLabel}</span>
                      <strong>Bagwolish</strong>
                    </div>
                  </div>
                </div>
                <p>{plugin.description}</p>
                <div className="plugin-tags">
                  {plugin.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="plugin-actions">
                  {plugin.downloadReady ? (
                    <a className="primary-button" href={plugin.downloadHref} download>
                      {t.pluginDownload}
                    </a>
                  ) : (
                    <span className="secondary-button disabled-link" aria-disabled="true">
                      {plugin.pendingText}
                    </span>
                  )}
                  {plugin.uploadHint ? <small>{plugin.uploadHint}</small> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-card community-card" id="community">
        <p className="section-kicker">creator hub</p>
        <h2>{t.communityTitle}</h2>
        <div className="community-grid">
          {t.paths.map((path) => (
            <span className="community-pill" key={path}>{path}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
