const formatDate = function (date, format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) {
    const d = new Date(date);
    return d.toLocaleDateString('en-AU', format);
}

module.exports = {
    formatDate
};
