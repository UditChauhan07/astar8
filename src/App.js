import logo from './logo.svg';
import './App.css';
import img from './Images/cropped-AStar8.png'

function App() {
  return (
    <div className="container">
  <a href="https://astar8.com" target="_blank" rel="noopener noreferrer">
    <img src={img} className="mt-4" alt="Clickable Image" />
  </a>
</div>
    <h1 className="text-center  mt-1 faq-heading">Frequently Asked Questions</h1>

    <div className="mt-5 maindivv">
    <div className="container mt-5 instruction-div">
    <h3>How to Delete Your Account on ASTAR8</h3>
    <ul>
      <li><b>Open the ASTAR8 Mobile App:</b> Launch the ASTAR8 application on your phone.</li>
      <li> <b>Log In:</b> Enter your login credentials (email or mobile number) to sign in to your account.</li>
      <li> <b>Go to Your Profile:</b> Tap on the Profile button, usually found in the bottom or side navigation bar.</li>
      <li><b>Scroll to the Bottom:</b> Once you’re on your profile page, scroll all the way to the bottom.</li>
      <li><b>Delete Account:</b> At the bottom of the profile page, you’ll find a button labeled "Delete Account". Tap on it.</li>
      <li><b>Confirm Deletion:</b> Follow any on-screen instructions or confirmations to complete the account deletion process.</li>
    </ul>
  </div>
      

    </div>
   
  </div>
  );
}

export default App;
