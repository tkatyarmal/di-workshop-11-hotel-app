//const is like a variable which you know you won't change
const chai = require('chai');      //have 'chai' equal to the chai folder in node_modules
const expect = chai.expect;
//we don't need to require mocha since the npm test command you type in command line is a mocha command

var Hotel = require('../models/hotel')
var Review = require('../models/review')

describe('Hotel', function () {
    it('should instaniate properly', () => {

        var hotel = new Hotel('Hilton Metropole', 'London')

        expect(hotel.name).to.equal('Hilton Metropole')
        expect(hotel.city).to.equal('London')
        expect(hotel.reviews).to.deep.equal([])
    })

    it('should count the number of reviews', () => {
        var hotel = new Hotel('Hilton Metropole', 'London')
        var count = hotel.reviewCount()

        expect(count).to.equal(0)
    })

    it('should return 0 ratings when no reviews', () => {
        var hotel = new Hotel('Hilton Metropole', 'London')
        var rating = hotel.rating()

        expect(rating).to.equal(0)
    })

    it('should return no stars when no reviews', () => {
        var hotel = new Hotel('Hilton Metropole', 'London')

        expect(hotel.ratingAsStars()).to.equal('')
    })


    it('should return url slug with normal hotel name', () => {
        var hotel = new Hotel('Hilton Metropole', 'London')

        expect(hotel.urlSlug()).to.equal('hilton_metropole_london')
    })

    it('should return url slug when hotel name has lots of spaces', () => {
        var hotel = new Hotel('Hilton Metropole in', 'London')

        expect(hotel.urlSlug()).to.equal('hilton_metropole_in_london')
    })


    it('qwertyuiytrewqertyutrew', () => {
        var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")
        var review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")

        var hotel1 = new Hotel('Hilton Metropole in', 'London')

        hotel1.addReview(review1)
        hotel1.addReview(review2)
        //console.log('woop woop ' + hotel1.reviews[0].rating)
        expect(hotel1.rating()).to.equal(3)

    })


    // it('', () => {
    // var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")

    // })

});
