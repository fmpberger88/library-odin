const saveLibraryToLocalStorage = () => {
  localStorage.setItem('library', JSON.stringify(library));
};

export { saveLibraryToLocalStorage };
