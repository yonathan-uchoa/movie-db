const getMovieDetails = {
    success: {
      data: {
        adult: false,
        backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        belongs_to_collection: {
        id: 531241,
        name: "Spider-Man (Avengers) Collection",
        poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",
        backdrop_path: "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg"
        },
        budget: 200000000,
        genres: [
        {
            id: 28,
            name: "Action"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 878,
            name: "Science Fiction"
        }
        ],
        homepage: "https://www.spidermannowayhome.movie",
        id: 634649,
        imdb_id: "tt10872600",
        original_language: "en",
        original_title: "Spider-Man: No Way Home",
        overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        popularity: 263.814,
        poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        production_companies: [
        {
            id: 420,
            logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
            name: "Marvel Studios",
            origin_country: "US"
        },
        {
            id: 84041,
            logo_path: "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
            name: "Pascal Pictures",
            origin_country: "US"
        },
        {
            id: 5,
            logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
            name: "Columbia Pictures",
            origin_country: "US"
        }
        ],
        production_countries: [
        {
            iso_3166_1: "US",
            name: "United States of America"
        }
        ],
        release_date: "2021-12-15",
        revenue: 1921847111,
        runtime: 148,
        spoken_languages: [
        {
            english_name: "English",
            iso_639_1: "en",
            name: "English"
        },
        {
            english_name: "Tagalog",
            iso_639_1: "tl",
            name: ""
        }
        ],
        status: "Released",
        tagline: "The Multiverse unleashed.",
        title: "Spider-Man: No Way Home",
        video: false,
        vote_average: 8.006,
        vote_count: 17373
      },
      status: 200
    },
    failed: {
      data: {
        success: false,
        status_code: 34,
        status_message: "The resource you requested could not be found."
      },
      status: 404
    }
}

const searchMovieByName = {
  success: {
    data: {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
          genre_ids: [
            28,
            12,
            878
          ],
          id: 634649,
          original_language: "en",
          original_title: "Spider-Man: No Way Home",
          overview: "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha...",
          popularity: 263.814,
          poster_path: "/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
          release_date: "2021-12-15",
          title: "Homem-Aranha: Sem Volta Para Casa",
          video: false,
          vote_average: 8,
          vote_count: 17373
        },
        {
          adult: false,
          backdrop_path: "/9xfDWXAUbFXQK585JvByT5pEAhe.jpg",
          genre_ids: [
            16,
            28,
            12,
            878
          ],
          id: 569094,
          original_language: "en",
          original_title: "Spider-Man: Across the Spider-Verse",
          overview: "Miles Morales retorna para o próximo capítulo da saga do Aranhaverso, uma aventura épica que transportará o Homem-Aranha em tempo integral e amigável do bairro do Brooklyn através do Multiverso para unir forças com Gwen Stacy e uma nova equipe de Homens-Aranha para enfrentar com um vilão mais poderoso do que qualquer coisa que eles já encontraram.",
          popularity: 199.648,
          poster_path: "/6a7NItazspSV8Fl7u46ccxwPKk4.jpg",
          release_date: "2023-05-31",
          title: "Homem-Aranha: Através do Aranhaverso",
          video: false,
          vote_average: 0,
          vote_count: 0
        },
        {
          adult: false,
          backdrop_path: "/jHxCeXnSchAuwHnmVatTgqMYdX8.jpg",
          genre_ids: [
            14,
            28
          ],
          id: 557,
          original_language: "en",
          original_title: "Spider-Man",
          overview: "Peter Parker é um jovem estudioso que vive com seus tios, Ben e May, desde que seus pais faleceram. Peter tem dificuldade em se relacionar com seus colegas, por ser tímido e por eles o considerarem um nerd. Até que, em uma demonstração científica, um acidente inesperado faz com que uma aranha modificada geneticamente pique Peter. A partir de então seu corpo é quimicamente alterado pela picada da aranha.",
          popularity: 74.291,
          poster_path: "/2WIwz0qJpnVAiofTAhrmhbKxuvE.jpg",
          release_date: "2002-05-01",
          title: "Homem-Aranha",
          video: false,
          vote_average: 7.267,
          vote_count: 17109
        },
        {
          adult: false,
          backdrop_path: "/2IqArZ6nrmDChGEbGOfp7bBgLyg.jpg",
          genre_ids: [
            28,
            12,
            14
          ],
          id: 1930,
          original_language: "en",
          original_title: "The Amazing Spider-Man",
          overview: "Peter Parker está tentando saber mais sobre sua origem. Ele encontra uma pasta que pertenceu ao seu pai e quer descobrir por que seus pais desapareceram. Sua busca o leva a Oscorp e ao dr. Curt Connors, que tem como alterego o letal Lagarto.",
          popularity: 81.491,
          poster_path: "/dODKvv9o9BOemWavnulutJBHM80.jpg",
          release_date: "2012-06-23",
          title: "O Espetacular Homem-Aranha",
          video: false,
          vote_average: 6.685,
          vote_count: 15975
        },
        {
          adult: false,
          backdrop_path: "/qGQf2OHIkoh89K8XeKQzhxczf96.jpg",
          genre_ids: [
            28,
            12,
            16,
            878
          ],
          id: 324857,
          original_language: "en",
          original_title: "Spider-Man: Into the Spider-Verse",
          overview: "Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói aracnídeo sob um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras variações do Homem-Aranha.",
          popularity: 138.463,
          poster_path: "/ybQSBSrINtjWsJQ6Ih8sva8HlEZ.jpg",
          release_date: "2018-12-14",
          title: "Homem-Aranha: No Aranhaverso",
          video: false,
          vote_average: 8.407,
          vote_count: 12735
        },
        {
          adult: false,
          backdrop_path: "/w1oD1MzHjnBJc5snKupIQaSBLIh.jpg",
          genre_ids: [
            14,
            28,
            12
          ],
          id: 559,
          original_language: "en",
          original_title: "Spider-Man 3",
          overview: "O relacionamento entre Peter Parker e Mary Jane parece estar dando certo, mas outros problemas começam a surgir. A roupa de Homem-Aranha torna-se preta e acaba controlando Peter, que apesar de aumentar seus poderes, revela o lado obscuro de sua personalidade. Os vilões Venon e Homem-Areia tentam destruir o super-herói.",
          popularity: 56.812,
          poster_path: "/63O5iixxXSmyOaBas7ek1tkeVra.jpg",
          release_date: "2007-05-01",
          title: "Homem-Aranha 3",
          video: false,
          vote_average: 6.386,
          vote_count: 12691
        },
        {
          adult: false,
          backdrop_path: "/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
          genre_ids: [
            28,
            12,
            878,
            18
          ],
          id: 315635,
          original_language: "en",
          original_title: "Spider-Man: Homecoming",
          overview: "Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.",
          popularity: 81.822,
          poster_path: "/9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg",
          release_date: "2017-07-05",
          title: "Homem-Aranha: De Volta ao Lar",
          video: false,
          vote_average: 7.349,
          vote_count: 19990
        },
        {
          adult: false,
          backdrop_path: "/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
          genre_ids: [
            28,
            12,
            878
          ],
          id: 429617,
          original_language: "en",
          original_title: "Spider-Man: Far From Home",
          overview: "Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar vários vilões que surgem em cidades-símbolo do continente, como Londres, Paris e Veneza, e também a aparição do enigmático Mysterio.",
          popularity: 62.378,
          poster_path: "/tX0o4AdHpidgniTWwfzK0dNTKrc.jpg",
          release_date: "2019-06-28",
          title: "Homem-Aranha: Longe de Casa",
          video: false,
          vote_average: 7.458,
          vote_count: 14008
        },
        {
          adult: false,
          backdrop_path: "/k0hlAzTryCYX1O1LyC6P8tAa8s0.jpg",
          genre_ids: [
            28,
            12,
            14
          ],
          id: 102382,
          original_language: "en",
          original_title: "The Amazing Spider-Man 2",
          overview: "O jovem Peter Parker está fascinado com as habilidades que adquiriu como Homem-Aranha. Agora, ele precisa lidar com dois problemas: o retorno de um velho amigo, Harry Osborn, e a chegada de um vilão mais forte e poderoso, Electro.",
          popularity: 81.625,
          poster_path: "/qJifnqFgtflsPZ46OGvX3kFsq8h.jpg",
          release_date: "2014-04-16",
          title: "O Espetacular Homem-Aranha 2: A Ameaça de Electro",
          video: false,
          vote_average: 6.488,
          vote_count: 11984
        },
        {
          adult: false,
          backdrop_path: "/8G6HCS82vNxgg5wp7oBDSk32XpF.jpg",
          genre_ids: [
            28,
            12,
            14
          ],
          id: 558,
          original_language: "en",
          original_title: "Spider-Man 2",
          overview: "Dois anos se passaram desde que o tranquilo Peter Parker (Tobey Maguire) separou-se do grande amor de sua vida, Mary Jane Watson (Kirsten Dunst), e decidiu assumir o compromisso e a responsabilidade de seguir sendo o Homem-Aranha. Peter enfrenta novos desafios enquanto aprende a lidar com \"seu dom e sua maldição\", tentando desesperadamente harmonizar suas duas identidades: A do super-herói aracnídeo, o Homem-Aranha, e a do estudante universitário.",
          popularity: 25.73,
          poster_path: "/y06FivvCfqapHB3iETOtbAqWdkD.jpg",
          release_date: "2004-06-25",
          title: "Homem-Aranha 2",
          video: false,
          vote_average: 7.243,
          vote_count: 13682
        },
        {
          adult: false,
          backdrop_path: "/zlpZzccypkAYFZIyYLQcchl90ZC.jpg",
          genre_ids: [
            878,
            28,
            80,
            10770
          ],
          id: 225914,
          original_language: "en",
          original_title: "Spider-Man",
          overview: "Peter Parker é um jovem comum como qualquer outro, mas quando uma Aranha Radioativa o pica, ele ganha Super Poderes! Seu primeiro inimigo é um Homem que Hipnotiza as pessoas para cometerem suicídio, e apenas o Homem Aranha pode detê-lo.",
          popularity: 13.586,
          poster_path: "/i7zbPQeZgXWQxHBadXDQ53GtVX9.jpg",
          release_date: "1978-03-15",
          title: "Homem-Aranha",
          video: false,
          vote_average: 5.909,
          vote_count: 115
        },
        {
          adult: false,
          backdrop_path: "/tObVe1R7JnO3VXBvAOWTEPmmegu.jpg",
          genre_ids: [
            99
          ],
          id: 961651,
          original_language: "en",
          original_title: "Spider-Man: All Roads Lead to No Way Home",
          overview: "Da trilogia original de Sam Raimi,  pelos “incríveis” filmes de Marc Webb e chegando à recente trilogia do diretor Jon Watts, levaremos os espectadores em uma viagem junto aos astros, dublês e ação, entre vilões e heróis, e veremos uma homenagem a Stan Lee, além de algumas surpresas.",
          popularity: 35.121,
          poster_path: "/dNS4w5U6zaezZIxz4AP0FTzWX8f.jpg",
          release_date: "2022-05-03",
          title: "Homem-Aranha: Todos os Caminhos Levam a 'Sem Volta para Casa'",
          video: false,
          vote_average: 7,
          vote_count: 36
        },
        {
          adult: false,
          backdrop_path: "/dVVkg3F88xCQPyYp66lFmMhbBzn.jpg",
          genre_ids: [
            16,
            12,
            28
          ],
          id: 270768,
          original_language: "en",
          original_title: "Daredevil vs. Spider-Man",
          overview: "Um enigma para o Homem Aranha: qual é a verdadeira identidade de Matt Murdock? De dia, o advogado Murdock o defende como Peter Parker, mas à noite ele briga com qualquer um que o impeça de realizar sua vingança. Seria ele o Homem sem Medo?",
          popularity: 10.387,
          poster_path: "/pxzkdU0aylSU8W8o4vSXiC0mbtE.jpg",
          release_date: "1994-11-19",
          title: "Demolidor vs. Homem Aranha",
          video: true,
          vote_average: 7.4,
          vote_count: 106
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [
            16,
            28,
            12,
            878
          ],
          id: 911916,
          original_language: "en",
          original_title: "Spider-Man: Beyond the Spider-Verse",
          overview: "The further continuing story of Miles Morales and the many other Spider-People from different realities.",
          popularity: 17.392,
          poster_path: "/5cAuJOfd5tuuFBz2yQmBCtVBaj0.jpg",
          release_date: "2024-03-27",
          title: "Homem-Aranha: Através do Aranhaverso – Parte 2",
          video: false,
          vote_average: 0,
          vote_count: 0
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [],
          id: 1113696,
          original_language: "pt",
          original_title: "Homem-Aranha: Panóptico",
          overview: "O Homem-Aranha se encontra em um estado deprimido, sem a força de vontade necessária para continuar. Ele deverá decidir entre permanecer prejudicando a si próprio para ajudar os outros ou acabar com tudo.",
          popularity: 0.6,
          poster_path: "/aJHoBTaXvTG1eNEuxQMUL7OF0RE.jpg",
          release_date: "2022-05-20",
          title: "Homem-Aranha: Panóptico",
          video: false,
          vote_average: 9,
          vote_count: 1
        },
        {
          adult: false,
          backdrop_path: "/11k8XFJSGg7D1pFNnsHy80BvVww.jpg",
          genre_ids: [
            35
          ],
          id: 836946,
          original_language: "it",
          original_title: "Mi piace Spiderman... e allora?",
          overview: "Cloe é uma menina de seis anos com uma grande paixão: o Homem-Aranha! E no primeiro dia de aula ela só poderia escolher a pasta de seu personagem favorito. Mas por que quando ela mostrar sua nova mochila, faça",
          popularity: 0.6,
          poster_path: "/5VSIPdp6o8a7hjQF4Iw43G29u1H.jpg",
          release_date: "2021-06-04",
          title: "Eu gosto do Homem-Aranha ... e daí?",
          video: false,
          vote_average: 5,
          vote_count: 1
        }
      ],
      total_pages: 1,
      total_results: 16
    },
    status: 200
  }
}

export { getMovieDetails, searchMovieByName };
