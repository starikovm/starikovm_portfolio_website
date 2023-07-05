<template>
  <div>

  <div class="page">
    <section class="content fullscreen-content">
      <Heading/>
    </section>
    <section class="content" id="about">
      <h2>About me</h2>
      <div class="about-wrapper">
        <p>
          Hello! My name is Mikhail and my expertise is focused on <span class="yellow">building and scaling web products</span> with great digital experience, as well as <span class="green">growing teams</span> for those products.
          <br>
          <br>
          My career in software engineering started back in 2012, when I started to learn web stack in parallel with finishing high school. Fast forward to 2014 I joined <a href="https://itgro.ru/">digital agency</a> in Russia,
          where I got my first <span class="orange">software engineering and team leading experience</span>.
          <br>
          <br>
          In 2017 I relocated to Germany and still living here, I joined <a href="https://trivago.com">big corporation company</a>, <a href="https://medium.com/itnext/building-startup-application-with-minimal-costs-b205347e726c">started and closed a startup</a>, <a href="https://www.metro-markets.de/">another big german company</a>,
          and finally joined purposeful and fulfilling role at <a href="https://www.leapsome.com/">Leapsome</a>.


        </p>
        <img class="avatar" alt="Mikhail Starikov" src="../assets/ava.jpg">
      </div>
      <h3>Things I am working with:</h3>
      <ul class="skills-list">
        <li>Typescript</li>
        <li>Javascript (ES6+)</li>
        <li>Node.js</li>
        <li>Vue/React</li>
        <li>Scaling products and teams</li>
        <li>Growing people</li>
      </ul>
    </section>
    <section class="content" id="career">
      <h2>Where I've worked</h2>
      <div class="tabs-wrapper">
        <div class="tabs-content">
          <div :class="{'active-tab': activeTab === 'leapsome'}">
            <h4 class="tab-title">Senior Fullstack Engineer @ <a href="https://www.leapsome.com/">Leapsome</a> </h4>
            <span class="tab-subtitle">January 2022 - Present</span>
            <ul>
              <li>Working on a platform designed to improve people's lives and make their work fulfilling</li>
              <li>Heavily engaged into interviewing process</li>
              <li>Came up with suggestions towards engineering team composition and open positions, in order to give more opportunities to minor groups and increase team diversity</li>
            </ul>
          </div>
          <div :class="{'active-tab': activeTab === 'metro'}">
            <h4 class="tab-title">Team Lead @ <a href="https://www.metro-markets.de/">Metro Markets</a> </h4>
            <span class="tab-subtitle">September 2019 - December 2021</span>
            <ul>
              <li>Led a functional team that was focused on backoffice for marketplace vendors</li>
              <li>Designed frontend engineers case study and was maintaining frontend engineers interview pipeline for 2 years</li>
              <li>Introduced 360 feedback process to my own team 1 year before it was roll-out to company</li>
              <li>Helped engineers to grow and had one successfully picking up my role after I decided to leave</li>
            </ul>
          </div>
          <div :class="{'active-tab': activeTab === 'clusterjobs'}">
            <h4 class="tab-title">Co-founder @ <a href="https://medium.com/itnext/building-startup-application-with-minimal-costs-b205347e726c">Clusterjobs</a> </h4>
            <span class="tab-subtitle">January 2019 - September 2020</span>
            <ul>
              <li>Planning of feature development and vision of a product, which was job searching platform, targeting people who are looking to relocate to Germany. Platform was using AI engine that was picking CV and comparing it keywords to job offers we had in database.</li>
              <li>Planning of architecture of product infrastructure</li>
              <li>Building of a web platform, using nuxt.js, vue.js, laravel, graphQL</li>
              <li>Setting up of CI/CD for the project.</li>
            </ul>
          </div>
          <div :class="{'active-tab': activeTab === 'trivago'}">
            <h4 class="tab-title">Software Engineer @ <a href="https://trivago.com">Trivago</a> </h4>
            <span class="tab-subtitle">July 2017 - August 2019</span>
            <ul>
              <li>Working in a functional team as fullstack engineer on main search component and filters</li>
              <li>Committed to big redesign of search and filters, when concepts were introduced to use more AI in search, rather than simple filters</li>
              <li>Preparing and organising nuxt.js workshops for colleagues</li>
            </ul>
          </div>
          <div :class="{'active-tab': activeTab === 'legalplus'}">
            <h4 class="tab-title">Software Engineer @ <b>Legal Plus</b> </h4>
            <span class="tab-subtitle">July 2017 - August 2019</span>
            <ul>
              <li>This project was developed by me, also I was the only maintainer for almost two years. Here I realized how to organize tasks and deadlines, got acquainted with symfony2 and doctrine orm.</li>
              <li>Development of informational system for microfinancial organization from scratch</li>
              <li>Some of solved problems: Entering and storing the client data, checking for duplicates, suspicious clients and adding clients in blacklist, printing Word and Excel documents from templates filled with client information, performance optimization, access restriction, encoded data storage</li>
            </ul>
          </div>
          <div :class="{'active-tab': activeTab === 'itgro'}">
            <h4 class="tab-title">Team lead @ <a href="https://itgro.ru/">Itgro</a> </h4>
            <span class="tab-subtitle">February 2014 - June 2017</span>
            <ul>
              <li>I joined this digital agency as my first full-time software engineering role as junior engineer, less than in a year founder grabbed us and told that he wants to create a new small squad that will be responsible for smaller customers and asked who if anyone feels bold enough to lead it. I raised a hand and said I'd like to try if he really means it.</li>
              <li>I started leading a team at 2015 with only me and another guy there, and when I was leaving it was 12 people team with some people on part-time remote roles, account manager, who was communicating with clients and pretty big revenue growth.</li>
              <li>That role and those years gave me invaluable experience working with all kinds of projects, all kinds of clients and stakeholders and people in general</li>
            </ul>
          </div>
        </div>
        <div class="tabs">
          <button :class="{'active': activeTab === 'leapsome'}" @click="setActiveTab('leapsome')">Leapsome</button>
          <button :class="{'active': activeTab === 'metro'}" @click="setActiveTab('metro')">Metro&nbsp;Markets</button>
          <button :class="{'active': activeTab === 'clusterjobs'}" @click="setActiveTab('clusterjobs')">Clusterjobs</button>
          <button :class="{'active': activeTab === 'trivago'}" @click="setActiveTab('trivago')">Trivago</button>
          <button :class="{'active': activeTab === 'legalplus'}" @click="setActiveTab('legalplus')">Legal&nbsp;Plus</button>
          <button :class="{'active': activeTab === 'itgro'}" @click="setActiveTab('itgro')">Itgro</button>
        </div>
      </div>
    </section>
    <section class="content about-content" id="contact">
      <h2>Get in touch</h2>
      <Contact/>
    </section>
  </div>
    <Links/>
    <Navigation/>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import Contact from "@/components/Contact.vue";
import Navigation from "@/components/Navigation.vue";
import Links from "@/components/Links.vue";

export default {
  name: "home",
  components: {
    Contact,
    Heading,
    Navigation,
    Links
  },
  data: () => ({
    activeTab: "leapsome"
  }),
  methods: {
    setActiveTab: function(newActiveTab) {
      this.activeTab = newActiveTab;
    }
  }
};
</script>

<style>
.skills-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 260px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
}
.tabs {
  display: flex;
  flex-direction: column;
  width: max-content;
}
.tabs-content {
  width: 100%;
  margin-right: 20px;
}
.tabs-content > div {
  display: none;
}
.tabs-content .active-tab {
  display: block;
}
.tabs-wrapper {
  display: flex;
  min-height: 450px;
}
.tab-title {
  margin: 8px 0;
  font-size: 24px;
  line-height: 38px;
  font-weight: bold;
  width: 100%;
}
.about-content {
  padding-bottom: 200px;
}
</style>
