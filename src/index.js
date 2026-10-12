

export default {

  async fetch(request) {

    const html = `<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="theme-color" content="#102b3f">

<meta name="description" content="Get a free 15-minute HVAC second opinion from an experienced HVAC professional serving Northern Virginia.">

<title>GoAskAD | Smarter HVAC Decisions</title>

<style>

*{box-sizing:border-box}

body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#182b3a;line-height:1.6}

header{padding:22px 7%;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e6ebef}

.logo{font-size:27px;font-weight:800;color:#102b3f}

.logo span{color:#1e9b91}

header a,.button{color:inherit;text-decoration:none;font-weight:700}

.hero{padding:85px 7%;background:linear-gradient(120deg,#edf5f8,#fff);min-height:470px}

.tag{color:#137f78;font-weight:800;text-transform:uppercase;letter-spacing:1px;font-size:13px}

h1{font-size:clamp(38px,6vw,64px);line-height:1.08;max-width:760px;margin:18px 0}

.hero p{font-size:19px;max-width:650px;color:#536575}

.button{display:inline-block;background:#147f78;color:white;padding:15px 22px;border-radius:8px;margin-top:15px}

section{padding:60px 7%}

h2{font-size:32px;line-height:1.2}

.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}

.card{padding:25px;border:1px solid #e0e8ec;border-radius:14px}

.card h3{margin-top:0}

.note{background:#102b3f;color:white;border-radius:16px;padding:35px}

.note p{color:#e2edf2}

footer{padding:28px 7%;background:#f1f5f7;color:#526473;font-size:14px}

</style>

</head>

<body>

<header><div class="logo">Ask<span>AD</span></div><a href="#how">How It Works</a></header>

<main>

<div class="hero">

<div class="tag">Free 15-minute HVAC second opinion</div>

<h1>Before You Buy a New HVAC System, Ask AD.</h1>

<p>Get clear answers from an experienced HVAC professional before making a major investment in your home's comfort.</p>

<p>Understand your options. Ask better questions. Make a confident decision.</p>

<a class="button" href="mailto:hello@goaskad.com?subject=Free%20HVAC%20Second%20Opinion">Request Your Free Second Opinion</a>

</div>

<section>

<h2>HVAC decisions, made clearer.</h2>

<p>You deserve to understand what your home needs and why—not feel pressured into a purchase.</p>

<div class="cards">

<div class="card"><h3>Second opinions</h3><p>Get help understanding an HVAC recommendation or replacement proposal.</p></div>

<div class="card"><h3>System options</h3><p>Learn about equipment choices, efficiency, comfort, and trade-offs.</p></div>

<div class="card"><h3>Clear explanations</h3><p>Bring your questions and get straightforward guidance in plain language.</p></div>

</div>

</section>

<section id="how">

<h2>How it works</h2>

<div class="cards">

<div class="card"><h3>1. Reach out</h3><p>Email us about your HVAC questions and share your estimate if available.</p></div>

<div class="card"><h3>2. Talk it through</h3><p>We'll discuss your situation and explain what to consider.</p></div>

<div class="card"><h3>3. Decide confidently</h3><p>Use the information to choose the next step that's right for your home.</p></div>

</div>

</section>

<section><div class="note">

<h2>Let's talk about your HVAC system.</h2>

<p>Start with a free 15-minute consultation. No pressure—just a clearer understanding of your options.</p>

<a class="button" href="mailto:hello@goaskad.com?subject=Free%20HVAC%20Consultation">Email Ask AD</a>

</div></section>

</main>

<footer>© 2026 GoAskAD · Northern Virginia · <a href="mailto:hello@goaskad.com">hello@goaskad.com</a><p>Independent guidance to help homeowners make informed HVAC decisions.</p></footer>

</body>

</html>`;

    return new Response(html, {

      headers: { "content-type": "text/html; charset=UTF-8" }

    });

  }

};
