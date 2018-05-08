let questions = [

  {
    "type": "genre",
    "question": "Выберите все блюзовые песни",
    "genre": "blues",
    "answers": [
      {
        "src": "https://freemusicarchive.org/music/listen/3cead8d6db112d2a022c4e4261a9062386ad0c84",
        "genre": "country"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/b0e7a2570077abf842760427b281d02e9c30b073",
        "genre": "folk"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/c09c322dc19ce2e457c9d53d7611ba3d11ae7133",
        "genre": "blues"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/717f0302dc7904b7dbf0c4e74e7c683b6494a95b",
        "genre": "hip-hop"
      }
    ]
  },
  {
    "type": "genre",
    "question": "Выберите все электро песни",
    "genre": "electronic",
    "answers": [
      {
        "src": "https://freemusicarchive.org/music/listen/717f0302dc7904b7dbf0c4e74e7c683b6494a95b",
        "genre": "hip-hop"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/16f90f08850e40aed5927f307778b6e18af7f555",
        "genre": "electronic"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/3492356b36126494937ac2e01a27b6571f96b85e",
        "genre": "folk"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/236e0fac7f0a762cb0f46408b64d6aad5fe07c94",
        "genre": "folk"
      }
    ]
  },

  {
    "type": "genre",
    "question": "Выберите все блюзовые песни",
    "genre": "blues",
    "answers": [
      {
        "src": "https://freemusicarchive.org/music/listen/16f90f08850e40aed5927f307778b6e18af7f555",
        "genre": "electronic"
      },
      {
        "src": "",
        "genre": "pop"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/c09c322dc19ce2e457c9d53d7611ba3d11ae7133",
        "genre": "blues"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/449968c4a10dff03a5cdcb535d3a90f30a9cfaaf",
        "genre": "jazz"
      }
    ]
  },
  {
    "type": "genre",
    "question": "Выберите все хип-хоп песни",
    "genre": "hip-hop",
    "answers": [
      {
        "src": "https://freemusicarchive.org/music/listen/449968c4a10dff03a5cdcb535d3a90f30a9cfaaf",
        "genre": "jazz"
      },
      {
        "src": "",
        "genre": "pop"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/717f0302dc7904b7dbf0c4e74e7c683b6494a95b",
        "genre": "hip-hop"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/3492356b36126494937ac2e01a27b6571f96b85e",
        "genre": "folk"
      }
    ]
  },
  {
    "type": "artist",
    "question": "Кто исполняет эту песню?",
    "src": "https://freemusicarchive.org/music/listen/3cead8d6db112d2a022c4e4261a9062386ad0c84",
    "answers": [
      {
        "image": {
          "url": "https://freemusicarchive.org/file/images/artists/Gillicuddy_-_20150103121851574.jpg?width=300&height=300",
          "width": 300,
          "height": 300
        },
        "title": "Gillicuddy",
        "isCorrect": false
      },
      {
        "image": {
          "url": "https://freemusicarchive.org/file/images/artists/Jason_Shaw_-_20131120155444083.jpg?width=300&height=300",
          "width": 300,
          "height": 300
        },
        "title": "Jason Shaw",
        "isCorrect": true
      },
      {
        "image": {
          "url": "https://freemusicarchive.org/file/images/artists/Tours_-_20120822132441990.png?width=300&height=300",
          "width": 300,
          "height": 300
        },
        "title": "Tours",
        "isCorrect": false
      }
    ]
  },
  {
    "type": "genre",
    "question": "Выберите все хип-хоп песни",
    "genre": "hip-hop",
    "answers": [
      {
        "src": "https://freemusicarchive.org/music/listen/051a4dd3d9411dcf76347c3dd9ec01b3668cc465",
        "genre": "hip-hop"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/b0e7a2570077abf842760427b281d02e9c30b073",
        "genre": "folk"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/e51855bf2bdb1c306a5c8813a792a0b17e6cd504",
        "genre": "rock"
      },
      {
        "src": "https://freemusicarchive.org/music/listen/c09c322dc19ce2e457c9d53d7611ba3d11ae7133",
        "genre": "blues"
      }
    ]
  }
];

export function setQuestions(data) {
  questions = data;
}

export function getQuestions() {
  return questions;
}
