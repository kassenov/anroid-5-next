/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        "react-qrcode-logo",
        "qr-code-styling-new"
    ],
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];
    // Important: return the modified config
    return config
    },
}

module.exports = nextConfig
