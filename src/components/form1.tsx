export default function form1(){
    return (
        <form id="form">
            <h2 id="formtitle">What is your favorite game?</h2>
            <p><b>Do you play video games?</b></p>
            <input type="radio" id="playyes" value="Yes" name="playgame"/>
            <label htmlFor="playyes">Yes!</label>
            <br/>
            <input type="radio" id="playsometime" value="Sometimes" name="playgame"/>
            <label htmlFor="playsometime">Sometimes~</label>
            <br/>
            <input type="radio" id="playno" value="No" name="playgame"/>
            <label htmlFor="playno">No :(</label>
            <br/>
            <br/>
            <label htmlFor="Favorite game">What is your favorite game?</label>
            <input type="text" id="Favorite game"/>
            <br/>
            <label htmlFor="Reason">Why do you like this game so much?</label>
            <input type="text" id="Reason"/>
            <br/>
            <p>What are your favorite genres?</p>
            <input type="checkbox" id="Action"/>
            <label htmlFor="Action">Action</label>
            <br/>
            <input type="checkbox" id="Adventure"/>
            <label htmlFor="Adventure">Adventure</label>
            <br/>
            <input type="checkbox" id="FPS"/>
            <label htmlFor="FPS">FPS</label>
            <br/>
            <input type="checkbox" id="Other"/>
            <label htmlFor="Other">Other</label>
            <br/>
            <br/>
            <label htmlFor="selecthours">How many hours do you play per week?</label><br/>
            <select id="selecthours" name="selecthours">
                <option value="0-10">0-10</option>
                <option value="10-20">10-20</option>
                <option value="20-30">20-30</option>
                <option value="30-40">30-40</option>
            </select>
            <br/>
            <br/>
            <label htmlFor="Comments">Comments:</label><br/>
            <textarea id="Comments" name="textarea" rows={4} cols={50} placeholder="Put Your Comments and Suggestions Here!"></textarea>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}