var User = angular.module('User', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'views/users-list.html',
                controller: 'userController',
                controllerAs: 'User'
            })
            .when('/users/github', {
                templateUrl: 'views/users-github.html',
                controller: 'userGithubController',
                controllerAs: 'userGithub'
            })
            .when('/users/:id', {
                templateUrl: 'views/users-details.html',
                controller: 'userDetailsController',
                controllerAs: 'userDetails'
            });

    }])
    .controller('userController', userController)
    .controller('userDetailsController', userDetailsController)
    .controller('userGithubController', userGithubController)

function userController() {
    var vm = this;
    vm.form = {};
    vm.editing = false;
    vm.users = [
        { name: 'Suissa', email: 'teste01@exemplo.com', cod: '01', type: 'teacher', active: 'true' },
        { name: 'João', email: 'teste02@exemplo.com', cod: '02', type: 'teacher', active: 'false' },
        { name: 'Franciele', email: 'teste03@exemplo.com', cod: '03', type: 'teacher', active: 'false' },
        { name: 'caio', email: 'teste04@exemplo.com', cod: '04', type: 'student', active: 'true' },
        { name: 'amanda', email: 'teste05@exemplo.com', cod: '05', type: 'student', active: 'true' }
    ];

    function add(user) {
        vm.users.push(user);
    };

    vm.add = add;


    function remove(users) {
        vm.users = users.filter(function (el) {
            return !el.selecionado
        });
    }
    vm.remove = remove;

    function edit(user, index) {
        vm.editing = true;
        vm.form = angular.copy(user);
        vm.form.index = index;
    };
    vm.edit = edit;

    function save(form) {
        vm.users.forEach(function (value, index, array) {
            if (index == form.index) {
                delete form.index;
                array[index] = form;
                vm.editing = false;
            }

        });
    }
    vm.save = save;
}

function userDetailsController($routeParams) {

    var vm = this;
    vm.routeParams = $routeParams;
    vm.form = {};
    vm.editing = false;
    vm.users = [
        { name: 'Suissa', email: 'teste01@exemplo.com', cod: '01', type: 'teacher', active: 'true' },
        { name: 'João', email: 'teste02@exemplo.com', cod: '02', type: 'teacher', active: 'false' },
        { name: 'Franciele', email: 'teste03@exemplo.com', cod: '03', type: 'teacher', active: 'false' },
        { name: 'caio', email: 'teste04@exemplo.com', cod: '04', type: 'student', active: 'true' },
        { name: 'amanda', email: 'teste05@exemplo.com', cod: '05', type: 'student', active: 'true' }
    ];

    function add(user) {
        vm.users.push(user);
    };

    vm.add = add;


    function remove(users) {
        vm.users = users.filter(function (el) {
            return !el.selecionado
        });
    }
    vm.remove = remove;

    function edit(user, index) {
        vm.editing = true;
        vm.form = angular.copy(user);
        vm.form.index = index;
    };
    vm.edit = edit;

    function save(form) {
        vm.users.forEach(function (value, index, array) {
            if (index == form.index) {
                delete form.index;
                array[index] = form;
                vm.editing = false;
            }

        });
    }
    vm.save = save;
}

function userGithubController($scope, $http) {
    var vm = this;
    const user = 'suissa';
    var usuarios = [];
    const url = 'https://api.github.com/users/' + user;

    // vm.getUserInfo = function () {
    //     $http.get(url)
    //         .then(function successCallback(data) {
    //             vm.user = data;
    //             console.log('Data:', data);
    //         }), function (data) {
    //             console.log('Error', err);
    //         };
    // }

    vm.getUsers = function(){
        $http.get(url)
            .then(function successCallback(data) {
                vm.usuarios = data;
                console.log('Data:', data);
            }), function (data) {
                console.log('Error', err);
            };
    }

    $scope.$on('$viewContentLoaded', function () {
        vm.getUsers();        
    });



}
// vm.routeParams = $routeParams;
// vm.form = {};
// vm.editing = false;
// vm.users = [
//     { name: 'Suissa', email: 'teste01@exemplo.com', cod: '01', type: 'teacher', active: 'true' },
//     { name: 'João', email: 'teste02@exemplo.com', cod: '02', type: 'teacher', active: 'false' },
//     { name: 'Franciele', email: 'teste03@exemplo.com', cod: '03', type: 'teacher', active: 'false' },
//     { name: 'caio', email: 'teste04@exemplo.com', cod: '04', type: 'student', active: 'true' },
//     { name: 'amanda', email: 'teste05@exemplo.com', cod: '05', type: 'student', active: 'true' }
// ];

// function add(user) {
//     vm.users.push(user);
// };

// vm.add = add;


// function remove(users) {
//     vm.users = users.filter(function (el) {
//         return !el.selecionado
//     });
// }
// vm.remove = remove;

// function edit(user, index) {
//     vm.editing = true;
//     vm.form = angular.copy(user);
//     vm.form.index = index;
// };
// vm.edit = edit;

// function save(form) {
//     vm.users.forEach(function (value, index, array) {
//         if (index == form.index) {
//             delete form.index;
//             array[index] = form;
//             vm.editing = false;
//         }

//     });
// }
// vm.save = save;
// }
