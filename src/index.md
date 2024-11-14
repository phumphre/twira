---
title: "The World Is Round (*almost)"
layout: layouts/base.njk
---

## Welcome to The World Is Round (*almost)

This is a newsletter for regular people about common sense and building community. Check out our latest issues below:

<ul>
  {% for newsletter in collections.newsletters %}
    <li><a href="{{ newsletter.url }}">{{ newsletter.data.title }}</a></li>
  {% endfor %}
</ul>

