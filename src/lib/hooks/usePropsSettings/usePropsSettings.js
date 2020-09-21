/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const PropsSettingsContext = React.createContext({
    enableType: true,
    enableDefault: true,
    enableDescription: true,
    enableMarkdown: false,
});

const usePropsSettings = () => React.useContext(PropsSettingsContext);
export default usePropsSettings;