import './account-profile.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account-profile.html';
import API from '../../services/api';
import fileOnChange from '../../directives/file-on-change';

let vm;
class AccountProfile {
    constructor($state, $scope, Auth, api) {
        vm = this;
        this.Auth = Auth;
        this.$state = $state;
        this.api = api;
        this.$scope = $scope;
        // default profile setup
        // if the player doesn't already exist
        if (!this.profile) {
            this.profile = {};
        }
        this.profile.avatar = this.profile.avatar || this.user.photoURL;
        this.profile.name = this.profile.name || this.user.displayName;
    }
    updateProfile() {
        // keep firebase auth user up-to-date
        this.user.updateProfile({
            displayName: this.profile.name,
            photoURL: this.profile.avatar
        }).then(() => {
            // then update the pdxpong-api player object
            return this.api.setProfile(this.user.uid, this.profile);
        }).then(() => {
            // success!
        }).catch(() => {
            // shite!
        });
    }
    handleImage(event) {
        let file = event.target.files[0];

        if (file) {
            let imageRef = firebase.storage().ref(vm.user.uid).child(file.name),
                prevAvatar = vm.profile.avatar,
                uploadTask = imageRef.put(file);

            vm.uploadProgress = 1;
            uploadTask.on('state_changed', function state_changed(snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                vm.$scope.$apply(function() {
                    vm.uploadProgress = progress;
                });
            }, function error() {
                vm.$scope.$apply(function() {
                    // TODO - show some error
                    vm.profile.avatar = prevAvatar;
                    vm.uploadProgress = 0;
                });
            }, function success() {
                vm.$scope.$apply(function() {
                    vm.profile.avatar = uploadTask.snapshot.downloadURL;
                    vm.uploadProgress = 0;
                });
            });
        }
    }
}
const name = 'accountProfile';
export default angular.module(name, [uiRouter, fileOnChange])
    .component(name, {
        templateUrl,
        controller: ['$state', '$scope', 'Auth', API, AccountProfile],
        bindings: {
            user: '=',
            profile: '='
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account.profile', {
                url: '/profile',
                template: '<account-profile user="$resolve.currentAuth" profile="$resolve.profile.data.player"></account-profile>'
            });
    }])
    .name;
