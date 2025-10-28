# Kevin McPherson - Academic Portfolio Website

A Jekyll-based academic portfolio website inspired by Eugene Yan's clean, minimalist design. This site showcases technical writing, research projects, and professional work in machine learning, AI, and data science.

## Features

- **Clean, Professional Design**: Minimalist layout focused on content
- **Responsive Layout**: Mobile-first design that works on all devices
- **Search Functionality**: Full-text search across posts and projects
- **Newsletter Integration**: Email signup form for updates
- **Project Showcase**: Dedicated section for research and development projects
- **Blog Platform**: Technical writing and research articles
- **SEO Optimized**: Built-in SEO features and meta tags

## Site Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page layouts
│   ├── default.html     # Base layout
│   ├── post.html        # Blog post layout
│   └── project.html     # Project page layout
├── _includes/           # Reusable components
│   ├── header.html      # Site header
│   ├── footer.html      # Site footer
│   └── search.html      # Search functionality
├── _posts/              # Blog posts
├── _projects/           # Project pages
├── _pages/              # Static pages
│   ├── about.md         # About page
│   ├── writing.md       # Writing index
│   └── projects.md      # Projects index
├── assets/              # Static assets
│   ├── css/main.css     # Main stylesheet
│   └── js/main.js       # JavaScript functionality
└── search.json          # Search index
```

## Getting Started

### Prerequisites

- Ruby 2.7+
- Bundler gem
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/scientistkev/scientistkev.github.io.git
   cd scientistkev.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

### GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages. Simply push to the `main` branch and GitHub will build and deploy the site automatically.

## Customization

### Site Configuration

Edit `_config.yml` to customize:

- Site title and description
- Contact information
- Social media links
- Navigation menu items

### Styling

The main stylesheet is located at `assets/css/main.css`. The design uses:

- **Typography**: Inter font family
- **Colors**: Minimal black/white/gray palette
- **Layout**: CSS Grid and Flexbox
- **Responsive**: Mobile-first breakpoints

### Content

#### Blog Posts

Create new blog posts in the `_posts/` directory using the format:
```
YYYY-MM-DD-title-of-post.md
```

Include front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-01
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
excerpt: "Brief description of the post"
popular: true  # Optional: marks as trending
---
```

#### Projects

Create project pages in the `_projects/` directory with front matter:
```yaml
---
layout: project
title: "Project Name"
date: 2024-01-01
description: "Brief project description"
tech_stack: [Python, TensorFlow, Docker]
github_url: "https://github.com/username/repo"
demo_url: "https://demo.example.com"
tags: [machine-learning, research]
featured: true  # Optional: shows on homepage
---
```

## Features in Detail

### Search Functionality

The site includes client-side search powered by JavaScript. The search index is generated automatically from all posts and projects and stored in `search.json`.

### Newsletter Integration

The newsletter signup form is ready for integration with email services like:
- Mailchimp
- ConvertKit
- Substack
- Custom API endpoints

Update the form action in `index.html` to connect to your preferred service.

### Analytics and Monitoring

The site is ready for analytics integration. Add your tracking codes to `_includes/head.html` or the appropriate layout files.

## Performance

The site is optimized for performance with:
- Minimal CSS and JavaScript
- Optimized images
- Clean HTML structure
- Fast loading times
- SEO-friendly URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from [Eugene Yan's website](https://eugeneyan.com/)
- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Typography by [Inter](https://rsms.me/inter/)

## Contact

For questions or suggestions, please open an issue or contact me directly through the website.
