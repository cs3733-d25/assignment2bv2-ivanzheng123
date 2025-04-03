export default function table1(){
    return (
        <>
            <h3>Recommended Hikes in Wellington</h3>
            <table className="collapse">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Length</th>
                    <th>Difficulty</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Mount Victoria Loop</td>
                    <td>3-mile loop</td>
                    <td>Moderate</td>
                </tr>
                <tr>
                    <td>Pari-Whero Loop</td>
                    <td>5.3-mile loop</td>
                    <td>Hard</td>
                </tr>
                <tr>
                    <td>Oriental Parade Path</td>
                    <td>2.4-mile one-way</td>
                    <td>Easy</td>
                </tr>
                <tr>
                    <td>Te Ahumairangi and Ridgeline Loop</td>
                    <td>3.5-mile loop</td>
                    <td>Moderate</td>
                </tr>
                </tbody>
            </table>
        </>

    );
}