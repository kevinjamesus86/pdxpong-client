import angular from 'angular';

const name = 'pdxpong-api';

let retry = 5,
    token;


export default angular.module(name, [])
    .factory('tokenInjector', function() {
        var tokenInjector = {
            request: function(config) {
                if (token) {
                    config.headers['pingpong-auth-token'] = token;
                }
                return config;
            }
        };
        return tokenInjector;
    })
    .constant('apiBase', '@@apiBase')
    .service(name, ['$http', '$q', '$timeout', 'apiBase', function($http, $q, $timeout, apiBase) {
        return {
            healthcheck: function healthcheck(originalResolve, originalReject) {
                return $q((resolve, reject) => {
                    // need to be able to re-call this fn and still
                    // resolve/reject the original promise
                    resolve = originalResolve || resolve;
                    reject = originalReject || reject;

                    $http.get(apiBase).then((res) => {
                        resolve(res.data);
                    }).catch((e) => {
                        retry--;
                        if (retry) {
                            $timeout(healthcheck, 1500, true, resolve, reject);
                        } else {
                            reject(e);
                        }
                    });
                });
            },
            setToken: function(t) { token = t; },
            getProfile: function getProfile(uid) {
                return $http.get(`${apiBase}players/${uid}`);
            },
            setProfile: function setProfile(uid, profile) {
                return $http.post(`${apiBase}players/${uid}`, profile);
            }
        }
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('tokenInjector');
    }])
    .name;
