function cdclock(element, timestamp) {
    var diff = timestamp - new Date().getTime();
    if (diff < 0)
        window.location.reload();
    var seconds = Math.floor(diff / 1000) % 60,
        minutes = Math.floor(diff / 60000) % 60,
        hours = Math.floor(diff / 3600000) % 24,
        days = Math.floor(diff / 86400000);
    if (seconds < 10)
        seconds = "0" + seconds;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (hours < 10)
        hours = "0" + hours;
    element.textContent = days + " days " + hours + ":" + minutes + ":" + seconds;
}

function datetime(timestamp) {
    var date = new Date(timestamp),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        offset = -date.getTimezoneOffset() / 60;
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + " UTC" + (offset > 0 ? "+" : "") + offset;
}

fetch('static/data.json').then(response => response.json()).then(data => {
    var utc = new Date().getTime(),
        cdn = "https://raw.githubusercontent.com/trunghieumickey/priconne-en-event-timer/gh-pages/";
    for (let i = data.length - 1; i >= 0; i--){
        let item = data[i];
        let div = document.createElement('div');
        let end_time = new Date(item["end_time"]).getTime() - new Date().getTimezoneOffset() * 60000;
        let start_time = new Date(item["start_time"]).getTime() - new Date().getTimezoneOffset() * 60000;
        let isBlock = false;
        if (end_time < utc)
            continue;
        if (item["icon_src"] == "iblock") {
            if (isBlock) continue;
            div.className = "countdown-card iblock";
            div.innerHTML = item["event_name"];
            isBlock = true;
        } else {
            isBlock = false;
            let countdown = document.createElement('div');
            let subtitle = document.createElement('div');
            let date = document.createElement('div');
            let info = document.createElement('div');
            let title = document.createElement('div');
            if (start_time < utc) {
                div.className = "countdown-card active";
                subtitle.className = "alert";
                subtitle.innerHTML = "--In Progress--";
                countdown.appendChild(subtitle);
            } else {
                div.className = "countdown-card";
                subtitle.className = "subtitle";
                subtitle.innerHTML = "Starts in";
                let start_time_div = document.createElement('div');
                setInterval(cdclock, 1000, start_time_div, start_time);
                countdown.appendChild(subtitle);
                countdown.appendChild(start_time_div);
            }
            let img = document.createElement('img')
            let icon = document.createElement('a');
            icon.className = "icon";
            icon.href = item["link"];
            img.src = cdn + "image/" + item["icon_src"] + ".webp";
            img.alt = item["icon_src"];
            title.className = "title";
            title.innerHTML = item["event_name"];
            countdown.className = "countdown";
            info.className = "info";
            date.className = "date";
            date.appendChild(document.createTextNode("Start Date: " + datetime(start_time)));
            if (start_time != end_time) {
                subtitle = document.createElement('div');
                subtitle.className = "subtitle";
                subtitle.innerHTML = "Ends in";
                let end_time_div = document.createElement('div');
                setInterval(cdclock, 1000, end_time_div, end_time);
                countdown.appendChild(subtitle);
                countdown.appendChild(end_time_div);
                date.appendChild(document.createElement('br'));
                date.appendChild(document.createTextNode("End Date: " + datetime(end_time)));
            }
            icon.appendChild(img);
            div.appendChild(icon);
            info.appendChild(title);
            info.appendChild(countdown);
            info.appendChild(date);
            div.appendChild(info);
        }
        document.getElementById("root").insertBefore(div, document.getElementById("root").firstChild);
    }
    var href = ["got.cr/priconne-update","github.com/trunghieumickey/priconne-en-event-timer","forms.gle/67EqnZhHbjhDhabB7"],
        scr = ["crunchyroll","github","ggforms"],
        content = ["Crunchyroll Notice","Github Repository","Feedback"];
        div = document.createElement('div');
        div.className = "countdown-card";
    for (let i = 0; i < href.length; i++) {
        let a = document.createElement('a');
        a.href = "https://" + href[i];
        a.className = "button";
        let img = document.createElement('img');
        img.src = cdn + "icon/" + scr[i] + ".webp";
        img.alt = img.className = "favicon";
        a.appendChild(img);
        a.appendChild(document.createTextNode(content[i]));
        div.appendChild(a);
    }
    document.getElementById("root").appendChild(div);
})