export const pageSize = 500;

interface ConfigFile{
    [key: string]: string | ConfigFile | any
}

declare global {
    interface Window { myConfig: ConfigFile; }
}

export const readConfigApiKey = (key: string): string => {
    var config = getConfig();

    if (config === null || config['api'] === undefined || (config['api'] as ConfigFile)[key] === undefined){
        throw new Error(key+" not found in config file")
    }

    if (config['apiBasename'] == null){
        throw new Error("apiBasename not found in config file")
    }

    var apiBasename = config['apiBasename'] as string
    var apiEndpoint = (config['api'] as ConfigFile)[key] as string;

    return apiBasename+apiEndpoint
}

export const readConfigKey = (key: string): string => {
    var config = getConfig();

    if (config === null || config[key] === undefined){
        throw new Error(key+" not found in config file")
    }

    return config[key] as string;
}

const getConfig = (): ConfigFile => {
    return window.myConfig;
}