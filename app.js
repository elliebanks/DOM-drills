/* lecture example
document.addEventListener('DOMContentLoaded', function () {
    let paragraph = document.createElement('p');
    let text = document.createTextNode('this can be whatever i want it to be');
    
    paragraph.style.color = 'red';
    paragraph.style.textTransform = 'uppercase';
    paragraph.className = 'some-paragraph';
    
    paragraph.appendChild(text); 
    document.body.appendChild(paragraph);
    
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me!');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode('ive been clicked');
        h1.appendChild(h1Text);
        document.body.appendChild(h1);
    })
}) */
document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    let h1text = document.createTextNode('this is an h1');
    h1.appendChild(h1text);
    h1.className = 'h1';
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    h2.className = 'h2';
    let h2text = document.createTextNode('this is an h2');
    h2.appendChild(h2text);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.className = 'h3';
    let h3text = document.createTextNode('this is an h3');
    h3.appendChild(h3text);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    h4.className = 'h4';
    let h4text = document.createTextNode('this is an h4');
    h4.appendChild(h4text);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.className = 'h5';
    let h5text = document.createTextNode('this is an h5');
    h5.appendChild(h5text);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    h6.className = 'h6';
    let h6text = document.createTextNode('this is an h6');
    h6.appendChild(h6text);
    div.appendChild(h6);

// Create an array of 8 colors
    let changeColor = [
        'pink', 
        'black', 
        'blue', 
        'red', 
        'yellow',
        'purple', 
        'green', 
        'turquoise'];

// Create a random color selection function
    function getRandomColor() {
        let myRandomColor = changeColor[Math.floor(Math.random()*changeColor.length)];
        return myRandomColor;
    };

// Create event for <h1> to be double clicked, then run random color function
    h1.addEventListener("dblclick", function () {
        let myRandomColor = getRandomColor();
        h1.style.color = myRandomColor;
    });

// Create event for <h2> to be double clicked, then run random color function
    h2.addEventListener("dblclick", function () {
        let myRandomColor = getRandomColor();
        h2.style.color = myRandomColor;
    });

// Create event for <h3> to be double clicked, then run random color function
    h3.addEventListener("dblclick", function () {
        let myRandomColor = getRandomColor();
        h3.style.color = myRandomColor;
    });

// Create event for <h4> to be double clicked, then run random color function
    h4.addEventListener("dblclick", function () {
        let myRandomColor = getRandomColor();
        h4.style.color = myRandomColor;
    });

// Create event for <h5> to be double clicked, then run random color function
    h5.addEventListener("dblclick", function () {
        let myRandomColor = getRandomColor();
        h5.style.color = myRandomColor;
    });

// Create event for <h6> to be double clicked, then run random color function
    h6.addEventListener("dblclick", function () {
        let myRandomColor = getRandomColor();
        h6.style.color = myRandomColor;
    });

// Create a button that says 'Click to add new list item' and give it a class name
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click to add new list item!");
    button.className = "btn";
    button.appendChild(buttonText);
    div.appendChild(button);

    // Create a list element
    let ul = document.createElement("ul");
    div.appendChild(ul);
    //Create event that calls the new list item function when button is clicked
    button.addEventListener("click", addListItem);
    
    
    /*Create a function that adds a list item, first item should say "This is list 
    item 1" and all subsequent items should have number incremented by 1 */
    
    let liCount = 1; // Set initial list value to 1
    
    function addListItem () {
        let li = document.createElement("li");
        li.id = liCount; 
        li.innerText = `This is list item ${liCount}`; 
        liCount++;
        ul.appendChild(li);

        // Create event for list item to be clicked, and run random color function
        li.addEventListener("click", function() {
            let myRandomColor = getRandomColor();
            li.style.color = myRandomColor;
        });
        
        // Create function that removes list item if double clicked
        li.addEventListener("dblclick", function () {
            li.remove();
        });
    };
});
    
    

  
