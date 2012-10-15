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

[&Ouml;tzi man](http://en.wikipedia.org/wiki/Otzi) (warning: kinda gross picture) died over 5,000 years ago. It took like another thousand years to figure out smelting bronze and iron. Another thousand and we get complex trading societies and agrictulture. Mankind tosses around for a while, and we get currency, writing, science, the industrial age, plastics, and the information economy. Along the way we screwed up a lot, and generally bungled up the planet, but here we are. If you want to learn more about this process, I reccomend watching [James Burke generally depress you](http://www.youtube.com/watch?v=OcSxL8GUn-g&list=PL79184D14F872B80D) in a thoroughly entertaining way.

<div class="span3 figure well">
  <img src="http://upload.wikimedia.org/wikipedia/en/b/b7/NCSA_Mosaic.PNG" class="img-polaroid">
  <strong>The Mosaic browser. I'll pause while you scream in terror.</strong>
</div>

If the Web were humankind, then our &Ouml;tzi man's was the **Mosaic Browser**, which is now probably frozen in a 5.25-inch floppy disk &mdash; only to be discovered by our alien overlords in 5,000 years, and used as evidence that we got what we were asking for. Mosaic was developed in 1992. In 20 years, less than a single generation, we have gone from grunting "webmasters" banging rocks together to build boring "pages" with grey backrounds, to a modern infrastructure of web developers, crafting artisinal "web applications." Our tools have changed signficantly, our standards and guidelines have evolved greatly, and by the time you finish this course, at least a hundred other things will have changed. The goal of this course is to impart a bit of *metis* about the Web, where you can approach current and future challenges with a Bat Man-like utility belt of tools and practices.

Like dancing or competitive eating, web development is not something you can just learn by sitting down and passively recieving information, there are never any clear "right" ways to do things, and you won't be expected to always have the right answer. You will be learning through *praxis*, where the theory and projects merge together. Most [resources](/resources.html) we use come in one of three formats for your choosing depending on the type of learner you are. You will learn to search the web for answers, Google will be your friend.

This course will be the beginning of your becoming a web developer, and will be structured as if you were a fresh intern to work for a small web shop (except I won't ask you to get coffee). This syllabus and the associated course repository which contains the projects and schedule for the course, serves two functions: as a **contract** between the faculty (me!) and the student (you!) to ensure we are on the same page; and as the **source code** that actually defines how the course will work and run smoothly.


#### Syllabus as contract

There are a lot of things expected from me as the faculty. I'm expected to guide the learning process, give you challenges to overcome, guide you through the rough patches, and get you building great things. In return you will be attentive, prompt, not get discouraged, and sometimes laugh at my bad jokes.

##### What is expected of me

As the instructor, I will structure the course so you leave here knowing the basics of web development, and have a suite of tools you can draw on to succeed both at school and professionally. I will give you interesting and fun projects to work on, and will give you feedback on those projects in a timely manner.

I will also lead labs where you can work on your projects, collaborate with other students, and learn to apply what we went over that that week's lecture.

##### What is expected of you

CSUMB is all about is **outcomes-based learning.** That means **how** you learned what you know is mostly immaterial, as long as you meet the **outcomes** and illustrate mastery of the concepts. I don't care if you learned web tools from me, from your friends, or from printing everything out and slipping it under your pillow (although that would kill a lot of trees).

You aren't expected to attend every lecture or lab. You can show up early, or leave late. If you feel the course is moving to slow or too quickly, let me know (you will learn how to edit the syllabus and make changes below).

You are expected to try hard on your projects, to give your solutions your own flair, and collaborate with your peers. As outlined in the projects section below, you will most likely fail (little "f," not big "F" as in the grade) several times in the course on projects. That's OK, and won't affect your final grade as long as you learn from your mistakes and keep going.

"Web tools" not only include things that build the web, but also utilities that professionals in the field use to manage projects and work as a team. You will be expected after the first few weeks of class to turn in all projects using the [Git version control system](http://git-scm.com/) on [GitHub](http://github.com). Each week is in the class repository, and students are expected to use the steps outlined in the "Projects" section below to turn in their work by Friday at midnight of every week, unless the project has an explicit multi-week timeline.

###### Plagiarism

This is a technical course, and while web development can be fun and expressive, what constitutes plagiarism in this course is different than others.

Because we use Git to turn in work, I expect to see multiple commits on every project to show your thinking. Let me see where you screwed up and started over. Give me an idea of your process.

It's OK to copy stuff from the web, or ask your classmates for some code. That's how web developers do things. However, for every project due-date, my script that pulls in your homework will do some sniffing around: comparing one person's project to everyone else's, making sure nothing fishy is going on. If you copy something from your classmates, make sure to give them credit in the commit. Something like "Fixed my sidebar thanks to @soandso," not only lets me know what's going on, but is also common practice in open-source communities and is considered good karma.

#### Syllabus as source code

The entire course and syllabus are open for you to fork, edit, and propose changes to directly using Git. Students can make changes in their forks of the course repository, and are encouraged to make a pull request if they think something about a project, the schedule, or the syllabus itself should change.

When I make a change or accept a pull request, those changes will automatically be made available to you, and any and all changes will be transparent to the course. Major changes will also require announcement in the class and in the course announcements page.

------------------
Projects & grading
------------------

Projects (a.k.a. "homework") will turned in via Git, and picked up automatically every Friday at midnight to see who turned in work on time. You get graded on effort if you turn it in on time, you can also take feedback to fix the errors. If for some reason you email me the work instead before midnight on Friday, that will be fine as long as you get it committed over the weekend to your repository.

#### Projects

Each week is structured around one or many small projects. Each project can be found in each week's folder under the `projects` folder in the course repository. **Work in your own fork** of the course repository, and remember to **commit often** so your work is safe and I can see your process.

To give you an idea of working with clients, each project will be delivered as a *narrative* with a (usually entertaining) client and a description of their audience and what the project is all about. As we progress through the course, you will see more exhaustive and real-world case studies provided by contacts in the industry. Names will be changed to protect the <strike>innocent</strike> guilty.

Each project may have multiple folders inside it, but will always includ a **README** file which explains what the fictitious client is expecting. Here's an example folder:

    /projects/week1/  <-- Each week's project can be found under the projects folder
      README.md       <-- The readme file explains what's expected of you for that week
      source-files/   <-- Some projects have additional assets the client provided
      project/        <-- The folder where you should place your project
      
#### Grading

This course is structured around how small web deveopment shops work, which will be where most students will hopefully be working after they graduate. Web developers aren't expected to know everything on the top of their head, but instaed use a lot of notes, snippets, and Google searches to figure out difficult problems. Because of this, you won't be taking any tests, and instead will be given projects. Most of these will be week-long, some might take several weeks to complete.

While it's important to turn work in on time for full credit, you won't be expected to have everything perfect. The grading of this course is based on the premise that **you will not learn anything unless you make mistakes**, and as such, many projects are set up to make you **fail often and in spectacular ways**. I will give you feedback on each project via comments on your commit, as well as opening issues in your queue if I think you need to rethink your approach.

To turn in your work, just commit your project to your fork of the course repository. You should **commit often** while you do your work, as multiple commits will show me what you were thinking while you tackled the project, and prevent unnecessary questions. At the deadline, an automated script will run to download everyone's work and make a snapshot so I can see who was on time and hav ea copy of everything week-by-week. As long as your project is pushed to GitHub, it's considered turned in.

##### How grading works

1. **Punctuality** -- Web workers are always paid on deadlines. Meet your deadline for each project to ensure you have a shot at getting 100% of the points. If you miss a deadline, you will only get at most 50% of the points for that week.
2. **Effort** -- You can't just toss a file into the project folder for that week to "get your foot in the door." If you made a concerted effort, you will have a shot at 100%.
3. **Responsiveness** -- If I say "awesome job, you're done" then you're done. No need to look back on that project. However, there will always be little comments that I leave, or issues that need to be resolved. Being responsive to these notes is crucial in the development world, and will be expected of you in the course.
4. **Completeness** -- At the end of the semester, I will then take your complete repository and check it out again. For every week where you didn't get 100%, I will look back in that folder and see if there were any new commits since then. If there were, I will reevaluate your work, see if you responded to my issues, and re-grade you for that week's project.

--------
About me
--------

Just two paragraphs here so you know I have some idea of what I'm talking about. I'm currently the web developer for CSUMB. I've been doing that for about five years. Before I worked here, I was a baker, a farmer, and a somewhat professional artist. I am the maintainer of a ton of open source back-end and front-end libraries and projects, in [Drupal](drupal.org/user/125882) and [elsewhere](https://github.com/kevee).

However, I've always been workin' the web since the nacent days of BBSes and squealy modems. I worked summers from Junior High to High School writing printer command software for a legal software company. I built one of the first school district websites in the state of California in 1994, which ran on a dinky mac in a closet and we were excited when we got 10 visitors. Every once and a while we'd get a call that the website was down, and I would have to climb on the roof to fix the microwave antenna that connected us to the internet.