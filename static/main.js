function cdclock(e,t){let n=t-(new Date).getTime();n<0&&window.location.reload();let a=Math.floor(n/1e3)%60,c=Math.floor(n/6e4)%60,d=Math.floor(n/36e5)%24,i=Math.floor(n/864e5);a<10&&(a="0"+a),c<10&&(c="0"+c),d<10&&(d="0"+d),e.textContent=i+" days "+d+":"+c+":"+a}function datetime(e){let t=new Date(e),n=t.getDate(),a=t.getMonth()+1,c=t.getFullYear(),d=t.getHours(),i=t.getMinutes(),o=t.getSeconds(),l=-t.getTimezoneOffset()/60;return isnight=!0,d<12&&(isnight=!1),d=d%12||12,d<10&&(d="0"+d),i<10&&(i="0"+i),o<10&&(o="0"+o),n<10&&(n="0"+n),c+" "+sMonthName[a-1]+" "+n+" "+d+":"+i+":"+o+" "+(isnight?"PM":"AM")+" UTC"+(l>0?"+":"")+l}const sMonthName=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];fetch("static/data.json").then(e=>e.json()).then(e=>{let t=(new Date).getTime(),n=document.createElement("div"),a=document.createElement("div"),c=!0,d=!0,i="https://",o=i+"raw.githubusercontent.com/trunghieumickey/priconne-en-event-timer/gh-pages/image/",l=i+"www.crunchyroll.com/anime-news/20",m=["got.cr/priconne-update","github.com/trunghieumickey/priconne-en-event-timer","forms.gle/67EqnZhHbjhDhabB7"],r=["crunchyroll","github","ggforms"],s=["Crunchyroll Notice","Github Repository","Feedback"];for(let a=e.length-1;a>=0;a--){let i=e[a],m=document.createElement("div"),r=new Date(i.end_time).getTime()-6e4*(new Date).getTimezoneOffset(),s=new Date(i.start_time).getTime()-6e4*(new Date).getTimezoneOffset();if(!(r<t)){if("iblock"==i.icon_src){if(c)continue;m.className="countdown-card iblock",m.innerHTML=i.event_name,c=!0,d=!1}else{c=!1;let e=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div");if(s<t)m.className="countdown-card active",n.className="alert",n.innerHTML="--In Progress--",e.appendChild(n);else{m.className="countdown-card",n.className="subtitle",n.innerHTML="Starts in";let t=document.createElement("div");setInterval(cdclock,1e3,t,s),e.appendChild(n),e.appendChild(t)}let p=document.createElement("img"),g=document.createElement("a");if(g.className="icon",g.href=l+i.link,p.src=d?o+"double/"+i.icon_src+".webp":o+i.icon_src+".webp",p.alt=i.icon_src,h.className="title",h.innerHTML=i.event_name,e.className="countdown",u.className="info",a.className="date",a.appendChild(document.createTextNode("Start Date: "+datetime(s))),s!=r){n=document.createElement("div"),n.className="subtitle",n.innerHTML="Ends in";let t=document.createElement("div");setInterval(cdclock,1e3,t,r),e.appendChild(n),e.appendChild(t),a.appendChild(document.createElement("br")),a.appendChild(document.createTextNode("End Date: "+datetime(r)))}g.appendChild(p),m.appendChild(g),u.appendChild(h),u.appendChild(e),u.appendChild(a),m.appendChild(u)}n.insertBefore(m,n.firstChild),c&&(n.className="sub",document.getElementById("root").insertBefore(n,document.getElementById("root").firstChild),n=document.createElement("div"))}}a.className="countdown-card";for(let e=0;e<m.length;e++){let t=document.createElement("a");t.href=i+m[e],t.className="button";let n=document.createElement("img");n.src=o+"etc/"+r[e]+".webp",n.alt=n.className="favicon",t.appendChild(n),t.appendChild(document.createTextNode(s[e])),a.appendChild(t)}n.className="card-container",n.append(a),document.getElementById("body").appendChild(n)});