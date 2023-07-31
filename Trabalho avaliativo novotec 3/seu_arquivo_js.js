const quotes = [
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author: "John Lennon"
    },
    {
      quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      author: "Henry Ford"
    },

   {
    quote: "A beleza de uma flor reside em sua singularidade, assim como a beleza de cada alma reside em sua própria jornada.",
    author: "Unknown" 
  },

      
{ 
  quote: "O que você faz hoje pode melhorar todos os seus amanhãs.",
  author: "Ralph Marston"
},


{
  quote: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
   author: "Winston Churchill"
},

{
  quote: "A imaginação é mais importante que o conhecimento. O conhecimento é limitado. A imaginação circunda o mundo.",
   author: "Albert Einstein",
},

{
  quote: "Se você quer prever o futuro, estude o passado.", 
   author: "Confúcio"
},

{
  quote: "Nunca diga nunca.",
  author: "The Undertaker"
},






    // Adicione mais citações à lista
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  }
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();