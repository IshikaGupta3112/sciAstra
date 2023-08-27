import '../stylesheets/TeamPage.css';
import Profile from '../../assets/profile.png'

function MentorsAndAdvisors(){

const advisors=[
{"name":"Akhil Tripathi" , "post":" -" , "college":" -"},
{"name":"Vivek Dwivedi" , "post":" -" , "college":" -"},]

return(
    <>
    <div id='mentorsDiv'>
    <div id='mentorsCardDiv'>
    <div id='mentorsCard'>
    <img src={Profile}></img>
    <h4>Mentor And Advisor</h4>
    <p>Dr. Omkar</p>
    <p>Principal Project Scientist</p>
    <p>IIT Madras</p>
    </div>
   {advisors.map((advisors)=><div id='mentorsCard'>
    <img src={Profile}></img>
    <p>{advisors.name}</p>
    <p>{advisors.post}</p>
    <p>{advisors.college}</p>
    <button>Message him now<i class='fa-solid fa-paper-plane'></i></button>
    </div>)}
    </div>
    </div>
    </>
)
}
export default MentorsAndAdvisors;