/**
 * @author Isamu Hirahata
 * @param str String
 * @returns Array
 */
const parseStringToArray = str => typeof str !== 'undefined' ? str.split(',').map(index => index.trim()) : [];

module.exports = parseStringToArray;