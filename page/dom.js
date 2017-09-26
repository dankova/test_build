var ec = protractor.ExpectedConditions;

var domainsPageObject = function() {

    this.get = function() {
        browser.get('');
    };

    this.addDomainLink = element(by.linkText('Add domain'));

    this.clickAddDomainLink = function() {
        this.addDomainLink.click();
    };

    this.addDomainLinkShouldBeVisible = function() {
        expect(this.addDomainLink.isDisplayed()).toBeTruthy();
    };

    this.addDomainLinkShouldNotBeVisible = function() {
        expect(this.addDomainLink.isDisplayed()).toBeFalsy();
    };

    this.tableParamsData = element.all(by.exactRepeater('table_params.data'));

    this.tableParamsDataCountShouldBe = function(count) {
        expect(this.tableParamsData.count()).toBe(count);
    };

    this.dIdShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.id')).getText()).toBe(value);
    };

    this.dIdShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.id')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.dIdShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.id')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.dNameShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.name')).getText()).toBe(value);
    };

    this.dNameShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.name')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.dNameShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.name')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.domainTypesShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding(domain_types[d.type])).getText()).toBe(value);
    };

    this.domainTypesShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding(domain_types[d.type])).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.domainTypesShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding(domain_types[d.type])).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.getPrelandingsNamesdPrelandingsShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding(getPrelandingsNames(d.prelandings[0]))).getText()).toBe(value);
    };

    this.getPrelandingsNamesdPrelandingsShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding(getPrelandingsNames(d.prelandings[0]))).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.getPrelandingsNamesdPrelandingsShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding(getPrelandingsNames(d.prelandings[0]))).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.dPrelandingsCountShouldBe = function(rowIndex1, count) {
        expect(this.tableParamsData.get(rowIndex1).all(by.exactRepeater(d.prelandings)).count()).toBe(count);
    };

    this.dPrelandingsShouldHaveText = function(rowIndex1, rowIndex2, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactRepeater(d.prelandings).row(rowIndex2)).getText()).toBe(value);
    };

    this.dPrelandingsShouldHaveClass = function(rowIndex1, rowIndex2, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactRepeater(d.prelandings).row(rowIndex2)).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.dPrelandingsShouldNotHaveClass = function(rowIndex1, rowIndex2, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactRepeater('d.prelandings').row(rowIndex2)).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.clickDOfferIdLink = function(rowIndex1) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.offer.id')).click();
    };

    this.dOfferIdLinkShouldBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.offer.id')).isDisplayed()).toBeTruthy();
    };

    this.dOfferIdLinkShouldNotBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.offer.id')).isDisplayed()).toBeFalsy();
    };

    this.dOfferIdLinkShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.offer.id')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.dOfferIdLinkShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.offer.id')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.dOfferIdLinkShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.offer.id')).getText()).toBe(value);
    };

    this.domainStatesShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('domain_states[d.state]')).getText()).toBe(value);
    };

    this.domainStatesShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('domain_states[d.state]')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.domainStatesShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('domain_states[d.state]')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.dFlagsCountShouldBe = function(rowIndex1, count) {
        expect(this.tableParamsData.get(rowIndex1).all(by.exactRepeater('d.flags')).count()).toBe(count);
    };

    this.dFlagsShouldHaveText = function(rowIndex1, rowIndex2, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactRepeater('d.flags').row(rowIndex2)).getText()).toBe(value);
    };

    this.dFlagsShouldHaveClass = function(rowIndex1, rowIndex2, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactRepeater('d.flags').row(rowIndex2)).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.dFlagsShouldNotHaveClass = function(rowIndex1, rowIndex2, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactRepeater('d.flags').row(rowIndex2)).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.dUserNameShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.user.name')).getText()).toBe(value);
    };

    this.dUserNameShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.user.name')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.dUserNameShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('d.user.name')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.dTsSpawn1000ShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('(d.ts_spawn * 1000)|amDateFormat:"DD.MM.YY"')).getText()).toBe(value);
    };

    this.dTsSpawn1000ShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('(d.ts_spawn * 1000)|amDateFormat:"DD.MM.YY"')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.dTsSpawn1000ShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('(d.ts_spawn * 1000)|amDateFormat:"DD.MM.YY"')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.dExpireAt1000ShouldHaveText = function(rowIndex1, value) {
        expect(this.tableParamsData.get(rowIndex1).element(by.exactBinding('(d.expire_at * 1000)|amDateFormat:"DD.MM.YY"')).getText()).toBe(value);
    };

    this.dExpireAt1000ShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('(d.expire_at * 1000)|amDateFormat:"DD.MM.YY"')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.dExpireAt1000ShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.exactBinding('(d.expire_at * 1000)|amDateFormat:"DD.MM.YY"')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.clickEditLink = function(rowIndex1) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Edit')).click();
    };

    this.editLinkShouldBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Edit')).isDisplayed()).toBeTruthy();
    };

    this.editLinkShouldNotBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Edit')).isDisplayed()).toBeFalsy();
    };

    this.editLinkShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Edit')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.editLinkShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Edit')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.clickDisableLink = function(rowIndex1) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Disable')).click();
    };

    this.disableLinkShouldBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Disable')).isDisplayed()).toBeTruthy();
    };

    this.disableLinkShouldNotBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Disable')).isDisplayed()).toBeFalsy();
    };

    this.disableLinkShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Disable')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.disableLinkShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Disable')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.clickActivateLink = function(rowIndex1) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Activate')).click();
    };

    this.activateLinkShouldBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Activate')).isDisplayed()).toBeTruthy();
    };

    this.activateLinkShouldNotBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Activate')).isDisplayed()).toBeFalsy();
    };

    this.activateLinkShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Activate')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.activateLinkShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Activate')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.clickShowErrorLink = function(rowIndex1) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Show error')).click();
    };

    this.showErrorLinkShouldBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Show error')).isDisplayed()).toBeTruthy();
    };

    this.showErrorLinkShouldNotBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Show error')).isDisplayed()).toBeFalsy();
    };

    this.showErrorLinkShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Show error')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.showErrorLinkShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Show error')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

    this.clickExtendLink = function(rowIndex1) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Extend')).click();
    };

    this.extendLinkShouldBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Extend')).isDisplayed()).toBeTruthy();
    };

    this.extendLinkShouldNotBeVisible = function(rowIndex1) {
        expect(this.tableParamsData.get(rowIndex1).element(by.linkText('Extend')).isDisplayed()).toBeFalsy();
    };

    this.extendLinkShouldHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Extend')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) !== -1).toBeTruthy();
        });
    };

    this.extendLinkShouldNotHaveClass = function(rowIndex1, className) {
        this.tableParamsData.get(rowIndex1).element(by.linkText('Extend')).getAttribute('class').then(function(classes) {
            expect(classes.split(' ').indexOf(className) === -1).toBeTruthy();
        });
    };

};
module.exports = new domainsPageObject();
