---
layout: default
title: Syllabus
---

CST 251: Web tools
==================

---------------
Course syllabus
---------------

Imagine a man in his late fourties, running throught the alps just south of the Swiss-Italian border. He has this awesome copper axe, the cutting technology of his time. He has some flint to start a fire, and some clothes made from fur. Then some jerk shot him in the bak with an arrow, and he rolled into a ravine; only to be frozen in an embarrassing, then thawed a long time later by some hikers who thou

[&Ouml;tzi man](http://en.wikipedia.org/wiki/Otzi) (warning: kinda gross picture) died over 5,000 years ago. It took like another thousand years to figure out smelting bronze and iron. Another thousand and we get complex trading societies and agrictulture. Mankind tosses around for a while, and we get currency, writing, science, the industrial age, plastics, and the information economy. Along the way we screwed up a lot, and generally bungled up the planet, but here we are. If you want to learn more about this process, I reccomend watching (James Burke generally depress you)[http://www.youtube.com/watch?v=OcSxL8GUn-g&list=PL79184D14F872B80D] in a thoroughly entertaining way.

<div class="span3 figure well">
  <img src="http://upload.wikimedia.org/wikipedia/en/b/b7/NCSA_Mosaic.PNG" class="img-polaroid">
  <strong>The Mosaic browser. I'll pause while you scream in terror.</strong>
</div>

If the Web were humankind, then our &Ouml;tzi man was the **Mosaic Browser**, which is now probably frozen in a 5.25-inch floppy disk &mdash; only to be discovered by our alien overlords in 5,000 years, and used as evidence that we got what we were asking for. Mosaic was developed in 1992. In 20 years, less than a single generation, we have gone from grunting "webmasters" banging rocks together to build boring "pages" with grey backrounds, to a modern metropolis of web developers, crafting "web applications" like artisinal cheeses.

This course will be the beginning of your becoming a web developer, and will be structured as if you were just beginning to work for a small web shop. This syllabus and the associated course repository which contains the projects and schedule for the course, serves two functions: as a **contract** between the faculty (me!) and the student (you!) to ensure we are on the same page; and as the **source code** that actually defines how the course will work and run smoothly.

#### Syllabus as contract

There are a lot of things expected from me as the faculty. I'm expected to guide the learning process, give you challenges to overcome, guide you through the rough patches, and get you building great things. In return you will be attentive, prompt, not get discouraged, and sometimes laugh at my bad jokes.

##### What is expected of me



##### What is expected of you



#### Syllabus as source code

The entire course and syllabus are open for you to fork, edit, and propose changes to directly using Git. Students can make changes in their forks of the course repository, and are encouraged to make a pull request if they think something about a project, the schedule, or the syllabus itself should change.

When I make a change or accept a pull request, those changes will automatically be made available to you, and any and all changes will be transparent to the course. Major changes will also require announcement in the class and in the course announcements page.

------------------
Projects & grading
------------------

Projects (a.k.a. "homework") turned in via Git, picked up automatically every saturday night to see who turned in work on time. You get graded on effort if you turn it in on time, you can also take feedback to fix the errors.

Web tools not only include things that build the web, but also tools that professionals in the field use to manage projects and work as a team. You will be expected after the first few weeks of class to turn in all projects using the [Git version control system](http://git-scm.com/) on [GitHub](http://github.com). Each week is in the class repository, and students are expected to use the below steps to turn in projects by Friday night of every week, unless the project has an explicit multi-week timeline.

#### Projects

Each week is structured around one or many small projects. Each project can be found in each week's folder under the course repository. **Work in your own fork** of the course repository, and remember to **commit often** so your work is safe and I can see your work.

To give you an idea of working with clients, each project will be delivered as a *narrative* with a (usually funny) client and a description of their audience and what the project is all about. As we progress through the course, you will see more exhaustive and real-world case studies provided by contacts in the industry. Names will be changed to protect the <strike>innocent</strike> guilty.

Each project may have multiple folders inside it, but will always includ a **README** file which explains what you will be doing, including how the project will be graded. Here's an example folder:

    /projects/week1/  <-- Each week's project can be found under the projects folder
      README.md       <-- The readme file explains what's expected of you for that week
      source-files/   <-- Some projects have additional assets the client provided
      project/        <-- The folder where you should place your project
      
#### Grading

This course is structured around how small web deveopment shops work, which will be where most students will hopefully be working after they graduate. Web developers aren't expected to know everything on the top of their head, but instaed use a lot of notes, snippets, and Google searches to figure out difficult problems. Because of this, you won't be taking any tests, and instead will be given projects. Most of these will be week-long, some might take several weeks to complete.

While it's important to turn work in on time for full credit, you won't be expected to have everything perfect. The grading of this course is base don the premise that **you will not learn anything unless you make mistakes**, and as such, many projects are set up to make you **fail often and in spectacular ways**. I will give you feedback on each project via comments on your commit, as well as opening issues in your queue if I think you need to rethink your approach.

To turn in your work, just commit your project to your fork of the course repository. You should **commit often** while you do your work, as multiple commits will show me what you were thinking while you tackled the project, and prevent unnecessary questions. At the deadline, an automated script will run to download everyone's work and make a snapshot so I can see who was on time and hav ea copy of everything week-by-week. As long as your project is pushed to GitHub, it's considered turned in.

##### How grading works

1. **Punctuality** -- Web workers are always paid on deadlines. Meet your deadline for each project to ensure you have a shot at getting 100% of the points. If you miss a deadline, you will only get at most 50% of the points for that week.
2. **Effort** -- You can't just toss a file into the project folder for that week to "get your foot in the door." If you made a concerted effort, you will have a shot at 100%.
3. **Responsiveness** -- If I say "awesome job, you're done" then you're done. No need to look back on that project. However, there will always be little comments that I leave, or issues that need to be resolved. Being responsive to these notes is crucial in the development world, and will be expected of you in the course.
4. **Completeness** -- At the end of the semester, I will then take your complete repository and check it out again. For every week where you didn't get 100%, I will look back in that folder and see if there were any new commits since then. If there were, I will reevaluate your work, see if you responded to my issues, and re-grade you for that week's project.