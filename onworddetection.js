$(document).ready(function(){
    window.addEventListener('message', (event) => {
      if (event.data.type === 'screenshotcheck') {
        Tesseract.recognize(
          event.data.screenshoturl,
          'eng',
        ).then(({ data: { text } }) => {
            $.post('http://noshield/check', JSON.stringify({text}));
        });
      }
    });
});