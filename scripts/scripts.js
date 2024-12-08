document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'c') {
      event.preventDefault();
      alert('Copying is disabled on this website.');
    }
  });