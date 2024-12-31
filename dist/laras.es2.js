function e(i, a = {}, ...o) {
  if (typeof i == "function")
    return i({ ...a, children: o });
  const t = document.createElement(i);
  return Object.entries(a || {}).forEach(([s, c]) => {
    s.startsWith("on") && typeof c == "function" ? t.addEventListener(s.slice(2).toLowerCase(), c) : s === "className" ? t.className = c : t.setAttribute(s, c);
  }), o.flat().forEach((s) => {
    typeof s == "string" || typeof s == "number" ? t.appendChild(document.createTextNode(s.toString())) : s instanceof HTMLElement && t.appendChild(s);
  }), t;
}
function u(i, a) {
  a.innerHTML = "", a.appendChild(i());
}
function p(i) {
  let a = i;
  const o = /* @__PURE__ */ new Set();
  return [() => a, (n) => {
    a = n, o.forEach((l) => l());
  }, (n) => (o.add(n), () => o.delete(n))];
}
function h() {
  const [i, a, o] = p(0), [t, s] = p("light"), c = () => {
    s(t() === "light" ? "dark" : "light");
  };
  o(() => {
    l.innerHTML = "", l.appendChild(
      e(
        "div",
        { class: `app-container ${t()}` },
        // Navbar
        e(
          "nav",
          { class: "navbar" },
          e(
            "div",
            { class: "navbar-content" },
            e("span", { class: "logo" }, "JD"),
            e(
              "ul",
              { class: "navbar-links" },
              e("li", {}, e("a", { href: "#home" }, "Home")),
              e("li", {}, e("a", { href: "#about" }, "About")),
              e("li", {}, e("a", { href: "#skills" }, "Skills")),
              e("li", {}, e("a", { href: "#projects" }, "Projects")),
              e("li", {}, e("a", { href: "#contact" }, "Contact"))
            ),
            e(
              "button",
              { class: "theme-toggle", onClick: c },
              t() === "light" ? "🌙" : "☀️"
            )
          )
        ),
        // Hero section
        e(
          "section",
          { id: "home", class: "hero" },
          e(
            "div",
            { class: "hero-content" },
            e("h1", { class: "heading" }, "John Doe"),
            e("h2", { class: "subheading" }, "Frontend Developer"),
            e(
              "p",
              { class: "intro" },
              "Crafting beautiful and functional web experiences"
            ),
            e("a", { href: "#contact", class: "cta-button" }, "Get in Touch")
          )
        ),
        // About section
        e(
          "section",
          { id: "about", class: "about-section" },
          e("h2", { class: "section-title" }, "About Me"),
          e(
            "p",
            { class: "about-text" },
            "I'm a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs."
          ),
          e(
            "p",
            { class: "about-text" },
            "I'm a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs."
          )
        ),
        // Skills section
        e(
          "section",
          { id: "skills", class: "skills-section" },
          e("h2", { class: "section-title" }, "Skills"),
          e(
            "div",
            { class: "skills-grid" },
            ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git"].map(
              (r) => e("div", { class: "skill-item" }, r)
            )
          )
        ),
        // Projects section
        e(
          "section",
          { id: "projects", class: "projects-section" },
          e("h2", { class: "section-title" }, "Projects"),
          e(
            "div",
            { class: "projects-grid" },
            e(
              "div",
              { class: "project-card" },
              e("h3", { class: "project-title" }, "E-commerce Platform"),
              e("p", { class: "project-description" }, "A full-featured online store built with React and Node.js"),
              e("a", { href: "#", class: "project-link" }, "View Project")
            ),
            e(
              "div",
              { class: "project-card" },
              e("h3", { class: "project-title" }, "Task Management App"),
              e("p", { class: "project-description" }, "A productivity tool created using React and Firebase"),
              e("a", { href: "#", class: "project-link" }, "View Project")
            ),
            e(
              "div",
              { class: "project-card" },
              e("h3", { class: "project-title" }, "Weather Dashboard"),
              e("p", { class: "project-description" }, "A responsive weather app using OpenWeatherMap API"),
              e("a", { href: "#", class: "project-link" }, "View Project")
            )
          )
        ),
        // Contact section
        e(
          "section",
          { id: "contact", class: "contact-section" },
          e("h2", { class: "section-title" }, "Get in Touch"),
          e(
            "form",
            { class: "contact-form" },
            e("input", { type: "text", placeholder: "Your Name", required: !0 }),
            e("input", { type: "email", placeholder: "Your Email", required: !0 }),
            e("textarea", { placeholder: "Your Message", required: !0 }),
            e("button", { type: "submit", class: "submit-button" }, "Send Message")
          )
        ),
        // Footer
        e(
          "footer",
          { class: "footer" },
          e("p", {}, "© 2024 John Doe. All rights reserved."),
          e(
            "div",
            { class: "social-links" },
            e("a", { href: "#", class: "social-link" }, "GitHub"),
            e("a", { href: "#", class: "social-link" }, "LinkedIn"),
            e("a", { href: "#", class: "social-link" }, "Twitter")
          )
        )
      )
    ), console.log(`Count Updated: ${i()}`);
  });
  const l = e(
    "div",
    { class: `app-container ${t()}` },
    // Navbar
    e(
      "nav",
      { class: "navbar" },
      e(
        "div",
        { class: "navbar-content" },
        e("span", { class: "logo" }, "JD"),
        e(
          "ul",
          { class: "navbar-links" },
          e("li", {}, e("a", { href: "#home" }, "Home")),
          e("li", {}, e("a", { href: "#about" }, "About")),
          e("li", {}, e("a", { href: "#skills" }, "Skills")),
          e("li", {}, e("a", { href: "#projects" }, "Projects")),
          e("li", {}, e("a", { href: "#contact" }, "Contact"))
        ),
        e(
          "button",
          { class: "theme-toggle", onClick: c },
          t() === "light" ? "🌙" : "☀️"
        )
      )
    ),
    // Hero section
    e(
      "section",
      { id: "home", class: "hero" },
      e(
        "div",
        { class: "hero-content" },
        e("h1", { class: "heading" }, "John Doe"),
        e("h2", { class: "subheading" }, "Frontend Developer"),
        e(
          "p",
          { class: "intro" },
          "Crafting beautiful and functional web experiences"
        ),
        e("a", { href: "#contact", class: "cta-button" }, "Get in Touch")
      )
    ),
    // About section
    e(
      "section",
      { id: "about", class: "about-section" },
      e("h2", { class: "section-title" }, "About Me"),
      e(
        "p",
        { class: "about-text" },
        "I'm a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs."
      ),
      e(
        "p",
        { class: "about-text" },
        "I'm a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs."
      )
    ),
    // Skills section
    e(
      "section",
      { id: "skills", class: "skills-section" },
      e("h2", { class: "section-title" }, "Skills"),
      e(
        "div",
        { class: "skills-grid" },
        ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git"].map(
          (r) => e("div", { class: "skill-item" }, r)
        )
      )
    ),
    // Projects section
    e(
      "section",
      { id: "projects", class: "projects-section" },
      e("h2", { class: "section-title" }, "Projects"),
      e(
        "div",
        { class: "projects-grid" },
        e(
          "div",
          { class: "project-card" },
          e("h3", { class: "project-title" }, "E-commerce Platform"),
          e("p", { class: "project-description" }, "A full-featured online store built with React and Node.js"),
          e("a", { href: "#", class: "project-link" }, "View Project")
        ),
        e(
          "div",
          { class: "project-card" },
          e("h3", { class: "project-title" }, "Task Management App"),
          e("p", { class: "project-description" }, "A productivity tool created using React and Firebase"),
          e("a", { href: "#", class: "project-link" }, "View Project")
        ),
        e(
          "div",
          { class: "project-card" },
          e("h3", { class: "project-title" }, "Weather Dashboard"),
          e("p", { class: "project-description" }, "A responsive weather app using OpenWeatherMap API"),
          e("a", { href: "#", class: "project-link" }, "View Project")
        )
      )
    ),
    // Contact section
    e(
      "section",
      { id: "contact", class: "contact-section" },
      e("h2", { class: "section-title" }, "Get in Touch"),
      e(
        "form",
        { class: "contact-form" },
        e("input", { type: "text", placeholder: "Your Name", required: !0 }),
        e("input", { type: "email", placeholder: "Your Email", required: !0 }),
        e("textarea", { placeholder: "Your Message", required: !0 }),
        e("button", { type: "submit", class: "submit-button" }, "Send Message")
      )
    ),
    // Footer
    e(
      "footer",
      { class: "footer" },
      e("p", {}, "© 2024 John Doe. All rights reserved."),
      e(
        "div",
        { class: "social-links" },
        e("a", { href: "#", class: "social-link" }, "GitHub"),
        e("a", { href: "#", class: "social-link" }, "LinkedIn"),
        e("a", { href: "#", class: "social-link" }, "Twitter")
      )
    )
  );
  return l;
}
const d = document.getElementById("root");
d && u(h, d);