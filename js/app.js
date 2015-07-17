'use strict';

angular.module('changeApp', [])
.controller('MainController', mainCtrl);

function mainCtrl() {
	var that = this;
	that.items = [
	
	];

	function addNewItem() {
		var that = this;
		
		console.log(that.user.startDate)
		console.log(60)

		
		var input = that.user.brand;
		var start = that.user.startDate;
		if (input.indexOf('Toothbrush') > -1) {
			that.user.endDate = moment(start).add(90, 'days').format();
		} if (input.indexOf('Bath Sponge') > -1) {
			that.user.endDate = moment(start).add(30, 'days').format();
		} if (input.indexOf('Mascara') > -1) {
			that.user.endDate = moment(start).add(90, 'days').format();
		} if (input.indexOf('Lipstick') > -1) {
			that.user.endDate = moment(start).add(365, 'days').format();
		} if (input.indexOf('Eyeliner') > -1) {
			that.user.endDate = moment(start).add(365, 'days').format();
		} if (input.indexOf('Foundation') > -1) {
			that.user.endDate = moment(start).add(365, 'days').format();
		} if (input.indexOf('Concealer') > -1) {
			that.user.endDate = moment(start).add(365, 'days').format();
		}


		//moment(that.user.startDate).add(60, 'days');
		//pushes user input into items array
		that.items.push(that.user);
		that.user = '';
		console.log(that.items)

	}
	that.addNewItem = addNewItem;
}