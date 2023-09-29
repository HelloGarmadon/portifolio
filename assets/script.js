const euArea = document.querySelector(".eu");
const descriçãoGeral = document.querySelector(".desc");
const contentDiv = document.querySelector(".content");

euArea.addEventListener("click", function () {
  contentDiv.innerHTML = `  <div class="eu-area">
            <h1>Alexandre Banzato Dorneles</h1>
            <h2>front-end developer</h2>
            <p>
              Sou Alexandre, um programador frontend apaixonado por desafios.
              Com expertise em JavaScript, React, HTML, CSS e Node.js, estou em
              busca de novas experiências para impulsionar minha evolução no
              mundo da programação. Vamos construir juntos o futuro da web!
            </p>
            <div class="social-medias">
              <button class="bi bi-linkedin"><a href=""></a></button>
              <button class="bi bi-github"><a href=""></a></button>
              <button class="bi bi-envelope-at"><a href=""></a></button>
            </div>
          </div>`;
});

descriçãoGeral.addEventListener("click", function () {
  contentDiv.innerHTML = `<div class="historia">
            <p>
              Meu nome é Alexandre Banzato Dorneles, e minha jornada na
              tecnologia começou em um ambiente rural, onde tive que aprender
              tudo por conta própria. Desde a infância, eu estava determinado a
              buscar soluções, tinha fome de conhecimento e uma paixão por
              computadores, especialmente por jogos. Mesmo com recursos
              limitados, minha paixão pelos jogos e pelos computadores me levou
              a explorar e aprender constantemente. Desenvolvi uma das minhas
              maiores habilidades: a capacidade de buscar conhecimento
              incansavelmente. Essa habilidade me impulsionou a escolher a
              programação como minha carreira, pois percebi que a programação é,
              em grande parte, sobre a busca por soluções. É aqui que minhas
              habilidades se tornam especialmente valiosas, já que minha
              capacidade de buscar conhecimento incansavelmente se encaixa
              perfeitamente com as demandas desse campo, onde encontrar soluções
              criativas é fundamental.
            </p>
          </div>`;
});
