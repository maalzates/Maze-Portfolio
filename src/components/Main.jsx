import React from 'react';
import '../assets/styles/components/Main.scss';


const Main = () => {

    return(
        <>
            <main>
                <section className="main-containers">
                    <div className="block-container container-left">
                        <div className="category-container"></div>
                    </div>
                    <div className="block-container container-right">
                        <div className="cards-container"></div>
                    </div>
                </section>
            </main>
        </>
    )

}

export default Main;