let promise = fetch(url, [options]);

fetch("overlayer.info:6974/tags").then((response) => {
    console.log(response);
});

fetch("overlayer.info:6974/tags")
    .then((response) => response.json())
    .then((data) => console.log(data));
