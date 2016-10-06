(function(){
  const question = document.getElementById('question');

  console.log(nouns);

  function formatQuestion(d) {
    const verb = d[1] ? 'Are' : 'Is',
      noun = d[0];

    return`${verb} ${noun} feminist?`
  }

  function getRandomNoun(){
    return nouns[ Math.floor(Math.random() * nouns.length) ];
  }

  function updateQuestion(){
    question.innerHTML = formatQuestion(getRandomNoun());
  }

  window.setInterval(updateQuestion, 1000);

})();
