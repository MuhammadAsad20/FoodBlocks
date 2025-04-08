import React from 'react'

function BestSeller() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-6xl font-bold title-font mb-4 text-gray-900"  style={{ fontFamily: 'Great Vibes, cursive' }}>Best Seller</h1>
                        <p class="lg:w-2/4 mx-auto leading-relaxed text-lg font-medium  text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex justify-center flex-wrap -m-4">

                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-full w-50 h-50 object-cover object-center mb-4" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" />
                                <div className="w-full  flex flex-col items-center ">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
                                    <p className="w-3/4 mb-4 text-sm">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-full w-50 h-50 object-cover object-center mb-4" src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D" />
                                <div className="w-full  flex flex-col items-center ">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
                                    <p className="w-3/4 mb-4 text-sm">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-full w-50 h-50 object-cover object-center mb-4" src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxmb29kfGVufDB8fDB8fHww" />
                                <div className="w-full flex flex-col items-center ">
                                    <h2 className="title-font font-medium text-lg text-gray-900">Jeanette Mccarthy</h2>
                                    <p className="w-3/4 mb-4 text-sm">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default BestSeller;
