/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// MaterialDocs components
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import H2 from "@material-docs/core/components/H2";

// PropTypes validators
import PropTypes from "prop-types";

// Utilities
import {withStyles} from "@material-ui/styles";
import withLang from "@material-docs/core/HOCs/withLang";
import withLocalLang from "@material-docs/core/HOCs/withLocalLang";
import getContainerByType from "@material-docs/core/utils/getContainerByType";

// Display names of the components
import {displayName as propsDisplayName} from "../ReactComponentApiPageProps";
import {displayName as stylesDisplayName} from "../ReactComponentApiPageStyles";
import {displayName as importDisplayName} from "../ReactComponentApiPageImport";
import {displayName as footerDisplayName} from "../ReactComponentApiPageFooter";
import {displayName as summaryDisplayName} from "../ReactComponentApiPageSummary";
import {displayName as detailsDisplayName} from "../ReactComponentApiPageDetails";

// Langs
import localLang from "./lang";


export const displayName = "RCDE-ReactComponentApiPage"

const ReactComponentApiPage = React.forwardRef(function(props, ref) {
    const {
        name,
        children,
        className,
        style,
        ...other
    } = props;
    const {lang} = other.lang;
    const [content, setContent] = React.useState({
        props: null,
        css: null,
        import: null,
        footer: null,
        summary: null,
        details: null,
    });
    const locale = lang.locale.extensions.ReactComponentsDocsExtension.DocsComponentApiPage;

    React.useEffect(() => {
        setContent({
            props: getContainerByType(children, propsDisplayName),
            css: getContainerByType(children, stylesDisplayName),
            import: getContainerByType(children, importDisplayName),
            footer: getContainerByType(children, footerDisplayName),
            summary: getContainerByType(children, summaryDisplayName),
            details: getContainerByType(children, detailsDisplayName),
        })
    }, [children]);

    return(
        <DocsPage {...other} name={name} ref={ref} className={className} style={style}>
            <H1 noDivider>{name}</H1>
            {content.summary}
            <H2>{locale.import}</H2>
            {content.import}
            <H2>{locale.propsHeader}</H2>
            {content.props}
            {content.details}
            <H2>{locale.stylesHeader}</H2>
            {content.css}
            {content.footer}
        </DocsPage>
    );
});

ReactComponentApiPage.displayName = displayName;

ReactComponentApiPage.propTypes = {
    name: PropTypes.string,
}

export default withStyles({}, {name: displayName})(withLocalLang(localLang)(withLang(ReactComponentApiPage)));
