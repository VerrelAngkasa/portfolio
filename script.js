/* ============================================================
   EDIT YOUR CONTENT HERE
   Everything the page displays lives in the arrays/objects below.
   Change an entry and the page updates itself — no HTML editing.
   ============================================================ */

const workExperienceData = [
  {
    company: "Murni Teguh Memorial Hospital Medan",
    role: "DevSecOps Engineer",
    period: "Oct 2025 – Present · 10 months",
    status: "current",
    bullets: [
      "Applying security layer for cloud and on-premise server",
      "Managing firewall rules for cloud environment",
      "Managing users with Microsoft Active Directory (AD)"
    ]
  },
  {
    company: "Murni Teguh Memorial Hospital Medan",
    role: "DevOps Engineer",
    period: "Feb 2025 – Oct 2025 · 9 months",
    status: "past",
    bullets: [
      "Managing Kubernetes cluster for development and production environment",
      "Optimized continuous integration / continuous deployment (CI/CD) pipelines for the hospital information systems",
      "Work with leading cloud service provider",
      "Collaborating with programmer and analyst to deliver performant system"
    ]
  }
];

/* Organization / leadership experience — grouped by institution so a single
   institution can list multiple positions (see "Universitas Pelita Harapan"
   below for a real example of the multi-position accordion in action).
   Add a new institution by pushing an object with a `positions` array. */
const organizationData = [
  { 
    institution: "Bangkit Academy 2024 by Google, Gojek, Tokopedia, Traveloka",
    period: "Sep 2024 – Jan 2025 · 5 months",
    positions: [
      {
        title: "Cloud Computing Cohort - Distinction Graduate",
        period: "Sep 2024 – Jan 2025",
        bullets: [
        "Intensive Cloud Computing learning path with Google Cloud Platform (GCP)",
        "Developed soft skills, English proficiency, and technical depth",
        "Capstone: built a functional application colaborating with a team of Machine Learning, Mobile Development, and Cloud Computing colleagues"
        ]
      }
    ]
  },
  {
    institution: "Student Organization at Universitas Pelita Harapan",
    period: "Aug 2023 – Aug 2025 · 2 years",
    positions: [
      {
        title: "Student Representative Board — Member of Internal Affairs Commission 2024/2025",
        period: "Aug 2024 – Aug 2025",
        bullets: [
          "Advisor to the Student Association of Information Systems Study Program 2024/2025",
          "Advisor to Ambassadors of UPH Medan Campus 2024",
          "Monitored workflows and screened proposals for related student organizations"
        ]
      },
      {
        title: "Project Manager for Ambassadors of UPH Medan Campus 2024",
        period: "Nov 2023 – Apr 2024 · 6 months",
        bullets: [
          "An annual event to find suitable students to become the face of UPH Medan Campus",
          "Led the project end-to-end: event organizing, design, and training divisions",
          "Directed a team of 30+ committee members"
        ]
      },
      {
        title: "Student Association of Information Systems Study Program — Head of Internal Relations Department 2023/2024",
        period: "Aug 2023 – Aug 2024",
        bullets: [
          "Managed internal events within the UPH Medan Campus",
          "Event proposal writing and event management",
          "Practice collaborating, communicating, and team-working with fellow colleagues"
        ]
      },
      {
        title: "Ambassador of UPH Medan Campus 2023 - Top 12 Finalist",
        period: "Aug 2023 – Aug 2024",
        bullets: [
          "Honored to be the role model for the students in UPH Medan Campus",
          "Applying UPH's vision and mission into campus life",
          "Hone soft skills such as public speaking and critical thinking"
        ]
      }
    ]
  }
];

/* Technical skills. `slug` (optional) maps to a Simple Icons name — if set,
   a small brand logo renders next to the label automatically (e.g. set
   slug:"kubernetes" once Kubernetes is actually one of your skills).
   Full slug list: https://simpleicons.org */
const techSkillsData = [
  { name: "Amazon Web Service (AWS)" },
  { name: "Google Cloud Platform (GCP)", slug: "googlecloud" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Istio", slug: "istio" },
  { name: "ArgoCD", slug: "argo" },
  { name: "CI/CD" },
  { name: "GitOps", slug: "git" },
  { name: "YAML", slug: "yaml" },
  { name: "Terraform", slug: "terraform" },
  { name: "Linux", slug: "linux" },
  { name: "Ubuntu", slug: "ubuntu" },
  { name: "Ansible", slug: "ansible"},
  { name: "CentOS", slug: "centos"},
  { name: "Database Management"},
  { name: "Hyper-V" },
  { name: "Network" } 
];

/* Soft / non-technical skills — inferred from your leadership and
   cross-functional experience since your CV doesn't list these explicitly.
   Edit freely so it matches how you'd actually describe yourself. */
const softSkillsData = [
  "Leadership", "Positivity", "Public Speaking", "Critical Thinking",
  "Cross-functional Collaboration", "Problem Solving", "Communication",
  "Adaptability", "Time Management", "Mentoring & Advising"
];

/* Education — gpa and finalProject are left blank because they weren't in
   your CV. Fill them in and the placeholder text disappears automatically. */
const educationData = {
  institution: "Universitas Pelita Harapan (UPH)",
  degree: "Bachelor of Computer Science (Information Systems)",
  period: "August 2022 – November 2025",
  gradYear: "2026",
  gpa: "3.69",
  finalProject: "Financial Information System Development and Implementation Based on Workflow Automation for MSMEs Using n8n: A Case Study of Marvin's Chicken Wholesale"
};

/* Add a project by pushing a new object here.
   link is optional — omit it and the "view" button is hidden. */
const projectsData = [
  {
    title: "Isyara App - Bangkit Academy 2024 Capstone Project",
    desc: "An application our team developed to help foster better communication between hearing and deaf individuals. The app's main feature is real-time sign language translation using phone's camera—making conversations more accessible and inclusive.",
    tags: ["GCP", "Cloud", "Team project"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7278228121886117888/"
  },
  {
    title: "Coming Soon",
    desc: "Coming Soon.",
    tags: ["TBA"],
    link: ""

  }
];

/* Certification fields:
   - logoUrl: optional image URL. If omitted, the short "icon" text is shown.
   - issued / expires: optional date strings, e.g. "2025-03-01". Leave expires
     empty for certificates that don't expire — shows "No expiry" instead.
   - link: optional URL to the credential (e.g. your Credly badge page). If set,
     a "View credential" link appears on the card; leave it "" to hide it.
   Dates/logos weren't in your CV, so they're blank — fill in real values
   whenever you have them. */
const certificationsData = [
  { name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services Training and Certification",
    icon: "AWS",
    logoUrl: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    issued: "6/16/2026",
    expires: "6/16/2029",
    link: "https://www.credly.com/badges/0596378a-935c-4201-a00e-03841007adf3"
  }
  // { name: "Prompt Design in Vertex AI", issuer: "Google Cloud", icon: "GCP", logoUrl: null, issued: "", expires: "" },
];

/* Placeholder posts — dummy text and a plain image template so you can see
   the layout. Swap in real title/date/excerpt/link/image whenever you're
   ready; "image" takes any image URL. */
const postsData = [
  {
    title: "Coming Soon",
    date: "TBA",
    excerpt: "Coming Soon",
    link: "#",
    image: null
  },
  {
    title: "Coming Soon",
    date: "TBA",
    excerpt: "Coming Soon",
    link: "#",
    image: null
  },
  {
    title: "Coming Soon",
    date: "TBA",
    excerpt: "Coming Soon",
    link: "#",
    image: null
  }
];

const contactData = [
  { label: "Email", value: "verrelangkasa20@gmail.com", href: "mailto:verrelangkasa20@gmail.com", copyable: true },
  { label: "LinkedIn", value: "Verrel Angkasa", href: "https://www.linkedin.com/in/verrel-angkasa-4b398723b" },
  { label: "Instagram", value: "verrelangkasa", href: "https://www.instagram.com/verrelangkasa/"},
  { label: "Location", value: "Medan, North Sumatra, Indonesia" }
];

/* ============================================================
   RENDER LOGIC — no need to edit below this line
   ============================================================ */

function renderWorkExperience(){
  const el = document.getElementById('workExperienceList');
  el.innerHTML = workExperienceData.map(item => `
    <div class="timeline-item ${item.status}">
      <div class="timeline-meta">
        <span class="timeline-company">${item.company}</span>
        <span class="timeline-period">${item.period}</span>
      </div>
      <div class="timeline-role">${item.role} ${item.status === 'current' ? '<span class="badge">Current</span>' : ''}</div>
      <div class="timeline-desc">
        ${item.desc ? `<p>${item.desc}</p>` : ''}
        ${item.bullets ? `<ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  `).join('');
}

function renderOrganization(){
  const el = document.getElementById('organizationList');
  el.innerHTML = organizationData.map((org, i) => `
    <div class="org-item" id="org-${i}">
      <button class="org-header" data-org="${i}">
        <div>
          <div class="org-institution">${org.institution}</div>
          <div class="org-period">${org.period} · ${org.positions.length} position${org.positions.length > 1 ? 's' : ''}</div>
        </div>
        <span class="org-toggle">▾</span>
      </button>
      <div class="org-positions" id="org-positions-${i}">
        ${org.positions.map(p => `
          <div class="org-position">
            <div class="org-position-title">${p.title}</div>
            <div class="org-position-period">${p.period}</div>
            ${p.bullets ? `<div class="org-position-desc"><ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul></div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  el.querySelectorAll('.org-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.dataset.org;
      const item = document.getElementById(`org-${i}`);
      const positions = document.getElementById(`org-positions-${i}`);
      const isOpen = item.classList.contains('open');
      if(isOpen){
        positions.style.maxHeight = '0px';
        item.classList.remove('open');
      } else {
        item.classList.add('open');
        positions.style.maxHeight = positions.scrollHeight + 'px';
      }
    });
  });
}

function simpleIconUrl(slug){
  return `https://cdn.simpleicons.org/${slug}`;
}

function renderSkills(){
  const techTrack = document.getElementById('techSkillTrack');
  const softTrack = document.getElementById('softSkillTrack');

  const techPills = techSkillsData.map(s => `
    <span class="skill-pill">
      ${s.slug ? `<img src="${simpleIconUrl(s.slug)}" alt="" loading="lazy">` : ''}
      <span>${s.name}</span>
    </span>
  `).join('');
  techTrack.innerHTML = techPills + techPills; // doubled for a seamless loop

  const softPills = softSkillsData.map(s => `<span class="skill-pill soft">${s}</span>`).join('');
  softTrack.innerHTML = softPills + softPills;
}

function renderEducation(){
  const el = document.getElementById('educationPanel');
  const e = educationData;
  el.innerHTML = `
    <div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-institution">${e.institution}</div>
      <div class="edu-period">${e.period}</div>
      <div class="edu-stats">
        <div>
          <div class="edu-stat-num ${e.gpa ? '' : 'placeholder'}">${e.gpa || 'Add GPA'}</div>
          <div class="edu-stat-label">GPA</div>
        </div>
        <div>
          <div class="edu-stat-num">Cumlaude</div>
          <div class="edu-stat-label">Honor</div>
        </div>
        <div>
          <div class="edu-stat-num">${e.gradYear}</div>
          <div class="edu-stat-label">Graduation</div>
        </div>
      </div>
    </div>
    <div class="edu-project">
      <div class="edu-project-label">Final project</div>
      <div class="edu-project-text ${e.finalProject ? '' : 'placeholder'}">
        ${e.finalProject || 'Add a short description of your final project or thesis here.'}
      </div>
    </div>
  `;
}

function renderProjects(){
  const el = document.getElementById('projectGrid');
  if(projectsData.length === 0){
    el.innerHTML = `<div class="empty-card"><p>No projects listed yet — add one in the code's projectsData array.</p></div>`;
    return;
  }
  el.innerHTML = projectsData.map(p => `
    <div class="project-card">
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">View Project ↗</a>` : ''}
    </div>
  `).join('');
}

function certStatus(expires){
  if(!expires) return { label: 'No expiry', cls: 'none' };
  const exp = new Date(expires);
  if(isNaN(exp.getTime())) return { label: 'No expiry', cls: 'none' };
  const isValid = exp.getTime() >= Date.now();
  return isValid
    ? { label: `Valid to ${exp.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`, cls: 'valid' }
    : { label: `Expired ${exp.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`, cls: 'expired' };
}

function renderCertifications(){
  const el = document.getElementById('certsGrid');
  el.innerHTML = certificationsData.map(c => {
    const status = certStatus(c.expires);
    const issuedLabel = c.issued ? new Date(c.issued).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
    return `
    <div class="cert-card">
      <div class="cert-logo">${c.logoUrl ? `<img src="${c.logoUrl}" alt="${c.issuer} logo">` : c.icon}</div>
      <div class="cert-body">
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}${issuedLabel ? ` · issued ${issuedLabel}` : ''}</div>
        <div class="cert-meta"><span class="cert-status ${status.cls}">${status.label}</span></div>
        ${c.link ? `<a class="cert-link" href="${c.link}" target="_blank" rel="noopener">View credential ↗</a>` : ''}
      </div>
    </div>`;
  }).join('');
}

function renderPosts(){
  const el = document.getElementById('postsGrid');
  if(postsData.length === 0){
    el.innerHTML = `
      <div class="empty-card">
        <p>New posts are on the way. In the meantime, follow updates on LinkedIn.</p>
        <a class="btn btn-outline" href="https://www.linkedin.com/in/verrel-angkasa-4b398723b" target="_blank" rel="noopener">Visit LinkedIn ↗</a>
      </div>`;
    return;
  }
  el.innerHTML = postsData.map(p => `
    <div class="post-card">
      <div class="post-image">${p.image ? `<img src="${p.image}" alt="${p.title}">` : 'image placeholder'}</div>
      <div class="post-body">
        <div class="post-date">${p.date}</div>
        <div class="post-title">${p.title}</div>
        <div class="post-excerpt">${p.excerpt}</div>
        <a class="post-link" href="${p.link}">Read more →</a>
      </div>
    </div>
  `).join('');
}

function renderContact(){
  const el = document.getElementById('contactList');
  el.innerHTML = contactData.map((c,i) => `
    <${c.href ? 'a' : 'div'} class="contact-row ${c.href ? '' : 'static'}" ${c.href ? `href="${c.href}" target="_blank" rel="noopener"` : ''} data-index="${i}">
      <div class="contact-row-left">
        <span class="contact-row-label">${c.label}</span>
        <span class="contact-row-value">${c.value}</span>
      </div>
      ${c.href || c.copyable ? '<span class="contact-row-arrow">↗</span>' : ''}
    </${c.href ? 'a' : 'div'}>
  `).join('');

  el.querySelectorAll('.contact-row').forEach((row, i) => {
    const data = contactData[i];
    if(data.copyable){
      row.addEventListener('click', e => {
        e.preventDefault();
        navigator.clipboard.writeText(data.value).then(() => {
          const arrow = row.querySelector('.contact-row-arrow');
          const original = arrow.textContent;
          arrow.textContent = 'copied';
          row.classList.add('copied');
          setTimeout(() => { arrow.textContent = original; row.classList.remove('copied'); }, 1400);
        });
      });
    }
  });
}

renderWorkExperience();
renderOrganization();
renderSkills();
renderEducation();
renderProjects();
renderCertifications();
renderPosts();
renderContact();

/* ============================================================
   INTERACTIVITY
   ============================================================ */

// scroll progress bar
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrolled + '%';
});

// fade-in on scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => revealObserver.observe(el));

// active nav link on scroll
const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = '#' + entry.target.id;
    const link = [...navLinks].find(a => a.getAttribute('href') === id);
    if(!link) return;
    if(entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => navObserver.observe(s));

// mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));
navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinksEl.classList.remove('open')));

// hero glow follows the cursor
const heroEl = document.querySelector('.hero');
heroEl.addEventListener('mousemove', e => {
  const r = heroEl.getBoundingClientRect();
  heroEl.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
  heroEl.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
});

// subtle 3D tilt on cards
function addTilt(selector){
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('tilt');
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y / r.height) - 0.5) * -5;
      const ry = ((x / r.width) - 0.5) * 5;
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}
addTilt('.project-card, .cert-card, .post-card');