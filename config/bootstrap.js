/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */


module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  sails.bcrypt = require('bcryptjs');
  const saltRounds = 10;

  if (await Restaurant.count() > 0)
  {
    return ;
  }

  await Restaurant.createEach([
      { name : "Gelato-go",
        description : "Located at Nathan Road at Tsim Sha Tsui, Gelato-go goes to all ends to use ingredients only of the highest quality when it comes to mixing their gelato - pistachios from Bronte, Sicily, hazelnuts from Langhe, Piedmont, and exclusively use Vairhona chocolate, which sources cocoa beans of the finest variety from a plantation in Venezuela. All their gelato use high-quality fresh milk which does not contain artificial hormones or antibiotics.",
        location : "Tsim Sha Tsui" ,
        cuisine : "Italian" ,
        imageURL : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582090939164&di=d7418145c298fcd8ffd8062aee873827&imgtype=0&src=http%3A%2F%2Fc3.nychinaren.com%2Fimages%2Fdeals%2Flarge700X420%2F6__25363__65272.jpg" ,
        rating : 5 ,
        priceMin : 28 ,
        priceMax : 52 ,
        maxBooking : 1849 ,
        highlighted : "yes" },
      { name : "Hands-On Coffee",
        description : "Located on the third floor of China Mobile Flagship Store, Hands-On Coffee is the place to sip a cup of perfect coffee amidst the city’s busiest district on Sai Yeung Choi Street South, Mong Kok. Created with the intention to create the best coffee in town, Hands-On Coffee offers an array of coffee options as well as dishes like Napoleon Spaghetti, Spicy Dried Tomato Shrimp Pasta, Green Salad and more. At Hands-On Coffee, diners can bask in the chic interiors while experiencing tailor-brewed specialty coffees made by the cafe’s skilled baristas. The delicious coffee and food all make Hands-On Coffee perfect for all sorts of occasions, from a leisurely brunch to a quick coffee fix in Mong Kok.",
        location : "Mong Kok" ,
        cuisine : "Western" ,
        imageURL : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2688546842,2596930900&fm=15&gp=0.jpg" ,
        rating : 4 ,
        priceMin : 63 ,
        priceMax : 132 ,
        maxBooking : 1872 ,
        highlighted : "" },
      { name : "Zenon Cafe",
        description : "Tucked away in a chic and stylish space on Wellington Road in Central, Zenon is a boutique cafe that is known for its Italian Coffee and American-influenced sandwiches. Zenon Cafe is the home to one of the most exciting menus in the city, and you’ll meet a whole host of tasty dishes just waiting for you and your taste buds. You’ll find refreshing sandwiches options like the Truffle & Cheese, Reuben with Sauerkraut and Eggplant in Zenon Cafe that go down an absolute treat.",
        location : "Central" ,
        cuisine : "Western" ,
        imageURL : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2379918406,777021787&fm=15&gp=0.jpg" ,
        rating : 4 ,
        priceMin : 59 ,
        priceMax : 161 ,
        maxBooking : 1210 ,
        highlighted : "yes" },
      { name : "Kim's Bowl @ Admiralty",
        description : "Located in Admiralty , Kim’s Bowl exemplifies how traditional Korean cuisine has been revitalized by contemporary concepts. Kim’s Bowl serves up a refreshing selection of Chef Specialties like Beef & Kimchi Bowl and Budae Stew with Rice, as well as a splendid array of Korean Rice Bowls and Bentos like Kimchi Pork Rice Bowl and Teriyaki Chicken Bento, and these bowls of soul-enriching goodness will definitely put you in a good spot whenever you find yourself hankering for something tasty and comforting. Prioritizing customers’ needs, Kim’s Bowl aims to deliver authentic taste of Korea and entertain every diners’ taste buds in the buzzing downtown of Wan Chai.",
        location : "Admiralty" ,
        cuisine : "Korean" ,
        imageURL : "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=523331394,4270595353&fm=15&gp=0.jpg" ,
        rating : 4 ,
        priceMin : 53 ,
        priceMax : 71 ,
        maxBooking : 228 ,
        highlighted : "" },
      { name : "PizzaExpress @ Tseung Kwan O",
        description : "PizzaExpress is really proud of its pizzas, its love for music and supporting meaningful causes in the community. Since 1965 the restaurants have been serving hand-crafted pizzas made with the freshest ingredients. Each pizza is made to order by skilled Pizzaiolos (pizza chefs). Beautiful pizza served in a socially-responsible and creative environment; this truly is ‘Pizza in Style’.",
        location : "Tseung Kwan O" ,
        cuisine : "Pizza" ,
        imageURL : "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3393559823,1094442882&fm=26&gp=0.jpg" ,
        rating : 5 ,
        priceMin : 45 ,
        priceMax : 179 ,
        maxBooking : 3381 ,
        highlighted : "yes" },
      { name : "Eiffel Bistro",
        description : "Ideal for get-togethers with family and friends, Eiffel Bistro serves French food, with signatures like roasted halibut with fennel and rocket leaves in vierge sauce and French veal stew . The bistro sports a chic interior reflecting the typical Parisian-style bistro, with an open kitchen, people-watching window, and artworks inspired by the iconic Eiffel tower.",
        location : "Tai Koo" ,
        cuisine : "French" ,
        imageURL : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582091137759&di=469d1c0d74225ad19d7e1dac5f8a9344&imgtype=0&src=http%3A%2F%2Fassets.diningcity.cn%2Frestaurantpictures%2F2049130_7ef73687d6_logo.jpg_800x800" ,
        rating : 4 ,
        priceMin : 71 ,
        priceMax : 183 ,
        maxBooking : 2519 ,
        highlighted : "" },
      { name : "Dim Sum Heritage",
        description : "Located on Morrison Hill Road in Wan Chai, Dim Sum Heritage aims to bring dim sum experience to a whole new level by infusing innovation, flavors and classics into the dishes. The restaurant is committed to promote the classic taste of Hong Kong-style teahouses, while breaking the tradition by adding on with unique and creative flavors, such as Fried Raddish Cake with Thousand Island Sauce, Bean Curt Sheet in Lobster Soup and Steamed Rice Rolls with Spring Rolls. Freshly made on orders with diversified ingredients, Dim Sum Heritage invigorates traditional dim sum and provides a comfortable dining environment so that Hong Kong people can enjoy delicious dim sum feast at any time.",
        location : "Wan Chai" ,
        cuisine : "Dim Sum" ,
        imageURL : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1558549042,736661686&fm=15&gp=0.jpg" ,
        rating : 4 ,
        priceMin : 26 ,
        priceMax : 35,
        maxBooking : 854 ,
        highlighted : "yes" },
      { name : "Fung Shing Restaurant @ Causeway Bay",
        description : "Located in Causeway Bay, Fung Shing Restaurant has successfully infused contemporary-style flavours into revamped Cantonese classics on Leighton Road. Besides offering diners a wide array of dim sum options, Fung Shing Restaurant also impresses on their authentic specialities like Fung Shing First Class Assorted Seafood in Casserole and Crispy Fried Chicken. In Fung Shing Restaurant, all diners are welcomed to enjoy tantalizing cuisine in a stylish yet spacious environment, making the restaurant stand out from the rest in Sheung Wan.",
        location : "Causeway Bay" ,
        cuisine : "Chinese" ,
        imageURL : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888277337,744161017&fm=15&gp=0.jpg" ,
        rating : 3 ,
        priceMin : 22 ,
        priceMax : 206 ,
        maxBooking : 679 ,
        highlighted : "" },
      { name : "WM Café & Bar @ HK Science Park",
        description : "Located in Sha Tin, WM Café and Bar?offers refreshing Western tastes for diners at Tai Po and Science Park. With everything fresh and made to order, guests are able to enjoy their perfect selection of modern Western dishes, including delicious options like Fettuccine Carbonara with Poached Egg,Mega Angus Beef Cheese Burger,Black Truffle & Portobello Pizza,Barbecue Sauce Chicken Wings,WM Café Deluxe English Breakfast and etc. The friendly staff and the charming furnishings give the restaurant an inviting feel, which has locals coming back again and again to this cozy restaurant of WM Café and Bar.",
        location : "Sha Tin" ,
        cuisine : "Western" ,
        imageURL : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582091197624&di=6880f4d62ff5a95d4a61d505b88d39d4&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fpoi%2F1606%2F39%2F6084b97687c123db.jpg_480x360x95_da7aebb7.jpg" ,
        rating : 4 ,
        priceMin : 53 ,
        priceMax : 98 ,
        maxBooking : 218 ,
        highlighted : "yes" },
      { name : "Flying Pig Bistro",
        description : "Decked in urban art, Flying Pig Bistro specially imports their ingredients to achieve authenticity in the European mains they serve. Signatures here include lamb wellington, 12oz organic ribeye steak, and a build-your-beef burger option that lets you customise your own burger with your choice of two fillings.",
        location : "Sai Ying Pun" ,
        cuisine : "International" ,
        imageURL : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3057214767,4133546279&fm=15&gp=0.jpg" ,
        rating : 4 ,
        priceMin : 161 ,
        priceMax : 269 ,
        maxBooking : 1085 ,
        highlighted : "" },
      ]);

      if (await Course.count() > 0)
      {
        return ;
      }
    
      await Course.createEach([
          { name : "course1",
            description : "Located at Nathan Road at Tsim Sha Tsui, Gelato-go goes to all ends to use ingredients only of the highest quality when it comes to mixing their gelato - pistachios from Bronte, Sicily, hazelnuts from Langhe, Piedmont, and exclusively use Vairhona chocolate, which sources cocoa beans of the finest variety from a plantation in Venezuela. All their gelato use high-quality fresh milk which does not contain artificial hormones or antibiotics.",
            location : "Tsim Sha Tsui" ,
            cuisine : "Italian" ,
            imageURL : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582090939164&di=d7418145c298fcd8ffd8062aee873827&imgtype=0&src=http%3A%2F%2Fc3.nychinaren.com%2Fimages%2Fdeals%2Flarge700X420%2F6__25363__65272.jpg" ,
            rating : 5 ,
            priceMin : 28 ,
            priceMax : 52 ,
            maxBooking : 1849 ,
            highlighted : "yes" },
          { name : "course2",
            description : "Located on the third floor of China Mobile Flagship Store, Hands-On Coffee is the place to sip a cup of perfect coffee amidst the city’s busiest district on Sai Yeung Choi Street South, Mong Kok. Created with the intention to create the best coffee in town, Hands-On Coffee offers an array of coffee options as well as dishes like Napoleon Spaghetti, Spicy Dried Tomato Shrimp Pasta, Green Salad and more. At Hands-On Coffee, diners can bask in the chic interiors while experiencing tailor-brewed specialty coffees made by the cafe’s skilled baristas. The delicious coffee and food all make Hands-On Coffee perfect for all sorts of occasions, from a leisurely brunch to a quick coffee fix in Mong Kok.",
            location : "Mong Kok" ,
            cuisine : "Western" ,
            imageURL : "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2688546842,2596930900&fm=15&gp=0.jpg" ,
            rating : 4 ,
            priceMin : 63 ,
            priceMax : 132 ,
            maxBooking : 1872 ,
            highlighted : "" },
          { name : "course3",
            description : "Tucked away in a chic and stylish space on Wellington Road in Central, Zenon is a boutique cafe that is known for its Italian Coffee and American-influenced sandwiches. Zenon Cafe is the home to one of the most exciting menus in the city, and you’ll meet a whole host of tasty dishes just waiting for you and your taste buds. You’ll find refreshing sandwiches options like the Truffle & Cheese, Reuben with Sauerkraut and Eggplant in Zenon Cafe that go down an absolute treat.",
            location : "Central" ,
            cuisine : "Western" ,
            imageURL : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2379918406,777021787&fm=15&gp=0.jpg" ,
            rating : 4 ,
            priceMin : 59 ,
            priceMax : 161 ,
            maxBooking : 1210 ,
            highlighted : "yes" },
          ]);
    
  if (await User.count() == 0)
  {
    const hash = await sails.bcrypt.hash('123456', saltRounds);
    
    await User.createEach([
        { username: "admin", password: hash, role: "admin"},
        { username: "member", password: hash, role: "member" },
        { username: "summer", password: hash, role: "member" },
        { username: "coach", password: hash, role: "member" },
        { username: "winter", password: hash, role: "member" }
        // etc.
    ]);
  }
  const course1 = await Course.findOne({name: "course1"});
  const course2 = await Course.findOne({name: "course2"});
  const summer = await User.findOne({username: "summer"});
  const winter = await User.findOne({username: "winter"});

  await User.addToCollection(summer.id, 'courseList').members(course1.id);
  await User.addToCollection(winter.id, 'courseList').members([course2.id, course1.id]);
};
