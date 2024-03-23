export default () => {
    return (
    <div className="p-6 bg-slate-200/30 rounded-3xl">
        <label for="Counties">Choose a County: </label>
        <select className="Counties">
            <optgroup label="Counties">
                <option value="Cape May font-sans">Cape May</option>
            </optgroup>
        </select>
    </div>
    )
}