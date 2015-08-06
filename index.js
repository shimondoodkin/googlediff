var gdiff = require('./javascript/diff_match_patch_uncompressed.js');
module.exports = gdiff.diff_match_patch;
module.exports.DIFF_DELETE = gdiff.DIFF_DELETE;
module.exports.DIFF_INSERT = gdiff.DIFF_INSERT;
module.exports.DIFF_EQUAL = gdiff.DIFF_EQUAL;

