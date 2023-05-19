let fetchedData;

function fetchData() {
    const url = "http://roll.austinmorales.dev:9001/random";
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

function generateStats() {
    const statElements = [
        { id: "HP", key: "HP" },
        { id: "DEX", key: "DEX" },
        { id: "STR", key: "STR" },
        { id: "INT", key: "INT" },
        { id: "CHA", key: "CHA" },
        { id: "WIS", key: "WIS" },
        { id: "CON", key: "CON" },
    ];
    fetchData()
        .then(fetchedData => {
            statElements.forEach(element => {
                document.getElementById(element.id).innerHTML = element.id +"<br/>"+fetchedData.Stats[element.key];
            });
            document.getElementById("full_name").innerHTML = "Name: "+fetchedData.Name.firstName +" "+ fetchedData.Name.lastName;
        })
        .catch(error => console.error(error));
    
}

window.onload = generateStats();


