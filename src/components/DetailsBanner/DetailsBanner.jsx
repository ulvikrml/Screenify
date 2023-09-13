import React from 'react'
import "./style.scss";
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Image from '../LazyLoadImage/Image'
import PosterFallback from "../../assets/no-poster.png";
import dayjs from 'dayjs';
const DetailsBanner = ({ crew }) => {
    const { url } = useSelector(state => state.home)
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`)
    console.log(data);

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    const director = crew?.filter((i) => i.job === "Director");
    const writer = crew?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );


    return (
        <div className='detailsBanner'>
            {
                data && (
                    <>
                        <div className="backdrop-img">
                            <Image src={url.backdrop + data?.backdrop_path} />
                        </div>
                        <div className="container">
                            <div className="content">
                                <div className="left">
                                    {data.poster_path ? (
                                        <Image
                                            className="poster-img"
                                            src={
                                                url.backdrop +
                                                data.poster_path
                                            }
                                        />
                                    ) : (
                                        <Image
                                            className="poster-img"
                                            src={PosterFallback}
                                        />
                                    )}
                                </div>
                                <div className="right">
                                    <h2 className="title">
                                        {`${data.name || data.title
                                            } (${dayjs(
                                                data?.release_date
                                            ).format("YYYY")})`}
                                    </h2>
                                    <p className="subtitle">
                                        {data.tagline}
                                    </p>
                                    <div className="overview">
                                        <p className="heading">
                                            Overview
                                        </p>
                                        <p className="description">
                                            {data.overview}
                                        </p>
                                    </div>

                                    <div className="info">
                                        {data.status && (
                                            <div className="infoItem">
                                                <span className="text bold">
                                                    Status:
                                                </span>
                                                <span className="text">
                                                    {data.status}
                                                </span>
                                            </div>
                                        )}
                                        {data.release_date && (
                                            <div className="infoItem">
                                                <span className="text bold">
                                                    Release Date:
                                                </span>
                                                <span className="text">
                                                    {dayjs(
                                                        data.release_date
                                                    ).format("MMM D, YYYY")}
                                                </span>
                                            </div>
                                        )}
                                        {data.runtime && (
                                            <div className="infoItem">
                                                <span className="text bold">
                                                    Runtime:
                                                </span>
                                                <span className="text">
                                                    {toHoursAndMinutes(
                                                        data.runtime
                                                    )}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {director?.length > 0 && (
                                        <div className="info">
                                            <span className="text bold">
                                                Director:
                                            </span>
                                            <span className="text">
                                                {director?.map((d, i) => (
                                                    <span key={i}>
                                                        {d.name}
                                                        {director.length -1 !== i && ", "}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                    )}
                                    {writer?.length > 0 && (
                                            <div className="info">
                                                <span className="text bold">
                                                    Writer:{" "}
                                                </span>
                                                <span className="text">
                                                    {writer?.map((d, i) => (
                                                        <span key={i}>
                                                            {d.name}
                                                            {writer.length -
                                                                1 !==
                                                                i && ", "}
                                                        </span>
                                                    ))}
                                                </span>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default DetailsBanner