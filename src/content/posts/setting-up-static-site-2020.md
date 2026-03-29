---
title:  Lessons Learnt in Setting Up a Static Site with Hugo in 2020
date: 2020-08-20
tags: ["website", "publishing", "lessons", "2020"]
---

I wanted an alternative to Wordpress and hosting that was more value for money. Then five days ago I discovered the world of Static Site Generators. It went on to solve my problem. This is a document on how it did. 

<!--more-->

### Basics
In the event that you arrived here looking up for help to set your own static site, then here are some basic links that could get you going. 
- [How to choose the best SSG in 2020](https://snipcart.com/blog/choose-best-static-site-generator)
- [Setup your first Hugo](https://www.freecodecamp.org/news/your-first-hugo-blog-a-practical-guide/)

On the other hand, if you would like to know what Static Site Generators are in the first place, then head here:
- [What are Static Site Generators](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)

Last, if you are curious on why I chose Hugo over other SSG's, then you can read that at this footnote. [^1]

#### Lessons

This isn't a tutorial but you will find ones that are littered through this post. They have all been a huge help. I have linked to more details on all of them who helped me set this site up towards the end. Please do check them. [^2]

I have tried to summarise my learnings and also my pain point and decisions together, so at parts it might look like I am rambling, but the idea is to provide you with context and help not just you but my own understanding of my lesons better. 

![Notes on the Web Ver 1.0](/images/NOTW-1.png)

###### But Before we begin - A background

**Wordpress is a lot more than what is necessary**

I discovered the scope of Wordpress in late 2007 and have been its advocate since then. But if you want to publish a few sporadic ideas but with the flexibility of owning your web environment, then WP is too bloated for too little. It wasn’t so in 2007, but over the years as its setup became easier to and the system more powerful, it came at the cost of simplicity and cost. 

You don’t have an option to have a custom domain and customise your site while publishing sporadically for cheap. You have to pay a monthly fee either to Wordpress or to a web host. Else you have to surrender any ambition of making a unique identity online and become a template. It didn’t make sense to me. I can post once or twice a year but I have to pay every month in between, while someone who publishes every week pays the same as me? And not that with all the bells and whistles you can create an experience to die for unless you know PHP or CSS. Any additional setup requires a plugin, and once you have three or four of them, forget a dozen, your website’s header looks bigger than its body. The site with little content becomes heavy. That is a problem. 

In the light of this context, I have been looking for an alternative to WP since over a year. I didn’t want to write anything purely because I was paying a monthly rent to a web host.  

![Plugins powered Notes on the Web Ver 3.0 in 2017](/images/NOTW-3.png)

###### Discovering Static Site Generators
In my search for a Wordpress alternative I ran out of terms to look up. Sometime earlier this month, I decided to either find and close in one by the month’s end or drop the idea. Thus, part desperation and part freedom drove me to look up at places I had stopped visiting. Back when I was a WP novice I used to frequent [Smashing Magazine](https://smashingmagazine.com). I decided to pay it a visit to see what’s new in the web tech space. And one of the first articles I landed up on was [this piece on Headless CMS](https://www.smashingmagazine.com/2020/04/web-app-headless-cms-react/). And that’s how I got introduced to the space of SSG’s. It is strange, Static Site Generators have been around for the better part of the last decade, but unless you are in the know with the coder and developer ecosystem you are unlikely to have heard of it all this while. But as Headless CMS’s begin to improve, more people like me are going to adopt to this, that I am certain of. And that is my **lesson zero**. 

#### Static Lessons

1. **Static sites are practically free** - Dynamic content on static websites work with APIs, you don’t use a database. Your own content will be HTML pages and front end frameworks of CSS and JavaScript. You can host these for free on Github pages or with services like Netlify or even Amazon. Even if you have traffic that is higher than average for personal sites, your cost for hosting it on cloud will be pennies a month. 
2. **You can make your site live in under 10 minutes** - Using [Stackbit](https://snipcart.com/blog/manage-jamstack-websites-stackbit) and signing up for accounts on GitHub, [Netlify](https://netlify.com) and [Forestry](https://forestry.io), you can have your site live in under 10 minutes. I took just 6. And I did it all from my browser on the iPad. This video is all I had to watch and follow to get it up. <br /> [Watch on YouTube](https://www.youtube.com/watch?v=LcHOp3lIg1g)
3. **The learning curve is steep** - While services like Stackbit and CMS like Forestry do make it easy to go live. The ecosystem of Static Site Generators lean disproportionately towards developers who understand front end technologies. If you want to get started with launching a blog on your own domain name quick and for free, then the above solution is all you need. But if you want to play around, try different themes, customise things, even small things like changing your link colours or editing your navigation menu are hard even if you are not new to CSS and JavaScript. You will need to learn how to use the command line interface on your PC to do even the smallest of changes. 
4. **Command Line looks and sounds intimidating but it is not** - Installing a local server and committing to Git and deploying with Netlify and all geek haberdashery, but if you are motivated you can follow documentations and set a site up without breaking anything. Not to mention the beauty of YouTube. Because this is a generic summary of SSG, I will include the tutorials that were helpful for me in the footnotes. [^3]
5. **You can survive with bare minimum knowledge of all platforms** - There are over [400 Static Site Generators](http://staticgen.com) and over a dozen CMS and many more hosting solutions. It can seem daunting. The best thing to do then is to pick any random one (read Footnote 1) and learn as you go and get installing and making mistakes if need be to figure things out. It is as easy as deleting files from your computer to revert to the start. And because all you are working on are text files, you won’t screw anything up on the system.
6. **You will need to know markup language** - Unless you are using the Stackbit setup mentioned above and therefore a CMS. But it is not difficult and in fact can help give your posts a good clean structure. Markdown cheatsheets are a search away on Google. 
7. **Unfortunately themes and theme features are not standardised** - This is one of the main reasons it took me five days from learning about SSG to making this site live. It shoudn’t have taken this long, but it did because there would be one or two crucial things missing in a theme. You then either spent hours understanding the problem and then looking for a solution or you would have to change the theme altogether and start from scratch. Things are smooth if you know CSS and JavaScript. Theme documentations are bare bones in most cases. 
8. **Once you setup your local server you can manage your site from anywhere** - I am writing this post from my iPad. But till two days back I didn’t know that I can also make changes and commit and push to my Git repository from it. This was important to me because my laptop keeps crashing and I use the iPad for almost all my other work. [Read this post](https://victoria.dev/blog/a-remote-sync-solution-for-ios-and-linux-git-and-working-copy) to set up your iPad environment to run your static site. You will need to download an app called [Working Copy](https://workingcopyapp.com) to do this.
9. **You can install your SSG locally and connect to a Headless CMS later** - this might look obvious, but this was a concern I had. I did go back to Forestry to manage adding posts and content. But just my luck, the theme that I use hadn’t set Front Matter templates and my use of it was limited. So I am back to editing mark up in a text editor. 
10. **The documentation available for SSG’s need to improve a lot** - and by this I mean the community documentation. That said many people have taken cognisance of it, and I am sure this will change soon. But even without the document, the community pages are very active and helpful for almost all SSGs. It might take more time, but you are sure to find an answer to any issue you will face. 
11. **Static Sites are great for the environment** - Lighter sites taking up less resources can [reduce carbon emissions](https://www.niklasjordan.com/about-this-site). This also makes them super fast consuming less bandwidth. Everyone should work with them. This might seem like a flimsy lesson, but I had no clue about it till I went to fork my theme on Github and discovered Niklas’s site in the process. 

That covers the most basic lessons I learnt in setting up this site. Hope it is helpful for someone else who might have these questions and are dithering whether to make a move or not. The fact that someone like me who doesn’t know front end languages and have very little development experience has set a static site up should boost anyone’s confidence. I hope you are one of them. 

##### Footnotes

[^1]: **Why [Hugo](https://gohugo.io)** - As mentioned earlier, there are over 400 Static Site Generators to choose from for your site. I am not qualified to tell you which one is better than the other. But I can tell you how I chose mine. My first choice was [Gatsby](https://Gatsbyjs.com) and the reason I switched to Hugo was because I found more documentation around it. It is also older and thus more mature than other SSG’s. At least it seemed that way to me. A crucial reason for the switch also was that I was using Forestry and it seemed to work better with Hugo in terms of features like Menu management. That I ended up with a website without one is an irony hard to miss. But that happened. I would like to add that, given another option I would definitely like to try [Eleventy](https://11ty.dev). This tutorial on how to set one up is a great place to start not just for Eleventy but for any SSG. I didn’t choose to go ahead with it for the same reason that its ecosystem is smaller than that of Hugo and I felt it might make my learning curve steeper. 

[^2]: **People to Thank** [Chris Stayte](https://www.chrisstayte.com/) and [Mike Dane](https://www.mikedane.com/) for their great video tutorials in setting up a static site. Mike’s channel goes on to cover various SSG’s setup. [Victoria Drake](https://victoria.dev/) and [Tatiana Mac](https://tatianamac.com/) for their posts and tutorials on Static Site Generators and the ecosystem. Tatiana’s site is a design inspiration! [Sid Verma](https://sidverma.io/) for the lovely theme that I am using. [Matt Mayes](https://mattmayes.com/tags/hugo/) with his posts on managing Hugo


[^3]: **Tutorials for Hugo**
Chris’s video series on setting up a Hugo site was my absolute go to for this process. He detailed all the steps, especially the tiny ones and I don’t think I could have made this site live without this tutorial. [Watch on YouTube](https://www.youtube.com/watch?v=c7vpcqA6SEQ)