

var config = require('./config.json'),
    sjcl   = require('sjcl'),

authenticate = {
    validateCredentials: function (username, passwordHash) {
        // Generate SHA256 hash of the password hash with a unique salt
        // If the password hash stored in the database were not in some way re-hashed,
        // an attacker could see the hash algorithm and salt on the client, gain access
        // to the authentication database, and be able to reverse all the hashes
        var storedHash = sjcl.hash.sha256.hash(config.authentication.passwordSalt + passwordHash);
    }
};