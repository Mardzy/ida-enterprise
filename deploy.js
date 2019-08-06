const _ = require("lodash");
const FtpDeployer = require("ftp-deploy");

/**
 * @type {string[]}
 */
const args = process.argv.slice(2);

/**
 * @type {string}
 */
const deployEnvironment = _.first(args);

/**
 * @type {{host: string, user: string, password: string, remoteRoot: string}}
 */
const ftpCredentials = require("./ftp")[deployEnvironment];

/**
 * @type {{port: number, localRoot: string, remoteRoot: string, include: string[], deleteRoot: boolean}}
 */
const DEFAULT_CONFIG = {
  port: 21,
  localRoot: __dirname + "/dist",
  include: ["*", "**/*"],
  exclude: [],
  deleteRoot: true
};

const config = _.assign(
  DEFAULT_CONFIG,
  ftpCredentials
);

/**
 * @type {FtpDeployer}
 */
const ftpDeploy = new FtpDeployer();

ftpDeploy.deploy(config)
  .then(res => console.log("Deployment finished."))
  .catch(err => console.log(err));