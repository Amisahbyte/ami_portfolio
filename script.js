const $=s=>document.querySelector(s);
const comps=[
["Indonesian language evaluation","a","Checking accuracy, register and clarity of Indonesian content against written guidelines."],
["Audio and speech quality assessment","d","Building skill in judging audio clarity and AI voice quality through Project 1."],
["Pronunciation and intonation review","d","A native speaker’s ear, applied to structured review in Project 2."],
["Language fluency and naturalness","d","Native judgment of what sounds natural, with formal rating practice in Projects 1, 3 and 4."],
["Cultural and contextual accuracy","a","Reading tone, politeness and context in Indonesian content during daily review work."],
["Content moderation and quality control","a","Policy and SOP decisions, including counterfeit listings, at daily quality targets."],
["Analytical thinking and reporting","a","Consistent decisions backed by daily work reports."],
["AI training data evaluation","d","Comparing and rating AI responses, practised in Project 4."]];
$("#comps").innerHTML=comps.map(c=>`<div class="card"><span class="tag ${c[1]}">${c[1]=="a"?"Applied in work":"Developing"}</span><h3>${c[0]}</h3><p class="sub" style="margin:0">${c[2]}</p></div>`).join("");
$("#chips").innerHTML=["HTML","CSS","JavaScript","Python","React","Next.js","Node.js","Git and GitHub","Tailwind CSS","Vercel and Netlify deployment"].map(t=>`<span>${t}</span>`).join("");

/* Project 1 */
const crit=[["Native-sounding pronunciation",4,"Consonants and vowels are clear; stress on “perjalanan” lands slightly late."],["Fluency",5,"No hesitations or broken joins."],["Intonation",3,"The statement ends with a slight question-like lift."],["Naturalness",3,"Rhythm is a little too even; people usually speed up through “sedang dalam”."],["Speech clarity",5,"Clean audio, easy to follow at normal speed."],["Cultural appropriateness",4,"“Anda” is correct for customer service; “Bapak/Ibu” would sound warmer."]];
$("#p1").innerHTML="<tr><th>Criterion</th><th>Score</th><th></th><th>Comment</th></tr>"+crit.map((c,i)=>`<tr><td>${c[0]}</td><td><input type="range" min="1" max="5" value="${c[1]}" data-i="${i}" aria-label="${c[0]}"></td><td><b id="v${i}">${c[1]}</b></td><td>${c[2]}</td></tr>`).join("");
function p1(){let s=0;crit.forEach((c,i)=>{const v=+document.querySelector(`[data-i="${i}"]`).value;$("#v"+i).textContent=v;s+=v});const a=s/crit.length;
$("#p1o").textContent=`Overall: ${a.toFixed(1)} / 5, ${a>=4.5?"excellent":a>=3.5?"good, minor fixes needed":a>=2.5?"acceptable, needs work":"poor"}`}
$("#p1").addEventListener("input",p1);p1();

/* Tabs helper */
function tabs(id,items,show){const t=$("#"+id+"t");t.innerHTML=items.map((x,i)=>`<button aria-pressed="${i==0}" data-k="${i}">${x}</button>`).join("");
const go=i=>{[...t.children].forEach((b,j)=>b.setAttribute("aria-pressed",j==i));$("#"+id).innerHTML=show(i)};
t.addEventListener("click",e=>{if(e.target.dataset.k!=null)go(+e.target.dataset.k)});go(0)}

/* Project 2 */
const w=[["tidak","ti·dak","Two even beats, stress on “dak”; the final k is a brief glottal stop.","Informal “nggak” or “gak” in one quick beat, heard across the country.","A register choice, not an error. Check which register the task asks for."],
["sudah","su·dah","Stress on “dah”, with the h audible.","Casual “udah”, with the initial s dropped.","Very common in everyday speech. Fine unless the guideline requires formal speech."],
["pergi","per·gi","The r is pronounced; stress on “gi”.","Reduced “pegi” in fast, casual speech.","Reduction is normal speaking rhythm. Rate it for naturalness, not accuracy."],
["buka","bu·ka","Plain b onset with an even two-beat rhythm.","“mbuka”, with a nasal onset, can appear in speakers whose first language has prenasalized stops, such as Javanese.","Legitimate regional influence. Flag it only if the task names a specific target accent."]];
tabs("p2",w.map(x=>x[0]),i=>{const x=w[i];return `<h3 style="margin-top:0">${x[0]} <span class="sub">(${x[1]})</span></h3><p><b>Standard form:</b> ${x[2]}</p><p><b>Common variation:</b> ${x[3]}</p><p style="margin:0"><b>Evaluator note:</b> ${x[4]}</p>`});

/* Project 3 */
const t3=[["Saya melihat ke depan untuk bertemu dengan Anda.","Saya menantikan pertemuan kita.","A literal copy of “look forward to”. Indonesian uses “menantikan”.","“Anda” with a stiff structure sounds cold; “kita” sounds warmer."],
["Itu membuat sense.","Itu masuk akal.","“Membuat sense” is a calque of “makes sense”.","English words are common in casual speech, but in formal text they can signal machine translation."],
["Terima kasih, Anda sangat membantu saya.","Terima kasih banyak, Bu. Ibu sangat membantu saya.","Grammatical, but it repeats “Anda” where Indonesian would use a title.","With an older colleague or teacher, “Bapak/Ibu” shows respect; “Anda” can feel distant."],
["Saya akan berada di sana dalam 5 menit.","Lima menit lagi saya sampai.","“Berada di sana dalam…” follows the English structure word for word.","Everyday messages use “X menit lagi” with “sampai”; the long form reads like a manual."]];
$("#p3").innerHTML=t3.map(x=>`<details><summary>${x[0]}</summary><p class="good" style="margin-top:10px">${x[1]}</p><p><b>Why:</b> ${x[2]}</p><p style="margin:0"><b>Cultural context:</b> ${x[3]}</p></details>`).join("");

/* Project 4 */
const cr=["Grammar","Vocabulary","Clarity","Contextual relevance","Naturalness","Cultural sensitivity"];
const r4=[["Response A","Untuk mengajukan cuti, buatlah permohonan tertulis yang memuat alasan dan tanggal cuti, lalu serahkan kepada atasan Anda untuk disetujui.",[5,4,5,5,3,4],"Accurate and clear. Soften the tone with a polite opener and mention informing the team. Use “Bapak/Ibu” if the user is addressing a superior."],
["Response B","Gampang kok, bilang aja ke bos lewat chat, “Bos, aku mau cuti besok ya.” Beres!",[3,3,3,2,3,1],"The casual register does not suit a request to a superior; “bos” and “aku” are too familiar, and it skips the formal process. Rewrite in polite register and cover the written request."]];
tabs("p4",r4.map(x=>x[0]),i=>{const x=r4[i];return `<p class="good" style="font-weight:400">${x[1]}</p>`+cr.map((c,j)=>`<div class="row"><span>${c}</span><div class="bar"><i style="width:${x[2][j]*20}%"></i></div><b>${x[2][j]}</b></div>`).join("")+`<p style="margin:12px 0 0"><b>Feedback:</b> ${x[3]}</p>`});
