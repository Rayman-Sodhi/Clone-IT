const cloneListDiv = document.querySelector("#clones-list"); //gets the element where the clones will be displayed in

//Function that will display clones as html elements
export default function displayClones(clones) {
  cloneListDiv.innerHTML = "";
  clones.forEach((clone) => {
    if(!clone) return;

    //Create anchor element (<a>)
    const cloneAnchor = document.createElement("a");
    cloneAnchor.href = clone.href;
    cloneAnchor.classList.add("card");
    cloneAnchor.classList.add(clone.class); //The anchor class will be "card {clone.class}" (Ex: class="card apple")
    cloneAnchor.target = "_blank";
    cloneAnchor.rel = "noopener noreferrer";
    cloneListDiv.appendChild(cloneAnchor); //Append the new element into the clone list div
  
    //Create div of class "card-info"
    const cardInfoDiv = document.createElement("div");
    cardInfoDiv.classList.add("card-info");
    cloneAnchor.appendChild(cardInfoDiv);
  
    const cardDetailsDiv = document.createElement("div");
    cardDetailsDiv.classList.add("card-details");
    cardInfoDiv.appendChild(cardDetailsDiv);
  
    const divTitle = document.createElement("h3");
    divTitle.innerText = clone.name;
    cardDetailsDiv.appendChild(divTitle);
  
    const divDescription = document.createElement("p");
    divDescription.innerText = clone.description;
    cardDetailsDiv.appendChild(divDescription);
  });
}
