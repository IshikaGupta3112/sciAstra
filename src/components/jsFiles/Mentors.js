import '../stylesheets/TeamPage.css';
import Profile from '../../assets/profile.png'

function Mentors(){

const mentors=[{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"},
{"name":"Shubham" , "university":"Cambridge University"}
]

return(
    <>
    <div id='mentorsDiv'>
    <h1>Meet Your Mentors</h1>
    <div id='mentorsCardDiv'>
   {mentors.map((mentors)=><div id='mentorsCard'>
    <img src={Profile}></img>
    <p>{mentors.name}</p>
    <p>{mentors.university}</p>
    </div>)}
    </div>
    </div>
    </>
)
}
export default Mentors;