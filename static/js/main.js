function countdownclock(element, timestamp) {
    var diff = timestamp - new Date().getTime();
    if (diff < 0) window.location.reload();
    var seconds = Math.floor(diff / 1000);
    var minutes = Math.floor(diff / 60000);
    var hours = Math.floor(diff / 3600000);
    var days = Math.floor(diff / 86400000);
    element.textContent = days + " days " + hours + ":" + minutes + ":" + seconds;
}

fetch('data/data.json').then(response => response.json()).then(data => {
    debugger;
    var utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let div = document.createElement('div');
        let end_time = new Date(item["end_time"]).getTime();
        let start_time = new Date(item["start_time"]).getTime();
        if (end_time < utc) continue;
        if (item["icon_src"] == "iblock") {
            div.className = "countdown-card iblock";
            div.innerHTML = item["event_name"];
        }
        else {
            let countdown = document.createElement('div');
            let subtitle = document.createElement('div');
            if (start_time < utc) {
                div.className = "countdown-card active";
                subtitle.className = "alert";
                subtitle.innerHTML = "--In Progress--";
                countdown.appendChild(subtitle);
            }
            else {
                div.className = "countdown-card";
                subtitle.className = "subtitle";
                subtitle.innerHTML = "Starts in";
                let start_time_div = document.createElement('div');
                setInterval(countdownclock(start_time_div, start_time));
                countdown.appendChild(subtitle);
                countdown.appendChild(start_time_div);  
            }
            let icon = document.createElement('a');
            icon.className = "icon";
            icon.href = item["link"];
            let img = document.createElement('img')
            img.src = "icons/" + item["icon_src"] + ".webp";
            img.alt = item["icon_src"];
            icon.appendChild(img);
            div.appendChild(icon);
            let info = document.createElement('div');
            info.className = "info";
            let title = document.createElement('div');
            title.className = "title";
            title.innerHTML = item["event_name"];
            info.appendChild(title);
            if (start_time != end_time) {
                subtitle = document.createElement('div');
                subtitle.className = "subtitle";
                subtitle.innerHTML = "Ends in";
                let end_time_div = document.createElement('div');
                setInterval(countdownclock(end_time_div, end_time));
                info.appendChild(subtitle);
                info.appendChild(end_time_div);
            }
            div.appendChild(info);
        }
        document.getElementById("root").appendChild(div);
    }
}
)

