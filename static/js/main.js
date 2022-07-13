fetch('data/data.json').then(response=>response.json()).then(data=>{
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let li = document.createElement('li');
        li.innerHTML = `${item.event_name}`;
        document.getElementById('root').appendChild(li);
    }
}
)
