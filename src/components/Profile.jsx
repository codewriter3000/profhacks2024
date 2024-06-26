import WaterQualityTable from './WaterQualityTable'

export default ({ waterQualityInfo }) => {
    return (
        <div className="p-6 bg-slate-200/30 rounded-3xl">
            <h1 className="text-3xl text-center">{waterQualityInfo[0].Municipality}</h1>
            {/* <MyLine wqi={waterQualityInfo} /> */}
            <WaterQualityTable waterQualityInfo={waterQualityInfo} />
        </div>
    )
}