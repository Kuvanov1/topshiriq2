import './App.css';
import img1 from "./image1.webp"
import img2 from "./image2.webp"
import profile from "./profile.webp"


function App() {
  return (
    <div className="App">
      <div className='project'>
        <div className='main'>
          <div className='header'>
            <a><h3>K. Griffith</h3></a>
            <div className='navbar'>
              <a>APPEARENCES</a>
              <a>BOOKS</a>
              <a>NEWS</a>
              <a>ABOUT</a>
              <a>CONTACT</a>
            </div>
          </div>
          <hr></hr>
          <div className='content'>
            <div className='section1'>
              <img src={img1} alt='' />
            </div>
            <div className='section2'>
              <h1>Kayla Griffith</h1>
              <h3>Award Winning Author</h3>
            </div>
          </div>
        </div>
        <div className='content1'>
        </div>
        <div className='content2'>
            <div className='section3'>
              <div>
                <h4>New Release</h4>
                <h1>The Swan Isle <br/> (2035)</h1>
                <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <h2>Order Now</h2>
                <div className='orders'>
                  <a>Amazon</a>
                  <a>Google</a>
                  <a>ibooks</a>
                </div>
              </div>
              <div>
              <img src={img2} alt='' />
              </div>
            </div>
        </div>
        <div className='content3'>
          <h1>Praise & Reviews</h1>
          <div className='section4'>
            <div>
              <h1>"</h1>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <span>‘Swan Isle’ is Griffith's <br/> best writing yet” The <br/> Times Book Review</span>
              <hr></hr>
            </div>
            <div>
              <h1>"</h1>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <span>‘Gripping storytelling’ <br/>
              The Good Read Blog</span><br/><br/>
              <hr></hr>
            </div>
            <div>
              <h1>"</h1>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <span>Grifith’s voice tells the <br/> story of all women “The <br/> Seattle Post Review”</span>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className='content4'>
          <h1>See upcoming</h1>
          <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
          <div className='section5'>
          <h2>January 18th 2035, The Breakfast Club, Virtual Book Reading <br/> of Swan Isle, 7PM - 8PM EST</h2>  
          <a>Join</a>
          </div>
          <div className='section5'>
          <h2>
          January 31st 2035, The Good Read Club, Online <br/> Conversation with Kayla Griffith, 8PM - 9PM EST</h2>  
          <a>Join</a>
          </div>        
          <div className='section5'>
          <h2>March 2nd 2035, Otto Cafe, Online Book Reading <br/> With Kayla Griffith, 3PM - 4PM EST</h2>  
          <a>Join</a>
          </div>                
        </div>
        <div className='content5'>
          <div className='section6'>
            <img src={profile} alt=''/>
            <h1>About Kayla Griffith</h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <a>Read More</a>
          </div>
        </div>
      </div>   
      
    </div>
  );
};

export default App;
