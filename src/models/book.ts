interface Book {
    authors: string[],
    averageRating?: number,
    categories?: string[],
    description?: string,
    id: string,
    imageLinks?: imageLinks,
    language?: string,
    pageCount?: number,
    previewLink?: string,
    publishedDate?: string,
    publisher?: string,
    ratingsCount?: number,
    shelf: string,
    subtitle?: string,
    title: string,
  }


  interface imageLinks{
    smallThumbnail:string,
    thumbnail:string
  }
  
  
  export default Book;