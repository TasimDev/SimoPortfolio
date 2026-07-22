"use client";

import { useEffect, useRef, type ReactNode } from "react";

type JourneyGeometry = {
  serviceLength: number;
  projectBoundaryLength: number;
  projectLength: number;
  processBoundaryLength: number;
  processLength: number;
  aboutBoundaryLength: number;
  aboutLength: number;
  technologyLength: number;
  faqBoundaryLength: number;
  faqLength: number;
  contactBoundaryLength: number;
  totalLength: number;
  journeyTop: number;
  serviceEndScroll: number;
  projectEndScroll: number;
  processEndScroll: number;
  aboutEndScroll: number;
  technologyEndScroll: number;
  faqEndScroll: number;
  contactEndScroll: number;
};

export function SectionsJourney({
  serviceMarker,
  projectMarker,
  processMarker,
  aboutMarker,
  technologyMarker,
  faqMarker,
  contactMarker,
  children,
}: {
  serviceMarker: string;
  projectMarker: string;
  processMarker: string;
  aboutMarker: string;
  technologyMarker: string;
  faqMarker: string;
  contactMarker: string;
  children: ReactNode;
}) {
  const journeyRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const journey = journeyRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const marker = markerRef.current;
    const services = journey?.querySelector<HTMLElement>("#services");
    const projects = journey?.querySelector<HTMLElement>("#selected-projects");
    const process = journey?.querySelector<HTMLElement>("#process");
    const about = journey?.querySelector<HTMLElement>("#about");
    const technologies = journey?.querySelector<HTMLElement>("#technologies");
    const faq = journey?.querySelector<HTMLElement>("#faq");
    const contact = journey?.querySelector<HTMLElement>("#contact");
    const serviceTarget = journey?.querySelector<HTMLElement>(
      ".services-showcase__eyebrow span",
    );
    const projectTarget = journey?.querySelector<HTMLElement>(
      ".projects-showcase__eyebrow span",
    );
    const processTarget = journey?.querySelector<HTMLElement>(
      ".process-showcase__eyebrow span",
    );
    const aboutTarget = journey?.querySelector<HTMLElement>(
      ".about-showcase__eyebrow span",
    );
    const technologyTarget = journey?.querySelector<HTMLElement>(
      ".technologies-showcase__eyebrow span",
    );
    const faqTarget = journey?.querySelector<HTMLElement>(
      ".faq-showcase__eyebrow span",
    );
    const contactTarget = journey?.querySelector<HTMLElement>(
      ".contact-showcase__eyebrow span",
    );
    const projectPanel = journey?.querySelector<HTMLElement>(
      ".project-stack__panel",
    );

    if (!journey || !svg || !path || !marker || !services || !projects || !process || !about || !technologies || !faq || !contact || !serviceTarget || !projectTarget || !processTarget || !aboutTarget || !technologyTarget || !faqTarget || !contactTarget || !projectPanel) {
      return;
    }

    journey.classList.add("is-motion-ready");
    services.classList.add("is-motion-ready");
    projects.classList.add("is-motion-ready");
    process.classList.add("is-motion-ready");
    about.classList.add("is-motion-ready");
    technologies.classList.add("is-motion-ready");
    faq.classList.add("is-motion-ready");
    contact.classList.add("is-motion-ready");
    services.dataset.revealed = "false";
    projects.dataset.revealed = "false";
    process.dataset.revealed = "false";
    about.dataset.revealed = "false";
    technologies.dataset.revealed = "false";
    faq.dataset.revealed = "false";
    contact.dataset.revealed = "false";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      journey.dataset.servicePassed = "true";
      journey.dataset.projectPassed = "true";
      journey.dataset.processPassed = "true";
      journey.dataset.aboutPassed = "true";
      journey.dataset.technologyPassed = "true";
      journey.dataset.faqPassed = "true";
      journey.dataset.complete = "true";
      services.dataset.revealed = "true";
      projects.dataset.revealed = "true";
      process.dataset.revealed = "true";
      about.dataset.revealed = "true";
      technologies.dataset.revealed = "true";
      faq.dataset.revealed = "true";
      contact.dataset.revealed = "true";
      return;
    }

    let frame = 0;
    let geometry: JourneyGeometry | null = null;

    const measure = () => {
      const journeyRect = journey.getBoundingClientRect();
      const serviceRect = serviceTarget.getBoundingClientRect();
      const projectRect = projectTarget.getBoundingClientRect();
      const processRect = processTarget.getBoundingClientRect();
      const aboutRect = aboutTarget.getBoundingClientRect();
      const technologyRect = technologyTarget.getBoundingClientRect();
      const faqRect = faqTarget.getBoundingClientRect();
      const contactRect = contactTarget.getBoundingClientRect();
      const projectPanelRect = projectPanel.getBoundingClientRect();
      const projectsRect = projects.getBoundingClientRect();
      const processRectSection = process.getBoundingClientRect();
      const aboutRectSection = about.getBoundingClientRect();
      const technologiesRect = technologies.getBoundingClientRect();
      const faqRectSection = faq.getBoundingClientRect();
      const contactRectSection = contact.getBoundingClientRect();
      const width = journey.clientWidth;
      const height = journey.scrollHeight;
      const startX = width / 2;
      const startY = -24;
      const serviceX = serviceRect.left - journeyRect.left + serviceRect.width / 2;
      const serviceY = serviceRect.top - journeyRect.top + serviceRect.height / 2;
      const projectX = projectRect.left - journeyRect.left + projectRect.width / 2;
      const projectY = projectRect.top - journeyRect.top + projectRect.height / 2;
      const processX = processRect.left - journeyRect.left + processRect.width / 2;
      const processY = processRect.top - journeyRect.top + processRect.height / 2;
      const aboutX = aboutRect.left - journeyRect.left + aboutRect.width / 2;
      const aboutY = aboutRect.top - journeyRect.top + aboutRect.height / 2;
      const technologyX = technologyRect.left - journeyRect.left + technologyRect.width / 2;
      const technologyY = technologyRect.top - journeyRect.top + technologyRect.height / 2;
      const faqX = faqRect.left - journeyRect.left + faqRect.width / 2;
      const faqY = faqRect.top - journeyRect.top + faqRect.height / 2;
      const contactX = contactRect.left - journeyRect.left + contactRect.width / 2;
      const contactY = contactRect.top - journeyRect.top + contactRect.height / 2;
      const projectTop = projectsRect.top - journeyRect.top;
      const processTop = processRectSection.top - journeyRect.top;
      const aboutTop = aboutRectSection.top - journeyRect.top;
      const technologyTop = technologiesRect.top - journeyRect.top;
      const faqTop = faqRectSection.top - journeyRect.top;
      const contactTop = contactRectSection.top - journeyRect.top;
      const isCompact = width < 1024;
      const gutterX = isCompact ? 28 : Math.max(28, serviceX - 64);
      const rightGutterX = isCompact
        ? projectPanelRect.right - journeyRect.left - 32
        : Math.min(width - 28, projectX + 64);
      const aboutGutterX = isCompact ? 28 : Math.max(28, processX - 64);
      const technologyGutterX = isCompact
        ? width - 28
        : Math.min(width - 28, aboutX + 64);
      const faqGutterX = isCompact ? 28 : Math.max(28, technologyX - 64);
      const contactGutterX = isCompact
        ? width - 20
        : Math.min(width - 28, faqX + 64);
      const serviceBendY = serviceY - 32;
      // Let the route enter the dark section before it turns towards 02. This
      // keeps the lime line clearly visible instead of merging with the edge.
      const projectBendY = projectTop + 48;
      const processBendY = processTop + 48;
      const aboutBendY = aboutTop + 48;
      const technologyBendY = technologyTop + 48;
      const faqBendY = faqTop + 48;
      const contactBendY = contactTop + 48;

      path.setAttribute(
        "d",
        [
          `M ${startX} ${startY}`,
          `L ${startX} ${serviceBendY}`,
          `L ${serviceX} ${serviceBendY}`,
          `L ${serviceX} ${serviceY}`,
          `L ${gutterX} ${serviceY}`,
          `L ${gutterX} ${projectBendY}`,
          `L ${projectX} ${projectBendY}`,
          `L ${projectX} ${projectY}`,
          `L ${rightGutterX} ${projectY}`,
          `L ${rightGutterX} ${processBendY}`,
          `L ${processX} ${processBendY}`,
          `L ${processX} ${processY}`,
          `L ${aboutGutterX} ${processY}`,
          `L ${aboutGutterX} ${aboutBendY}`,
          `L ${aboutX} ${aboutBendY}`,
          `L ${aboutX} ${aboutY}`,
          `L ${technologyGutterX} ${aboutY}`,
          `L ${technologyGutterX} ${technologyBendY}`,
          `L ${technologyX} ${technologyBendY}`,
          `L ${technologyX} ${technologyY}`,
          `L ${faqGutterX} ${technologyY}`,
          `L ${faqGutterX} ${faqBendY}`,
          `L ${faqX} ${faqBendY}`,
          `L ${faqX} ${faqY}`,
          `L ${contactGutterX} ${faqY}`,
          `L ${contactGutterX} ${contactBendY}`,
          `L ${contactX} ${contactBendY}`,
          `L ${contactX} ${contactY}`,
        ].join(" "),
      );
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.setAttribute("width", String(width));
      svg.setAttribute("height", String(height));

      const serviceLength =
        serviceBendY - startY + Math.abs(startX - serviceX) + (serviceY - serviceBendY);
      const projectBoundaryLength =
        serviceLength + Math.abs(serviceX - gutterX) + (projectBendY - serviceY);
      const projectLength =
        projectBoundaryLength +
        Math.abs(projectX - gutterX) +
        Math.abs(projectY - projectBendY);
      const processBoundaryLength =
        projectLength +
        Math.abs(rightGutterX - projectX) +
        Math.abs(processBendY - projectY);
      const processLength =
        processBoundaryLength +
        Math.abs(processX - rightGutterX) +
        Math.abs(processY - processBendY);
      const aboutBoundaryLength =
        processLength +
        Math.abs(processX - aboutGutterX) +
        Math.abs(aboutBendY - processY);
      const aboutLength =
        aboutBoundaryLength +
        Math.abs(aboutX - aboutGutterX) +
        Math.abs(aboutY - aboutBendY);
      const technologyLength =
        aboutLength +
        Math.abs(technologyGutterX - aboutX) +
        Math.abs(technologyBendY - aboutY) +
        Math.abs(technologyX - technologyGutterX) +
        Math.abs(technologyY - technologyBendY);
      const faqBoundaryLength =
        technologyLength +
        Math.abs(technologyX - faqGutterX) +
        Math.abs(faqBendY - technologyY);
      const faqLength =
        faqBoundaryLength +
        Math.abs(faqX - faqGutterX) +
        Math.abs(faqY - faqBendY);
      const contactBoundaryLength =
        faqLength +
        Math.abs(contactGutterX - faqX) +
        Math.abs(contactBendY - faqY);
      const totalLength = path.getTotalLength();
      const journeyTop = window.scrollY + journeyRect.top;

      geometry = {
        serviceLength,
        projectBoundaryLength,
        projectLength,
        processBoundaryLength,
        processLength,
        aboutBoundaryLength,
        aboutLength,
        technologyLength,
        faqBoundaryLength,
        faqLength,
        contactBoundaryLength,
        totalLength,
        journeyTop,
        serviceEndScroll: journeyTop - window.innerHeight * 0.1,
        projectEndScroll: journeyTop + projectTop - window.innerHeight * 0.15,
        processEndScroll: journeyTop + processTop - window.innerHeight * 0.15,
        aboutEndScroll: journeyTop + aboutTop - window.innerHeight * 0.15,
        technologyEndScroll: journeyTop + technologyTop - window.innerHeight * 0.35,
        faqEndScroll: journeyTop + faqTop - window.innerHeight * 0.2,
        contactEndScroll: journeyTop + contactTop - window.innerHeight * 0.2,
      };
      path.style.strokeDasharray = String(totalLength);
    };

    const render = () => {
      if (!geometry) return;

      const startScroll = geometry.journeyTop - window.innerHeight;
      const scroll = window.scrollY;
      let distance = 0;

      if (scroll <= geometry.serviceEndScroll) {
        const progress = Math.min(
          1,
          Math.max(0, (scroll - startScroll) / (geometry.serviceEndScroll - startScroll)),
        );
        distance = progress * geometry.serviceLength;
      } else if (scroll <= geometry.projectEndScroll) {
        const progress = Math.min(
          1,
          Math.max(
            0,
            (scroll - geometry.serviceEndScroll) /
              (geometry.projectEndScroll - geometry.serviceEndScroll),
          ),
        );
        distance =
          geometry.serviceLength + progress * (geometry.projectLength - geometry.serviceLength);
      } else if (scroll <= geometry.processEndScroll) {
        const progress = Math.min(
          1,
          Math.max(
            0,
            (scroll - geometry.projectEndScroll) /
              (geometry.processEndScroll - geometry.projectEndScroll),
          ),
        );
        distance =
          geometry.projectLength + progress * (geometry.processLength - geometry.projectLength);
      } else if (scroll <= geometry.aboutEndScroll) {
        const progress = Math.min(
          1,
          Math.max(
            0,
            (scroll - geometry.processEndScroll) /
              (geometry.aboutEndScroll - geometry.processEndScroll),
          ),
        );
        distance =
          geometry.processLength + progress * (geometry.aboutLength - geometry.processLength);
      } else if (scroll <= geometry.technologyEndScroll) {
        const progress = Math.min(
          1,
          Math.max(
            0,
            (scroll - geometry.aboutEndScroll) /
              (geometry.technologyEndScroll - geometry.aboutEndScroll),
          ),
        );
        distance =
          geometry.aboutLength + progress * (geometry.technologyLength - geometry.aboutLength);
      } else if (scroll <= geometry.faqEndScroll) {
        const progress = Math.min(
          1,
          Math.max(
            0,
            (scroll - geometry.technologyEndScroll) /
              (geometry.faqEndScroll - geometry.technologyEndScroll),
          ),
        );
        distance =
          geometry.technologyLength +
          progress * (geometry.faqLength - geometry.technologyLength);
      } else {
        const progress = Math.min(
          1,
          Math.max(
            0,
            (scroll - geometry.faqEndScroll) /
              (geometry.contactEndScroll - geometry.faqEndScroll),
          ),
        );
        distance =
          geometry.faqLength + progress * (geometry.totalLength - geometry.faqLength);
      }

      const point = path.getPointAtLength(distance);
      marker.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
      marker.dataset.marker =
        distance >= geometry.contactBoundaryLength
          ? "contact"
          : distance > geometry.technologyLength + 72
          ? "faq"
          : distance > geometry.aboutLength + 72
          ? "technology"
          : distance >= geometry.aboutBoundaryLength
            ? "about"
          : distance >= geometry.processBoundaryLength
            ? "process"
          : distance >= geometry.projectBoundaryLength
            ? "project"
            : "service";
      path.style.strokeDashoffset = String(geometry.totalLength - distance);

      // Start revealing the section while the marker is approaching 01. Waiting
      // for the exact endpoint leaves a large, empty viewport on tall screens.
      const serviceRevealLength = geometry.serviceLength * 0.72;
      const serviceReached = distance >= serviceRevealLength;
      const servicePassed = distance > geometry.serviceLength + 72;
      const projectReached = distance >= geometry.projectLength - 1;
      const projectPassed = distance > geometry.projectLength + 160;
      const processRevealLength =
        geometry.projectLength + (geometry.processLength - geometry.projectLength) * 0.72;
      const processReached = distance >= processRevealLength;
      const processPassed = distance > geometry.processLength + 72;
      const aboutRevealLength =
        geometry.processLength + (geometry.aboutLength - geometry.processLength) * 0.72;
      const aboutReached = distance >= aboutRevealLength;
      const aboutPassed = distance > geometry.aboutLength + 72;
      const technologyRevealLength =
        geometry.aboutLength + (geometry.technologyLength - geometry.aboutLength) * 0.72;
      const technologyReached = distance >= technologyRevealLength;
      const technologyPassed = distance > geometry.technologyLength + 72;
      const faqRevealLength =
        geometry.technologyLength +
        (geometry.faqLength - geometry.technologyLength) * 0.72;
      const faqReached = distance >= faqRevealLength;
      const faqPassed = distance > geometry.faqLength + 72;
      const contactRevealLength =
        geometry.faqLength + (geometry.totalLength - geometry.faqLength) * 0.72;
      const contactReached = distance >= contactRevealLength;
      const complete = distance >= geometry.totalLength - 1;
      const started = distance >= geometry.serviceLength * 0.22;
      services.dataset.revealed = String(serviceReached);
      projects.dataset.revealed = String(projectReached);
      process.dataset.revealed = String(processReached);
      about.dataset.revealed = String(aboutReached);
      technologies.dataset.revealed = String(technologyReached);
      faq.dataset.revealed = String(faqReached);
      contact.dataset.revealed = String(contactReached);
      journey.dataset.started = String(started);
      journey.dataset.servicePassed = String(servicePassed);
      journey.dataset.projectPassed = String(projectPassed);
      journey.dataset.processPassed = String(processPassed);
      journey.dataset.aboutPassed = String(aboutPassed);
      journey.dataset.technologyPassed = String(technologyPassed);
      journey.dataset.faqPassed = String(faqPassed);
      journey.dataset.complete = String(complete);
    };

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(render);
    };
    const resize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        measure();
        render();
      });
    };
    const observer = new ResizeObserver(resize);

    measure();
    render();
    observer.observe(journey);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", resize);
    };
  }, [aboutMarker, contactMarker, faqMarker, processMarker, projectMarker, serviceMarker, technologyMarker]);

  return (
    <div
      ref={journeyRef}
      className="sections-journey"
      data-started="false"
      data-service-passed="false"
      data-project-passed="false"
      data-process-passed="false"
      data-about-passed="false"
      data-technology-passed="false"
      data-faq-passed="false"
      data-complete="false"
    >
      <svg ref={svgRef} className="sections-journey__line" aria-hidden="true">
        <path ref={pathRef} />
      </svg>
      <span
        ref={markerRef}
        className="sections-journey__marker"
        data-marker="service"
        aria-hidden="true"
      >
        <span className="sections-journey__marker-label sections-journey__marker-label--service">
          {serviceMarker}
        </span>
        <span className="sections-journey__marker-label sections-journey__marker-label--project">
          {projectMarker}
        </span>
        <span className="sections-journey__marker-label sections-journey__marker-label--process">
          {processMarker}
        </span>
        <span className="sections-journey__marker-label sections-journey__marker-label--about">
          {aboutMarker}
        </span>
        <span className="sections-journey__marker-label sections-journey__marker-label--technology">
          {technologyMarker}
        </span>
        <span className="sections-journey__marker-label sections-journey__marker-label--faq">
          {faqMarker}
        </span>
        <span className="sections-journey__marker-label sections-journey__marker-label--contact">
          {contactMarker}
        </span>
      </span>
      {children}
    </div>
  );
}
