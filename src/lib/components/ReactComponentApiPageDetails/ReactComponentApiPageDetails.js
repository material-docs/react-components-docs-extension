/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// PropTypes validators
import PropTypes from "prop-types";


export const displayName = "RCDE-ReactComponentApiPageDetails";

const ReactComponentApiPageDetails = React.forwardRef(function (props, ref) {
    const {
        children,
    } = props;
    return children;
});

ReactComponentApiPageDetails.displayName = displayName;

ReactComponentApiPageDetails.propTypes = {
    children: PropTypes.node,
}

export default ReactComponentApiPageDetails;
