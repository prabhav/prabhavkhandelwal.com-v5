---
title: Blog
layout: layout--index
---

<header class="section page-header">
  <h1>
    Writing
  </h1>
  <h2>
    A collection of my interviews for <a href="http://mindsparklemag.com">Mindsparkle</a> and a handful of random musings by yours truly.
  </h2>
</header>

<section class="blog-wrapper section">
  

  <section class="tiles blog">
    
    
  
    <figure class="project project--half">
      <a href="https://mindsparklemag.com/design/interview/interview-with-garrett-derossett/">
        <img src="{{ site.baseurl }}/assets/img/interviews/garrett.png" alt="" class="project__image">
      </a>
      <p class="project__description">
        <strong>Garrett DeRossett</strong>
        Garrett has become one of my favorite people on the internet (and that is no small feat) by nature of his sheer honesty, humility and humor.
      </p>
    </figure>
  
    <figure class="project project--half">
      <a href="https://mindsparklemag.com/design/interview/interview-with-verena-michelitsch/">
        <img src="{{ site.baseurl }}/assets/img/interviews/verena.png" alt="" class="project__image">
      </a>

      <p class="project__description">
        <strong>Verena Michelitsch</strong>
        Taking the leap from Austria to New York, working for greats like @stefansagmeister & @pentagramdesign and going full-time freelance!.
      </p>
    </figure>
  
    <figure class="project project--half">
      <a href="https://mindsparklemag.com/design/interview/interview-with-sdco-partners/">
        <img src="{{ site.baseurl }}/assets/img/interviews/sdco.png" alt="" class="project__image">
      </a>

      <p class="project__description">
        <strong>SDCO Partners</strong>
        SDCO Partners is an award-winning, multi-disciplinary studio of designers, developers and thinkers.
      </p>
    </figure>

    <figure class="project project--half">
      <a href="https://mindsparklemag.com/design/interview/interview-with-dennis-plucinik-2/">
        <img src="{{ site.baseurl }}/assets/img/interviews/dennis.png" alt="" class="project__image">
      </a>

      <p class="project__description">
        <strong>Dennis Plucinik, founder of ATTCK</strong>
        Dennis shares with us what's it like working in huge ad agencies 👨‍💻, the lessons he learned 🕵️and why he ultimately chose to give up that life 🏃 to start his own studio 💼 <a href="http://attck.co">ATTCK</a>.
      </p>
    </figure>
  
  </section>

  <section class="articles">
    <p>
      Reflections while designing and redesigning this site:
    </p>
    <ul>

      {% for post in site.blog %}
        <li>
          <a href="{{ post.url }}">
            <strong>
              {{ post.title }}
            </strong>
          </a>
          
            <!-- {{ post.excerpt }} -->

          <time>
            06 December 2019
          </time>
        </li>
      {% endfor %}

    </ul>

    

  </section>


</section>

