class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    toggleCheckedOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating() {
      let ratingsSum = this.ratings.reduce(
        (accumulator, rating) => accumalator + rating
      );
      return ratingsSum / this.ratings.length;
    }
    addRating(value) {
      this.ratings.push(value);
    }
}
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this.pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  