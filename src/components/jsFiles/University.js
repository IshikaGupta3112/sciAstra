import '../stylesheets/TeamPage.css'

function University(){

const university =['Cambridge University' , 'Harvard University', 'University Of California' ,'ETH Zurich' ,'Max Planck'
,'University Of Edinberg' ,`John's Hopkins`, 'Midiegon state' , 'University of Illinois', 'Humboldt University of Berlin' ]

return(<>
<div id='universityDiv'>
{university.map((university)=><div id='universityCard'>
{university}
</div>)}
</div>
</>)
}
export default University;