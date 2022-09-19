function card(type, title, description, brand) {
    this.type = type;
    this.title = title;
    this.description = description;
    this.brand = brand;
    
}

var deck = [
    new card('Placement', 'How might we associate with a complementary brand?', 'Unlike most fashion retailers, Zara has a very small ad budget. They don’t spend money on advertising, but invest in retail space next to wellknown luxury brands they can be associated with.', 'tango'),
    new card('Process', 'How might we release smaller parts of a whole?', 'Zara releases small batches of new collections regularly and adapt the styles based on customer feedback.', 'donut'),
    new card('Pricing', 'How might we make older products more desirable?', 'Zara showcases their older items next to a few new collection items before a sale to increase sales.', 'old'),
    new card('Product', 'How might we meet customer needs better?', 'Zara designs their new collections based on what customers say and how they wear it in the real world.', 'lollipop'),
    new card('Technology', 'How might we make customers curious to interact with our products?', 'Using an augmented reality app Zara customers can dress up shop window models with selected fashion.', 'augmented'),
    new card('Placement', 'How might we attract people to build our products?', 'Ehereum has a small team with a global reach.  They create an environment for crypto lovers to create and market products they love.', 'volunteer'),
    new card('Process', 'How might we support co-creation?', 'Ehtereum has a friendly, helpful Discord community to help and support people interest in crypto. They bring together people in monthly hackathons and check-in weekly to ensure no-one is blocked.', 'collaborate'),
    new card('Pricing', 'How might we benefit from constraints?', 'Ethereum introduced a gas fee based on network load to deter people from transacting during peak times.', 'restrict'),
    
    

]

function getRandom(number) {
    var randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

document.getElementById("shuffle").onclick = function(){
    var index = getRandom(8);
    var currentCard = deck[index];

    document.getElementById("brand").innerHTML = '<img src="/assets/' + currentCard.brand + '.jpg"></img>';
    document.getElementById("display").innerHTML = '<h3>' + currentCard.type + '</h3><h2>' + currentCard.title + '</h2><p>' + currentCard.description + '</p>';
};
