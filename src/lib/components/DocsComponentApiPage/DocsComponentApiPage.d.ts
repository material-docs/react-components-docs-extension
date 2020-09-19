/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020. 
 */


import DocsPage from "@material-docs/core/components/DocsPage";

export interface DocsComponentApiPageProps
    extends DocsPage{
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