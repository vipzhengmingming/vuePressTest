// postcss.config.js
module.exports = {
    plugins: {
        "postcss-pxtorem": {
            "rootValue": 100,
            "propList": ["*"]
        }
    }
};