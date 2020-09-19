/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {withStyles} from "@material-ui/styles";
import DocsPage from "@material-docs/core/components/DocsPage";
import Markdown from "@material-docs/core/components/Markdown";
import H1 from "@material-docs/core/components/H1";
import H2 from "@material-docs/core/components/H2";
import withLang from "@material-docs/core/HOCs/withLang";
import withLocalLang from "@material-docs/core/HOCs/withLocalLang";

const DocsComponentApiPage = React.forwardRef(function(props, ref) {
    const {
        name,
        summary,
        ...other
    } = props;
    return(
        <DocsPage {...other}>
            {name && <H1>{name}</H1>}
            <Markdown data={{name}}>{summary}</Markdown>
            <H2>Import</H2>
        </DocsPage>
    );
});



export default withLocalLang()(withLang(withStyles()(DocsComponentApiPage)));
