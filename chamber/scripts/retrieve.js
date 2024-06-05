const memberData = "https://beduman.github.io/wdd230/chamber/data/members.json";

async function getData() {
try {
  const response = await fetch(memberData);  
  const data = await response.json();
  displayMembers(data);
  console.log(data)
    }
    catch (error) {
        console.error("Error:", error);
    }
}

getData()


    const displayMembers = (members) => {
        const cards = document.querySelector("#displayMembers");
    
        members.forEach((member) => {
        const name = document.createElement("h3");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;
        
        const image = document.createElement("img")
        image.src = member.img;
        image.alt = member.name;
        image.loading = "lazy";

        const url = document.createElement("p");
        url.innerHTML = `<a href="${member.url}" target="_blank">${member.url}</a>`;

        const description = document.createElement("p");
        description.textContent = member.description;

        const membership = document.createElement("p");
        membership.textContent = membership.membership;

        cards.appendChild(name);
        cards.appendChild(address);
        cards.appendChild(phone);
        cards.appendChild(image);
        cards.appendChild(url);
        cards.appendChild(description);
        cards.appendChild(membership);
        });
    }


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {

	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
