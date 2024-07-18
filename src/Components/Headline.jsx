import moment from 'moment'
const Headline = ({ options, searchedData }) => {
    return (
        <div className="ml-20 mt-10 mb-6 text-xl ">
            <h1 className="font-style:Objektiv Mk2 font-semibold">Select you ski trip</h1>
            <div className="mt-1 text-neutral-500 text-base"> {options.length} ski trips options <b>·</b> {searchedData.destinationName} <b>·</b> {moment(searchedData.from_date).format('MMM D')} - {moment(searchedData.to_date).format('MMM D')} <b>·</b> {searchedData.group_size} people </div>
        </div>
    )
}

export default Headline;