---
layout: default
title: Writing
permalink: /writing/
---

# Writing

I write about machine learning, AI systems, research methodologies, and the intersection of theory and practice in data science.

## All Posts

<div class="posts-list">
{% for post in site.posts %}
    <article class="post-item">
        <div class="post-item-content">
            <time class="post-item-date">{{ post.date | date: "%d %b %Y" }}</time>
            <h3 class="post-item-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            {% if post.excerpt %}
                <p class="post-item-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
            {% endif %}
            {% if post.categories.size > 0 %}
                <div class="post-item-categories">
                    {% for category in post.categories %}
                        <span class="category">{{ category }}</span>
                    {% endfor %}
                </div>
            {% endif %}
        </div>
    </article>
{% endfor %}
</div>

{% if site.posts.size == 0 %}
<div class="empty-state">
    <p>No posts yet. Check back soon for updates!</p>
</div>
{% endif %}

## Categories

<div class="categories-list">
    {% assign categories = site.categories | sort %}
    {% for category in categories %}
        <div class="category-section">
            <h3 class="category-title">{{ category[0] }}</h3>
            <ul class="category-posts">
                {% for post in category[1] %}
                    <li class="category-post">
                        <time class="category-post-date">{{ post.date | date: "%d %b %Y" }}</time>
                        <a href="{{ post.url | relative_url }}" class="category-post-title">{{ post.title }}</a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    {% endfor %}
</div>
