// Seleciona todos os carrosséis na página
const carousels = document.querySelectorAll('.carousel');

// Para cada carrossel, define variáveis e eventos
carousels.forEach((carousel, index) => {
  const slides = carousel.querySelectorAll('.slide');
  const circles = carousel.querySelectorAll('.circle');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    circles.forEach((circle, i) => {
      if (i === index) {
        circle.style.background = '#005594';
        circle.style.color = '#005594';
      } else {
        circle.style.background = '';
        circle.style.color = '';
      }
    });
  }

  carousel.querySelector('#prevButton').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  carousel.querySelector('#nextButton').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Mostra o slide inicial
  showSlide(currentSlide);
});

// // Função para redimensionar o site
// function ajustarLayoutParaMobile() {
//   // Obtém a largura da tela
//   var larguraTela = window.innerWidth;
  
//   // Obtém o elemento que você deseja modificar (por exemplo, o corpo do site)
//   var corpo = document.body;
  
//   // Verifica se a largura da tela é menor ou igual a 768 pixels (tamanho típico para dispositivos móveis)
//   if (larguraTela <= 768) {
//       // Ajusta o tamanho da fonte para dispositivos móveis
//       corpo.style.fontSize = '14px';
//       // Adiciona uma classe de CSS para layout móvel (supondo que você tenha estilos móveis no CSS)
//       corpo.classList.add('mobile');
//       corpo.classList.remove('desktop');
//   } else {
//       // Ajusta o tamanho da fonte para telas maiores
//       corpo.style.fontSize = '16px';
//       // Adiciona uma classe de CSS para layout de desktop (supondo que você tenha estilos de desktop no CSS)
//       corpo.classList.add('desktop');
//       corpo.classList.remove('mobile');
//   }
// }

// // Adiciona um ouvinte de eventos para redimensionamento da janela
// window.addEventListener('resize', ajustarLayoutParaMobile);

// // Chama a função ao carregar a página para garantir que o layout esteja correto
// window.addEventListener('load', ajustarLayoutParaMobile);
