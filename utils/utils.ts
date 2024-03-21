export const shortenUrl = async (url: string) => {
  try {
    const response = await fetch(
      `https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url=${url}`,
      {
        method: "POST",
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const isValidUrl = (url: string) => {
  try {
    const newUrl = new URL(url);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (error) {
    return false;
  }
};
