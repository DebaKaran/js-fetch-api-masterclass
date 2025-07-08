const url = "https://jsonplaceholder.typicode.com/users";

export async function getData() {
  //
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("was not a valid response");

    const data = await response.json(); //method to extract JSON string and convert it to an Object

    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
