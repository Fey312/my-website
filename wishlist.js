window.addEventListener("load",setup);                      //event listener runs the setup function when the page is loaded
function setup(){
    var addButton = document.querySelectorAll('.addtolist');        //variable created which identifies all button labels on the page
    for (var i = 0; i < addButton.length; i++) {               //loops through all the buttons
        addButton[i].onclick = addItem;
        addButton[i].addEventListener('click', addItem);          // adds an event listener to each button
}
}

function addItem(e){                                   //function allows items to be added to the list
    var button = e.target;             //identifies which button is clicked
    var id = button.id;                //created a variable which gets the id for the button that was clicked
    var itemId = 'item' + id;        //a variable which gets the entire item's id

    if(!myArray(itemId)){                                //checks for duplicates in list
        addToArray(itemId);                // adds item to a global array
        var itemHTML = document.getElementById(itemId).innerHTML;        //gets items from HTML
        document.getElementById('wishlist').innerHTML += itemHTML;     //puts itmes at the end o the array
    }
}
var item = [];     //array where the items are held
function myArray(item){        // checks if item is in the array
    for(var i = 0; i < item.length; i++){
        if(itmes[i] == item){
            return true;
        }
    }
    return false; //returns blank if false
}

function addToArray(item){       //function adds items to the array
    item.push(item);    //pushes the parameter to add an item
}
//extra feature code
var remBtn = document.createElement('button');       //variable for a new element for a button
remBtn.innerHTML = 'Remove';  //gives a value to the remove button when item is in the list
remBtn.setAttribute('onclick', 'rem('+addItem+')');   //allows the button to function
