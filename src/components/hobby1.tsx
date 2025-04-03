import Form1 from "./form1";
import List1 from "./list1";
import Table1 from "./table1";

export default function hobby1(){
    return(
        <div>
            <h2>Ivan's Hobbies</h2>
            <div>
                <img src = "src/assets/game.jpg" />
            </div>
            <p>One of my favorite things to do is play video games. <br />
                I have played many games before, and I am always looking for new games or people to play with. <br />
                I recently played Factorio and love the methodical and logical gameplay. <br />
                I love setting small goals for myself and achieving them.<br />
                What intrigues me about this game is the fact that whatever insurmountable problem you're faced against, you can always find a solution by taking it step by step.<br />
                Overall, video games are a great way for me to relax and get away from the stress of the day.<br />
            </p>
            <List1 />
            <Table1 />
            <Form1 />
        </div>
    );
}