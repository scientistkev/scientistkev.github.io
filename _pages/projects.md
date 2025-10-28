---
layout: default
title: Projects
permalink: /projects/
---

# Projects

A collection of my research projects, prototypes, and open-source contributions in machine learning, AI, and data science.

## All Projects

<div class="projects-list">
{% for project in site.projects %}
    <article class="project-item">
        <div class="project-item-content">
            <h3 class="project-item-title">
                <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
            </h3>
            {% if project.description %}
                <p class="project-item-description">{{ project.description }}</p>
            {% endif %}
            {% if project.tech_stack %}
                <div class="project-item-tech">
                    {% for tech in project.tech_stack %}
                        <span class="tech">{{ tech }}</span>
                    {% endfor %}
                </div>
            {% endif %}
            <div class="project-item-links">
                {% if project.github_url %}
                    <a href="{{ project.github_url }}" class="project-link" target="_blank" rel="noopener">GitHub</a>
                {% endif %}
                {% if project.demo_url %}
                    <a href="{{ project.demo_url }}" class="project-link" target="_blank" rel="noopener">Demo</a>
                {% endif %}
                {% if project.paper_url %}
                    <a href="{{ project.paper_url }}" class="project-link" target="_blank" rel="noopener">Paper</a>
                {% endif %}
            </div>
            {% if project.date %}
                <time class="project-item-date">{{ project.date | date: "%d %b %Y" }}</time>
            {% endif %}
        </div>
    </article>
{% endfor %}
</div>

{% if site.projects.size == 0 %}
<div class="empty-state">
    <p>No projects yet. Check back soon for updates!</p>
</div>
{% endif %}

## Project Categories

<div class="project-categories">
    {% assign project_tags = site.projects | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
    {% for tag in project_tags %}
        {% if tag != '' %}
            <div class="project-category">
                <h3 class="project-category-title">{{ tag }}</h3>
                <div class="project-category-items">
                    {% for project in site.projects %}
                        {% if project.tags contains tag %}
                            <div class="project-category-item">
                                <a href="{{ project.url | relative_url }}" class="project-category-link">{{ project.title }}</a>
                                {% if project.description %}
                                    <p class="project-category-description">{{ project.description | truncate: 100 }}</p>
                                {% endif %}
                            </div>
                        {% endif %}
                    {% endfor %}
                </div>
            </div>
        {% endif %}
    {% endfor %}
</div>
