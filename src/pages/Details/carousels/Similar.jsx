import React from "react";

import Carousel from "../../../components/Carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import '../style.scss'

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <div>
            <div className="container">
                <div className="carousel-title">{title}</div>
            </div>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={mediaType}
            />
        </div>
    );
};

export default Similar;
