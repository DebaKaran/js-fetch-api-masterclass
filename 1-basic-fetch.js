const url = "https://jsonplaceholder.typicode.com/users";

export function getData() {
  //
  fetch(url)
    .then((response) => {
      //console.log(response);
      //error checking
      //console.log(response.status);
      //200 to 299 - successful
      if (!response.ok) throw new Error("was not a valid response");

      return response.json(); //method to extract JSON string and convert it to an Object
    })
    .then((dataobj) => {
      console.log(dataobj);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
