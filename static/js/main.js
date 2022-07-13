fetch('data/data.json').then(response => response.json()).then(data => {
    debugger;
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let div = document.createElement('div');
        let utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
        let end_time = new Date(item["end_time"]).getTime();
        let start_time = new Date(item["start_time"]).getTime();
        if (end_time < utc) continue;
        if (item["icon_src"] == "iblock") {
            div.className = "countdown-card iblock";
            div.innerHTML = item["event_name"];
        }
        else {
            if (start_time < utc) div.className = "countdown-card active";
            else div.className = "countdown-card";
            let icon = document.createElement('a');
            icon.className = "icon";
            icon.href = item["link"];
            let img = document.createElement('img')
            img.src = "icons/" + item["icon_src"] + ".webp";
            img.alt = item["icon_src"];
            icon.appendChild(img);
            div.appendChild(icon);
        }

        document.getElementById("root").appendChild(div);
    }
}
)

