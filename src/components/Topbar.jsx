import { getCounties } from '../lib/utils'

export default () => {
    return (
        <div className="p-6 bg-slate-200/30 rounded-3xl">
            <h1 className="text-3xl">New Jersey Shoretown Profiles</h1>
            <select className="Counties rounded-3x1">
                <optgroup label="Counties">
                    {getCounties().map(county => {
                        return (
                            <option value={county}>{county}</option>
                        )
                    })}
                </optgroup>
            </select>
        </div>
    )
}