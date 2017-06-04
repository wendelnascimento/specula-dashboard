import React from 'react';

const CardBlock = (props) => (
    <div className="col-sm-6 col-lg-3">
        <div className={`card card-inverse ${props.cardClass}`}>
            <div className="card-block pb0">
                <h4 className="mb-0">{props.title}</h4>
                <p>{props.text}</p>
            </div>
            <div className="chart-wrapper px-3">
                {props.chart}
            </div>
        </div>
    </div>
);

export default CardBlock;
