import React from 'react';

function Statistics() {
    return (
        <div>
            <section className="text-white bg-gray-800 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="title-font font-medium text-6xl text-yellow-300 mb-2"  style={{ fontFamily: 'Great Vibes, cursive' }}>Statistics</h1>
                        <p className="leading-relaxed text-lg font-medium">
                            Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="w-40 h-40 border-4 border-white rounded-full flex flex-col items-center justify-center text-center">
                            <h2 className="title-font font-medium text-4xl mb-2 text-yellow-300">2.7K</h2>
                            <p className="leading-relaxed text-lg font-medium">Users</p>
                        </div>
                        <div className="w-40 h-40 border-4 border-white rounded-full flex flex-col items-center justify-center text-center">
                            <h2 className="title-font font-medium text-4xl mb-2 text-yellow-300">1.8K</h2>
                            <p className="leading-relaxed text-lg font-medium">Subscribes</p>
                        </div>
                        <div className="w-40 h-40 border-4 border-white rounded-full flex flex-col items-center justify-center text-center">
                            <h2 className="title-font font-medium text-4xl mb-2 text-yellow-300">35</h2>
                            <p className="leading-relaxed text-lg font-medium">Downloads</p>
                        </div>
                        <div className="w-40 h-40 border-4 border-white rounded-full flex flex-col items-center justify-center text-center">
                            <h2 className="title-font font-medium text-4xl mb-2 text-yellow-300">4</h2>
                            <p className="leading-relaxed text-lg font-medium">Products</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Statistics;
