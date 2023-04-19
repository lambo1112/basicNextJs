/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "maximilian",
        mongodb_password: "aMMFuswMRKAVWG5T",
        mongodb_clustername: "atlascluster",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "maximilian",
      mongodb_password: "aMMFuswMRKAVWG5T",
      mongodb_clustername: "atlascluster",
      mongodb_database: "my-site",
    },
  };
};

module.exports = nextConfig;
