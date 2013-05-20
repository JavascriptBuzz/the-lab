﻿define(function() {
    var welcome = function () {
        this.displayName = 'Welcome to prototype Alpha!';
        this.description = 'Prototype Alpha is a cross-device, cross-platform Single Page Application written in JavaScript.';
        this.features = [
            'Clean MV* Architecture',
            'JS & HTML Modularity',
            'Simple App Lifecycle',
            'Eventing, Modals, Message Boxes, etc.',
            'Navigation & Screen State Management',
            'Consistent Async Programming w/ Promises',
            'App Bundling and Optimization',
            'Use any Backend Technology',
            'Built on top of jQuery, Knockout & RequireJS',
            'Integrates with other libraries such as SammyJS & Bootstrap',
            'Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets).'
        ];
    };

    welcome.prototype.viewAttached = function (view) {
        //you can get the view after it's bound and connected to it's parent dom node if you want
    };

    return welcome;
});
