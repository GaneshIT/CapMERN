use('restaurantdb')
db.data.find({g})
//db.createCollection('restaurant')
//db.data.find();
//db.data.find({"borough": "Bronx"}).skip(5).limit(5);
db.data.find({"grades.score":{$gt:90}})
//Comparisions operators: $lt, $gt, $ne
//Syntax: {propertyname:{$gt:100},propertyname:{$lt:400}}

//Find({location:"bangalore"},{addres:1,street:1,zipcode:0}).sort(-1)  1, 0

db.data.aggregate([
    {
    $match: {
        "cuisine":"American"
    }
    },
    {
        $group: {
          _id: "$name",
          cnt: {
            $sum: "$grades.score"
          }
        }
    }
])