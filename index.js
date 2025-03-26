const globalStore = {};
function writeGlobalValue(key, value) {
  globalStore[key] = value;
}
function readGlobalValue(key) {
  return globalStore[key];
}
module.exports = { writeGlobalValue, readGlobalValue };