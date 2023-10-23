
// document.addEventListener('DOMContentLoaded',function(){
//     const review = document.getElementById('review');
//     const submitBtn = document.getElementById('submitBtn');
    

//     submitBtn.addEventListener('click', addReview)
// })


// document.addEventListener('DOMContentLoaded', function(){
//  document.getElementById('review-form').addEventListener('submit', function(event){
//     event.preventDefault();
    
//     var textValue = document.getElementById('review').value;
//     console.log("The review:", textValue);
//     addReview(textValue);

// })
// });


// function addReview(review){

//     const reviews = document.getElementById('review-list');
//     const ul = document.getElementById('review-form');
//     const li = document.createElement('li');

//     reviews.appendChild(li);
//     li.innerHTML = `${review}`;
    
//     li.appendChild(document.createTextNode(review));
//     li.setAttribute('id', review);
//     ul.appendChild(li);

// }


document.addEventListener('DOMContentLoaded', function (){
    const baseURL = 'http://localhost:3000';
    const beerList = document.getElementById('beer-list');
    const beerName = document.getElementById('beer-name');
    const beerImage = document.getElementById('beer-image');
    const beerDescription = document.getElementById('beer-description');

    const reviewForm = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');
    const descriptionForm = document.getElementById('description-form');

    reviewForm.addEventListener('submit', function(event){
        event.preventDefault();

        const review = document.getElementById('review').value;

        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `${review}`;

        reviewList.appendChild(reviewItem);

        reviewForm.reset();
    });

    descriptionForm.addEventListener('submit', function(event){
        event.preventDefault();

        addDescription(descriptionForm);


    } )


    fetch(`${baseURL}/beers/1`)
    .then((response) => response.json())
    .then((beer) => {
        beerName.textContent = beer.name;
        beerImage.src = beer.image_url;
        beerDescription.textContent = beer.description;

        reviewList.innerHTML = '';
        beer.reviews.forEach((review) => {
        const reviewLi1 = document.createElement('li');

        reviewLi1.textContent = review;

        reviewList.appendChild(reviewLi1);
        });

        
    
    });

    fetch(`${baseURL}/beers`)
    .then((response) => response.json())
    .then((beers) => {
        beerList.innerHTML = '';
        beers.forEach((beer) => {
            const li = document.createElement('li');
            li.textContent = beer.name;

            li.addEventListener('click', function(){
                beerName.textContent = beer.name;
                beerImage.src = beer.image_url;
                beerImage.alt = beer.name;
                beerDescription.textContent = beer.description;
                reviewList.innerHTML = '';
                beer.reviews.forEach((review) => {
                    const reviewLi = document.createElement('li');
                    reviewLi.textContent = review;

                    reviewList.appendChild(reviewLi);
                })

        
            });

            beerList.appendChild(li);
        })

    })
});

function addDescription(descriptionForm){
    
    const beerDescription = document.getElementById('beer-description');
    const description = document.getElementById('description').value;

    beerDescription.textContent = `${description}`
    descriptionForm.reset();


} 
