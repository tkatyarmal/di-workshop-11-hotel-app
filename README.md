
# Workshop: Hotel System 🏘


This exercise is designed to test your TDD and OOP skills, and also to introduce you to some new concepts and techniques. It should also help to consolidate your command line and git skills, too. If you've completed the **Person and AddressBook Workshop**, you'll see some similarities. We'll give you a little less guidance in this workshop than we have on previous ones.

⚠️ **We'll be working to improve this system over the next couple of weeks as we learn more about testing.**

You're going to make a system for storing hotel reviews.

* Use TDD throughout, applying the Red/Green/Refactor cycle.
* Focus on writing good quality, readable code.
* Make sure all your tests are passing.
* Make sure you understand everything that's happening in in your tests.
* Make sure your code is neat, tidy and well-commented where necessary.
* If you finish _Part I_, feel free to add some extra functionality!

## PART 1 - TDD and OOP

## Before you Start

Set up your project environment in a similar way to the `Coolculator` or `Person/AddressBook` projects. This will probably include:

* Creating a project directory and README, and initializing a `package.json`.
* Installing Mocha and Chai with NPM.
* Adding a `.gitignore` file to exclude the `node_modules` directory.
* Adding an npm script to run your tests.
* Adding `test` and `models` folders.
* Initializing a git repo and pushing to GitHub.

If you want to, you could also add an `index.js` file to launch a REPL with your classes loaded. This might help with debugging.

Once you're set up, work through the questions below in order. **Remember to commit regularly**, and make sure your commit messages are descriptive!

## Question 1

Your task is to implement two classes using TDD: `Hotel` and `Review`.

Start by creating `test/hotel.test.js` containing:

```javascript
const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function() {

});
```

Now create the `models/hotel.js`, containing:

```javascript
class Hotel {

}
module.exports = Hotel
```

This should be enough to get you started - you should use a similar pattern for your `Review` class.

Your classes should implement the following interface:

```javascript
var hotel = new Hotel("Hilton Metropole", "London")
hotel.name //=> "Hilton Metropole"
hotel.city //=> "London"
hotel.reviews //=> []
hotel.reviewCount() //=> 0
hotel.rating() //=> 0
hotel.ratingAsStars() //=> ''

hotel.urlSlug() //=> "hilton_metropole_london"

var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")
review1.rating //=> 3
review1.text //=> "Excellent hotel, very clean"
review1.date //=> A javascript Date object for 2018-12-17
review1.ratingAsStars() //=> "⭐️⭐️⭐️⭐️⭐"

var review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
review2.rating //=> 1
review2.text //=> "Terrible hotel, smelled of mice"
review2.date //=> A javascript Date object for 2018-01-01
review2.ratingAsStars() //=> "⭐️"

hotel.addReview(review1)
hotel.addReview(review2)

hotel.reviews //=> [<Review>, <Review>] (an array of two javascript objects representing your reviews)
hotel.reviewCount() //=> 2
hotel.rating() //=> 3 (the average or all reviews)
hotel.ratingAsStars() //=> "⭐️⭐️⭐️"
```

## Question 2

1. Add a `toJSON()` function to your `Review` class so it returns a string of JSON similar to:

```json
{
  "rating":5,
  "text":"Excellent hotel, very clean",
  "date":"2018-12-17T00:00:00.000Z",
  "ratingAsStars":"⭐️⭐️⭐️⭐️⭐️",
}
```

2. Add a `toJSON()` function to your `Hotel` class so it returns a string of JSON like:

```json
{
  "name":"Hilton Metropole",
  "city":"London",
  "reviewCount":2,
  "rating":3,
  "ratingAsStars":"⭐️⭐️⭐️",
  "urlSlug":"hilton_metropole_london",
  "reviews":[
    {
      "rating":5,
      "text":"Excellent hotel, very clean",
      "date":"2018-12-17T00:00:00.000Z",
      "ratingAsStars":"⭐️⭐️⭐️⭐️⭐️",
    },{
      "rating":1,
      "text":"Terrible hotel, smelled of mice",
      "date":"2018-01-01T00:00:00.000Z",
      "ratingAsStars":"⭐️",
    }
  ]
}
```

## Question 3

Create a `HotelCollection` class which implements the following interface:

```javascript
var hotel1 = new Hotel("Hilton Metropole", "London")
var hotel2 = new Hotel("Crown Plaza", "Leeds")

c = new HotelCollection()
c.hotels //=> []

c.addHotel(hotel1)
c.addHotel(hotel2)

c.hotels //=> [<Hotel>, <Hotel>] (an array of two javascript objects representing your Hotels)
c.hotels = ['some','nonsense'] //=> Should raise a Javascript error to prevent us overwriting our hotels array.

c.sortedHotels() //=> [<Hotel>, <Hotel>] an array of hotels sorted by rating, highest first.
```

## Question 4 (extension)

1. Add an instance method to the `HotelCollection` that takes a path as an argument and writes the entire collection to a JSON file. (Think about what data you actually need to write to the JSON file.)
2. Add a static `load` method to `HotelCollection` so that calling `HotelCollection.load('some/path/to/hotels.json')` loads the data from the file and returns a pre-populated `HotelCollection` instance.

***

## PART II - Web API with Express

⚠️ You are not expected to attempt **Part II** until you have attended the _Web API_ lessons later in the week. We'll have plenty of other workshops and lessons before we move on to this. Of course, if you feel super-comfortable with web APIs already then by all means, have a crack at it!

## Question 5

Convert this project into an Express application that responds to the following routes with appropriate JSON:

```
GET    /hotels (returns all the hotels)
POST   /hotels (creates a hotel)

GET    /hotels/hilton_metropole_london (returns just the hilton metropole hotel)
DELETE /hotels/hilton_metropole_london (deletes the hilton metropole hotel)

GET    /hotels/hilton_metropole_london/reviews (returns just the reviews for the hilton metropole)
POST   /hotels/hilton_metropole_london/reviews (creates a review)
GET    /hotels/hilton_metropole_london/reviews/2 (gets a single review)
DELETE /hotels/hilton_metropole_london/reviews/2 (deletes a review)
PATCH  /hotels/hilton_metropole_london/reviews/2 (updates a review with some new data)
```

### Top Tips

* You'll have to implement a few new methods on the classes you wrote in Part I, including some way to search for a hotel by its slug and delete a hotel.
* You should ensure that the correct status codes are returned in all cases. Think about where 201, 404 and 405 codes would be appropriate.
* You should write some API tests.

## Question 5 (optional)

Deploy your Express app to [Heroku](heroku.com), so it's available online.
