function card(type, title, description, brand) {
    this.type = type;
    this.title = title;
    this.description = description;
    this.brand = brand;
    
}

var deck = [
    new card('Placement', 'How might we associate with a complementary brand?', 'Unlike most fashion retailers, Zara has a very small ad budget. They don’t spend money on advertising, but invest in retail space next to wellknown luxury brands they can be associated with.', 'tango'),
    new card('Process', 'How might we release smaller parts of a whole?', 'Zara releases small batches of new collections regularly and adapt the styles based on customer feedback before the next batch is produced.', 'donut'),
    new card('Pricing', 'How might we make older products more desirable?', 'Zara showcases their older items next to a few new collection items before a sale to increase sales.', 'old'),
    new card('Product', 'How might we meet customer needs better?', 'Zara designs their new collections based on what customers say and how they wear it in the real world.', 'lollipop'),
    new card('Technology', 'How might we make customers curious to interact with our products?', 'Using an augmented reality app Zara customers can dress up shop window models with selected fashion.', 'augmented'),
    new card('Placement', 'How might we attract people to build our products?', 'Ehereum has a small team with a global reach.  They create an environment for crypto lovers to create and market products they love, strenghtening the platform.', 'volunteer'),
    new card('Process', 'How might we support co-creation?', 'Ehtereum has a friendly, helpful Discord community to help and support people interest in building crypto products. They bring together people in monthly hackathons and check-in regularly to ensure everyone has what they need.', 'collaborate'),
    new card('Pricing', 'How might we benefit from constraints?', 'Ethereum introduced a gas fee based on network load to deter people from transacting during peak times.', 'restrict'),
    new card('Process', 'How might we give early form to an idea?', 'Walt Disney studios introduced the storyboard as prototyping tool to make sure no scenes are missing before shooting the film.', 'prototype'),
    new card('Technology', 'How might we communicate our idea better?', 'When Wi-Fi communications were in its infancy, Vocera developed a video scenario to demonstrate how employees could stay connected with a wearable, voice-controlled badge to demonstrate its benefits within context.', 'movie'),
    new card('Product', 'How might we encourage desired behaviors?', 'Bank of America automatically rounds up card purchases and transfer the difference into a savings account called "Keep the change" to cultivate a culture of saving in customers.', 'save'),
    new card('Product', 'How might we be more sustainable?', 'Patagonia, one of the most loved and successful outdoor clothing brands, use recycled plastic to create polyester, which forms as much as half of all clothing made and contributing to as much as a quarter of the total carbon budget globally, in an attempt to reduce the carbon footprint in a circular economy model.', 'fashion'),
    new card('Pricing', 'How might we protect the source of our wealth for sustainable profit?', 'Patagonia, a successful outdoor clothing brand, invests their profit to causes that fight climate change, prioritizing protecting the source of their wealth over short-term profit for shareholders.', 'cotton'),
    new card('Product', 'How might we gain a better undertanding of our user needs?', 'Four Seasons Hotels, famous for their quality of service gives employees a perk that allows them to stay at any of the hotels worldwide for free to put them in the shoes of a customer.', 'hotel'),
    new card('Product', 'How might we make our product timeless?', 'Instead of offering kids ready-made toys that they bore of easily, LEGO sells a system where children can build an infinite amount of different toys by arringing blocks that fit into each other.', 'lego'),

 

]

function getRandom(number) {
    var randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

document.getElementById("shuffle").onclick = function(){
    var index = getRandom(15);
    var currentCard = deck[index];

    document.getElementById("brand").innerHTML = '<img src="/assets/' + currentCard.brand + '.jpg"></img>';
    document.getElementById("display").innerHTML = '<h3>' + currentCard.type + '</h3><h2>' + currentCard.title + '</h2><p>' + currentCard.description + '</p>';
};
