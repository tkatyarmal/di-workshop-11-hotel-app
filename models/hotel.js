class Hotel {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.reviews = []
    }

    reviewCount() {
        return this.reviews.length
    }

    rating() {
        if (this.reviewCount() == 0) {
            return 0
        }
        else {
            var sum = 0
            for (var i = 0; i < this.reviews.length; i++) {
                sum += this.reviews[i].rating
            }
            var ratingAverage = Math.round(sum / this.reviews.length)
            console.log('Rating avg' + ratingAverage)
            return ratingAverage
        }
    }

    ratingAsStars() {
        return ''
    }

    urlSlug() {
        let slug = this.name + '_' + this.city
        slug = slug.replace(/ /g, '_').toLowerCase()

        return slug
    }



    addReview(someReview) {
        this.reviews.push(someReview)
    }





}





//export the 'Hotel' class
module.exports = Hotel