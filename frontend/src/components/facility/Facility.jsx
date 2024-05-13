import { useState } from 'react';
import "./Facility.css"

const Facility = () => {




        return (
            <>
                <div className="container">
                    <div className="top-column">
                        <h3>Udogodnienia</h3>
                    </div>
                    <div className="column-wrapper">
                        <div className="left-column">
                            <div className="control-group">
                                <label>
                                    Czcionka
                                </label>
                                <div className="buttons">
                                    <button className="button"><b>+</b></button>
                                    <button className="button"><b>-</b></button>
                                </div>
                            </div>
                            <div className="control-group">
                                <label>Kontrast</label>
                                <div className="buttons">
                                    <button className="button"><b>+</b></button>
                                    <button className="button"><b>-</b></button>
                                </div>
                            </div>
                        </div>
                        <div className="right-column">
                            <input name="input-text-size" className="input-text-size" defaultValue="Przykladowy tekst"/>
                            <input name="input-theme" className="input-theme" defaultValue="Obecny motyw"/>
                        </div>
                    </div>
                    <div className="bottom-div">
                            <button className="button-submit"><b>Zastosuj</b></button>
                    </div>
                </div>
            </>
        );

};

export default Facility;