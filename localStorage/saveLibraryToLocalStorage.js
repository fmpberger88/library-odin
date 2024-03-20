const saveLibraryToLocalStorage = (library) => {
  localStorage.setItem('library', JSON.stringify(library));
};

export { saveLibraryToLocalStorage };
