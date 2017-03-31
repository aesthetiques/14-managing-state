'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //this is callewd in aboutController. this is an ajax call for all repos thru github, limits the amount of repos per page, makes the data it retrieves = to repos.all array, and throws an error, if something breaks
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
