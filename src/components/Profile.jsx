export default ({ waterQualityInfo }) => {
    return (
        <table>
            <thead>
                <th>Station Name</th>
                <th>Beach Name</th>
                <th>Location Type Name</th>
                <th>Result Date</th>
                <th>Result Measure</th>
                <th>Result Comments</th>
                <th>Result Type Name</th>
                <th>Remark Code Name</th>
            </thead>
            <tbody>
            {waterQualityInfo.map(test => {
                return (
                <tr>
                    <th>{test['Station_Name']}</th>
                    <th>{test['Beach_Name']}</th>
                    <th>{test['Location_Type_Name']}</th>
                    <th>{test['Result_Date']}</th>
                    <th>{test['Result_Measure']}</th>
                    <th>{test['Result_Comments']}</th>
                    <th>{test['Result_Type_Name']}</th>
                    <th>{test['Remark_Code_Name']}</th>
                </tr>
                )
            })}
            </tbody>
        </table>
    )
}