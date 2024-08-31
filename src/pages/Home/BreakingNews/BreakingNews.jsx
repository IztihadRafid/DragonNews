
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee speed={150} className="text-lg font-semibold p-3">
                Match Highlights: Germany vs Spain - as it happened ! Won by 2-4. Massive victory
            </Marquee>
        </div>
    );
};

export default BreakingNews;