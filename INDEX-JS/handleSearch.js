import clones from "./clones.js"; //Imports the clones Array
import displayClones from "./displayClones.js"; //Imports the function that display clones as HTML elements

const searchbarInput = document.querySelector("#searchbar"); //Get the search input element

//When the input changes
searchbarInput.addEventListener("change", function (e) {
  const { value } = e.target; //get its values

  if(!value) return;

  //UpperCase the input value
  const searchValue = value.toUpperCase();

  //Map the array of clones
  const mapClones = clones.map((clone) => {
    if (!clone) return null;

    const cloneName = clone.name.toUpperCase(); //UpperCase all the characters of the clone name

    if (cloneName.startsWith(searchValue) || cloneName.includes(searchValue)) //If the current clone name contains or starts with the value insert by the user 
      return clone; //returns it
  });

  displayClones(mapClones); //display all the clones returned by the mapClones function
});

displayClones(clones); //display all the clones by default
