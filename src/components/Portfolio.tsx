import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  FileText,
  Award,
  GraduationCap,
  Users,
  Code2,
  Cpu,
  Wrench,
  Sparkles,
  Cloud,
  Database,
  ShieldCheck,
  Building2,
} from "lucide-react";
import heroImg from "@/assets/hero-ai.jpg";
import surveillanceImg from "@/assets/project-surveillance.jpg";
import foodImg from "@/assets/project-foodstorage.jpg";

const LINKS = {
  github: "https://github.com/athmakuri-vikas",
  linkedin: "https://www.linkedin.com/in/athmakuri-vikas-76805b327",
  email: "athmakurivikas07@gmail.com",
  resume: "#",
};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* ----------------------------- primitives ----------------------------- */

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-14">
      <span className="font-mono text-xs text-mute tracking-widest uppercase">
        {index}
      </span>
      <div className="h-px flex-1 bg-border" />
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{title}</h2>
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>;
}

/* ------------------------------ navbar ------------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-medium tracking-tight">Vikas Athmakuri</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-mute">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="link-underline hover:text-foreground transition-colors">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={LINKS.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-mute hover:text-foreground transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKS.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md text-mute hover:text-foreground transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={LINKS.resume}
            className="hidden sm:inline-flex items-center gap-2 h-9 px-3.5 rounded-md border border-border text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ------------------------------- hero -------------------------------- */

function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden">
      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5F5F5 1px, transparent 1px), linear-gradient(to bottom, #F5F5F5 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center relative">
        <div className="lg:col-span-7">
          <FadeUp>
            <div className="inline-flex items-center gap-2 chip mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Available for internships & new grad roles
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[0.95] tracking-tight">
              Vikas
              <br />
              Athmakuri<span className="text-accent">.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-8 text-lg md:text-xl text-foreground/90 max-w-xl">
              Computer Science Undergraduate
            </p>
            <p className="mt-2 text-sm md:text-base text-mute font-mono tracking-wide">
              Artificial Intelligence · Machine Learning · Computer Vision
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            <p className="mt-8 text-base md:text-lg text-mute max-w-xl leading-relaxed">
              I build intelligent software systems that solve real-world problems —
              from computer vision pipelines to scalable web applications — combining
              thoughtful engineering with impactful user experiences.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
              >
                View Featured Projects
                <ArrowUpRight size={16} />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={LINKS.resume}
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-5">
          <FadeUp delay={0.2}>
            <div className="relative aspect-square rounded-2xl border border-border bg-surface overflow-hidden">
              <img
                src={heroImg}
                alt="Abstract illustration of AI, computer vision, and software architecture"
                width={1200}
                height={1200}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 font-mono text-[10px] text-mute tracking-widest">
                SYS · VISION · 2026
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- featured work --------------------------- */

type Featured = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  overview: string;
  highlights: string[];
  tech: string[];
  repo: string;
  image: string;
  imageAlt: string;
};

const FEATURED: Featured[] = [
  {
    id: "surveillance",
    index: "01",
    title: "Multi-Camera Surveillance System using Computer Vision",
    tagline:
      "AI-powered intelligent surveillance platform capable of monitoring multiple CCTV feeds simultaneously using real-time object detection and tracking.",
    overview:
      "Developed an advanced computer vision surveillance system capable of processing multiple CCTV camera streams simultaneously. The platform performs real-time object detection, object tracking, and anomaly analysis to improve surveillance across multiple security zones. Using YOLO and OpenCV, the system detects suspicious events such as intrusions, loitering, unattended objects, perimeter breaches, and crowd formation while maintaining low latency through a multi-threaded processing pipeline.",
    highlights: [
      "Multi-camera concurrent processing",
      "Real-time object detection",
      "Object tracking",
      "Intrusion detection",
      "Loitering detection",
      "Crowd monitoring",
      "Perimeter breach alerts",
      "Suspicious activity detection",
      "Multi-threaded architecture",
      "Low-latency processing",
    ],
    tech: ["Python", "OpenCV", "YOLO", "Computer Vision", "Deep Learning", "Multi-threading", "Git"],
    repo: "https://github.com/athmakuri-vikas/ccv-project",
    image: surveillanceImg,
    imageAlt: "Architectural diagram of multi-camera surveillance pipeline",
  },
  {
    id: "food",
    index: "02",
    title: "Smart Food Storage System",
    tagline:
      "A smart inventory management platform that minimizes household food waste using QR-based inventory tracking and expiry monitoring.",
    overview:
      "Designed and developed a responsive web application that enables users to efficiently organize and monitor food inventory using QR codes. The system provides expiry reminders, real-time inventory updates, and intuitive inventory management to reduce food wastage and improve household organization. Firebase enables cloud-based synchronization while the responsive frontend ensures an accessible user experience.",
    highlights: [
      "QR Inventory",
      "Expiry Alerts",
      "Real-time Database",
      "Inventory Dashboard",
      "Responsive Design",
      "Waste Reduction",
      "Cloud Sync",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Git"],
    repo: "https://github.com/athmakuri-vikas/travel-tourism-analysis",
    image: foodImg,
    imageAlt: "Smart food storage system diagram with QR codes and cloud sync",
  },
];

function FeaturedCase({ project, reverse }: { project: Featured; reverse: boolean }) {
  return (
    <FadeUp>
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
          <div className="group relative rounded-2xl border border-border bg-surface overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              width={1400}
              height={1000}
              className="w-full h-auto aspect-[7/5] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/[0.03]" />
            <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-mute">
              CASE · {project.index}
            </div>
          </div>
        </div>

        <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
          <div className="font-mono text-xs text-accent tracking-widest mb-4">
            FEATURED WORK / {project.index}
          </div>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.1]">
            {project.title}
          </h3>
          <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed">
            {project.tagline}
          </p>
          <p className="mt-5 text-sm md:text-base text-mute leading-relaxed">
            {project.overview}
          </p>

          <div className="mt-8">
            <div className="font-mono text-[10px] text-mute tracking-widest mb-3">
              HIGHLIGHTS
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-foreground/85">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
            >
              <Github size={15} /> View Repository
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
            >
              Learn More <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </article>
    </FadeUp>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="py-28 md:py-40">
      <div className="container-page">
        <SectionLabel index="01 / WORK" title="Featured Work" />
        <div className="space-y-32 md:space-y-48">
          {FEATURED.map((p, i) => (
            <FeaturedCase key={p.id} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- other projects -------------------------- */

const OTHERS = [
  {
    name: "Developer Portfolio",
    description:
      "A responsive portfolio website built with a minimalist design philosophy to showcase projects, technical skills, education, leadership experience, and professional achievements.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    repo: "https://github.com/athmakuri-vikas/develpoeer-protfoli0",
  },
];

function OtherProjects() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionLabel index="02 / MORE" title="Other Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHERS.map((p) => (
            <FadeUp key={p.name}>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="group block h-full p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-mute group-hover:text-accent transition-colors">
                    <Code2 size={16} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-mute group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-medium tracking-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-mute leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ education ----------------------------- */

const COURSEWORK = [
  "Artificial Intelligence",
  "Algorithms",
  "Operating Systems",
  "Software Engineering",
  "Data Analysis",
];

function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionLabel index="03 / EDU" title="Education" />
        <FadeUp>
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
            <div className="absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-accent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="font-mono text-xs text-mute tracking-widest">
                  2023 — MAY 2027
                </div>
                <div className="mt-3 text-mute text-sm flex items-center gap-2">
                  <GraduationCap size={14} /> Bachelor of Technology
                </div>
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                  Computer Science Engineering
                </h3>
                <p className="mt-2 text-mute">Vardhaman College of Engineering</p>
                <div className="mt-4 flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-mute">CGPA</span>{" "}
                    <span className="text-accent font-mono">8.6 / 10</span>
                  </div>
                  <div className="text-mute">Expected May 2027</div>
                </div>
                <div className="mt-8">
                  <div className="font-mono text-[10px] text-mute tracking-widest mb-3">
                    RELEVANT COURSEWORK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {COURSEWORK.map((c) => (
                      <Chip key={c}>{c}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------------------- leadership ------------------------------ */

const LEADERSHIP = [
  {
    role: "President",
    org: "Journalism Club",
    body: "Led editorial planning, coordinated campus publications, and managed a team of writers and editors.",
    icon: FileText,
  },
  {
    role: "President",
    org: "Entrepreneurship Cell",
    body: "Organized startup events, innovation workshops, and entrepreneurial awareness programs.",
    icon: Sparkles,
  },
  {
    role: "Treasurer",
    org: "IEEE SSIT",
    body: "Managed finances, coordinated technical events, and supported society operations.",
    icon: Users,
  },
];

function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionLabel index="04 / LEAD" title="Leadership" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP.map(({ role, org, body, icon: Icon }, i) => (
            <FadeUp key={org} delay={i * 0.05}>
              <div className="h-full p-8 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors">
                <div className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-accent mb-6">
                  <Icon size={16} />
                </div>
                <div className="font-mono text-[10px] text-mute tracking-widest">
                  {role.toUpperCase()}
                </div>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{org}</h3>
                <p className="mt-4 text-sm text-mute leading-relaxed">{body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- skills ------------------------------ */

const SKILLS: { title: string; icon: typeof Code2; items: string[] }[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS", "SQL", "R"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Cpu,
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "React",
      "Express.js",
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "MongoDB",
      "VS Code",
      "Jupyter Notebook",
      "Firebase",
      "Adobe Photoshop",
      "Adobe InDesign",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: [
      "Leadership",
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Discipline",
      "Adaptability",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionLabel index="05 / STACK" title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map(({ title, icon: Icon, items }, i) => (
            <FadeUp key={title} delay={i * 0.05}>
              <div className="p-8 rounded-xl border border-border bg-card h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-accent">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-base font-medium tracking-tight">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- certifications -------------------------- */

const CERTS = [
  { name: "Cisco Networking Basics", icon: ShieldCheck },
  { name: "AWS Cloud Foundations", icon: Cloud },
  { name: "AWS Cloud Data Engineering", icon: Database },
  { name: "MongoDB Basics", icon: Database },
  { name: "Internship Offer Letter — Infotact Solutions", icon: Building2 },
];

function Certifications() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <SectionLabel index="06 / CERT" title="Certifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map(({ name, icon: Icon }, i) => (
            <FadeUp key={name} delay={i * 0.04}>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors">
                <div className="w-10 h-10 shrink-0 rounded-md border border-border flex items-center justify-center text-mute">
                  <Icon size={16} />
                </div>
                <div className="text-sm text-foreground/90">{name}</div>
                <Award size={14} className="ml-auto text-mute" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- contact ----------------------------- */

function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 border-t border-border">
      <div className="container-page">
        <FadeUp>
          <div className="font-mono text-xs text-accent tracking-widest mb-6">
            07 / CONTACT
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight leading-[0.95] max-w-4xl">
            Let's build something{" "}
            <span className="text-accent">meaningful.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`mailto:${LINKS.email}`}
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent/60 transition-colors"
            >
              <div className="flex items-center gap-3 text-mute mb-4">
                <Mail size={16} /> <span className="font-mono text-xs tracking-widest">EMAIL</span>
              </div>
              <div className="text-foreground group-hover:text-accent transition-colors break-all">
                {LINKS.email}
              </div>
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent/60 transition-colors"
            >
              <div className="flex items-center gap-3 text-mute mb-4">
                <Github size={16} /> <span className="font-mono text-xs tracking-widest">GITHUB</span>
              </div>
              <div className="text-foreground group-hover:text-accent transition-colors break-all">
                github.com/athmakuri-vikas
              </div>
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent/60 transition-colors"
            >
              <div className="flex items-center gap-3 text-mute mb-4">
                <Linkedin size={16} />{" "}
                <span className="font-mono text-xs tracking-widest">LINKEDIN</span>
              </div>
              <div className="text-foreground group-hover:text-accent transition-colors break-all">
                linkedin.com/in/athmakuri-vikas
              </div>
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-16">
            <a
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-accent text-background text-base font-medium hover:bg-accent-hover transition-colors"
            >
              Get In Touch <ArrowUpRight size={18} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* -------------------------------- footer ------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-mute">
        <div>© 2026 Vikas Athmakuri</div>
        <div className="font-mono text-xs tracking-wide">
          Designed and developed with React, Tailwind CSS, and Framer Motion.
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- page -------------------------------- */

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <OtherProjects />
        <Education />
        <Leadership />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
