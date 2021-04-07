fetch("https://api.nasa.gov/planetary/apod?api_key=w0CZlKa6mr6JzbFFNctRMJtHpc3izBBf05auBMmf")
.then(response => response.json())
.then(planetary =>{
    document.getElementById('title').innerText=planetary.title;
    document.getElementById('date').innerText=planetary.date;
    document.getElementById('explanation').innerText=planetary.explanation;
    document.getElementById('url').src=planetary.url;
})
.catch(error => console.log(error));