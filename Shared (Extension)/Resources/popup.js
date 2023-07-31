const loadPermissions = () => {
    browser.permissions.getAll(res => {
        document.querySelector('#host_permissions').textContent = res.origins.join(', ');
        document.querySelector('#api_permissions').textContent = res.permissions.join(', ');
    });
};

loadPermissions();

document.querySelector('#request_tabs').addEventListener('click', () => {
    browser.permissions.request({permissions: ["tabs"]}, loadPermissions);
});

document.querySelector('#request_host').addEventListener('click', () => {
    browser.permissions.request({origins: ["*://example.com/"]}, loadPermissions);
});
