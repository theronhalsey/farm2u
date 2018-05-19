exports.aws_db = {
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
};

exports.local_db = {
    host: process.env.LOCAL_HOSTNAME,
    user: process.env.LOCAL_USERNAME,
    password: process.env.LOCAL_PASSWORD,
    port: process.env.LOCAL_PORT
}