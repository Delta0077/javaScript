/* let temp = 55

if (temp >= 60 && temp<= 90)
{
    console.log('Yeah Bwoi')
} */

// challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan)
{
    console.log('Serve two vegan dish')
}
else if (isGuestOneVegan || isGuestTwoVegan)
{
    console.log('One vegan dish and one non-vegan dish')
}
else {
    console.log('Serve all non-vegan dishes')
}