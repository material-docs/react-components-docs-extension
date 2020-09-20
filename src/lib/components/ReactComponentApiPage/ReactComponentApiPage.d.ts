/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020. 
 */

import {DocsPageProps} from "@material-docs/core/components/DocsPage/DocsPage";

export const displayName: string;

export interface ReactComponentApiPage_Props
    extends DocsPageProps {
    props?: {
        name: string,
        type?: string,
        def?: string,
        description?: string
    };
    css?: {
        name: string,
        global?: string,
        description?: string
    };
}

export default function ReactComponentApiPage(props: ReactComponentApiPage_Props): JSX.Element;