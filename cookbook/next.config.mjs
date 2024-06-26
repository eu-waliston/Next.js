/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    styledComponents: true,
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpacka}) => {
        if(dev) {
            console.log("Is development flow", process.env.SECRET);
        }
        return config
    },
    env: {
        SECRET: process.env.SECRET
    }
};

export default nextConfig;
