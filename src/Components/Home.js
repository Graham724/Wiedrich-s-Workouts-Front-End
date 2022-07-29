import '../Home.css'

export default function Home () {
 return(
     <div>
               <h1>The Ultimate Crowd Sourced Wellness App</h1>
      <div className='homepage'>

       <img className='homepage_image' src='Images/mock-home.png' alt='weightlifter'></img>
      </div>
      <div className='homepage_text'>
       <h2>Why We Do It</h2>
       <p>
       WIEDRICHS-WORKOUTS is a place where users can choose from unique workouts and recipes to jumpstart thier health and wellness journey. 
       Users can personalize thier wellness by adding, updating, and deleting workouts and recipes.
       We hope this can help others have a place to share some of their favorite ways to stay fit and healthy, with something for everyone no matter what level of experience you may be at!
       Theres no better feeling than finding your new favorite recipe or exercise!
       </p>
       
      </div>
     </div>
 )
}