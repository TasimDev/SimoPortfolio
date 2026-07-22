import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/types/content";
import { getLocalizedText } from "@/types/content";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { projectRoute, routes } from "@/lib/routes";

export function ProjectDetail({
  project,
  nextProject,
  locale,
  dictionary,
}: {
  project: Project;
  nextProject: Project;
  locale: Locale;
  dictionary: Dictionary;
}) {
  const copy = dictionary.projectDetail;
  const name = getLocalizedText(project.name, locale);
  const category = getLocalizedText(project.category, locale);
  const description = project.longDescription ?? project.shortDescription;

  return (
    <main id="main-content" className="project-detail">
      <Container>
        <Link className="project-detail__back" href={routes.projects(locale)}>
          <ArrowLeft aria-hidden="true" />
          {copy.backToProjects}
        </Link>

        <article>
          <header className="project-detail__header">
            <p className="project-detail__eyebrow eyebrow">
              <span>{project.number}</span>
              {category}
              {project.placeholder ? <mark>{copy.sampleLabel}</mark> : null}
            </p>
            <h1>{name}</h1>
          </header>

          <div className="project-detail__visual">
            <Image
              src={project.image}
              alt={getLocalizedText(project.imageAlt, locale)}
              fill
              priority
              sizes="(min-width: 1280px) 1240px, calc(100vw - 2rem)"
            />
          </div>

          <div className="project-detail__content">
            <section aria-labelledby="project-overview-title">
              <p className="eyebrow">{copy.overview}</p>
              <h2 id="project-overview-title">
                {project.placeholder ? copy.pendingTitle : name}
              </h2>
              <p>
                {project.placeholder || !description
                  ? copy.pendingDescription
                  : getLocalizedText(description, locale)}
              </p>
            </section>

            <aside>
              {project.year || project.ongoingSupport ? (
                <div className="project-detail__facts">
                  <p className="eyebrow">{copy.projectFacts}</p>
                  <dl>
                    {project.year ? (
                      <div>
                        <dt>{copy.year}</dt>
                        <dd>{project.year}</dd>
                      </div>
                    ) : null}
                    <div>
                      <dt>{copy.projectType}</dt>
                      <dd>{category}</dd>
                    </div>
                    {project.ongoingSupport ? (
                      <div>
                        <dt>{copy.support}</dt>
                        <dd>
                          <span aria-hidden="true" />
                          {copy.ongoingSupport}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </div>
              ) : null}

              {project.technologies.length > 0 ? (
                <div>
                  <p className="eyebrow">{copy.technologies}</p>
                  <ul>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.websiteUrl ? (
                <a href={project.websiteUrl} target="_blank" rel="noreferrer">
                  {copy.visitWebsite}
                  <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only">{dictionary.common.externalLink}</span>
                </a>
              ) : null}
            </aside>
          </div>

          {project.testimonial ? (
            <section
              id="client-testimonial"
              className="project-detail__testimonial"
              aria-labelledby="project-testimonial-title"
            >
              <div className="project-detail__testimonial-copy">
                <p id="project-testimonial-title" className="eyebrow">
                  {copy.testimonial}
                </p>
                <blockquote>
                  “{getLocalizedText(project.testimonial.quote, locale)}”
                </blockquote>
                <div className="project-detail__testimonial-author">
                  {project.testimonial.image && project.testimonial.imageAlt ? (
                  <Image
                    className={project.testimonial.imageKind === "logo" || project.testimonial.company ? "project-detail__testimonial-logo" : undefined}
                    src={project.testimonial.image}
                    alt={getLocalizedText(project.testimonial.imageAlt, locale)}
                    width={project.testimonial.imageKind === "logo" || project.testimonial.company ? 112 : 56}
                    height={56}
                    sizes={project.testimonial.imageKind === "logo" || project.testimonial.company ? "112px" : "56px"}
                  />
                  ) : null}
                  <div>
                    <cite>{project.testimonial.author}</cite>
                    {project.testimonial.additionalAuthors?.map((author) => (
                      <cite key={author}>{author}</cite>
                    ))}
                    {project.testimonial.company ? <span>{project.testimonial.company}</span> : null}
                  </div>
                </div>
              </div>
            </section>
          ) : null}
        </article>

        <Link className="project-detail__next" href={projectRoute(locale, nextProject.slug)}>
          <span>{copy.nextProject}</span>
          <strong>{getLocalizedText(nextProject.name, locale)}</strong>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </Container>
    </main>
  );
}
