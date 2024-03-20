const loadLibraryFromLocalStorage = () => {
  const storedLibrary = localStorage.getItem('library');
  if (storedLibrary !== null) {
    return JSON.parse(storedLibrary);
  }
  return []; // Gibt ein leeres Array zurück, wenn 'library' nicht im localStorage gefunden wird
};

export { loadLibraryFromLocalStorage };
