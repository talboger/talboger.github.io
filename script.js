document.addEventListener('DOMContentLoaded', function () {

  // make all links open in new tab
  var links = document.links;
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    // except intra-page links
    if (href !== "#about" && href !== "#publications") {
      links[i].target = "_blank";
    }
  }

  // def description
  const typedTextDescriptionSpan = document.getElementById("typed-text-description");

  // description phrases
  const phrases = [
    "how does the mind separate content from form?",
    "how do we see style?",
    "what does it mean for something to be complex?"
  ];

  const to_italicize = [
    [[27, 33], [40, 43]], // content, form
    [[14, 18]], // style
    [[38, 44]] // complex
  ] // to do: maybe automate for word search instead of manual index

  // description speeds
  const typingDelay = 80;    // ms between each typed character
  const erasingDelay = 25;    // ms between each erased character
  const phrasePause = 2000;   // how long each fully typed phrase stays on screen before erasing

  let phraseIndex = 0;
  let charIndex = 0;

  let typedChars = [];

  setTimeout(typePhrase, 1500) // 1500ms after load, start typing

  function typePhrase() {
    const currentPhrase = phrases[phraseIndex];

    if (charIndex < currentPhrase.length) {
      let nextChar = currentPhrase.charAt(charIndex);
      if (isInAnyRange(charIndex, to_italicize[phraseIndex])) {
        typedChars.push('<span><i>' + nextChar + '</i></span>');
      } else {
        typedChars.push('<span>' + nextChar + '</span>');
      }

      typedTextDescriptionSpan.innerHTML = typedChars.join('');
      charIndex++;

      setTimeout(typePhrase, typingDelay);
    } else {
      setTimeout(erasePhrase, phrasePause);
    }
  }

  function erasePhrase() {
    const currentPhrase = phrases[phraseIndex];

    if (charIndex > 0) {
      typedChars.pop();
      typedTextDescriptionSpan.innerHTML = typedChars.join('');

      charIndex--;
      setTimeout(erasePhrase, erasingDelay);
    } else {
      phraseIndex++;
      if (phraseIndex >= phrases.length) {
        phraseIndex = 0;
      }
      setTimeout(typePhrase, typingDelay);
    }
  }

  function startDescriptionTyping() {
    typePhrase();
  }

  function isInAnyRange(index, ranges) {
    return ranges.some(([start, end]) => index >= start && index <= end);
  }
});
