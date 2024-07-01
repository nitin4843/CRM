exports.getIndex = (req, res) => {
    res.render('index', {
        user: req.session.user
    });
}

exports.getButtons = (req, res) => {
    res.render('pages/ui-features/buttons', {
        user: req.session.user
    });
}

exports.getDropdowns = (req, res) => {
    res.render('pages/ui-features/dropdowns', {
        user: req.session.user
    });
}

exports.getTypography = (req, res) => {
    res.render('pages/ui-features/typography', {
        user: req.session.user
    });
}

exports.getForms = (req, res) => {
    res.render('pages/forms/basic_elements', {
        user: req.session.user
    });
}

exports.getTable = (req, res) => {
    res.render('pages/tables/basic-table', {
        user: req.session.user
    });
}

exports.getCharts = (req, res) => {
    res.render('pages/charts/chartjs', {
        user: req.session.user
    });
}

exports.getIcons = (req, res) => {
    res.render('pages/icons/font-awesome', {
        user: req.session.user
    });
}

exports.getError404 = (req, res) => {
    res.render('pages/samples/error-404', {
        user: req.session.user
    });
}

exports.getError500 = (req, res) => {
    res.render('pages/samples/error-500', {
        user: req.session.user
    });
}

exports.getBlankPage = (req, res) => {
    res.render('pages/samples/blank-page', {
        user: req.session.user
    });
}

exports.getDocumentation = (req, res) => {
    res.render('pages/docs/documentation', {
        user: req.session.user
    });
}
