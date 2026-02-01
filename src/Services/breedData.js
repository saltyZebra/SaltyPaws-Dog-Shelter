export async function fetchDogBreedsAPI() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      method: "GET",
      headers: {
        "x-api-key":
          "live_2NpJUtAQ3xue9gYSuTF2dWSqadr5ZspzuyWAK2D5Ocx8a9g9Z3BiuyQL4Zz5Pc7d",
      },
    });

    const breedsData = await response.json();
    console.log(breedsData);

    return breedsData;
  } catch (error) {
    console.log("Error: ", error);
  }
}
