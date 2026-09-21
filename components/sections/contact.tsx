"use client";

import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { BlurReveal } from "@/components/effects/blur-reveal";

export default function Contact() {
    const { content, dict } = useLanguage();

    return (
        <section className="relative pt-24 md:pt-32 xl:pt-48 bg-background overflow-hidden border-t border-border/50">

            <div className="container mx-auto px-container relative z-10">

                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    <div className="flex flex-col gap-4 mb-16 lg:mb-32">
                        <BlurReveal>
                            <span className="title-counter">
                                [006]
                            </span>
                        </BlurReveal>

                        <BlurReveal>
                            <h2 className="title">
                                {dict.title.contact}
                            </h2>
                        </BlurReveal>
                        <BlurReveal>
                            <p className="text-lg mt-3 max-w-xl italic font-medium tracking-tight text-foreground/60">
                                {dict.contactIntroText}
                            </p>
                        </BlurReveal>
                    </div>
                </div>

                <div className="grid w-full max-w-5xl grid-cols-1 gap-3 mx-auto mb-16 sm:grid-cols-2 xl:mb-32">
                    <BlurReveal>
                        <a href={`mailto:${content.contact.email}`} className="group flex min-h-36 items-center gap-5 rounded-2xl border border-border/50 bg-card/30 p-5 transition-all duration-500 hover:bg-primary hover:text-primary-foreground sm:p-6">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white"><Mail className="h-5 w-5" /></span>
                            <span className="min-w-0 flex-1"><span className="block text-[10px] font-mono tracking-widest uppercase text-muted-foreground group-hover:text-primary-foreground/70">Email</span><span className="mt-1 block truncate text-sm font-semibold sm:text-base">{content.contact.email}</span></span>
                            <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </BlurReveal>
                    <BlurReveal>
                        <a href="https://github.com/xkintaro" target="_blank" rel="noopener noreferrer" className="group flex min-h-36 items-center gap-5 rounded-2xl border border-border/50 bg-card/30 p-5 transition-all duration-500 hover:bg-primary hover:text-primary-foreground sm:p-6">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white"><Github className="h-5 w-5" /></span>
                            <span className="flex-1"><span className="block text-[10px] font-mono tracking-widest uppercase text-muted-foreground group-hover:text-primary-foreground/70">Code</span><span className="mt-1 block text-lg font-semibold">GitHub</span></span>
                            <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </BlurReveal>
                    <BlurReveal>
                        <a href="https://www.linkedin.com/in/adam-moujtahid-0416b019a" target="_blank" rel="noopener noreferrer" className="group flex min-h-36 items-center gap-5 rounded-2xl border border-border/50 bg-card/30 p-5 transition-all duration-500 hover:bg-primary hover:text-primary-foreground sm:p-6">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white"><Linkedin className="h-5 w-5" /></span>
                            <span className="flex-1"><span className="block text-[10px] font-mono tracking-widest uppercase text-muted-foreground group-hover:text-primary-foreground/70">Professional</span><span className="mt-1 block text-lg font-semibold">LinkedIn</span></span>
                            <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </BlurReveal>
                    <BlurReveal>
                        <a href="/cv-moujtahid-adam.pdf" download className="group flex min-h-36 items-center gap-5 rounded-2xl border border-primary/40 bg-primary/10 p-5 transition-all duration-500 hover:bg-primary hover:text-primary-foreground sm:p-6">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white"><Download className="h-5 w-5" /></span>
                            <span className="flex-1"><span className="block text-[10px] font-mono tracking-widest uppercase text-primary group-hover:text-primary-foreground/70">Curriculum</span><span className="mt-1 block text-lg font-semibold">Download CV</span></span>
                            <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </BlurReveal>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-between pb-12 xl:py-12 xl:border-t border-border/50 gap-8">

                    <div className="text-sm font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-4 max-xl:hidden">
                        <span>© 2026</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span>MOUJTAHID ADAM. {dict.allRightsReserved}</span>
                    </div>


                </div>
            </div>
        </section>
    );
}
