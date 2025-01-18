import "./contact-styles.css";

function createForm(){
    const form = document.createElement("form");
    form.method = "post";

    const nameLabel = document.createElement("label");
    nameLabel.innerText = "Name:";
    nameLabel.htmlFor = "name";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter your name";
    nameInput.name = "name";
    nameInput.id = "name";

    const emailLabel = document.createElement("label");
    emailLabel.innerText = "Email:";
    emailLabel.htmlFor = "email";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Enter your email";
    emailInput.name = "email";
    emailInput.id = "email";

    const messageLabel = document.createElement("label");
    messageLabel.innerText = "Message:";
    messageLabel.htmlFor = "message";

    const messageInput = document.createElement("textarea");
    messageInput.placeholder = "Enter a message";
    messageInput.name = "message";
    messageInput.id = "message";

    const submitButton = document.createElement("input");
    submitButton.type = "submit";

    submitButton.addEventListener("click",(e)=> {
        e.preventDefault();
    })


    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    form.appendChild(submitButton);

    return form;
}

export function renderContent(){
    const content = document.getElementById("content");

    const div = document.createElement("div");
    div.classList.add("contact");

    const title = document.createElement("h3");
    title.innerText = "Get in touch with us";
    
    const form = createForm();

    div.appendChild(title);
    div.appendChild(form);

    content.appendChild(div);

    const div2 = document.createElement("div");
    div2.classList.add("contact");
    div2.innerText = "Or email us at: ";

    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    li1.innerText = "zeff@redleg.sea"
    li2.innerText = "sanji@blackleg.sea"

    ul.appendChild(li1);
    ul.appendChild(li2);

    div2.appendChild(ul);

    const address = document.createElement("p");
    address.innerText = "Address: \n Sambas Region, East Blue";
    div2.appendChild(address);
    
    content.appendChild(div2);

}