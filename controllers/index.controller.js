exports.home = function(req, res, next) {
    res.render('index', { 
        title: 'TheMangoMaster',
        name: 'Abdul Rahman Saud', 
    });
}

exports.about = function(req, res, next) {
    res.render('index', { 
        title: 'About Me',
        name: 'Abdul Rahman Saud' 
    });
}

exports.projects = function(req, res, next) {
    res.render('projectservices', { 
      title: 'Projects' 
    });
}

exports.services = function(req, res, next) {
    res.render('projectservices', { 
      title: 'Services' 
    });
}

exports.contact = function(req, res, next) {
    res.render('contact', { 
      title: 'Contact Me' 
    });
}