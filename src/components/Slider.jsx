import "twin.macro";
const Slider = ({ val, change, max }) => {
    return (
        <input tw="my-3  fill-current bg-green-600 mx-1 rounded-lg overflow-hidden appearance-none  bg-gray-700"
            type="range" min="1" max={max} value={val} onChange={e => change(e.target.value)} />
    )
}
export default Slider;