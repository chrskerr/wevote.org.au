<template>
  <div class="whitepaper">
    <div class="section">
      <div class="container">
        <h1 class="title">Whitepaper</h1>

        <p>I created this tool because it is my belief that <strong>good ideas should be used, regardless of party or political affiliation.</strong></p>
        <hr>

        <h2 class="subtitle">Contents</h2>
        <ol>
          <li><a href='#summary'>Summary</a></li>
          <li><a href="#problem">The Problem</a></li>
          <li><a href="#solution">This Solution</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#next">Whats next / How can you help</a></li>
        </ol>
        <hr>

        <h2 class="subtitle" id='summary'>Summary</h2>
        <p>
          According to <a href='https://www.theaustralian.com.au/nation/newspoll' target="_blank">Newspoll</a>, as at 8 December 2019 Scott Morrison's net satisfaction rating as our leader has risen to -3. This is a terrible number, even as the popular leader of Australia he is net-disliked. We do not trust our leaders or politicians to adequately represent us, and we as individuals often feel powerless over the behaviour of our country.
        </p>
        <p>
          The WeVote platform is designed as a proof-of-concept for fast referendums and plebecites. I have a view to giving a voice to the best ideas from any member of parliament, and allowing the Australian people to decide what is in their own best interests.
        </p>
        <p>
          The platform will be open, auditable, not-for-profit and secure. This will ensure that the responses can be guaranteed to be representative of Australia, with a trust rating above and beyond any opinion poll.
        </p>

        <h2 class="subtitle" id="problem">The Problem</h2>
        <p>
          No individual politician or party represents anyone perfectly, and we have limited information about how a politician will behave once they are in power. This is an old and well understood problem with representative democracy, whereby it is impractical to vote more regularly but it is equally impossible to determine who the best politician to represent you will be.
        </p>
        <p>
          We often vote along party lines, choosing our parties candidate regardless of their merit, as at least we understand how the party will behave. But this causes unexpected situations where this politician pushes a policy which we are directly opposed and we feel frustrated and powerless to make ourselves heard.
        </p>
        <p>
          If we don't vote this way, we are still presented with a very limited pool of candidates, and even less readily consumable information about who they are and what they stand for. The whole process seems designed to be confusing and produce poor results.
        </p>
        <p>
          Finally, we have no adequate mechanism to influence a standing Government. Protest is discourage and achieves little, anonymous or unverified petitions are ignored, and public outcry is discarded. We voted for this Government, and it cares little about our feedback to it. It is only incentivised to ensure subsequent election, which the above factors help smooth the way toward.
        </p>

        <h2 class="subtitle" id="solution">This Solution</h2>
        <p>
          The WeVote platform is designed as a proof-of-concept to demonstrate the online-voting can be secure and verifiable, despite the protests of the Australian Government and their extremely poor implementation as an away-vote mechanism.
        </p>
        <p>
          I intend this platform to accept plebecite (and eventually referendum) submissions from any member of parliament. The goal is to give minority politicians a voice and to allow ideas to be voted on by the Australian people. Then those ideas can have their verified Australian support demonstrated to the political leadership in a manner exceeding social media polling or opinion surveys. This will ensure that good ideas are not stamped out because they belong to the wrong party or the wrong person. The only metric that should matter in a democracy is how well supported the idea is by the population.
        </p>
        <p>
          Eventually, once feasible, we will begin to accept referendums and bind our politicians to our will. Initially, they will be able to treat a plebecite as strong, but optional, though with time we will regain the ability to decide how our country is run. No more feeling powerless, replaced by the facts of how the Australian population votes.
        </p>
        <p>
          Ideally, votes will have short cycle. The issue submitter will have the ability to compile their case for, and those politicians standing against the idea will have an equal opportunity to compile their case against. These will be displayed side-by-side in plain English for Australian voters to read, digest and make an informed decision. There should be minimal opportunity to hide or obscure information, as it will be all in one place. As the platform, we will need to take a position on how much fact-checking should be completed, though I feel that this should be done in a challenge-response manner. Each side has the opportunity to challenge any assertion by the other, who then must support their claim or remove it. I intend to keep the platform itself non-political and take no side in the issue.
        </p>
        <p>
          Unlike a closed voting or polling mechanism, I intend to make every vote (but not the voter) public. In this manner we can individually record (if we wish) what our ballot number was to verify our vote has not been tampered with later, and any Australian will have the ability to tally the votes on an issue to view the outcomes. Vote participation will be recorded seperately to prevent duplicate voting or votes from any individual who is not on the Australian Electoral Roll. The software will also be open and public, allowing full scrutiny and auditability, to ensure that the Australian people can trust that their votes are being accurately heard.
        </p>

        <h2 class="subtitle" id="technologies">Technologies</h2>
        <p>
          The frontend is currently built on Vue.js, the backend is Node.js & Express.js, with Graphql as the communication mechanism between both.
        </p>
        <p>
          The backend contains the bulk of the logic and currently holds two seperatel SQLite3 databases: the first for a record of the vote itself (description, due date, ID, case for, case against, etc) and the second contains the vote history 'blockchain'. This is more realistically blockchain inspired, since it uses a hashing & signing mechanism to lock in parcels of votes and confirm historical immutability. 
        </p>
        <p>
          The intention here is to evolve the blockchain into a fully distributed model in which any number of individuals or institutions can subscribe to provide redundancy via distribution. Only the vote server will hold the private key to sign new blocks, so no-one else can insert a block into the chain, but these blocks will be immediately disseminated to anyone who wishes to subscribe allowing them the ability to locally analyse, verify and report on the results. 
        </p>
        <p>
          The vote responses have been split into two tables. A record-of-vote (Person A has participated in Vote 01) and a record-of-ballot (Ballot 1 was returned For). This allows us to seperate the act of receiving a "ballot sheet" from the act of returning it, meaning we can record both transactions and later verify who voted and what was voted for, but make it considerably harder to link a vote to an individual for later profiling. (This mechanism is currently broken, as the record-of-vote and record-of-ballot happen simultaneously, meaning the DB can be read in-order to match voter to vote. The process here needs to be altered to ensure that these two are non-linear and cannot be matched. I currently do not record the time-of-transactions, which helps a little).
        </p>
        <p>
          I also do not currently have a Voter Identifier (voterId) mechanism to ensure that each voter only votes once. Currently, the backend accepts any number as a licence number and any surname, though ideally this will be verified against the AEC to confirm a voterId or similar, which can then be used for the record-of-vote. Once this is done, I intend to just store the hash of the Voter Identifier plus a reference to which vote is being participated in. This can then be rapidly be used to verify if an individual has already voted in this vote <code>is sha256(voterId: 1234, voteId: 2) already in Votes table?</code> but will be impossible to reverse to allow a correlation attack against an individual voterId, providing more privacy to the individual. This would be possible due to block proximity of the record-of-vote and record-of-ballot, unless the voterId was further obscured. This does make confirming that each voterId only voted once in each vote much harder for a third party, so that must be weighed when finalising the table structures.
        </p>

        <h2 class="subtitle" id="next">Whats next / How can you help</h2>
        <p>
          The code and application was very rushed due to its prototype nature, so any support on cleaning this up would be greatly received. This will be one of my prime focusses also. Concurrant to this, it cannot remain isolated to my GitHub and Raspberry Pi, I want to create a full open-source framework for development of all aspects of this and find some hosting locations which can support through the early days.
        </p>
        <p>
          There needs to be an identity verification mechanism, so any link into the AEC or similar institute who can assist with creating this is crucial to making this a real platform.
        </p>
        <p>
          A supportive politician and first-vote. Something to get us started.
        </p>
        <p>
          Last but most importantly, we need uptake and visibility. Australians and politicians need to be aware of this platform. <strong>Nothing will change without substantial pressure from the Australian population</strong> via use of the platform, and without the support of a handful to politicians. I want to turn this into a movement, and make this project the property of the people of Australia. We need real issues to vote on from actual politicians, we need vote participation, and eventually funding to cover infrastructure costs. <strong>If we make our voice heard via weight of numbers, then we cannot be ignored.</strong>
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'whitepaper',
  computed: {
    identifier () {
      return this.$store.state.identifier
    }
  }
}
</script>

<style scoped>
  p {
    margin-bottom: 1em;
  }
  li {
    margin-left: 1em;
  }
</style>