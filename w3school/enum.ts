// Numeric Enums - Initialized

// You can set the value of the first numeric enum and have it auto increment from that:

enum CardinalDirections {
    North = 1,
    East,
    South,
    West
  }
  // logs 1
  console.log(CardinalDirections.North);
  // logs 4
  console.log(CardinalDirections.West);

//   Numeric Enums - Fully Initialized

// You can assign unique number values for each enum value. Then the values will not incremented automatically:


// BAGUSAN DIBUAT KAYA GINI
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success); 

//   String Enums

// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.West);