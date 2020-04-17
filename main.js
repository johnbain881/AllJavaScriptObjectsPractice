console.log("Hello")

let fordMustang = {
    year: 2015,
    make: "Ford",
    model: "Mustang"
}
console.log(fordMustang.year, fordMustang.make, fordMustang.model);

let animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];
console.log(animals)

let jeb = {
    name: "Jeb"
}
let steph = {
    name: "Stephanie"
}
let keith = {
    name: "Keith"
}
let gp = {
    name: "Grace Payton"
}
let family = [jeb, steph, keith, gp]
console.log(family, family[0].name, family[1].name, family[2].name, family[3].name)




const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
let stories = "stories";
let address = "address";
let architect = "architect";
let constructionDate = "constructionDate";
let owner = "owner";
console.log(empireStateBuilding.height, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength, empireStateBuilding.squareFeet, empireStateBuilding.cost);
console.log(empireStateBuilding[stories], empireStateBuilding[architect], empireStateBuilding[address], empireStateBuilding[constructionDate], empireStateBuilding[owner])






const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
console.log(nashvilleSoftwareSchool.instructors.partTime, nashvilleSoftwareSchool.instructors.fullTime)



// Lightning Exercise 2: Output only Andy and Zoe in the console.
console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0])







const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// Output the following value to the console.
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(beatles.members[1].name + " was in the Beatles from " + beatles.history.formed + " to " + beatles.history.disbanded + "." + 
            " He was born in " + beatles.members[1].birth + ". He contributed heavily to the " + beatles.albums[3] + " Album.")