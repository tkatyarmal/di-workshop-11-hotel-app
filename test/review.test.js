const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review')

describe('Review', function () {

    // it('', () => {
    // var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")

    // })


    it('should instaniate properly', () => {

        var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")

        expect(review1.rating).to.equal(5)
        expect(review1.text).to.equal('Excellent hotel, very clean')
        expect(review1.date).to.equal("2018-12-17")
    })




});