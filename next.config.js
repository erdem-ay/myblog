/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BLOG_URL: process.env.BLOG_URL,
        LOGIN_URL: process.env.LOGIN_URL,
        REGISTER_URL : process.env.REGISTER_URL ,
        BE_URL : process.env.BE_URL
      },
}

module.exports = nextConfig
