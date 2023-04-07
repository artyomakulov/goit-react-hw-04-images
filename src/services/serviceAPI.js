function fetchImages(searchName, searchPage) {
  return fetch(
    `https://pixabay.com/api/?q=${searchName}&page=${searchPage}&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12`
  );
}

export default fetchImages;
