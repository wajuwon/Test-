const  books = [
    { title: 'Lost Horizons', description: 'A traveler discovers a hidden utopia.', numberOfPages: 230, author: 'James Hilton', reading: true },
    { title: 'Code Breakers', description: 'The story of digital pioneers.', numberOfPages: 310, author: 'Walter Isaacson', reading: false},
    { title: 'Ocean Deep', description: 'A marine biologist explores the abyss.', numberOfPages: 198 , author: 'Nina Clarke',  reading: true}
]
for (let index = 0; index < books.length; index++) {
  if (books[index].reading === true) {
    console.log(books[index]);
  }
}
