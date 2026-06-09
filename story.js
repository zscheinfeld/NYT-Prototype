/* ============================================================
   STORY — the scrollytelling content.
   Edit this file to change the narrative; no other file needs touching.

   Each scene:
     mood     — key into MOODS (in index.html): bg + text + rail colors
     type     — "impact" (big Cheltenham pullquote) or "body" (20px Imperial copy)
     photo    — optional background image path (e.g. "Images/1.png")
     html     — the scene markup. Useful classes:
                  .impact-text  big dramatic headline
                  .lead         italic Imperial lead-in
                  .body > p     dense 20px body paragraphs
                  .hl           inline highlight in accent yellow (--hl, #EDDD4F)
     timeline — how the bottom rail reacts:
                  domain : [startYear, endYear]  visible window (zoom)
                  reveal : draw event hashes with year <= this value
                  focus  : [years]  show a highlighted yellow hash at these years
                           (non-event narrative years); also labels them by default
                  labels : [years]  restrict which focus years get a year label
                           (others keep the hash, lose the label). Omit = label all.
                  arcsFrom : year   draw a fan of arcs from this year back to every
                           shown marker (events + personal). Grows as cats build.
                  arcs   : [{from, to, color?}]  draw a connector arc from one
                           year to another (forward if to>from, backward if
                           to<from). It animates on as the beat becomes active.
                  cats   : [category names]  reveal every event in these
                           categories (any year), color-coded. Use to introduce
                           the timeline one thematic grouping at a time. Combines
                           with reveal. Categories (and their colors) are defined
                           in CAT_COLOR in index.html:
                             Immigration                #F98649 orange
                             Climate / Energy Security  #57CA37 green
                             Race & Voting Rights       #CA2B92 magenta
                             Public Health              #10A7A2 teal
   ============================================================ */

const FULL = [1860, 2035];

const STORY = [
  { mood: "dark", type: "impact",
    html: '<h1 class="impact-text">The Shape<br>of it All</h1>',
    timeline: { domain: [1900, 2026], reveal: 0 } },

  { mood: "colosseum", type: "body", photo: "Images/1.png",
    html: '<div class="body"><p>In <span class="hl">October 1922</span>, my grandmother was 25 years old and living in Italy. Integer a leo sit amet ipsum sollicitudin mattis ut ut velit. Maecenas ipsum diam, fermentum vel purus nec, sagittis scelerisque risus. Nunc faucibus porttitor leo ac porttitor. Morbi commodo pharetra mi semper ultrices. Pellentesque porta massa vitae orci elementum, sit amet condimentum lorem tempor. </p></div>',
    timeline: { domain: [1900, 2026], reveal: 0, focus: [1922] } },

  { mood: "topple", type: "body", photo: "Images/2.png",
    html: '<div class="body"><p>By <span class="hl">October 1943</span>, my grandmother was 46. Mussolini had fallen that summer, the Allies were pushing up the peninsula, and for the first time in two decades Italians could imagine a country without fascism — a frightening, hopeful, extraordinary time to be alive.</p></div>',
    timeline: { domain: [1900, 2026], reveal: 0, focus: [1922, 1943], arcs: [{ from: 1922, to: 1943 }] } },

  { mood: "dark", type: "body",
    html: '<div class="body"><p>More than 80 years later, on <span class="hl">September 19, 2026</span>, I became a citizen of the United States of America — during the country’s 250th anniversary, after 14 years here. I moved to America in 2012, during Obama’s presidency, wanting to build a life in a country I admired. At the moment, I am trying to understand what is happening to the democracy I just joined, and — like many of us — am overwhelmed by the daily accumulation of headlines: threats, executive orders, firings, reversals.</p><p>When I reflect on my own experience of becoming a citizen this past year, I have to be honest about what prompted it: I wanted citizenship primarily because it feels uncomfortable not to have one right now, which is not why I came to America in the first place. It has been a personal shift — from coming here to build a life in a country I admired, to needing more formal legal protection to feel secure — a shift that made me want to investigate our collective experience living in America today.</p></div>',
    timeline: { domain: [1900, 2026], reveal: 0, focus: [1922, 1943, 2026], arcs: [{ from: 1943, to: 2026 }] } },

  { mood: "paper", type: "body",
    html: '<div class="body"><p>Transition moment to policy. For a century and a half, the United States slowly assembled a scaffolding of rights — who counts as a citizen, who gets to vote, what we breathe, who is cared for when they are old or sick.</p><p>Each of those promises has its own history — and, lately, its own undoing. I traced four of them, one thread at a time.</p></div>',
    timeline: { domain: FULL, reveal: 0, focus: [1922, 1943, 2026], labels: [2026], arcsFrom: 2026 } },

  // ---- color-coded category groupings: hashes build up cumulatively, all linked
  //      back to 2026 (the present) by the fan of arcs ----
  { mood: "paper", type: "body",
    html: '<div class="body"><p><strong style="color:#F98649">Immigration.</strong> Birthright citizenship was written into the Constitution in 1868. In 2025, an executive order moved to end it — and in 2026, Renee Good, a citizen, was killed by immigration agents.</p></div>',
    timeline: { domain: FULL, reveal: 0, cats: ["Immigration"], focus: [1922, 1943, 2026], labels: [2026], arcsFrom: 2026 } },

  { mood: "paper", type: "body",
    html: '<div class="body"><p><strong style="color:#57CA37">Climate &amp; energy.</strong> The Clean Air Act (1963) and the EPA (1970) gave Washington the power to protect the air. In 2026, the administration rejected the finding that greenhouse gases harm us — and took that power away.</p></div>',
    timeline: { domain: FULL, reveal: 0, cats: ["Immigration", "Climate / Energy Security"], focus: [1922, 1943, 2026], labels: [2026], arcsFrom: 2026 } },

  { mood: "paper", type: "body",
    html: '<div class="body"><p><strong style="color:#CA2B92">Race &amp; voting.</strong> The Voting Rights Act of 1965 secured the ballot against racial discrimination. In 2026, the Supreme Court struck down a Louisiana map — another blow to what remains of it.</p></div>',
    timeline: { domain: FULL, reveal: 0, cats: ["Immigration", "Climate / Energy Security", "Race & Voting Rights"], focus: [1922, 1943, 2026], labels: [2026], arcsFrom: 2026 } },

  { mood: "paper", type: "body",
    html: '<div class="body"><p><strong style="color:#10A7A2">Public health.</strong> Medicare, enacted in 1965, promised care to the old and the sick. In 2025, the OBBB Act cut more than $1 trillion from Medicaid and the Affordable Care Act.</p></div>',
    timeline: { domain: FULL, reveal: 0, cats: ["Immigration", "Climate / Energy Security", "Race & Voting Rights", "Public Health"], focus: [1922, 1943, 2026], labels: [2026], arcsFrom: 2026 } },

  { mood: "dark", type: "body",
    html: '<div class="body"><p>Transition to speak about the next 250 years. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ligula turpis. Donec dapibus convallis augue non fringilla. Mauris in lacus nulla. Nullam porta vel metus ac dapibus. Proin efficitur nec enim vitae dignissim. Aliquam sed felis mauris. In consectetur fermentum magna a consectetur. Sed vel ultrices nisi. Cras vel risus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam placerat bibendum odio, sit amet consectetur turpis finibus vitae. Nam quis massa volutpat, dignissim enim ac, egestas neque. Vestibulum iaculis posuere nisi, at venenatis tortor.</p></div>',
    timeline: { domain: [1860, 2285], reveal: 0, cats: ["Immigration", "Climate / Energy Security", "Race & Voting Rights", "Public Health"], focus: [1922, 1943, 2026], labels: [2026], arcsFrom: 2026 } },
];
