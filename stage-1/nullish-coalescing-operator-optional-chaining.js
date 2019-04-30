const data = {
    app: {
        title: 'Skype',
    }
};

// Or operator
const undefinedValue = data.app?.undefinedValue || 'default value for undefined'; // result: 'some other default'
console.log('undefinedValue: ', undefinedValue);

const nullValue = data.app?.nullValue || 'default value for null'; // result: 'some other default'
console.log('nullValue: ', nullValue);

//?? operator

const appTitle = data.app?.title ?? 'Opera';
console.log('appTitle: ', appTitle);

const appLicense = data.app?.license ?? 'free';
console.log('appLicense: ', appLicense);