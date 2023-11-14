/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['tickets.interpark.com', 'tkfile.yes24.com', 'image.toast.com', 'cdnticket.melon.co.kr']
    },
    swcMinify: true,
}

module.exports = nextConfig
