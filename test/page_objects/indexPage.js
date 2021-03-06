var sharedPageObjects = require('./shared');
module.exports = (function () {

    return {
        get: function () {
            var self = this;
            browser.url('/');
            return self.page();
        },

        page: function () {
            var shared = sharedPageObjects();
            browser.waitForVisible('.testimonials', 30000);
            var page = browser.element('.content .container');
            return {
                header: shared.header,
                testimonials: page.element('.testimonials')
        }
        }
    };
})();
