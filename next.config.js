/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig
module.exports = {
    experimental: {
        images: {
            allowFutureImage: true
        }
    },
}
