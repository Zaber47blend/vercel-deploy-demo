const set = (id, value) => { document.getElementById(id).textContent = value; };
set('env', __ENV__);
set('commit', __COMMIT__);
set('branch', __BRANCH__);
set('built', new Date(__BUILT__).toUTCString().replace(' GMT', ' UTC'));
