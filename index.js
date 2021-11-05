function createElement(type, content, classList=[]){
    let element = document.createElement(type);
    element
}

function createCard(event){
    // Create Card
    let card = document.createElement("div");
    card.id = "hoverdata";
    card.classList.add("skilltree-card", "card", "shadow");
    // Create Body
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body")
    // Add Title
    let title = document.createElement("h6");
    title.classList.add("card-title-font");
    // Add close button
    let closeButton = document.createElement("span");
    closeButton.classList.add('d-md-none', 'material-icons', 'close-button');
    closeButton.addEventListener("click", () => {document.getElementById("hoverdata").remove()});
    closeButton.appendChild(document.createTextNode("close"));

    title.appendChild(document.createTextNode(event.target.data()['title']));
    cardBody.appendChild(closeButton);
    cardBody.appendChild(title);
    // Add description
    let description = document.createElement("p");
    description.classList.add("description-font");
    description.appendChild(document.createTextNode(event.target.data()['description']));
    cardBody.appendChild(description);
    // Add Photo
    // Add Links

    card.appendChild(cardBody);
    card.style.left = (event.target.renderedPosition()['x'] - 130).toString() + 'px';
    card.style.top = (event.target.renderedPosition()['y'] - 50).toString() + 'px';
    let c = document.getElementById("tooltip");
    c.appendChild(card);
}

function showDescription(event) {
    let element = document.createElement("p");
    element.id="hoverdata";
    element.style.position = 'absolute';
    element.style.left = event.target.renderedPosition()['x'].toString() + 'px';
    element.style.top = event.target.renderedPosition()['y'].toString() + 'px';
    element.style.zIndex = 10;
    let text = document.createTextNode(event.target.data()['description']);
    element.appendChild(text);
    let c = document.getElementById("tooltip");
    c.appendChild(element);
}