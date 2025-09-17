async function loadConfig() {
  //await makes it so the data is called first, once returned we can read the functions imported, so we set them to the await.
  const { setLightTheme, setDarkTheme } = await import("./theme.js");

  //return the hour of the day by the 24 hour timer
  const hour = new Date().getHours();

  //set the functions to what you want to run before and after 6 pm (18 hour)
  if (hour < 18) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

loadConfig();
