function createElement(type, content, classList=[]){
    let element = document.createElement(type);
    element
}

function createTabs(){
    let navbar = document.createElement("ul");
    navbar.classList.add("nav", "nav-pills", "nav-fill");
    navbar.setAttribute("role", "tablist");

    // Add buttons
    let tabNames = ["Summary", "Projects", "Notes"];

    for (let tab in tabNames){
        let ele = document.createElement("li");
        ele.classList.add("nav-item");
        ele.setAttribute("role", "presentation");

        let btn = document.createElement("button");
        btn.classList.add("nav-link");
        btn.id = "pills-" + tabNames[tab].toLowerCase() + '-tab';
        btn.setAttribute('data-bs-toggle', 'pill');
        btn.setAttribute('data-bs-target', '#pill-' + tabNames[tab].toLowerCase());
        btn.setAttribute("type", "button");
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-controls", "pills-profile");
        if (tabNames[tab] === "Summary"){
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");
        }
        btn.appendChild(document.createTextNode(tabNames[tab]));
        ele.appendChild(btn);
        navbar.appendChild(ele);
    }
    navbar.style.position = "relative";
    navbar.style.bottom = "0px";
    return navbar;
    // Add tabs -> Add in the createCard function
}

function deleteCard(event){
    let element = document.getElementById("hoverdata");
    element.classList.add("skilltree-card--delete");
    Promise.all(
        element.getAnimations().map(
        function(animation) {
            return animation.finished
        }
    )
    ).then(
        function() {
            return element.remove();
        }
    );
}

function createCard(event){
    // Create Card
    // Remove any card if there is an old one
    document.querySelectorAll('#hoverdata').forEach(e => e.remove());
    let card = document.createElement("div");
    card.id = "hoverdata";
    card.classList.add("skilltree-card", "card", "shadow");
    // Create Body
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body")
    // Add Title
    let title = document.createElement("h5");
    title.classList.add("card-title-font");
    // Add close button
    let closeButton = document.createElement("span");
    closeButton.classList.add('d-xl-none', 'material-icons', 'close-button');
    
    closeButton.addEventListener("click", () => {
        let element = document.getElementById("hoverdata");
        element.classList.add("skilltree-card--delete");
        Promise.all(
            element.getAnimations().map(
            function(animation) {
                return animation.finished
            }
        )
        ).then(
            function() {
                return element.remove();
            }
        );
    });
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
    // Add tabs
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    cardFooter.appendChild(createTabs());

    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    card.style.left = (event.target.renderedPosition()['x'] - 130).toString() + 'px';
    card.style.top = (event.target.renderedPosition()['y'] - 170).toString() + 'px';
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