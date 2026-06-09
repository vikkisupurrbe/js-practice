let photos = [];

async function fetchPhotos() {
  const url = "https://picsum.photos/v2/list";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function renderPhotos() {
  const container = document.getElementById("photos-container");
  photos = await fetchPhotos();
  console.log(photos);
  container.innerHTML = "";
  photos.forEach(({download_url}) => {
    const photo = document.createElement("div");
    photo.innerHTML = `<img src="${download_url}">`;
    container.appendChild(photo);
  });
}

renderPhotos();