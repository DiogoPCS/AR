window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'dragonite',
            location: {
                lat: -23.357913,
                lng: -47.853324,
            }
        },
        {
            name: 'Magnemite',
            location: {
                lat: -23.357905,
                lng: -47.853348,
            }
        }
    ];
}

// -23.357905, -47.853348
// -23.357866, -47.853344
// -23.357777, -47.853325


