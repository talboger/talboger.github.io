---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.A. in Statistics & Data Science, Yale University, 2019 - 2023 (exp.)

Research experience
======
* [Johns Hopkins University Perception & Mind Lab](https://perception.jhu.edu/), May 2019 - present. PI: Chaz Firestone, also worked with Alon Hafri
* [Harvard University Computation, Cognition, and Development Lab](https://cocodev.fas.harvard.edu/), Feb. 2020 - present. PI: Tomer Ullman
* [Northwestern University Visual Thinking Lab](http://visualthinking.psych.northwestern.edu/), Feb. 2020 - present. PI: Steve Franconeri
* [Yale University Cognition and Development Lab](https://cogdevlab.yale.edu/), Sep. 2021 - present. PI: Frank Keil, also worked with Sami Yousif
* [Yale University Action, Computation, & Thinking Lab](http://actcompthink.org/), Sep. 2021 - present. PI: Sam McDougle
* [MIT Media Lab, Responsive Environments Group](https://resenv.media.mit.edu/), Jan. 2021 - Sep. 2021. PI: Joseph Paradiso, also worked with Ishwarya Ananthabhotla

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Work and other experience
=====

* [Dribble Analytics](https://dribbleanalytics.blog/), _Founder and author_, Apr. 2018 - present. (Founded open-source basketball analytics project where I publish posts applying ML/advanced stats to basketball)
* Intel ([Inteon team](https://inteon.co/)), _Deep learning consultant_, Jun. 2021 - Sep. 2021. (Worked on a compiler for deep learning models to help optimize them for speed and allow usage of NLP models)
* [Intuition Robotics](https://www.intuitionrobotics.com/), _Algorithms researcher_, Jun. 2020 - Aug. 2020. (Collaborated with NLP research team on deep learning projects to integrate into the compay's cognitive aging assistant, [ElliQ](https://elliq.com/))
* San Antonio Spurs, _Basketball data scientist_, Jun. 2019 - Feb. 2020. (Collaborated with Spurs' coaching analytics coordinator to provide insights and create new metrics for player performance)
* hoopsAI, _Machine learning engineer_, Jan. 2019 - Sep. 2019. (Used natural language generation in Python to create automated NBA game recaps and previews)

Projects
======
* Created a Python package called fastdist ([GitHub](https://github.com/talboger/fastdist/), [pypi](https://pypi.org/project/fastdist/)) that uses numba to create distance and accuracy functions that are significantly faster than other current implementations (scipy.spatial.distance, sklearn.metrics); over 20,000 downloads
* Wrote and published a [book](https://www.amazon.com/Inside-Scoop-Journey-Investing-Knowledge/dp/193696130X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=) that teaches kids the basics of investing through a story
