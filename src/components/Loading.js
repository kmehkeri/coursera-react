import React, { Fragment } from 'react';

const Loading = () => {
    return (
        <Fragment>
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </Fragment>
    );
}

export default Loading;