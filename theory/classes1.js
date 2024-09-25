class Comment {
    constructor(text) {
        this.text = text
        this.cotesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('first comment')

// console.log(firstComment instanceof Object)
console.log(firstComment.hasOwnProperty('text'))  // true
console.log(firstComment.hasOwnProperty('upvote'))  //false


