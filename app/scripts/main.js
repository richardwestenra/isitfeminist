(function(){
  const container = document.getElementById('container'),
    question = container.querySelector('#question'),
    response = container.querySelector('#response');

  function formatQuestion(d) {
    const verb = d[1] ? 'Are' : 'Is',
      noun = d[0];

    return `${verb} ${noun} feminist?`;
  }

  function getRandom(arr){
    return arr[ Math.floor(Math.random() * arr.length) ];
  }

  function toggleSections(showQuestion){
    question.classList.toggle('hidden', showQuestion);
    question.setAttribute('aria-hidden', showQuestion.toString());
    response.classList.toggle('hidden', !showQuestion);
    response.setAttribute('aria-hidden', (!showQuestion).toString());
  }

  function updateQuestion(){
    question.querySelector('h1').innerHTML = formatQuestion(getRandom(nouns));
  }

  function updateResponse(){
    response.querySelector('h1').innerHTML = getRandom(responses);
  }

  updateQuestion();

  question.addEventListener('click', function() {
    if (event.target.localName === 'button') {
      updateResponse();
      toggleSections(true);
    }
  });

  response.addEventListener('click', function() {
    if (event.target.localName === 'button') {
      updateQuestion();
      toggleSections(false);
    }
  });

})();
