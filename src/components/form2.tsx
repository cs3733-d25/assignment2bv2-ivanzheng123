export default function form2(){
    return (
        <>
            <h3><i>Send in information about your hikes:</i></h3>
            <form>
                <div className="formSection">
                    <label htmlFor="hikeName">Hike Name:</label>
                    <input type="text" name="hikeName" id="hikeName"/>
                </div>
                <div className="formSection">
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location"/>
                </div>
                <div className="formSection">
                    <input type="checkbox" name="bikeFriendly" id="bikeFriendly"/>
                    <label htmlFor="bikeFriendly">Bike friendly?</label>
                </div>
                <div className="formSection">
                    <input type="checkbox" name="bikeFriendly" id="dogFriendly"/>
                    <label htmlFor="dogFriendly">Dog friendly?</label>
                </div>
                <div className="formSection">
                    <input type="checkbox" name="toiletsAvailable" id="toiletsAvailable"/>
                    <label htmlFor="toiletsAvailable">Toilets available?</label>
                </div>
                <div className="formSection">
                    <p>Difficulty:</p>
                    <input type="radio" name="easy" id="easy"/>
                    <label htmlFor="easy">Easy</label>
                    <br/>
                    <input type="radio" name="moderate" id="moderate"/>
                    <label htmlFor="moderate">Moderate</label>
                    <br/>
                    <input type="radio" name="hard" id="hard"/>
                    <label htmlFor="hard">Hard</label>
                </div>
                <div className="formSection">
                    <label htmlFor="hikeDescription">Description/comments:</label>
                    <textarea name="hikeDescription" id="hikeDescription" cols={30} rows={10}></textarea>
                </div>
                <div className="formSection">
                    <label htmlFor="length">Length:</label>
                    <select name="length" id="length">
                        <option value="extraShort">less than 30 minutes</option>
                        <option value="short">30 minutes - 1 hour</option>
                        <option value="medium">1 hour - 2 hours</option>
                        <option value="long">2 hours - 3 hours</option>
                        <option value="extraLong">3+ hours</option>
                    </select>
                </div>
                <div className="formSection">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}