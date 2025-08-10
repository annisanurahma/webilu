import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

import React, { useEffect, useState } from 'react'
import kpuData from '../kpu1.json';



function Data() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        setJsonData(kpuData);
    }, []);
    return (
        <>
            <Navbar />
            <div class="container py-4 py-xl-5">
                <div class="row">
                    {jsonData ? (
                        jsonData.map(data => (
                            <div class="col-12" key={data.id}>
                                <div class="d-flex align-items-center align-items-md-start align-items-xl-center">
                                    <div>
                                        <h4 class="card-title-data">{data.title}</h4>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                                {data.distribution.map((dist) => (
                                    <div key={dist.uid}>
                                        <br />
                                        <div class="label-tags-data">
                                            <p class="p-berita">{dist.name}</p>
                                        </div>
                                        <a href={dist.downloadURL}>Link File</a>
                                        <div>
                                        </div>
                                    </div>
                                ))}

                                <hr class="my-5" />
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>

            {/* {jsonData ? (
                jsonData.map(data => (
                    <div>
                        <div key={data.id}>
                            <h3>
                                {data.title}
                            </h3>
                            <p>
                                {data.description}
                            </p>
                            {data.distribution.map((dist) => (
                                <div key={dist.uid}>
                                    <h4>{dist.name}</h4>
                                    <p>{dist.downloadURL}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )} */}

            <Footer />

        </>
    )
}

export default Data