
interface props{
    name1 : string
    name2 : string
}

export default function intro(names:props) {
    return(
        <div id='intro'>
            <h2>About Us</h2>
            <h3>{names.name1}</h3>
            <p>
                I am a junior majoring in computer science and data science. <br />
                I am passionate about AI as well as getting the opportunity to learn more about computer science as a whole.<br />
                During my time in WPI, I have learned effective teamwork, team management, and time management as well as skills in Java, Python, and C. <br />
                I currently work at Data Annotation as an AI trainer but would love to get a full time internship for the summer! <br />
            </p>
            <h3>{names.name2}</h3>
            <p>

            </p>
        </div>
    );
}