<template>
  <div>
    <div class="page">
      <section class="content heading-content">
        <div class="wrapper">
          <div class="consult-heading">
            <h1>I can help you succeed in your interview process</h1>
            <h3>Using my experience of organising, leading and taking part in more than 100 software engineering interviews.</h3>
          </div>
          <img class="big-avatar" alt="Mikhail Starikov" src="../assets/consult-ava.png">
        </div>
      </section>
      <div class="arrow-down"/>
    </div>
    <div class="whitepage">
      <section class="content">
        <h2>My Expertise</h2>
        <ul class="expertise-list">
          <li>Started doing interviews and preparing case studies <span class="green">10 years ago</span>, back when I was in Russia
            I have long and vast experience working with all kinds of candidates for different roles in different kind of teams.</li>
          <li>Did more than a <span class="blue">100 interview</span> of FullStack/ Frontend/ QA/ Lead engineers in English in last years.
            I have relevant experience and up-to-date knowledge about interviewing and can help you use it to build your success</li>
          <li>Always have found job for myself less than in <span class="orange">3 weeks, not more than 3 applications</span>.
            In my case using own advices and experience I've never had a problem finding a good place for myself, last time it was 2 application and 2 interview which resulted in offer. </li>
          <li><span class="green">Wide network of HR specialists</span> and industry experts.
            Using own network that was developed through the years I can get needed advise or fresh insights on recruiting processes</li>
        </ul>
      </section>
      <section class="content">
        <div class="wrapper">
          <div>
            <h2>Feel free to check out my article</h2>
            <p>
              It is free and quite concise on what might be your firsts steps to improve your cv and succeed in interview process.
              <br>
              It will help you to rethink your way of preparing for the interview and increase your chance of getting through.
            </p>

            <a target="_blank" href="https://medium.com/better-programming/how-to-land-a-perfect-software-engineer-interview-981e617aae1a">
              <button class="cta-button">
                Check out
              </button>
            </a>
          </div>

          <a target="_blank" href="https://medium.com/better-programming/how-to-land-a-perfect-software-engineer-interview-981e617aae1a">
            <img class="article-img" src="../assets/article.png" alt="article preview">
          </a>
        </div>
      </section>
      <div class="arrow-down"/>
    </div>
    <div class="page">
      <section class="content">
        <h2>What I offer</h2>
        <div class="wrapper-vertical">
          <div class="offer">
            <h3>CV review</h3>
            <p>
              Send me your CV in advance, so I could have a thorough look. <br>
              I ll analyse content and the way you present yourself as candidate. <br>
              I ll prepare a document with comments over your CV, highlighting strong areas and areas to improve.
            </p>
          </div>
          <div class="offer offer-blue">
            <h3>Test interview</h3>
            <p>
              You will send me examples of position you would like to apply to, I ll lead a test interview with you for approximately one hour for this position.
              <br>
              We will have 45 minutes call to prepare for the interview and go through position plus your strengths and how to represent them.
              <br>
              After 1 hour interview I ll prepare summary with all the information and advices I have.
            </p>
          </div>
          <div class="offer offer-orange">
            <h3>Cheatsheets for Fullstack and Frontend positions</h3>
            <p>
              Feel free to check out <a target="_blank" href="https://github.com/starikovm/knowledge_vault">my own cheatsheet</a>, that I use for job interview preparations, with concise and in-depth bulletpoints:
            </p>
            <ul>
              <li>how web works</li>
              <li>how js works</li>
              <li>how optimise javascript and animations</li>
              <li>message systems (Kafka, RMQ)</li>
              <li>database types and engines</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="content">
        <div class="wrapper cta-block">
          <div class="apply-elements">
            <h2>Apply for a consultation</h2>
            <div>
              <span class="price">€50</span>
              <ul>
                <li>CV Review</li>
                <li>Summary of CV analysis</li>
              </ul>
            </div>
            <div>
              <span class="price">€200</span>
              <ul>
                <li>CV Review</li>
                <li>Call to discuss desired position, and how to prepare for an interview</li>
                <li>Test interview</li>
                <li>Complete summary of CV analysis plus interview analysis</li>
              </ul>
            </div>
            <h3>
              Get in contact with me via <a class="big-link" target="_blank" href="mailto:michail.a.starikov@gmail.com">email</a> or <a
                    class="big-link" target="_blank" href="https://t.me/la_gerva_stock">telegram</a>
            </h3>
          </div>
        </div>
      </section>
      <section class="content">
          <div class="wrapper">
              <span class="rocket-emoji">🚀</span>
              <h3 class="call-to-action-text">
                  Improve your CV and interview skills and learn how to present yourself in the <i>best way possible</i> to skyrocket your career!
              </h3>
              <span class="rocket-emoji">🚀</span>
          </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consult"
}
</script>

<style scoped>
.heading-content {
  padding-top: 200px;
  padding-bottom: 200px;
  max-width: 1500px;
}

.consult-heading {
  text-align: left
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper-vertical {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}


.big-avatar {
  margin: 20px;
  border-radius: 5%;
  width: 600px;
  height: 600px;
  object-fit: cover;
}

.article-img {
  border: 4px solid #000;
  margin: 20px;
  border-radius: 15px;
  width: 330px;
  height: 500px;
  object-fit: cover;
}

.cta-block {
  border: 4px solid #fff;
  margin: 20px;
  border-radius: 15px;
  padding: 30px;
}

.whitepage {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-bottom: 80px;
}

.cta-button {
  color: #000;
  border: 5px solid #000;
  border-radius: 10px;
  padding: 12px 12px;
  font-size: 32px;
}

.whitepage h2,.whitepage h3,.whitepage p,.whitepage a,.whitepage span,.whitepage p,.whitepage ol,.whitepage ul {
  color: #000;
  text-align: left;
}

ul.expertise-list {
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
}

ul.expertise-list li {
  border-left: 1px solid #000;
  margin: 40px 0;
}
ul.expertise-list li:before {
  content: '';
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  margin-bottom: -110px;
  border-top: 30px solid #36364b;
}

.whitepage > .arrow-down {
  margin-bottom: -110px;
  border-top: 30px solid #fff;
}

.offer {
  position: relative;
  padding-top: 60px;
}
.offer:before {
  content: '⬤';
  color: rgb(119, 255, 102, 0.6);
  position: absolute;
  left: -40px;
  top: 50px;
  font-size: 80px;
  line-height: 30px;
}

.offer-blue:before {
  color: rgb(102, 109, 255, 0.6);
}

.offer-orange:before {
  color: rgb(255, 143, 102, 0.6);
}

.apply-elements > * {
    padding-bottom: 30px;
}

.big-link {
    font-size: 34px;
}
.price {
    font-size: 28px;
    font-weight: bold;
}
.call-to-action-text {
    padding-top: 90px;
    text-align: center !important;
}

.rocket-emoji {
    font-size: 80px;
    padding: 120px 40px 0;
}
</style>