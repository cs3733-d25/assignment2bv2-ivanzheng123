import Form2 from "./form2";
import List2 from "./list2";
import Table2 from "./table2";

export default function hobby1(){
    return(
        <div className={"ethan"}>
            <h2>Ethan's Hobbies</h2>
            <div>
                <img src = "src/assets/hiking.png" />
            </div>
            <p>One of the more active hobbies I have is hiking! <br />
                During my IQP in Wellington, New Zealand, there were tons of beautiful mountains and hills. <br />
                Not only is it a great way to stay in shape, you also get a beautiful view at the end! <br />
                However, before going on a hike, there are a few things you should do to prepare: <br />
            </p>
            <List2 />
            <Table2 />
            <Form2 />
        </div>
    );
}