function cdclock(e,t){var n=t-(new Date).getTime();n<0&&window.location.reload();var a=Math.floor(n/1e3)%60,c=Math.floor(n/6e4)%60,d=Math.floor(n/36e5)%24,i=Math.floor(n/864e5);a<10&&(a="0"+a),c<10&&(c="0"+c),d<10&&(d="0"+d),e.textContent=i+" days "+d+":"+c+":"+a}function datetime(e){var t=new Date(e),n=t.getDate(),a=t.getMonth()+1,c=t.getFullYear(),d=t.getHours(),i=t.getMinutes(),o=t.getSeconds(),l=-t.getTimezoneOffset()/60;return d<10&&(d="0"+d),i<10&&(i="0"+i),o<10&&(o="0"+o),n<10&&(n="0"+n),a<10&&(a="0"+a),c+"-"+a+"-"+n+" "+d+":"+i+":"+o+" UTC"+(l>0?"+":"")+l}fetch("static/data.json").then(e=>e.json()).then(e=>{var t=(new Date).getTime(),n="https://raw.githubusercontent.com/trunghieumickey/priconne-en-event-timer/gh-pages/";for(let a=e.length-1;a>=0;a--){let c=e[a],d=document.createElement("div"),i=new Date(c.end_time).getTime()-6e4*(new Date).getTimezoneOffset(),o=new Date(c.start_time).getTime()-6e4*(new Date).getTimezoneOffset(),l=!1;if(!(i<t)){if("iblock"==c.icon_src){if(l)continue;d.className="countdown-card iblock",d.innerHTML=c.event_name,l=!0}else{l=!1;let e=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),m=document.createElement("div"),s=document.createElement("div");if(o<t)d.className="countdown-card active",a.className="alert",a.innerHTML="--In Progress--",e.appendChild(a);else{d.className="countdown-card",a.className="subtitle",a.innerHTML="Starts in";let t=document.createElement("div");setInterval(cdclock,1e3,t,o),e.appendChild(a),e.appendChild(t)}let u=document.createElement("img"),p=document.createElement("a");if(p.className="icon",p.href=c.link,u.src=n+"image/"+c.icon_src+".webp",u.alt=c.icon_src,s.className="title",s.innerHTML=c.event_name,e.className="countdown",m.className="info",r.className="date",r.appendChild(document.createTextNode("Start Date: "+datetime(o))),o!=i){a=document.createElement("div"),a.className="subtitle",a.innerHTML="Ends in";let t=document.createElement("div");setInterval(cdclock,1e3,t,i),e.appendChild(a),e.appendChild(t),r.appendChild(document.createElement("br")),r.appendChild(document.createTextNode("End Date: "+datetime(i)))}p.appendChild(u),d.appendChild(p),m.appendChild(s),m.appendChild(e),m.appendChild(r),d.appendChild(m)}document.getElementById("root").insertBefore(d,document.getElementById("root").firstChild)}}var a=["got.cr/priconne-update","github.com/trunghieumickey/priconne-en-event-timer","forms.gle/67EqnZhHbjhDhabB7"],c=["crunchyroll","github","ggforms"],d=["Crunchyroll Notice","Github Repository","Feedback"];div=document.createElement("div"),div.className="countdown-card";for(let e=0;e<a.length;e++){let t=document.createElement("a");t.href="https://"+a[e],t.className="button";let i=document.createElement("img");i.src=n+"icon/"+c[e]+".webp",i.alt=i.className="favicon",t.appendChild(i),t.appendChild(document.createTextNode(d[e])),div.appendChild(t)}document.getElementById("root").appendChild(div)});