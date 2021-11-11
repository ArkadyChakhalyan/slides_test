import { Fragment, useRef, useState } from "react";
import { DetailsSlide2 } from "./details/details-slide-2";
import { ScrollBar } from "./scroll-bar/scroll-bar";
import './slide2.scss';

export const Slide2 = () => {

    const [scroll, setScroll] = useState(0);
    
    const container = useRef(null);
    const containerLength = container?.current?.getBoundingClientRect().top;

    return (
        <Fragment>
            <DetailsSlide2 />
            <div className='container__slide'>
                <h3 className="title title--small slide-2__title--small">
                    текст<br />сообщения
                </h3>
                <div className='slide-2__main-content' >
                    <ScrollBar 
                        scroll={scroll}
                        containerLength={containerLength} />
                    <div
                        className="container slide-2__container"
                        ref={container}
                        onScroll={event => setScroll(event.target.scrollTop)} >
                        <p className="text" >
                            <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Duis ut diam quam nulla.Mauris in aliquam sem fringilla ut morbi
                            tincidunt.Vitae aliquet nec ullamcorper sit amet risus nullam eget
                            felis.Nulla pharetra diam sit amet nisl.Eget nulla facilisi etiam
                            dignissim diam quis enim lobortis.Est sit amet facilisis magna.
                            Neque laoreet suspendisse interdum consectetur libero id.
                            Nec ullamcorper sit amet risus nullam eget felis eget.
                            Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
                            Euismod quis viverra nibh cras pulvinar mattis nunc.
                            Massa massa ultricies mi quis.Sit amet massa vitae tortor
                            condimentum lacinia.Et malesuada fames ac turpis egestas
                            integer eget.Elementum pulvinar etiam non quam lacus suspendisse
                            faucibus interdum posuere.
                            <br />
                            Amet justo donec enim diam vulputate ut pharetra sit.
                            Risus ultricies tristique nulla aliquet enim tortor at auctor.
                            Velit sed ullamcorper morbi tincidunt ornare massa.
                            Quis hendrerit dolor magna eget est lorem ipsum.Etiam dignissim
                            diam quis enim.Gravida neque convallis a cras.Ut enim blandit
                            volutpat maecenas volutpat.Mauris sit amet massa vitae tortor
                            condimentum lacinia quis vel.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};



