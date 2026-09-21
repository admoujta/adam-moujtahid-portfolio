"use client";

import { ArrowUpRight, Award } from "lucide-react";
import { BlurReveal } from "@/components/effects/blur-reveal";

const credentials = [
    {
        period: "23 MAY 2026",
        title: "Freelancer Academy",
        subtitle: "ALX · Certificate of Achievement",
        description: "Completed the Freelancer Academy program and its course and assessment requirements.",
        tags: ["FREELANCING", "PROFESSIONAL SKILLS"],
        link: "https://ehub.alxafrica.com/ob3/verify-certificate/097e7ae8-3886-4993-a681-64f011494f00",
    },
    {
        period: "23 MAY 2026",
        title: "AI Career Essentials",
        subtitle: "ALX · Certificate of Achievement",
        description: "Completed the AI Career Essentials program and its course and assessment requirements.",
        tags: ["AI FUNDAMENTALS", "CAREER DEVELOPMENT"],
        link: "https://ehub.alxafrica.com/ob3/verify-certificate/ee1ee6fb-17c8-440e-b652-61e624d968fc",
    },
    {
        period: "23 MAR 2026",
        title: "Software Engineering: Software Design and Project Management",
        subtitle: "HKUST · Coursera Course Certificate",
        description: "Coursework in software design, project management, and engineering practices.",
        tags: ["SOFTWARE DESIGN", "PROJECT MANAGEMENT"],
        link: "https://coursera.org/verify/QCCV6LBXHB8F",
    },
    {
        period: "06 DEC 2025",
        title: "Introduction to Object-Oriented Programming in C++",
        subtitle: "EPFL · Coursera Course Certificate",
        description: "Completed an introduction to object-oriented programming concepts using C++.",
        tags: ["C++", "OOP"],
        link: "https://coursera.org/verify/UPABAEK5THX5",
    },
    {
        period: "30 SEP 2025",
        title: "Professional Foundations",
        subtitle: "ALX · Certificate of Completion",
        description: "Completed professional development training for the digital age.",
        tags: ["PROFESSIONAL SKILLS", "WORKPLACE"],
        link: "https://savanna.alxafrica.com/certificates/BH8e235eNF",
    },
    {
        period: "23 MAR 2026",
        title: "Using Python to Access Web Data",
        subtitle: "University of Michigan · Coursera Course Certificate",
        description: "Coursework focused on using Python to retrieve, process, and work with data from the web.",
        tags: ["PYTHON", "WEB DATA"],
        link: "https://coursera.org/verify/HPWU0090Y50P",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="relative overflow-hidden border-t border-border/50 py-32 xl:py-48">
            <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="container mx-auto max-w-6xl px-container relative z-10">
                <div className="mb-16 flex flex-col gap-4 md:mb-24">
                    <BlurReveal><span className="title-counter">[005]</span></BlurReveal>
                    <BlurReveal><h2 className="title">Credentials</h2></BlurReveal>
                    <BlurReveal>
                        <p className="mt-3 max-w-2xl text-lg italic font-medium tracking-tight text-foreground/60">
                            Academic milestones and qualifications supporting my engineering journey.
                        </p>
                    </BlurReveal>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {credentials.map((credential) => (
                        <BlurReveal key={credential.title}>
                            <article className="group relative flex h-full flex-col overflow-hidden border border-border/50 bg-secondary/5 p-6 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:bg-secondary/15 sm:p-8">
                                <div className="mb-8 flex items-start justify-between gap-4">
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase">{credential.period}</span>
                                    <Award className="h-5 w-5 shrink-0 text-muted-foreground/60 transition-colors group-hover:text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="max-w-xl text-xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-2xl">{credential.title}</h3>
                                <p className="mt-2 font-mono text-xs tracking-[0.16em] text-primary/80 uppercase">{credential.subtitle}</p>
                                <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">{credential.description}</p>
                                <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
                                    {credential.tags.map((tag) => <span key={tag} className="rounded-full border border-border/50 px-2.5 py-1 font-mono text-[9px] tracking-wider text-muted-foreground">{tag}</span>)}
                                    <a href={credential.link} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-primary uppercase transition-colors hover:text-foreground">
                                        Verify <ArrowUpRight className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </article>
                        </BlurReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
