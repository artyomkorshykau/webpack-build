import path from 'path';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPath, BuildPlatform} from "./config/build/types/types";

interface EnvVariables {
    mode?: BuildMode
    port?: number
    analyzer?: boolean
    platform?: BuildPlatform
}

export default (env: EnvVariables) => {

    const paths: BuildPath = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }

    return buildWebpack(
        {
            port: env.port ?? 3000,
            mode: env.mode ?? 'development',
            paths: paths,
            analyzer: env.analyzer,
            platform: env.platform ?? 'desktop'
        }
    )
}
