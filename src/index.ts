import { createElement } from './core/createElement';
import { render } from './core/render';
import { larasState } from './core/state';

function App() {
  const [ count, setCount, subscribe] = larasState(0);

  const [theme, setTheme] = larasState('light');
   const toggleTheme = () => {
    setTheme(theme() === 'light' ? 'dark' : 'light');
  };


  // Rerender handler
  const rerender = () => {
    root.innerHTML = ''; // Clear existing content
    root.appendChild(
      createElement(
        'div',
        { class: `app-container ${theme()}` },

        // Navbar
        createElement(
          'nav',
          { class: 'navbar' },
          createElement('div', { class: 'navbar-content' },
            createElement('span', { class: 'logo' }, 'JD'),
            createElement('ul', { class: 'navbar-links' },
              createElement('li', {}, createElement('a', { href: '#home' }, 'Home')),
              createElement('li', {}, createElement('a', { href: '#about' }, 'About')),
              createElement('li', {}, createElement('a', { href: '#skills' }, 'Skills')),
              createElement('li', {}, createElement('a', { href: '#projects' }, 'Projects')),
              createElement('li', {}, createElement('a', { href: '#contact' }, 'Contact'))
            ),
            createElement('button', { class: 'theme-toggle', onClick: toggleTheme },
              theme() === 'light' ? '🌙' : '☀️'
            )
          )
        ),

        // Hero section
        createElement(
          'section',
          { id: 'home', class: 'hero' },
          createElement('div', { class: 'hero-content' },
            createElement('h1', { class: 'heading' }, 'John Doe'),
            createElement('h2', { class: 'subheading' }, 'Frontend Developer'),
            createElement(
              'p',
              { class: 'intro' },
              'Crafting beautiful and functional web experiences'
            ),
            createElement('a', { href: '#contact', class: 'cta-button' }, 'Get in Touch')
          )
        ),

        // About section
        createElement(
          'section',
          { id: 'about', class: 'about-section' },
          createElement('h2', { class: 'section-title' }, 'About Me'),
          createElement(
            'p',
            { class: 'about-text' },
            "I'm a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs."
          ),
          createElement(
            'p',
            { class: 'about-text' },
            "I'm a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs."
          ),
        ),

        // Skills section
        createElement(
          'section',
          { id: 'skills', class: 'skills-section' },
          createElement('h2', { class: 'section-title' }, 'Skills'),
          createElement(
            'div',
            { class: 'skills-grid' },
            ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Git'].map(skill =>
              createElement('div', { class: 'skill-item' }, skill)
            )
          )
        ),

        // Projects section
        createElement(
          'section',
          { id: 'projects', class: 'projects-section' },
          createElement('h2', { class: 'section-title' }, 'Projects'),
          createElement('div', { class: 'projects-grid' },
            createElement('div', { class: 'project-card' },
              createElement('h3', { class: 'project-title' }, 'E-commerce Platform'),
              createElement('p', { class: 'project-description' }, 'A full-featured online store built with React and Node.js'),
              createElement('a', { href: '#', class: 'project-link' }, 'View Project')
            ),
            createElement('div', { class: 'project-card' },
              createElement('h3', { class: 'project-title' }, 'Task Management App'),
              createElement('p', { class: 'project-description' }, 'A productivity tool created using React and Firebase'),
              createElement('a', { href: '#', class: 'project-link' }, 'View Project')
            ),
            createElement('div', { class: 'project-card' },
              createElement('h3', { class: 'project-title' }, 'Weather Dashboard'),
              createElement('p', { class: 'project-description' }, 'A responsive weather app using OpenWeatherMap API'),
              createElement('a', { href: '#', class: 'project-link' }, 'View Project')
            )
          )
        ),

        // Contact section
        createElement(
          'section',
          { id: 'contact', class: 'contact-section' },
          createElement('h2', { class: 'section-title' }, 'Get in Touch'),
          createElement('form', { class: 'contact-form' },
            createElement('input', { type: 'text', placeholder: 'Your Name', required: true }),
            createElement('input', { type: 'email', placeholder: 'Your Email', required: true }),
            createElement('textarea', { placeholder: 'Your Message', required: true }),
            createElement('button', { type: 'submit', class: 'submit-button' }, 'Send Message')
          )
        ),

        // Footer
        createElement(
          'footer',
          { class: 'footer' },
          createElement('p', {}, '© 2024 John Doe. All rights reserved.'),
          createElement('div', { class: 'social-links' },
            createElement('a', { href: '#', class: 'social-link' }, 'GitHub'),
            createElement('a', { href: '#', class: 'social-link' }, 'LinkedIn'),
            createElement('a', { href: '#', class: 'social-link' }, 'Twitter')
          )
        )
      )
    );
    console.log(`Count Updated: ${count()}`);
  };

  subscribe(rerender);

  const root = createElement(
    'div',
    { class: `app-container ${theme()}` },

    // Navbar
    createElement(
      'nav',
      { class: 'navbar' },
      createElement('div', { class: 'navbar-content' },
        createElement('span', { class: 'logo' }, 'JD'),
        createElement('ul', { class: 'navbar-links' },
          createElement('li', {}, createElement('a', { href: '#home' }, 'Home')),
          createElement('li', {}, createElement('a', { href: '#about' }, 'About')),
          createElement('li', {}, createElement('a', { href: '#skills' }, 'Skills')),
          createElement('li', {}, createElement('a', { href: '#projects' }, 'Projects')),
          createElement('li', {}, createElement('a', { href: '#contact' }, 'Contact'))
        ),
        createElement('button', { class: 'theme-toggle', onClick: toggleTheme },
          theme() === 'light' ? '🌙' : '☀️'
        )
      )
    ),

    // Hero section
    createElement(
      'section',
      { id: 'home', class: 'hero' },
      createElement('div', { class: 'hero-content' },
        createElement('h1', { class: 'heading' }, 'John Doe'),
        createElement('h2', { class: 'subheading' }, 'Frontend Developer'),
        createElement(
          'p',
          { class: 'intro' },
          'Crafting beautiful and functional web experiences'
        ),
        createElement('a', { href: '#contact', class: 'cta-button' }, 'Get in Touch')
      )
    ),

    // About section
    createElement(
      'section',
      { id: 'about', class: 'about-section' },
      createElement('h2', { class: 'section-title' }, 'About Me'),
      createElement(
        'p',
        { class: 'about-text' },
        "I'm a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs."
      ),
      createElement(
        'p',
        { class: 'about-text' },
        "I'm a passionate frontend developer with 5 years of experience in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive designs."
      ),
    ),

    // Skills section
    createElement(
      'section',
      { id: 'skills', class: 'skills-section' },
      createElement('h2', { class: 'section-title' }, 'Skills'),
      createElement(
        'div',
        { class: 'skills-grid' },
        ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Git'].map(skill =>
          createElement('div', { class: 'skill-item' }, skill)
        )
      )
    ),

    // Projects section
    createElement(
      'section',
      { id: 'projects', class: 'projects-section' },
      createElement('h2', { class: 'section-title' }, 'Projects'),
      createElement('div', { class: 'projects-grid' },
        createElement('div', { class: 'project-card' },
          createElement('h3', { class: 'project-title' }, 'E-commerce Platform'),
          createElement('p', { class: 'project-description' }, 'A full-featured online store built with React and Node.js'),
          createElement('a', { href: '#', class: 'project-link' }, 'View Project')
        ),
        createElement('div', { class: 'project-card' },
          createElement('h3', { class: 'project-title' }, 'Task Management App'),
          createElement('p', { class: 'project-description' }, 'A productivity tool created using React and Firebase'),
          createElement('a', { href: '#', class: 'project-link' }, 'View Project')
        ),
        createElement('div', { class: 'project-card' },
          createElement('h3', { class: 'project-title' }, 'Weather Dashboard'),
          createElement('p', { class: 'project-description' }, 'A responsive weather app using OpenWeatherMap API'),
          createElement('a', { href: '#', class: 'project-link' }, 'View Project')
        )
      )
    ),

    // Contact section
    createElement(
      'section',
      { id: 'contact', class: 'contact-section' },
      createElement('h2', { class: 'section-title' }, 'Get in Touch'),
      createElement('form', { class: 'contact-form' },
        createElement('input', { type: 'text', placeholder: 'Your Name', required: true }),
        createElement('input', { type: 'email', placeholder: 'Your Email', required: true }),
        createElement('textarea', { placeholder: 'Your Message', required: true }),
        createElement('button', { type: 'submit', class: 'submit-button' }, 'Send Message')
      )
    ),

    // Footer
    createElement(
      'footer',
      { class: 'footer' },
      createElement('p', {}, '© 2024 John Doe. All rights reserved.'),
      createElement('div', { class: 'social-links' },
        createElement('a', { href: '#', class: 'social-link' }, 'GitHub'),
        createElement('a', { href: '#', class: 'social-link' }, 'LinkedIn'),
        createElement('a', { href: '#', class: 'social-link' }, 'Twitter')
      )
    )
  )

  return root;
}

// Mount the app
const root = document.getElementById('root');
root && render(App, root);
