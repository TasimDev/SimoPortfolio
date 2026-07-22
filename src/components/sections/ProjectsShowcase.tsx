import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { projectRoute, routes } from "@/lib/routes";
import { getLocalizedText } from "@/types/content";

export function ProjectsShowcase({
  locale,
  dictionary,
  headingLevel = 2,
}: {
  locale: Locale;
  dictionary: Dictionary;
  headingLevel?: 1 | 2;
}) {
  const copy = dictionary.projectsShowcase;
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const featuredProjects = projects.filter((project) => !project.placeholder).slice(0, 4);

  return (
    <section
      id="selected-projects"
      className={`projects-showcase ${headingLevel === 1 ? "projects-showcase--index" : ""}`}
      aria-labelledby="projects-showcase-title"
    >
      <Container className="projects-showcase__content">
        <header className="projects-showcase__header">
          <p className="projects-showcase__eyebrow eyebrow">
            <span>{copy.sectionNumber}</span>
            {copy.eyebrow}
          </p>
          <Heading id="projects-showcase-title">
            {copy.titleLineOne}
            <span>{copy.titleLineTwo}</span>
          </Heading>
          <p>{copy.description}</p>
        </header>

        {headingLevel === 2 ? (
          <ol className="project-stack">
            {featuredProjects.map((project, index) => {
              const name = getLocalizedText(project.name, locale);
              const description = project.shortDescription
                ? getLocalizedText(project.shortDescription, locale)
                : null;

              return (
                <li
                  className="project-stack__item"
                  style={{ "--stack-index": index } as CSSProperties}
                  key={project.id}
                >
                  <article className="project-stack__panel">
                    <Link
                      className="project-stack__visual"
                      href={projectRoute(locale, project.slug)}
                      aria-label={copy.openProject.replace("{project}", name)}
                    >
                      <Image
                        src={project.image}
                        alt={getLocalizedText(project.imageAlt, locale)}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                      />
                      <span aria-hidden="true">{project.number}</span>
                    </Link>

                    <div className="project-stack__body">
                      <p className="project-stack__meta">
                        <span>{project.number}</span>
                        {getLocalizedText(project.category, locale)}
                      </p>
                      <h3>{name}</h3>
                      {description ? <p>{description}</p> : null}
                      <Link
                        className="project-stack__link"
                        href={projectRoute(locale, project.slug)}
                      >
                        {copy.viewProject}
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        ) : (
          <ol className="projects-grid">
            {projects.map((project, index) => {
            const name = getLocalizedText(project.name, locale);
            const description = project.shortDescription
              ? getLocalizedText(project.shortDescription, locale)
              : null;

            return (
              <li
                className="project-card"
                style={{ "--project-delay": `${120 + index * 80}ms` } as CSSProperties}
                key={project.id}
              >
                <Link
                  href={projectRoute(locale, project.slug)}
                  aria-label={copy.openProject.replace("{project}", name)}
                >
                  <div className={`project-card__visual project-card__visual--${(index % 3) + 1}`}>
                    <Image
                      src={project.image}
                      alt={getLocalizedText(project.imageAlt, locale)}
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                    />
                    <span className="project-card__visual-number" aria-hidden="true">
                      {project.number}
                    </span>
                  </div>

                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span>{project.number}</span>
                      <span>{getLocalizedText(project.category, locale)}</span>
                      {project.placeholder ? <mark>{copy.sampleLabel}</mark> : null}
                    </div>
                    <h3>{name}</h3>
                    {description && !project.placeholder ? <p>{description}</p> : null}
                    {project.technologies.length > 0 ? (
                      <ul aria-label={dictionary.projectDetail.technologies}>
                        {project.technologies.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    ) : null}
                    <span className="project-card__arrow" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </div>
                </Link>
              </li>
            );
            })}
          </ol>
        )}

        {headingLevel === 2 ? (
          <Link className="projects-showcase__all" href={routes.projects(locale)}>
            {copy.allProjects}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
