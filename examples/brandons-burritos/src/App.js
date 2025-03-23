import './App.css';
import Review from './components/Review';
import Ingredient from './components/Ingredient';

function App() {
  // Review information
  const reviews = [
    { 
      name: "Eric Wang",
      starCount: 5,
      experience: "Dine in  |  Dinner  |  $1-10",
      explanation: "Best burrito I've ever had, definitely a must-try staple of College Park. Amazing service and atmosphere as well."
    },
    {
      name: "Brianna S",
      starCount: 1,
      experience: "Delivery  |  Dinner  |  $1-10",
      explanation: "They didn't deliver my food."
    },
    {
      name: "Adin",
      starCount: 5,
      experience: "N/A",
      explanation: "Oh my goodness, Brandon’s burritos is one of the greatest dining experiences I have had in my life, highly recommend."
    },
    {
      name: "Caleb Becker-Schwartz",
      starCount: 5,
      experience: "Dine in  |  Dinner  |  $1-10",
      explanation: "This is my second time at Brandon’s Burritos and each visit has been better than the last. The service is personalized, the food impeccable, and the water pristine. Without a doubt, the finest dining in all of college park. 100% would recommend anyone passing through takes this incredible opportunity for such a culinary experience."
    },
  ];

  const ingredients = [
    {
      label: "Tortilla",
      options: ["Regular Flour", "Habanero Tortilla"]
    },
    {
      label: "Base",
      options: ["Cilantro Lime Rice", "Black Beans", "Refried Beans"]
    },
    {
      label: "Protein",
      options: ["Beef", "Chicken", "Extra Beans", "more (ask about our seafood options)"]
    },
  ];

  return (
    <>
        <h1>🌯 Brandon's Burritos</h1>
        <section id="about">
            <u><h2>About Us</h2></u>

            <div id="description">
                <h3>WE ARE BRANDON'S BURRITOS</h3>
                <p>Located in the heart of Terrapin Row, we serve delicious experiences, where locals can enjoy exceptional dishes made of fresh and healthy ingredients. Our menu features mouthwatering options and our team is here to help you plan your next big celebration. Take a look now!</p>
            </div>

            <div id="contact">
                <h3>Contact Us</h3>
                <p>Email: brandonsburritos@gmail.com</p>
                <p>Phone: (248)-434-5508</p>
            </div>

            <div id="address">
                <h3>Address</h3>
                <p>8150 Baltimore Ave Unit 232, College Park, MD 20740, United States</p>
            </div>
        </section>

        <section id="reviews">
          {reviews.map(review => <Review review_prop={review}/>)}
        </section>

        <section id="menu">
          <div class="gourmet_item">
            <h4 class="dish">Beef Burrito</h4>
            <p>Luxury burrito stuffed with a fine combination of beef, cheese, beans, and rice. Our signature dish!</p>
          </div>
          <h4 class="dish">Custom Burrito</h4>
          <p>A gourmet burrito made to your requests. Choose any combination of these options: </p>
          <ul>
            {/* TODO: Write and use a component that turns the ingredients into
            the expected output for this section:
           <u>Tortilla</u>
          <li>Regular Flour</li>
          <li>Habanero Tortilla</li>
          <br>

          <u>Base</u>
          <li>Cilantro Lime Rice</li>
          <li>Black Beans</li>
          <li>Refried Beans</li>
          <br>

          <u>Protein</u>
          <li>Beef</li>
          <li>Chicken</li>
          <li>Extra Beans</li>
          <li>more (ask about our seafood options)</li>
          <br>  
            */
          ingredients.map(ingredient => <Ingredient ingredient={ingredient}/>)
            };
          </ul>
        </section>
    </> 
  );
}

export default App;

