import React from "react";

import Carousel from "../../../components/Carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <div>
            <div className="container">
                <div className="carousel-title">Recommendations</div>
            </div>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={mediaType}
            />
        </div>
    );
};

export default Recommendation;
