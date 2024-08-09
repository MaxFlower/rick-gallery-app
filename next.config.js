module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/information',
                permanent: true,
            },
        ]
    },
}
